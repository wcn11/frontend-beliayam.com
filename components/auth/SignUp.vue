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
                  <label for="inputName">Nama</label>
                  <input
                    placeholder="Masukkan Nama"
                    type="text"
                    class="form-control"
                    id="inputName"
                    aria-describedby="emailHelp"
                    v-model="name"
                  />
                </div>
                <div class="form-group">
                  <label for="inputEmail">Email</label>
                  <input
                    placeholder="Masukkan Email"
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    v-model="email"
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
                <div class="text-center mt-3 mb-3">
                  <span class="text-center"
                    >Dengan Mendaftar Anda Menyetujui
                    <a href="/ketentuan-pengguna">Kebijakan Pengguna</a> <br />Serta
                    <a href="/syarat-ketentuan">Syarat & Ketentuan</a>
                    Beliayam.com</span
                  >
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
              <NuxtLink
                to="/register/phone"
                class="btn btn-dark btn-block rounded btn-lg"
              >
                <i class="fad fa-mobile-alt"></i> Mendaftar Dengan Telepon
              </NuxtLink>

              <a
                href="javascript:void(0)"
                class="btn btn-info btn-block rounded btn-lg btn-facebook"
                @click="loginByFacebook"
              >
                <i class="fab fa-facebook mr-2"></i> Mendaftar Dengan Facebook
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
      googleClientId: process.env.NUXT_ENV_GOOGLE_CLIENT_ID,
      name: "",
      email: "",
      // phone: "",
      password: "",
      registerBy: "email",
      registerAt: "website",
    };
  },
  methods: {
    async loginByFacebook() {
      const { authResponse } = await new Promise(FB.login);
      if (!authResponse) return;

      await FB.api(`/me?fields=email,name`, async (responseUser) => {
        this.getSuccessData(responseUser, "facebook");
      });
    },
    async getSuccessData(user, loginBy = "google") {
      // The User variable contains id_token, id, name, image, email as objects.
      // Send The id_token to the Backend for the verication.

      const register = this.$axios
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
    async submitRegister() {
      if (this.name === "" || this.email === "" || this.password === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }

      const res = await this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/register`, {
          name: this.name,
          email: this.email,
          password: this.password,
          registerBy: "email",
          registerAt: "website",
        })
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$store.dispatch("auth/register", results.data.token);
          this.$router.push("/");
          this.$toast.success("Berhasil Mendaftar!");
        })
        .catch((err) => {
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.error
          ) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
    },
  },
};
</script>


