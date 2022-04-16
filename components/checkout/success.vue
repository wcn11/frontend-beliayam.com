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
          <i class="fad fa-check-circle display-1 text-success"></i>
          <h1 class="text-dark font-weight-bold">Pesanan Berhasil Dilakukan</h1>
          <p class="text-dark">
            Cek status pemesanan anda di
            <a
              href="/akun/pesanan-saya"
              class="font-weight-bold text-decoration-none text-dark"
              >Pesanan Saya</a
            >
            untuk informasi lebih lanjut.
          </p>
        </div>

        <div
          class="bg-white rounded p-3 m-5 text-center"
          v-if="order && order.bill"
        >
          <div v-if="order.payment.pg_type !== 'cash'">
            <h6 class="font-weight-bold mb-2">Batas Akhir Pembayaran</h6>
            <h5 class="bill-expired">
              {{ order.bill.bill_expired | formatDate }}
            </h5>
            <div>
              <div>
                <div
                  v-if="order.payment.pg_type !== 'cash'"
                  class="p-2 va-container"
                >
                  <div v-if="order.payment.pg_type === 'va'">
                    <span>Kode Virtual {{ order.payment.pg_name }} Anda</span>
                    <h4 class="mt-4 mb-4 font-weight-bolder">
                      <img
                        class="img-thumbnail img-responsive"
                        :src="order.payment.pg_icon"
                        v-if="order.payment.pg_icon"
                      />
                      <span>{{ order.response.trx_id }}</span>
                    </h4>
                  </div>
                  <a
                    :href="getPaymentMethodURL(order)"
                    class="btn btn-outline-secondary"
                    target="_blank"
                    v-if="order.payment.pg_type !== 'qris'"
                  >
                    <i class="fad fa-file-invoice"></i>

                    Bayar Dengan
                    <img
                      class="img-thumbnail img-responsive"
                      :src="order.payment.pg_icon"
                      v-if="order.payment.pg_icon"
                    />
                    <span v-else>{{ order.payment.pg_name }}</span></a
                  >
                  <div class="" v-else>
                    <img
                      :src="order.payment.payment_qrcode"
                      class="img-thumbnail img-responsive img-qris d-flex"
                      v-if="order.payment.payment_qrcode"
                    />
                    <small class="text-danger"
                      >Pastikan Aplikasi Telah Terinstall</small
                    >
                    <br />
                    <small class="text-danger"
                      >Buka Aplikasi, Lalu Scan QRIS</small
                    >
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <p class="small text-mutedm mt-2">
              Pesanan anda akan disiapkan dan akan segera datang
            </p>
          </div>
          <hr class="w-50 mt-5" />

          <div class="mt-4">
            <h6>
              <span class="text-muted">Kode pesanan: #</span
              >{{ order.order_id }}
            </h6>

            <p class="text-danger font-italic">
              <i class="fad fa-info-circle"></i> Kode pesanan bukan kode Virtual
              Akun!
            </p>
          </div>

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
    getPaymentMethodURL(paymentMethod) {
      if (paymentMethod.payment.pg_code == "713") {
        return paymentMethod.response.deeplink;
      }
      return paymentMethod.response.redirect_url;
    },
  },
};
</script>

<style scoped>
.btn-pay {
  background-color: #cf430f;
}
.bill-expired {
  animation: blinker 1s linear infinite;
  color: red;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.bg-success-order {
  background: url("~/static/img/background-footer.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}
.va-container {
  border: 3px solid #c5c5c5;
  border-radius: 6px;
  text-align: -webkit-center;
}
.img-qris {
  width: 30%;
}

@media only screen and (max-device-width: 1200px) {
  .img-qris {
    width: 40%;
  }
}

@media only screen and (max-device-width: 992px) {
  .img-qris {
    width: 50%;
  }
}
@media only screen and (max-device-width: 767px) {
  .img-qris {
    width: 35%;
  }
}
@media only screen and (max-device-width: 720px) {
  .img-qris {
    width: 35%;
  }
}
@media only screen and (max-device-width: 576px) {
  .img-qris {
    width: 40%;
  }
}
@media only screen and (max-device-width: 480px) {
  .img-qris {
    width: 50%;
  }
}
@media only screen and (max-device-width: 400px) {
  .img-qris {
    width: 65%;
  }
}
@media only screen and (max-device-width: 380px) {
  .img-qris {
    width: 70%;
  }
}
@media only screen and (max-device-width: 360px) {
  .img-qris {
    width: 80%;
  }
}
</style>