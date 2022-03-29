<template>
  <section class="py-4 beliayam-main-body">
    <div
      class="container card container-order"
      ref="document"
      v-if="order && Object.keys(order).length > 0"
    >
      <div id="ui-view" data-select2-id="ui-view">
        <div>
          <div class="card">
            <div class="card-header">
              <h2 class="title-invoice float-left">Faktur</h2>

              <div class="float-right">
                <h3 class="text-order-id">Pesanan #{{ order.order_id }}</h3>
                <span
                  class="text-center badge badge-warning w-100"
                  v-if="
                    order.payment.payment_status_code === 1 ||
                    order.payment.payment_status_code === 0
                  "
                  ><i class="fad fa-tasks"></i> Menunggu Pembayaran</span
                >
                <div v-if="order.payment.payment_status_code === 2">
                  <span
                    class="text-center badge badge-success w-100"
                    v-if="order.delivery"
                    ><i class="fas fa-badge-check"></i> Pesanan Selesai</span
                  >
                  <span class="text-center badge badge-success w-100" v-else
                    ><i class="fas fa-truck-loading"></i> Sedang Diproses</span
                  >
                </div>
                <div v-if="order.payment.payment_status_code > 2">
                  <span class="text-center badge badge-danger w-100"
                    ><i class="fas fa-ban"></i> Pesanan Dibatalkan</span
                  >
                </div>
              </div>
            </div>
            <div class="background-overlay">
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-sm-4 mb-5">
                    <h6 class="mb-1">Penerima</h6>
                    <div>
                      <strong>{{
                        order.user.name || "Pelanggan Beliayam.com"
                      }}</strong>
                    </div>
                    <div>{{ order.user.email || "" }}</div>
                    <div>{{ order.user.phone || "" }}</div>
                  </div>
                  <div class="col-sm-4 mb-5 text-center">
                    <h6 class="mb-1">Pembayaran</h6>

                    <h6 class="font-weight-bold"></h6>
                    <div>{{ order.payment.pg_name }}</div>
                    <div v-if="order.payment.pg_type !== 'cash'" class="mt-2">
                      <h4>{{ order.response.trx_id }}</h4>
                    </div>
                    <div v-if="order.payment.payment_status_code == 2">
                      <span
                        cllass="badge badge-pill badge-success date-payment"
                      >
                        {{ order.order_status.payment_date | formatDate }}
                      </span>
                      <i class="fad fa-badge-check text-info"></i>
                    </div>
                    <div class="text-danger" v-else>
                      <span class="badge badge-pill badge-danger date-payment">
                        {{ order.bill.bill_date | formatDate }}</span
                      >
                    </div>
                  </div>
                  <div class="col-sm-4 mb-5 float-right text-right">
                    <h6 class="mb-1">Dikirim Ke</h6>
                    <div>
                      <span v-if="order.shipping_address.label"
                        >({{ order.shipping_address.label }})</span
                      >
                      {{ order.shipping_address.address1 }}
                    </div>
                    <div>{{ order.shipping_address.sub_district.name }}</div>
                    <div>{{ order.shipping_address.district.name }}</div>
                    <div>{{ order.shipping_address.city.name }}</div>
                    <div>{{ order.shipping_address.state.name }}</div>
                    <div v-if="order.shipping_address.postcode">
                      {{ order.shipping_address.postcode }}
                    </div>
                    <div>
                      <strong v-if="order.shipping_address.details"
                        >({{ order.shipping_address.details }})</strong
                      >
                    </div>
                  </div>
                </div>

                <div class="table-responsive-xl">
                  <table class="table table-striped w-100">
                    <thead>
                      <tr class="text-nowrap">
                        <th class="text-center">#</th>
                        <th>Item</th>
                        <th class="text-center">Harga</th>
                        <th class="text-left">Kuantitas</th>
                        <th class="text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody v-if="order.bill">
                      <tr
                        class="text-nowrap"
                        v-for="(item, index) in order.bill.bill_items"
                        :key="item._id"
                      >
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-left">{{ item.product.name }}</td>
                        <td class="text-center">
                          {{ item.product.price | formatMoney }}
                        </td>
                        <td class="text-left">{{ item.details.quantity }}</td>
                        <td class="text-center">
                          {{
                            (item.product.price * item.details.quantity)
                              | formatMoney
                          }}
                        </td>
                      </tr>

                      <tr class="text-nowrap">
                        <td colspan="3"></td>
                        <td class="left">
                          <strong>Subtotal</strong>
                        </td>
                        <td class="text-center">
                          {{ order.sub_total_product | formatMoney }}
                        </td>
                      </tr>
                      <tr class="text-nowrap">
                        <td colspan="3"></td>
                        <td class="text-left">
                          <strong>Biaya</strong>
                        </td>
                        <td class="text-center">
                          {{ order.sub_total_charges | formatMoney }}
                        </td>
                      </tr>
                      <tr class="text-nowrap">
                        <td colspan="3"></td>
                        <td class="text-left">
                          <strong>Diskon</strong>
                        </td>
                        <td class="text-center">
                          -{{ order.sub_total_voucher | formatMoney }}
                        </td>
                      </tr>
                      <tr class="text-nowrap">
                        <td colspan="3"></td>
                        <td class="text-left">
                          <strong>TOTAL</strong>
                        </td>
                        <td class="text-center">
                          <strong>{{ order.grand_total | formatMoney }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- <div class="table-responsive">
                <table class="table table-striped w-100 d-md-table">
                  <thead>
                    <tr class="">
                      <th class="text-center">#</th>
                      <th>Item</th>
                      <th class="text-center">Harga</th>
                      <th class="text-left">Kuantitas</th>
                      <th class="text-center">Tota we we we we l</th>
                    </tr>
                  </thead>
                  <tbody v-if="order.bill">
                    <tr
                      v-for="(item, index) in order.bill.bill_items"
                      :key="item._id"
                    >
                      <td class="text-center">{{ index + 1 }}</td>
                      <td class="text-left">{{ item.product.name }}</td>
                      <td class="text-center">
                        {{ item.product.price | formatMoney }}
                      </td>
                      <td class="text-left">{{ item.details.quantity }}</td>
                      <td class="text-center">
                        {{
                          (item.product.price * item.details.quantity)
                            | formatMoney
                        }}
                      </td>
                    </tr>

                    <tr>
                      <td colspan="3"></td>
                      <td class="left">
                        <strong>Subtotal</strong>
                      </td>
                      <td class="text-center">
                        {{ order.sub_total_product | formatMoney }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3"></td>
                      <td class="text-left">
                        <strong>Biaya</strong>
                      </td>
                      <td class="text-center">
                        {{ order.sub_total_charges | formatMoney }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3"></td>
                      <td class="text-left">
                        <strong>Diskon</strong>
                      </td>
                      <td class="text-center">
                        -{{ order.sub_total_voucher | formatMoney }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3"></td>
                      <td class="text-left">
                        <strong>TOTAL</strong>
                      </td>
                      <td class="text-center">
                        <strong>{{ order.grand_total | formatMoney }}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
                <!-- <div class="row">
                <div class="col-lg-4 col-sm-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </div>
                <div class="col-lg-4 col-sm-5 ml-auto">
                  <table class="table table-clear">
                    <tbody>
                      <tr>
                        <td class="left">
                          <strong>Subtotal</strong>
                        </td>
                        <td class="right">
                          {{ order.sub_total_product | formatMoney }}
                        </td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Biaya</strong>
                        </td>
                        <td class="right">
                          {{ order.sub_total_charges | formatMoney }}
                        </td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Diskon</strong>
                        </td>
                        <td class="right">
                          -{{ order.sub_total_voucher | formatMoney }}
                        </td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>TOTAL</strong>
                        </td>
                        <td class="right">
                          <strong>{{ order.grand_total | formatMoney }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a class="btn btn-success" href="#" data-abc="true">
                    <i class="fa fa-usd"></i> Proceed to Payment</a
                  >
                </div>
              </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container card container-order mt-4">
      <div class="row" v-if="order && Object.keys(order).length > 0">
        <div class="col-lg-12">
          <div class="invoice-title text-center">
            <NuxtLink to="/akun/pesanan-saya" class="btn btn-secondary m-1">
              <i class="fas fa-chevron-circle-left"></i> Pesanan Lainnya
            </NuxtLink>
            <button
              class="btn btn-danger m-1"
              v-if="order.payment.payment_status_code < 2"
              @click="openModalCancelOrder()"
            >
              <i class="fas fa-ban"></i> Batalkan Pesanan
            </button>
            <button class="btn btn-success m-1" @click="exportOrderToPDF()">
              <i class="fas fa-file-download"></i> Unduh PDF
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modalConfirmCancelOrder"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="modalConfirmCancelOrderLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title" id="modalConfirmCancelOrderLabel">
              Batalkan Pesanan
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h6>Apakah anda yakin membatalkan pesanan ?</h6>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              tutup
            </button>
            <button type="button" class="btn btn-danger" @click="cancelOrder()">
              Ya, Batalkan pesanan
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import html2pdf from "html2pdf.js";
import moment from "moment";

moment.locale("id-ID");
export default {
  async fetch() {
    this.$store.dispatch("setGlobalModal", true);
    const order_id = this.$route.query.trx_id;

    if (!order_id) {
      this.$store.dispatch("setGlobalModal", false);
      return;
    }

    await this.$axios
      .get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/order/${order_id}`)
      .then((res) => {
        this.order = res.data.data;
        this.$store.dispatch("setGlobalModal", false);
      });
    this.$store.dispatch("setGlobalModal", false);
  },
  data() {
    return {
      order: {},
    };
  },
  methods: {
    exportOrderToPDF() {
      let opt = {
        margin: 0,
        filename: this.order.bill.bill_desc,
        pagebreak: {
          mode: ["avoid-all"],
        },
        filename: this.order.bill.bill_desc,
        image: { type: "png", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true, windowWidth: 1024 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      html2pdf()
        .set(opt)
        .from(this.$refs.document)
        .toPdf()
        .save(this.order.bill.bill_desc);
    },
    async cancelOrder() {
      this.$store.dispatch("setGlobalModal", true);
      await this.$axios
        .put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/order/cancel-order`,
          {
            user_id: this.$store.state.auth.user._id,
            order_id: this.order.order_id,
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.error) {
            this.$toast.warning(res.data.message);
            $("#modalConfirmCancelOrder").modal("hide");
            this.$store.dispatch("setGlobalModal", false);
            return;
          }
          this.$toast.success(res.data.message);
          $("#modalConfirmCancelOrder").modal("hide");
          this.order = res.data.data;
          this.$store.dispatch("setGlobalModal", false);
          window.location.reload();
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);

            this.$store.dispatch("setGlobalModal", false);
          }
        });

      this.$store.dispatch("setGlobalModal", false);
    },
    openModalCancelOrder(type = "show") {
      $("#modalConfirmCancelOrder").appendTo("body").modal(type);
    },
  },
};
</script>

<style scoped>
.date-payment {
  font-size: 15px;
}

.background-overlay {
  background: url("~/static/img/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.card-body {
  background-color: rgb(255 255 255 / 91%);
}
.title-invoice {
  font-size: calc(75% + 2vh);
}
.text-label {
  font-size: calc(75% + 1vh);
}
.text-label-address {
  font-weight: bold;
  font-size: 15px;
}
.row {
  padding-right: 8px;
  padding-left: 8px;
}
.container-order {
  padding: 20px;
  border-radius: 10px;
}
.text-order-id {
  font-size: calc(45% + 10px);
}
.invoice-title h2,
.invoice-title h3 {
  display: inline-block;
}
.table > tbody > tr > .no-line {
  border-top: none;
}

.table > thead > tr > .no-line {
  border-bottom: none;
}

.table > tbody > tr > .thick-line {
  border-top: 2px solid;
}
.not-found-anything {
  margin-top: 20%;
  margin-bottom: 20%;
}
.order-container {
  margin-top: 20px;
}
.badge-success,
.btn-success {
  color: white;
  background: unset;
  background-color: #4fa846;
}
</style>