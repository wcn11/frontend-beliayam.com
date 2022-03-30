<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
        <!-- <ProfilePartialSidebar /> -->

        <div class="col-md-3">
          <ul
            class="
              nav nav-tabs
              custom-tabs
              border-0
              flex-column
              bg-white
              rounded
              overflow-hidden
              shadow-sm
              p-2
              c-t-order
            "
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation" @click="getOrders()">
              <a
                class="nav-link border-0 text-dark py-3 active text-center"
                id="all-tab"
                data-toggle="tab"
                href="#all"
                role="tab"
                aria-controls="all"
                aria-selected="true"
              >
                <i class="fad fa-box-check mr-2 text-success mb-0"></i>
                Semua</a
              >
            </li>
            <li
              class="nav-item"
              role="presentation"
              @click="getOrders(2, true)"
            >
              <a
                class="nav-link border-0 text-dark py-3 text-center"
                id="completed-tab"
                data-toggle="tab"
                href="#completed"
                role="tab"
                aria-controls="completed"
                aria-selected="true"
              >
                <i class="fas fa-box-check mr-2 text-success mb-0"></i>
                Pesanan Selesai</a
              >
            </li>
            <li
              class="nav-item border-top"
              role="presentation"
              @click="getOrders(2)"
            >
              <a
                class="nav-link border-0 text-dark py-3 text-center"
                id="progress-tab"
                data-toggle="tab"
                href="#progress"
                role="tab"
                aria-controls="progress"
                aria-selected="false"
              >
                <i class="fas fa-truck-loading mr-2 text-warning mb-0"></i>
                Sedang Diproses</a
              >
            </li>
            <li class="nav-item" role="presentation" @click="getOrders(1)">
              <a
                class="nav-link border-0 text-dark py-3 text-center"
                id="completed-tab"
                data-toggle="tab"
                href="#completed"
                role="tab"
                aria-controls="completed"
                aria-selected="true"
              >
                <i class="fad fa-clock mr-2 text-warning mb-0"></i>
                Pembayaran Tertunda</a
              >
            </li>
            <li
              class="nav-item border-top"
              role="presentation"
              @click="getOrders(8)"
            >
              <a
                class="nav-link border-0 text-dark py-3 text-center"
                id="canceled-tab"
                data-toggle="tab"
                href="#canceled"
                role="tab"
                aria-controls="canceled"
                aria-selected="false"
              >
                <i class="fad fa-ban mr-2 text-danger mb-0"></i>
                Dibatalkan</a
              >
            </li>
            <li
              class="nav-item border-top"
              role="presentation"
              @click="getOrders(7)"
            >
              <a
                class="nav-link border-0 text-dark py-3 text-center"
                id="canceled-tab"
                data-toggle="tab"
                href="#canceled"
                role="tab"
                aria-controls="canceled"
                aria-selected="false"
              >
                <i class="fad fa-calendar-times mr-2 text-danger mb-0"></i>
                Pesanan Kadaluarsa</a
              >
            </li>
          </ul>
        </div>
        <div class="tab-content col-md-9" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
            v-if="orders"
          >
            <div class="order-body" v-if="orders.length > 0">
              <div class="pb-3" v-for="order in orders" :key="order._id">
                <NuxtLink
                  :to="`/akun/pesanan-saya/order?trx_id=${order.order_id}`"
                  class="text-decoration-none text-dark"
                >
                  <div class="p-3 rounded shadow-sm bg-white">
                    <div class="d-flex align-items-center mb-3">
                      <p
                        class="
                          bg-warning
                          text-white
                          py-1
                          px-2
                          mb-0
                          rounded
                          small
                        "
                        v-if="order.payment.payment_status_code === 1"
                      >
                        <i
                          class="fas fa-file-invoice-dollar"
                          v-if="!order.delivery"
                        ></i>
                        Menunggu Pembayaran
                        <!-- {{ order.order_status.description }} -->
                      </p>
                      <p
                        class="text-white py-1 px-2 mb-0 rounded small"
                        :class="{
                          'bg-success': order.delivery,
                          'bg-warning': !order.delivery,
                        }"
                        v-if="order.payment.payment_status_code === 2"
                      >
                        <i
                          class="fad fa-truck-loading"
                          v-if="!order.delivery"
                        ></i>
                        <i class="fas fa-box-check" v-else></i>
                        {{
                          order.delivery && order.delivery.isDelivery
                            ? "Pesanan Selesai"
                            : "Pesanan Diproses"
                        }}
                      </p>

                      <p
                        class="
                          bg-danger
                          text-white
                          py-1
                          px-2
                          mb-0
                          rounded
                          small
                        "
                        v-if="order.payment.payment_status_code === 7"
                      >
                        <i class="fad fa-ban"></i>
                        {{ order.order_status.description }}
                      </p>

                      <p
                        class="
                          bg-danger
                          text-white
                          py-1
                          px-2
                          mb-0
                          rounded
                          small
                        "
                        v-if="order.payment.payment_status_code === 8"
                      >
                        <i class="fad fa-ban" v-if="!order.delivery"></i>
                        {{ order.order_status.description }}
                      </p>
                      <p class="text-muted ml-auto small mb-0">
                        <i class="icofont-clock-time"></i>
                        {{ order.bill.bill_date | formatDate }}
                      </p>
                    </div>
                    <div class="d-flex">
                      <p class="text-muted m-0">
                        Order. ID<br />
                        <span class="text-dark font-weight-bold"
                          >#{{ order.order_id }}</span
                        >
                        <span class="ml-2" v-if="order.payment.pg_icon">
                          <img
                            :src="order.payment.pg_icon"
                            :alt="order.payment.pg_name"
                          />
                        </span>
                      </p>
                      <p class="text-muted m-0 ml-auto">
                        Dikirim ke<br />
                        <span class="text-dark font-weight-bold">{{
                          order.shipping_address.label || "Alamat anda"
                        }}</span>
                      </p>
                      <p class="text-muted m-0 ml-auto">
                        Total Pembayaran<br />
                        <span class="text-dark font-weight-bold">{{
                          order.grand_total | formatMoney
                        }}</span>
                      </p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <div class="order-body" v-else>
              <div class="pb-3 text-center m-xl-5">
                <h4>Belum Ada Pesanan</h4>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
            v-else
          >
            <div class="order-body order-not-found">
              <div class="pb-3 text-center">
                <h4>Belum Ada Pesanan</h4>
              </div>
            </div>
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
    await this.getOrders();
  },
  data() {
    return {
      orderCompleted: true,
      orders: [],
      ordersSetting: {
        status: "",
        page: 1,
        show: 10,
        sortBy: "DESC",
        orderBy: "payment_date",
        fromDate: "",
        toDate: "",
      },
    };
  },
  methods: {
    async getOrders(status = "", delivery = false) {
      this.$store.dispatch("setGlobalModal", true);
      await this.$axios
        .$get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/orders?status=${status}&delivery=${delivery}&page=${this.ordersSetting.page}&show=${this.ordersSetting.show}&sortBy=${this.ordersSetting.sortBy}&orderBy=${this.ordersSetting.orderBy}&fromDate=${this.ordersSetting.fromDate}&toDate=${this.ordersSetting.toDate}`
        )
        .then((results) => {
          if (!results.error) {
            this.orders = results.data;
            this.$store.dispatch("setGlobalModal", false);
          }
        });
      this.$store.dispatch("setGlobalModal", false);
    },
  },
};
</script>

<style scoped>
.bg-success {
  background-color: #4fa845 !important;
}
.order-not-found {
  margin-top: 25%;
  margin-bottom: 25%;
}
</style>