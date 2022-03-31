<template>
  <section class="beliayam-main-body beliayam-signin-main animate__animated">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center vh-100">
        <div class="landing-page shadow-sm btn-danger col-lg-6">
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
                  <label for="email-login">Email</label>
                  <input
                    placeholder="Masukkan Email"
                    type="email"
                    class="form-control"
                    id="email-login"
                    aria-describedby="emailHelp"
                    v-model="email"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-success btn-lg rounded btn-block"
                  @click="submitForgetPassword()"
                >
                  Kirim link reset password
                </button>
              </div>
              <p class="text-muted text-center small m-0 py-3">atau</p>

              <NuxtLink
                to="/login/phone/forgot-password"
                class="btn text-center mt-1 mb-2 btn-outline-dark w-100"
              >
                <span
                  ><i class="fad fa-sms"></i> reset password dengan nomor
                  telepon</span
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
      email: "",
    };
  },
  methods: {
    async getSuccessData(user) {
      const register = this.$axios
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
    async submitForgetPassword() {
      if (this.email === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }

      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/password/forget`,
          {
            email: this.email,
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


