<template>
  <div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container text-center">
        🎉 Pesanan Anda Sedang Kami Proses 🎉
      </div>
    </nav>
    <div class="row d-flex justify-content-center bg-success-order">
      <div class="col-md-6">
        <div class="p-5 text-center">
          <i class="fad fa-check-circle display-1 text-warning"></i>
          <h1 class="text-white font-weight-bold">
            Pesanan Berhasil Dilakukan 🎉
          </h1>
          <p class="text-white">
            Cek status pemesanan anda di
            <a href="#" class="font-weight-bold text-decoration-none text-white"
              >Pesanan Saya</a
            >
            untuk informasi lebih lanjut.
          </p>
        </div>

        <div
          class="bg-white rounded p-3 m-5 text-center"
          v-if="order && order.bill"
        >
          <div v-if="order.payment.pg_type !== 'cash'"></div>
          <h6 class="font-weight-bold mb-2">Batas Akhir Pembayaran</h6>
          <h5>
            {{ order.bill.bill_expired | formatDate }}
          </h5>
          <div>
            <div>
              <div v-if="order.payment.pg_type === 'emoney'" class="p-2">
                <a
                  :href="order.response.redirect_url"
                  class="btn btn-danger"
                  target="_blank"
                  ><i class="fad fa-file-invoice"></i> Bayar Dengan
                  {{ order.payment.pg_name }}</a
                >
              </div>
              <div v-if="order.payment.pg_type === 'ibanking'" class="p-2">
                <a
                  :href="order.response.redirect_url"
                  class="btn btn-danger"
                  target="_blank"
                  ><i class="fad fa-file-invoice"></i> Bayar Dengan
                  {{ order.payment.pg_name }}</a
                >
              </div>
              <div v-if="order.payment.pg_type === 'jumapp'" class="p-2">
                <a
                  :href="order.response.redirect_url"
                  class="btn btn-danger"
                  target="_blank"
                  ><i class="fad fa-file-invoice"></i> Bayar Dengan
                  {{ order.payment.pg_name }}</a
                >
              </div>
              <div v-if="order.payment.pg_type === 'qris'" class="p-2">
                <a
                  :href="order.response.redirect_url"
                  class="btn btn-danger"
                  target="_blank"
                  ><i class="fad fa-file-invoice"></i> Bayar Dengan
                  {{ order.payment.pg_name }}</a
                >
              </div>
              <div v-if="order.payment.pg_type === 'retail'" class="p-2">
                <a
                  :href="order.response.redirect_url"
                  class="btn btn-danger"
                  target="_blank"
                  ><i class="fad fa-file-invoice"></i> Bayar Dengan
                  {{ order.payment.pg_name }}</a
                >
              </div>
              <div
                v-if="order.payment.pg_type === 'va'"
                class="p-2 va-container"
              >
                <span>Kode {{ order.payment.pg_name }} Anda</span>
                <h4>{{ order.response.trx_id }}</h4>
                <a
                  :href="order.response.redirect_url"
                  class="btn btn-danger"
                  target="_blank"
                  ><i class="fad fa-file-invoice"></i> Bayar Dengan
                  {{ order.payment.pg_name }}</a
                >
              </div>
            </div>
          </div>
          <p class="small text-mutedm mt-2">
            Pesanan anda akan disiapkan dan akan segera datang
          </p>

          <div>
            <h6>Total Pembayaran</h6>
            <h5>{{ order.bill.bill_total | formatMoney }}</h5>
          </div>
          <NuxtLink
            :to="`/akun/pesanan-saya/order?trx_id=${order.order_id}`"
            class="btn rounded btn-warning btn-lg btn-block"
            >Lihat Pesanan Saya</NuxtLink
          >
          <div class="p-2">
            <p class="text-muted font-italic">
              Muat ulang halaman jika status pembayaran belum berubah
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

moment.locale("id-ID");
export default {
  name: "Checkout",
  data() {
    return {
      order: {},
    };
  },
  async fetch() {
    if (!this.$route.query.order_id) {
      this.$toast.error("Pesanan tidak ditemukan");
      this.$router.push("/");
      return;
    }

    let order_id = this.$route.query.order_id;

    await this.$axios
      .get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/order/${order_id}`)
      .then((res) => {
        this.order = res.data.data;
      })
      .catch((err) => {
        console.error(err);
      });

    if (
      this.order &&
      this.order.payment &&
      this.order.payment.payment_status_code !== 1
    ) {
      this.$router.push(
        `/akun/pesanan-saya/order?trx_id=${this.order.order_id}`
      );
    }
  },
  methods: {
    formatDateToCountDown(date) {
      var countDownDate = new Date(date).getTime();

      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById(`countDown`).innerHTML =
          days +
          "hari " +
          hours +
          "jam " +
          minutes +
          "menit " +
          seconds +
          "detik ";

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
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
.bg-success-order {
  background-color: #ce0000;
}
.va-container {
  border: 3px solid #ce0000;
  border-radius: 6px;
}
</style>