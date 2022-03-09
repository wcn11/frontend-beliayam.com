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
              <h2 class="my-0">Selamat Datang, Kembali</h2>
              <p class="small mb-4">Masuk untuk melanjutkan.</p>
              <div class="form">
                <div class="form-group">
                  <label for="email-login">Email</label>
                  <input
                    placeholder="Enter Email"
                    type="email"
                    class="form-control"
                    id="email-login"
                    aria-describedby="emailHelp"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label for="password-login">Password</label>
                  <input
                    placeholder="Enter Password"
                    type="password"
                    class="form-control"
                    id="password-login"
                    v-model="password"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-success btn-lg rounded btn-block"
                  @click="submitLogin()"
                >
                  Masuk
                </button>
                <div class="text-right mt-2">
                  <NuxtLink
                    to="login/forgot-password"
                    class="text-danger"
                    role="button"
                    >lupa password ?</NuxtLink
                  >
                </div>
              </div>
              <p class="text-muted text-center small m-0 py-3">atau</p>
              <NuxtLink
                to="/login/phone"
                href="javascript:void(0)"
                class="btn btn-dark btn-block rounded btn-lg"
              >
                <i class="fad fa-mobile-alt"></i> Masuk Dengan Telepon
              </NuxtLink>

              <!-- <v-facebook-login
                :app-id="facebookClientId"
                text-class=" rounded text-white"
                role="button"
                @login="loginByFacebook"
                :login-options="scopeLoginByFacebook"
              >
                <span slot="login">Masuk Dengan Facebook</span>
              </v-facebook-login> -->
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
import VFacebookLogin from "vue-facebook-login-component";
export default {
  components: {
    googleSignIn,
    VFacebookLogin,
  },
  data() {
    return {
      googleClientId: process.env.NUXT_ENV_GOOGLE_CLIENT_ID,
      facebookClientId: process.env.NUXT_ENV_FACEBOOK_APP_ID,
      email: "ayusandra@gmail.com",
      password: "qweqwe",
      user: {},
    };
  },
  methods: {
    async loginByFacebook() {
      const user = await FB.login(
        async function (response) {
          if (response.authResponse) {
            return await FB.api(`/me?fields=email,name`, function (responseUser) {
              console.log(responseUser);
              return responseUser;
            });
          } else {
            this.$toast.warning(
              "User cancelled login or did not fully authorize."
            );
          }
        },
        { scope: "email,public_profile", return_scopes: true }
      );

      if (user && user.email) {
        console.log(user)
        await this.getSuccessData(user, "facebook");
      }
    },
    async getSuccessData(user, loginBy = "google") {
      await this.$axios
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
    async submitLogin() {
      if (this.email === "" || this.password === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }
      const login = await this.$store.dispatch("auth/login", {
        email: this.email,
        password: this.password,
      });

      if (login.error) {
        this.$toast.error(login.message);
        return;
      }

      this.$router.push("/");

      // try {
      //   let response = await this.$auth.loginWith("local", {
      //     data: {
      //       email: this.email,
      //       password: this.password,
      //     },
      //   });
      //   if (response.data.error) {
      //     this.$toast.error(response.data.message);
      //   }
      // } catch (err) {
      //   console.log(err);
      //   if (err && err.response && err.response.data.error) {
      //     this.$toast.error(err.response.data.message);
      //   } else {
      //     this.$toast.warning("Server Sibuk");
      //   }
      // }
      // this.$nuxt.$loading.start();
      // const response = await this.$axios
      //   .$post(`${this.$config.baseApi}/auth/login`, {
      //     email: this.email,
      //     password: this.password,
      //   })
      //   .then((results) => {
      //     if (!results.data.error) {
      //       this.$store.commit("auth/setCookie", results.data);
      //     } else {
      //       this.$toast.warning(results.data.message);
      //     }
      //   })
      //   .catch((err) => {
      //     if (err && err.response && err.response.data.error) {
      //       this.$toast.error(err.response.data.message);
      //     } else {
      //       this.$toast.warning("Server Sibuk");
      //     }
      //   });
      // this.$nuxt.$loading.finish();
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
.v-facebook-login {
  padding: 5px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>


