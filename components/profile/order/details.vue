<template>
  <section class="py-4 beliayam-main-body">
    <div class="container card container-order" ref="document">
      <div class="row" v-if="order && Object.keys(order).length > 0">
        <div class="col-lg-12">
          <div class="invoice-title justify-content-between">
            <h2 class="title-invoice">Faktur</h2>
            <div class="float-right">
              <h3 class="text-order-id">Pesanan #{{ order.order_id }}</h3>
              <br />
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
          <hr class="mt-4" />
          <div class="row d-flex justify-content-between mt-4">
            <div class="">
              <address>
                <strong class="text-label">Ditagihkan Kepada:</strong><br />
                {{ order.user.name || "Pelanggan Beliayam.com" }}<br />
                {{ order.user.phone || "" }}<br />
              </address>
              <div>
                <strong class="text-label">Penerima:</strong><br />
                {{ order.shipping_address.receiver_name || "" }}<br />
                {{ order.shipping_address.phone || "" }}<br />
              </div>
            </div>
            <div class="text-right">
              <address>
                <strong class="text-label">Dikirim Ke:</strong><br />
                <span class="text-label-address">{{
                  order.shipping_address.label || ""
                }}</span
                ><br />
                {{ order.shipping_address.address1 || "" }}<br />
                {{ order.shipping_address.sub_district.name }}<br />,
                {{ order.shipping_address.district.name }}<br />
                {{ order.shipping_address.city.name }},<br />
                {{ order.shipping_address.state.name }}<br />
                <span v-if="order.shipping_address.postcode"
                  >{{ order.shipping_address.postcode }} </span
                ><br />
                <span class="text-muted" v-if="order.shipping_address.details"
                  >({{ order.shipping_address.details }})</span
                >
              </address>
            </div>
          </div>
          <div class="row justify-content-between mt-5">
            <div class="">
              <address>
                <strong class="text-label">Metode Pembayaran:</strong><br />
                {{ order.payment.pg_name }}<br />
                <h6
                  v-if="order.payment.pg_type !== 'cash'"
                  class="font-weight-bold"
                >
                  {{ order.response.trx_id }}
                </h6>
              </address>
            </div>
            <div class="text-right">
              <address>
                <strong class="text-label">Tanggal Pemesanan:</strong><br />
                {{ order.bill.bill_date | formatDate }}<br /><br />
              </address>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"><strong>Ringkasan Pesanan</strong></h3>
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-condensed">
                  <thead>
                    <tr>
                      <td><strong>Produk</strong></td>
                      <td class="text-center"><strong>Harga</strong></td>
                      <td class="text-center"><strong>Kuantitas</strong></td>
                      <td class="text-right"><strong>Total</strong></td>
                    </tr>
                  </thead>
                  <tbody v-if="order.bill">
                    <!-- foreach ($order->lineItems as $line) or some such thing here -->
                    <tr v-for="item in order.bill.bill_items" :key="item._id">
                      <td>{{ item.product.name }}</td>
                      <td class="text-center">
                        Rp {{ item.product.price | formatMoney }}
                      </td>
                      <td class="text-center">{{ item.details.quantity }}</td>
                      <td class="text-right">
                        Rp
                        {{
                          (item.product.price * item.details.quantity)
                            | formatMoney
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td class="thick-line"></td>
                      <td class="thick-line"></td>
                      <td class="thick-line text-center">
                        <strong>Subtotal Produk</strong>
                      </td>
                      <td class="thick-line text-right">
                        Rp {{ order.sub_total_product | formatMoney }}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-line"></td>
                      <td class="no-line"></td>
                      <td class="no-line text-center">
                        <strong>Biaya Tambahan</strong>
                      </td>
                      <td class="no-line text-right">
                        Rp {{ order.sub_total_charges | formatMoney }}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-line"></td>
                      <td class="no-line"></td>
                      <td class="no-line text-center">
                        <strong>Voucher</strong>
                      </td>
                      <td class="no-line text-right">
                        -Rp {{ order.sub_total_voucher | formatMoney }}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-line"></td>
                      <td class="no-line"></td>
                      <td class="no-line text-center">
                        <strong>Total</strong>
                      </td>
                      <td class="no-line text-right font-weight-bold">
                        Rp {{ order.grand_total | formatMoney }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container card container-order">
      <div class="row" v-if="order && Object.keys(order).length > 0">
        <div class="col-lg-12">
          <div class="invoice-title text-center">
            <NuxtLink to="/akun/pesanan-saya" class="btn btn-secondary m-1">
              <i class="fas fa-chevron-circle-left"></i> Pesanan Lainnya
            </NuxtLink>
            <button
              class="btn btn-danger m-1"
              v-if="
                order.payment.payment_status_code === 1 ||
                order.payment.payment_status_code === 2
              "
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
    const order_id = this.$route.query.trx_id;

    if (!order_id) {
      return;
    }

    await this.$axios
      .get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/order/${order_id}`)
      .then((res) => {
        this.order = res.data.data;
      });
  },
  data() {
    return {
      order: {},
    };
  },
  methods: {
    exportOrderToPDF() {
      html2pdf(this.$refs.document, {
        margin: 0,
        filename: "document.pdf",
        pagebreak: {
          mode: ["avoid-all"],
        },
        filename: this.order.bill.bill_desc,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      });
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