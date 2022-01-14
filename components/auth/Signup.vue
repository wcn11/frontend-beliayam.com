<template>
  <section class="beliayam-main-body">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center vh-100">
        <div class="landing-page shadow-sm bg-success col-lg-6">
          <a
            class="position-absolute btn-sm btn btn-outline-light m-4 zindex"
            href="home.html"
            >Skip <i class="icofont-bubble-right"></i
          ></a>
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
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  vh-100
                  flex-column
                "
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
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  vh-100
                  flex-column
                "
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
          <div class="beliayam-signup shadow bg-white p-4 rounded">
            <div class="p-3">
              <h2 class="my-0">Let's get started</h2>
              <p class="small mb-4">
                Create account to see our top picks for you!
              </p>
              <form action="verification.html">
                <div class="form-group">
                  <label for="exampleInputName1">Nama</label>
                  <input
                    placeholder="Enter Name"
                    type="text"
                    class="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                    v-model="name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputNumber1">Phone Number</label>
                  <input
                    placeholder="Enter Phone Number"
                    type="number"
                    class="form-control"
                    id="exampleInputNumber1"
                    aria-describedby="emailHelp"
                    v-model="phone"
                  />
                </div>
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
                  class="btn btn-success rounded btn-lg btn-block"
                >
                  Mendaftar
                </button>
              </form>
              <p class="text-muted text-center small py-2 m-0">or</p>
              <a
                href="verification.html"
                class="btn btn-info btn-block rounded btn-lg btn-facebook"
              >
                <i class="fab fa-facebook mr-2"></i> Masuk Dengan Facebook
              </a>
              <a
                href="verification.html"
                class="btn border btn-block rounded btn-lg btn-google"
              >
                <i class="fab text-light fa-google text-danger mr-2"></i> Mendaftar Dengan Google
              </a>
              <p class="text-center mt-3 mb-0">
                <a href="signin.html" class="text-dark"
                  >Sudah Punya Akun ? <span class="text-danger">Masuk Disini</span></a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
        <i class="icofont-moon"></i>
      </label>
      <em>Mode Gelap!</em>
    </div>
  </section>
</template>

<script>
export default {
  name: "Signup",
  data: () => {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      registerBy: "email",
      registerAt: "website",
    };
  },
};
</script>


