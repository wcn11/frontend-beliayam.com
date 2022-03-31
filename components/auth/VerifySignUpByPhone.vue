<template>
  <section class="beliayam-main-body">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center vh-100">
        <div class="col-lg-6">
          <div class="beliayam-verification shadow bg-white p-4 rounded">
            <div class="beliayam-form p-3 text-center mt-3">
              <h2>Verifikasi Nomor Telepon</h2>
              <p>Masukkan kode 4 digit yang kami kirimkan kepada Anda</p>
              <p>+62*** ***76</p>
              <form action="home.html">
                <div class="row my-5 px-5">
                  <div class="col px-2">
                    <input
                      type="text"
                      placeholder="0"
                      class="form-control opt form-control-lg text-center"
                    />
                  </div>
                  <div class="col px-2">
                    <input
                      type="text"
                      placeholder="0"
                      class="form-control opt form-control-lg text-center"
                    />
                  </div>
                  <div class="col px-2">
                    <input
                      type="text"
                      placeholder="0"
                      class="form-control opt form-control-lg text-center"
                    />
                  </div>
                  <div class="col px-2">
                    <input
                      type="text"
                      placeholder="0"
                      class="form-control opt form-control-lg text-center"
                    />
                  </div>
                </div>
                <p>
                  <a href="#" class="text-decoration-none text-danger"
                    >Resend Code</a
                  >
                </p>
                <p>
                  <a href="#" class="text-decoration-none text-dark"
                    >Call me instead</a
                  >
                </p>
                <button class="btn btn-danger btn-block btn-lg">
                  Continue
                </button>
              </form>
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
      googleClientId: process.env.NUXT_ENV_GOOGLE_CLIENT_ID,
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>