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
            <div class="p-3" v-if="badLink">Bad Link</div>
            <div class="p-3" v-else>
              <h2 class="my-0">Reset Password</h2>
              <p class="small mb-4">Update password anda</p>
              <div class="form">
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    placeholder="Masukkan password"
                    type="text"
                    class="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                    v-model="password"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Konfirmasi Password</label>
                  <input
                    placeholder="Masukkan konfirmasi password"
                    type="text"
                    class="form-control"
                    id="password-confirmation"
                    aria-describedby="passwordConfirmationHelp"
                    v-model="password_confirmation"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-success btn-lg rounded btn-block"
                  @click="submitResetPassword()"
                >
                  Update password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    const { token, id, signature } = this.$route.query;

    if (!token || !id || !signature) {
      this.badLink = true;
    }

    await this.$axios
      .post(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/password/verify`,
        {
          token,
          id,
          signature,
        }
      )
      .then((results) => {
        if (results.error) {
          this.$toast.warning(results.data.data.message);
          this.badLink = true;
          return;
        }
        this.user = results.data.data;
        this.signature = signature;
      })
      .catch((err) => {
        if (err && err.response && err.response.data.error) {
          this.$toast.warning(err.response.data.message);
        } else {
          this.$toast.error("Server Sibuk");
        }
        this.badLink = true;
      });
  },
  data() {
    return {
      signature: "",
      badLink: false,
      password: "qweqwe",
      password_confirmation: "qweqwe",
      user: {},
    };
  },
  methods: {
    async submitResetPassword() {
      if (this.password === "" || this.password_confirmation === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }

      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/password/change`,
          {
            _id: this.user._id,
            password: this.password,
            password_confirmation: this.password_confirmation,
          },
          {
            headers: {
              signature: this.signature,
            },
          }
        )
        .then(async (results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          await this.$store.dispatch("auth/loginBySocial", results.data.token);

          this.$toast.success(results.message);

          this.$router.push("/");
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
            return;
          } else {
            this.$toast.warning("Server Sibuk");
            return;
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


