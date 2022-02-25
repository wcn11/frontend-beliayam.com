<template>
  <section class="beliayam-main-body beliayam-signin-main animate__animated">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center vh-100">
        <div class="landing-page shadow-sm bg-success col-lg-6">
          <div class="beliayam-slider m-0">
            <div class="beliayam-slider-item text-center">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  vh-100
                  flex-column
                "
              >
                <i class="fad fa-badge-percent display-1 text-warning"></i>
                <h4 class="my-4 text-white">Best Prices & Offers</h4>
                <p class="text-center text-white-50 mb-5 px-4">
                  Cheaper prices than your local<br />supermarket, great
                  cashback offers to top it off.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 pl-lg-5">
          <div class="beliayam-signin shadow-sm bg-white p-4 rounded">
            <div class="p-3">
              <h2 class="my-0">Temukan Akun Anda</h2>
              <p class="small mb-4">Cari akun untuk melanjutkan.</p>
              <div class="form">
                <div class="form-group">
                  <label for="phone-forgot-password">No. Telepon</label>
                  <input
                    placeholder="Masukkan no. telepon"
                    type="tel"
                    class="form-control"
                    id="phone-forgot-password"
                    aria-describedby="phoneHelp"
                    v-model="phone"
                  />
                </div>
                <div class="text-center mt-2 mb-3">
                  <span
                    to="login/forgot-password"
                    class="text-danger"
                    role="button"
                    @click="confirmOtp()"
                    >konfirmasi kode OTP</span
                  >
                </div>
                <button
                  type="submit"
                  class="btn btn-success btn-lg rounded btn-block"
                  @click="submitForgetPasswordByPhone()"
                >
                  Kirim kode OTP
                </button>
              </div>
              <p class="text-muted text-center small m-0 py-3">atau</p>

              <NuxtLink
                to="/login/forgot-password"
                class="btn text-center mt-1 mb-2 btn-outline-dark w-100"
              >
                <span
                  ><i class="fad fa-envelope"></i> reset password dengan
                  email</span
                >
              </NuxtLink>
              <NuxtLink
                to="/login/phone"
                href="javascript:void(0)"
                class="btn btn-dark btn-block rounded btn-lg"
              >
                <i class="fad fa-mobile-alt"></i> Masuk Dengan Telepon
              </NuxtLink>
              <a
                href="javascript:void(0)"
                class="btn btn-info btn-block rounded btn-lg btn-facebook"
              >
                <i class="fab fa-facebook mr-2"></i> Masuk Dengan Facebook
              </a>

              <a
                id="buttonLoginByGoogle"
                href="javascript:void(0)"
                class="btn border btn-block rounded btn-lg btn-google"
              >
                <i class="fab text-light fa-google text-danger mr-2"></i>
                Masuk Dengan Google
              </a>
              <googleSignIn
                :clientId="`${googleClientId}`"
                :successCallBack="getSuccessData"
                :failureCallBack="getFailureData"
                :customButton="true"
                customButtonId="buttonLoginByGoogle"
              />
              <p class="text-center mt-3 mb-0">
                <NuxtLink to="/register" class="text-dark"
                  >Belum Punya Akun ?
                  <span class="text-danger">Daftar Disini</span></NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vue-final-modal
      name="modal-verify-verify-otp"
      :click-to-close="true"
      :lock-scroll="false"
      :fit-parent="true"
      :drag="true"
      v-model="verifyPhoneOtp.showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="container modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Verifikasi Nomor Telepon</h5>
          </div>
          <div class="modal-body">
            <div>
              <div class="form-group">
                <label for="inputChangePhone">Kode OTP</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputChangePhone"
                  placeholder="****"
                  v-model="verifyPhoneOtp.data"
                />
                <span
                  class="text-danger font-italic"
                  role="button"
                  @click="resendOtpPhone()"
                  >kirim ulang kode OTP</span
                >
              </div>
            </div>
            <div class="justify-content-around mx-auto text-center mt-5">
              <button
                type="button"
                class="btn btn-danger"
                @click="verifyOtpPhoneForgetPasswordMethod()"
              >
                verifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </vue-final-modal>
  </section>
</template>

<script>
import googleSignIn from "./social/googleSignIn.vue";
export default {
  components: {
    googleSignIn,
  },
  data() {
    return {
      googleClientId: process.env.NUXT_ENV_GOOGLE_CLIENT_ID,
      phone: "0895402275040",

      verifyPhoneOtp: {
        showModal: false,
        data: "",
      },
    };
  },
  methods: {
    async getSuccessData(user) {
      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/social/login`,
          {
            name: user.name,
            email: user.email,
            loginBy: "google",
            loginAt: "website",
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$store.dispatch("auth/loginBySocial", results.data.token);

          this.$router.push("/");
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
    },
    getFailureData: function (errorData) {
      // The errorData variable contains failure details
      console.log(errorData);
    },
    confirmOtp() {
      if (this.phone) {
        this.verifyPhoneOtp.showModal = true;
      } else {
        this.$toast.warning("No. Telepon belum di isi");
      }
    },

    async verifyOtpPhoneForgetPasswordMethod() {
      if (this.verifyPhoneOtp.data === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }
      await this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/password/forget/phone/verify`,
          {
            phone: this.phone,
            code: this.verifyPhoneOtp.data,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }
          this.$store.dispatch("auth/setCookieLogin", results.data.token);

          this.$toast.success(results.message);

          this.verifyPhoneOtp.showModal = false;

          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },

    resendOtpPhone() {
      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/password/forget/phone/resend`,
          {
            phone: this.phone,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$toast.success(results.message);
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    async submitForgetPasswordByPhone() {
      if (this.phone === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }

      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/password/forget/phone`,
          {
            phone: this.phone,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }
          this.$toast.success(results.message);
          this.verifyPhoneOtp.showModal = true;
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
    },
  },
};
</script>

<style>
.btn-google {
  background-color: #e44c33;
}
.btn-facebook {
  background-color: #1877f2;
}
</style>


