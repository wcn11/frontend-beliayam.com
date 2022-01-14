<template>

    <section class="beliayam-main-body beliayam-signin-main">
      <div class="container">
        <div
          class="row d-flex align-items-center justify-content-center vh-100"
        >
          <div class="landing-page shadow-sm bg-success col-lg-6">
            <a
              class="position-absolute btn-sm btn btn-outline-light m-4 zindex"
              href="home.html"
              >Skip <i class="icofont-bubble-right"></i
            ></a>
            <div class="beliayam-slider m-0">
              <div class="beliayam-slider-item text-center">
                <div
                  class="d-flex align-items-center justify-content-center vh-100 flex-column"
                >
                  <i class="icofont-sale-discount display-1 text-warning"></i>
                  <h4 class="my-4 text-white">Best Prices & Offers</h4>
                  <p class="text-center text-white-50 mb-5 px-4">
                    Cheaper prices than your local<br />supermarket, great
                    cashback offers to top it off.
                  </p>
                </div>
              </div>
              <div class="beliayam-slider-item text-center">
                <div
                  class="d-flex align-items-center justify-content-center vh-100 flex-column"
                >
                  <i class="icofont-cart display-1 text-warning"></i>
                  <h4 class="my-4 text-white">Wide Assortment</h4>
                  <p class="text-center text-white-50 mb-5 px-4">
                    Choose from 5000+ products across food<br />, personal care,
                    household & other categories.
                  </p>
                </div>
              </div>
              <div class="beliayam-slider-item text-center">
                <div
                  class="d-flex align-items-center justify-content-center vh-100 flex-column"
                >
                  <i class="icofont-support-faq display-1 text-warning"></i>
                  <h4 class="my-4 text-white">Easy Returns</h4>
                  <p class="text-center text-white-50 mb-5 px-4">
                    Not satisfied with a product? Return<br />
                    it at the doorstep & get a refund within hours.
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
                <form action="verification.html">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      placeholder="Enter Email"
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      placeholder="Enter Password"
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      v-model="password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-success btn-lg rounded btn-block"
                  >
                    Sign in
                  </button>
                </form>
                <p class="text-muted text-center small m-0 py-3">or</p>
                <a
                  href="verification.html"
                  class="btn btn-dark btn-block rounded btn-lg btn-apple"
                >
                  <i class="icofont-brand-apple mr-2"></i> Sign up with Apple
                </a>
                <a
                  href="verification.html"
                  class="btn btn-light border btn-block rounded btn-lg btn-google"
                >
                  <i class="icofont-google-plus text-danger mr-2"></i> Sign up
                  with Google
                </a>
                <p class="text-center mt-3 mb-0">
                  <a href="signup.html" class="text-dark"
                    >Don't have an account? Sign up</a
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
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: '',
    }
  }
}
</script>


