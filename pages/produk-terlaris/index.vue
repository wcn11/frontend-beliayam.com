<template>
  <div id="page-best-seller-index" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Produk Terlaris
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="beliayam-listing">
              <div class="d-flex align-items-center mb-3">
                <h4>Best Seller</h4>
                <div class="m-0 text-center ml-auto">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn text-muted bg-white mr-2"
                    ><i class="fad fa-filter mr-1"></i> Filter</a
                  >
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn text-muted bg-white"
                    ><i class="fad fa-signal mr-1"></i> Sort</a
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-4 mb-3">
                  <NuxtLink to="/broiler-12-13"
                    class="text-dark text-decoration-none"
                  >
                    <div
                      class="
                        list-card
                        bg-white
                        h-100
                        rounded
                        overflow-hidden
                        position-relative
                        shadow-sm
                      "
                    >
                      <div class="recommend-slider rounded m-0">
                        <div class="beliayam-slider-item m-2 rounded">
                          <img
                            src="img/recommend/r1.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                        <div class="beliayam-slider-item m-2 rounded">
                          <img
                            src="img/recommend/r2.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                        <div class="beliayam-slider-item m-2 rounded">
                          <img
                            src="img/recommend/r3.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                      </div>
                      <div class="p-3 position-relative">
                        <h6 class="mb-1 font-weight-bold text-success">
                          Ayam Broiler
                        </h6>
                        <p class="text-muted">Ayam Broiler yang berkualitas.</p>
                        <div class="d-flex align-items-center">
                          <h6 class="m-0">Rp. 38.000/Ekor</h6>
                          <a class="ml-auto" href="javascript:void(0)">
                            <form
                              id="myform"
                              class="cart-items-number d-flex"
                              method="POST"
                              action="#"
                            >
                              <input
                                type="button"
                                value="-"
                                class="qtyminus btn btn-success btn-sm"
                                field="quantity"
                              />
                              <input
                                type="text"
                                name="quantity"
                                value="1"
                                class="qty form-control"
                              />
                              <input
                                type="button"
                                value="+"
                                class="qtyplus btn btn-success btn-sm"
                                field="quantity"
                              />
                            </form>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="col-12 col-md-4 mb-3">
                  <a
                    href="product_details.html"
                    class="text-dark text-decoration-none"
                  >
                    <div
                      class="
                        list-card
                        bg-white
                        h-100
                        rounded
                        overflow-hidden
                        position-relative
                        shadow-sm
                      "
                    >
                      <div class="recommend-slider rounded m-0">
                        <div class="beliayam-slider-item m-2">
                          <img
                            src="img/recommend/r4.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                        <div class="beliayam-slider-item m-2">
                          <img
                            src="img/recommend/r5.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                        <div class="beliayam-slider-item m-2">
                          <img
                            src="img/recommend/r6.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                      </div>
                      <div class="p-3 position-relative">
                        <h6 class="mb-1 font-weight-bold text-success">
                          Ayam Pejantan
                        </h6>
                        <p class="text-muted">
                          Ayam Pejantan Fresh dan Bergizi.
                        </p>
                        <div class="d-flex align-items-center">
                          <h6 class="m-0">Rp. 45.000/Ekor</h6>
                          <a class="ml-auto" href="#">
                            <form
                              id="myform"
                              class="cart-items-number d-flex"
                              method="POST"
                              action="#"
                            >
                              <input
                                type="button"
                                value="-"
                                class="qtyminus btn btn-success btn-sm"
                                field="quantity"
                              />
                              <input
                                type="text"
                                name="quantity"
                                value="1"
                                class="qty form-control"
                              />
                              <input
                                type="button"
                                value="+"
                                class="qtyplus btn btn-success btn-sm"
                                field="quantity"
                              />
                            </form>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-12 col-md-4 mb-3">
                  <a
                    href="product_details.html"
                    class="text-dark text-decoration-none"
                  >
                    <div
                      class="
                        list-card
                        bg-white
                        h-100
                        rounded
                        overflow-hidden
                        position-relative
                        shadow-sm
                      "
                    >
                      <div class="recommend-slider rounded m-0">
                        <div class="beliayam-slider-item m-2">
                          <img
                            src="img/recommend/r7.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                        <div class="beliayam-slider-item m-2">
                          <img
                            src="img/recommend/r8.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                        <div class="beliayam-slider-item m-2">
                          <img
                            src="img/recommend/r9.jpg"
                            class="img-fluid mx-auto rounded shadow-sm"
                            alt="Responsive image"
                          />
                        </div>
                      </div>
                      <div class="p-3 position-relative">
                        <h6 class="mb-1 font-weight-bold text-success">
                          Ayam Fillet
                        </h6>
                        <p class="text-muted">Ayam Fillet Premium item.</p>
                        <div class="d-flex align-items-center">
                          <h6 class="m-0">Rp. 40.000/Kg</h6>
                          <a class="ml-auto" href="#">
                            <form
                              id="myform"
                              class="cart-items-number d-flex"
                              method="POST"
                              action="#"
                            >
                              <input
                                type="button"
                                value="-"
                                class="qtyminus btn btn-success btn-sm"
                                field="quantity"
                              />
                              <input
                                type="text"
                                name="quantity"
                                value="1"
                                class="qty form-control"
                              />
                              <input
                                type="button"
                                value="+"
                                class="qtyplus btn btn-success btn-sm"
                                field="quantity"
                              />
                            </form>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductBestSeller",
  // layout: "blog"

  head: {
    title: "Promo Beliayam.com",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    document.getElementById("page-best-seller-index").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-best-seller-index")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}

.btn-view-promo {
  color: darkred;
  background-color: #ffffff;
  border-color: #ffc107;
}

.bg-promo {
  background-color: #ffba08 !important;
}
.slider-container {
  width: 100%;
  /* height: 190px; */
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 0;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-shadow {
  box-shadow: 1px 1px 5px 0px grey;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .slider-image {
    height: 120px;
  }
}

@media only screen and (min-width: 481px) {
  .slider-image {
    height: 175px;
  }
}

@media only screen and (min-width: 690px) {
  .slider-image {
    height: 250px;
  }
}
</style>
