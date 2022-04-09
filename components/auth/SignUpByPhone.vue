<template>
  <section class="beliayam-main-body">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center vh-100">
        <div class="landing-page shadow-sm bg-danger col-lg-6">
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
          <div class="beliayam-signup shadow bg-white p-4 rounded">
            <div class="p-3">
              <h2 class="my-0">Ayo Mulai</h2>
              <p class="small mb-4">
                Buat akun untuk melihat pilihan terbaik kami untuk Anda!
              </p>
              <form action="verification.html">
                <div class="form-group">
                  <label for="inputPhone">No. Telepon</label>
                  <input
                    placeholder="Masukkan No. Telp"
                    type="tel"
                    class="form-control"
                    id="inputPhone"
                    aria-describedby="telHelp"
                    v-model="phone"
                  />
                </div>
                <div class="form-group">
                  <label for="inputPassword">Password</label>
                  <input
                    placeholder="Masukkan Password"
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    v-model="password"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-danger rounded btn-lg btn-block"
                  @click="submitRegister()"
                >
                  Mendaftar
                </button>
              </form>
              <p class="text-muted text-center small py-2 m-0">atau</p>
              <a
                href="javascript:void(0)"
                class="btn btn-dark btn-block rounded btn-lg"
                @click="verifyPhoneMethod()"
              >
                <i class="fad fa-mobile-alt"></i> Verifikasi Nomor Telepon
              </a>
              <NuxtLink
                to="/register"
                class="btn btn-secondary btn-block rounded btn-lg btn-email"
              >
                <i class="fad fa-envelope mr-2"></i> Mendaftar Dengan Email
              </NuxtLink>
              <a
                href="javascript:void(0)"
                class="btn btn-info btn-block rounded btn-lg btn-facebook"
                @click="loginByFacebook"
              >
                <i class="fab fa-facebook mr-2"></i> Masuk Dengan Facebook
              </a>

              <a
                id="buttonLoginByGoogle"
                href="javascript:void(0)"
                class="btn border btn-block rounded btn-lg btn-google"
              >
                <i class="fab text-light fa-google text-danger mr-2"></i>
                Mendaftar Dengan Google
              </a>
              <googleSignIn
                :clientId="`${googleClientId}`"
                :successCallBack="getSuccessData"
                :failureCallBack="getFailureData"
                :customButton="true"
                customButtonId="buttonLoginByGoogle"
              />
              <p class="text-center mt-3 mb-0">
                <NuxtLink to="/login" class="text-dark"
                  >Sudah Punya Akun ?
                  <span class="text-danger">Masuk Disini</span></NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
        <i class="fad fa-moon-cloud"></i>
      </label>
      <em>Mode Gelap!</em>
    </div> -->

    <vue-final-modal
      name="modal-verify-phone-otp"
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
                @click="verifyOtpPhoneMethod()"
              >
                verifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </vue-final-modal>

    <vue-final-modal
      name="modal-verify-phone"
      :click-to-close="true"
      :lock-scroll="false"
      :fit-parent="true"
      :drag="true"
      v-model="verifyPhone.showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="container modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Verifikasi Nomor Telepon</h5>
          </div>
          <div class="modal-body">
            <div>
              <div class="form-group">
                <label for="inputVerifyPhone">No. Telepon</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputVerifyPhone"
                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  placeholder="No. Telp"
                  v-model="verifyPhone.data.phone"
                />
                <span
                  class="text-danger font-italic"
                  role="button"
                  @click="resendOtpChangePhone()"
                  >kirim kode OTP</span
                >
              </div>
              <div class="form-group">
                <label for="inputChangePhoneOtp">Kode OTP</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputChangePhoneOtp"
                  placeholder="****"
                  v-model="verifyPhone.data.code"
                />
              </div>
            </div>
            <div class="justify-content-around mx-auto text-center mt-5">
              <button
                type="button"
                class="btn btn-danger"
                @click="verifyOtpChangePhoneMethod()"
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
  name: "Signup",
  components: {
    googleSignIn,
  },
  data: () => {
    return {
      verifyPhoneOtp: {
        showModal: false,
        data: "",
      },
      verifyPhone: {
        showModal: false,
        data: {
          phone: "",
          code: "",
        },
      },
      googleClientId: process.env.NUXT_ENV_GOOGLE_CLIENT_ID,
      phone: "",
      password: "",
      registerBy: "phone",
      registerAt: "website",
    };
  },
  methods: {
    async verifyOtpChangePhoneMethod() {
      if (
        this.verifyPhone.data.phone === "" ||
        this.verifyPhone.data.phone === ""
      ) {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }
      await this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/register/phone/verify`,
          {
            phone: this.verifyPhone.data.phone,
            code: this.verifyPhone.data.code,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }
          this.$store.dispatch("auth/setCookieLogin", results.data.token);

          this.$toast.success(results.message);

          this.verifyPhone.showModal = false;

          this.$router.push("/");
        })
        .catch((err) => {
          if (err && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    async verifyOtpPhoneMethod() {
      if (this.verifyPhoneOtp.data === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }
      await this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/register/phone/verify`,
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
    resendOtpChangePhone() {
      if (this.verifyPhone.data.phone === "") {
        this.$toast.warning("Harap isi dahulu no. telepon untuk kirim OTP");
        return;
      }
      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/register/phone/resend`,
          {
            phone: this.verifyPhone.data.phone,
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
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/register/phone/resend`,
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
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    verifyPhoneMethod() {
      this.verifyPhone.showModal = !this.verifyPhone.showModal;
    },
    verifyPhoneOtpMethod() {
      this.verifyPhoneOtp.showModal = !this.verifyPhoneOtp.showModal;
    },
    async loginByFacebook() {
      const { authResponse } = await new Promise(FB.login);
      if (!authResponse) return;

      await FB.api(`/me?fields=email,name`, async (responseUser) => {
        this.getSuccessData(responseUser, "facebook");
      });
    },
    async getSuccessData(user, loginBy = "google") {
      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/social/login`,
          {
            name: user.name,
            email: user.email,
            loginBy: loginBy,
            loginAt: "website",
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          console.log(results.data.token);

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
    async submitRegister() {
      const register = await this.$store
        .dispatch("auth/registerByPhone", {
          phone: this.phone,
          password: this.password,
          registerBy: this.registerBy,
          registerAt: this.registerAt,
        })
        .then((results) => {
          console.log(results);
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }
          this.$toast.success(results.message);
        })
        .catch((err) => {
          if (
            err &&
            err.response &&
            err.response.data 
          ) {
            this.$toast.warning(err.response.data.message);
          }
        });
    },
  },
};
</script>


