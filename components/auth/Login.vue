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
              </div>
              <p class="text-muted text-center small m-0 py-3">or</p>
              <a
                href="verification.html"
                class="btn btn-info btn-block rounded btn-lg btn-facebook"
              >
                <i class="fab fa-facebook mr-2"></i> Masuk Dengan Facebook
              </a>
              <a
                href="verification.html"
                class="btn btn-white border btn-block rounded btn-lg btn-google"
              >
                <i class="fab fa-google-plus text-white mr-2"></i> Masuk Dengan
                Google
              </a>
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
export default {
  data() {
    return {
      email: "ayusandra@gmail.com",
      password: "qweqwe1",
    };
  },
  methods: {
    async submitLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        if (response.data.error) {
          this.$toast.error(response.data.message);
        }
      } catch (err) {
        console.log(err);
        if (err && err.response && err.response.data.error) {
          this.$toast.error(err.response.data.message);
        } else {
          this.$toast.warning("Server Sibuk");
        }
      }
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
</style>


