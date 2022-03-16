<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-if="order && Object.keys(order).length > 0">
          <section
            class="
              bg-white
              beliayam-main-body
              rounded
              shadow-sm
              overflow-hidden
            "
          >
            <div class="container-0">
              <div class="row">
                <div class="col-lg-12">
                  <div class="beliayam-status">
                    <div
                      class="
                        p-3
                        status-order
                        bg-white
                        border-bottom
                        d-flex
                        align-items-center
                      "
                    >
                      <p class="m-0">
                        <i class="fad fa-calendar-alt"></i>
                        {{ order.bill && order.bill.bill_date | formatDate }}
                      </p>
                      <a
                        href="/akun/pesanan-saya"
                        class="text-danger ml-auto text-decoration-none"
                        >Kembali</a
                      >
                    </div>
                    <div class="p-3">
                      <h6 class="font-weight-bold">
                        Order ID: #{{ order.order_id }}
                      </h6>
                    </div>
                    <div class="p-3 border-bottom" v-if="order.payment">
                      <div
                        v-if="
                          order.payment.payment_status_code === 1 ||
                          order.payment.payment_status_code === 0
                        "
                      >
                        <h6 class="font-weight-bold">Order Status:</h6>
                        <div>
                          <h5>
                            <span class="badge badge-warning"
                              >Menunggu Pembayaran</span
                            >
                          </h5>
                          <button
                            class="btn btn-danger"
                            @click="openModalCancelOrder()"
                          >
                            batalkan pesanan
                          </button>
                          <div
                            v-if="order.payment.pg_type === 'va'"
                            class="font-weight-light mt-3 mb-3"
                          >
                            <div>
                              <p class="m-0">
                                {{ order.payment.payment_channel }}
                              </p>
                              <h5 class="mt-2">#{{ order.response.trx_id }}</h5>
                            </div>
                            <a
                              :href="order.response.redirect_url"
                              target="_blank"
                              class="btn btn-outline-danger mt-2"
                            >
                              <i class="fad fa-file-invoice"></i> Bayar
                              sekarang</a
                            >
                          </div>
                        </div>
                      </div>
                      <div v-else-if="order.payment.payment_status_code === 2">
                        <h6 class="font-weight-bold">Order Status</h6>
                        <div>
                          <h5>
                            <span class="badge badge-success">{{
                              order.order_status.description
                            }}</span>
                          </h5>

                          <div>
                            <p class="m-0">
                              {{ order.payment.payment_channel }}
                            </p>
                            <h5 class="mt-2">#{{ order.response.trx_id }}</h5>
                          </div>
                          <!-- <p>{{ order.order_status.status }}</p> -->
                        </div>
                      </div>
                      <div v-else>
                        <h6 class="font-weight-bold">Order Status</h6>
                        <div>
                          <h5>
                            <span class="badge badge-danger">{{
                              order.order_status.description
                            }}</span>
                          </h5>
                          <!-- <p>{{ order.order_status.status }}</p> -->
                        </div>
                      </div>
                    </div>

                    <div
                      class="p-3 border-bottom bg-white"
                      v-if="order.shipping_address"
                    >
                      <h6 class="font-weight-bold">Dikirim ke alamat:</h6>

                      <div>{{ order.shipping_address.phone }}</div>
                      <p class="m-0 small">
                        {{ order.shipping_address.address1 }},
                        {{ order.shipping_address.sub_district.name }},
                        {{ order.shipping_address.district.name }}, ({{
                          order.shipping_address.details
                        }})
                      </p>
                      <div>
                        {{ order.shipping_address.city.name }},
                        {{ order.shipping_address.state.name }}
                        {{ order.shipping_address.postcode }}
                      </div>
                    </div>
                    <!-- <div class="p-3 border-bottom">
                      <p class="font-weight-bold small mb-1">Courier</p>
                      <img
                        :src="`${this.$config.baseURL}/img/logo.png`"
                        class="img-fluid sc-beliayam-logo mr-2"
                      />
                      <span class="small text-success font-weight-bold"
                        >Beliayam.com Kurir
                      </span>
                    </div> -->
                    <div class="p-3 border-bottom">
                      <h6 class="font-weight-bold">Pesanan</h6>
                      <div
                        v-if="order.bill && order.bill.bill_items"
                        class="order-container"
                      >
                        <div
                          v-for="item in order.bill.bill_items"
                          :key="item._id"
                        >
                          <div class="justify-content-between d-flex">
                            <h6 class="font-weight-bold">
                              {{ item.product.name }}
                            </h6>
                            <span class="" v-if="item.details.quantity"
                              >Kuantitas: {{ item.details.quantity }}
                            </span>
                            <span class="font-weight-bold">{{
                              item.product.price | formatMoney
                            }}</span>
                          </div>
                          <span class="font-weight-light"
                            >Berat: {{ item.product.weight }} Kilogram
                          </span>
                          <br />
                          <span
                            class="small text-success font-weight-bold"
                            v-if="item.details.note"
                            >Catatan: {{ item.details.note }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="p-3 bg-white" v-if="order">
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-1">Subtotal Produk</h6>
                        <h6 class="ml-auto mb-1">
                          {{ order.sub_total_product | formatMoney }}
                        </h6>
                      </div>
                      <div
                        v-if="
                          order && order.charges && order.charges.length > 0
                        "
                      >
                        <div
                          v-for="charge in order.charges"
                          :key="charge._id"
                          class="d-flex align-items-center mb-2"
                        >
                          <h6 class="mb-1">{{ charge.chargeName }}</h6>
                          <h6 class="ml-auto mb-1">
                            {{ charge.chargeValue | formatMoney }}
                          </h6>
                        </div>
                      </div>
                      <div class="d-flex align-items-center mb-2" v-else>
                        <h6 class="mb-1">Biaya</h6>
                        <h6 class="ml-auto mb-1">
                          {{ 0 | formatMoney }}
                        </h6>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-1">Diskon Voucher</h6>
                        <h6 class="ml-auto mb-1">
                          {{ order.sub_total_voucher | formatMoney }}
                        </h6>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h5 class="font-weight-bold mb-1">Total Pembayaran</h5>
                        <h5 class="font-weight-bold ml-auto mb-1">
                          -{{ order.grand_total | formatMoney }}
                        </h5>
                      </div>
                      <p class="m-0 small text-muted">
                        Kamu dapat memeriksa detail pesanan di sini,<br />Terima
                        kasih.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="not-found-anything col-md-12" v-else>
          <div class="text-center">
            <h4>Pesanan yang kamu cari telah diubah atau tidak ditemukan</h4>
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
    async cancelOrder() {
      await this.$axios
        .put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/order/cancel-order`,
          {
            user_id: this.$store.state.auth.user._id,
            order_id: this.order.order_id,
          }
        )
        .then((res) => {
          console.log(res)
          if (res.data.error) {
            this.$toast.warning(res.data.message);
            $("#modalConfirmCancelOrder").modal("hide");
            return;
          }
          this.$toast.success(res.data.message);
          $("#modalConfirmCancelOrder").modal("hide");
          this.order = res.data.data;
          window.location.reload();
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          }
        });
    },
    openModalCancelOrder(type = "show") {
      $("#modalConfirmCancelOrder").appendTo("body").modal(type);
    },
  },
  filters: {
    formatDate(date) {
      return moment(date).format("dddd, Do MMMM YYYY HH:mm");
    },
    formatMoney(val) {
      let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(val);
    },
  },
};
</script>

<style scoped>
.not-found-anything {
  margin-top: 20%;
  margin-bottom: 20%;
}
.order-container {
  margin-top: 20px;
}
</style>