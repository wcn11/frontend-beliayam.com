<template>
  <div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-success">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Keranjang Anda
          </li>
        </ol>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="accordion" id="accordionExample">
              <div
                class="
                  card
                  border-0
                  beliayam-accor
                  rounded
                  shadow-sm
                  overflow-hidden
                "
              >
                <div class="card-header bg-white border-0 p-0" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="
                        btn
                        d-flex
                        align-items-center
                        bg-white
                        btn-block
                        text-left
                        btn-lg
                        h5
                        px-3
                        py-4
                        m-0
                      "
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Cart (3 items)
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body p-0 border-top">
                    <div class="beliayam-cart">
                      <div
                        class="
                          cart-items
                          bg-white
                          position-relative
                          border-bottom
                        "
                      >
                        <a
                          href="product_details.html"
                          class="position-absolute"
                        >
                          <span class="badge badge-danger m-3">10%</span>
                        </a>
                        <div class="d-flex align-items-center p-3">
                          <a href="product_details.html"
                            ><img src="img/cart/g1.png" class="img-fluid"
                          /></a>
                          <a
                            href="product_details.html"
                            class="ml-3 text-dark text-decoration-none w-100"
                          >
                            <h5 class="mb-1">Paha Fillet</h5>
                            <p class="text-muted mb-2">Rp. 40.000/Kg</p>
                            <div class="d-flex align-items-center">
                              <p class="total_price font-weight-bold m-0">
                                Rp. 40.000
                              </p>
                              <form
                                id="myform"
                                class="cart-items-number d-flex ml-auto"
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
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="
                          cart-items
                          bg-white
                          position-relative
                          border-bottom
                        "
                      >
                        <div class="d-flex align-items-center p-3">
                          <a href="product_details.html"
                            ><img src="img/cart/g2.png" class="img-fluid"
                          /></a>
                          <a
                            href="product_details.html"
                            class="ml-3 text-dark text-decoration-none w-100"
                          >
                            <h5 class="mb-1">Kulit Ayam Super</h5>
                            <p class="text-muted mb-2">Rp. 35.000/Kg</p>
                            <div class="d-flex align-items-center">
                              <p class="total_price font-weight-bold m-0">
                                Rp. 35.000
                              </p>
                              <form
                                id="myform"
                                class="cart-items-number d-flex ml-auto"
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
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="
                          cart-items
                          bg-white
                          position-relative
                          border-bottom
                        "
                      >
                        <div class="d-flex align-items-center p-3">
                          <a href="product_details.html"
                            ><img src="img/cart/g3.png" class="img-fluid"
                          /></a>
                          <a
                            href="product_details.html"
                            class="ml-3 text-dark text-decoration-none w-100"
                          >
                            <h5 class="mb-1">Ayam Broiler</h5>
                            <p class="text-muted mb-2">
                              <del class="text-success mr-1"></del> Rp.
                              38.000/Ekor
                            </p>
                            <div class="d-flex align-items-center">
                              <p class="total_price font-weight-bold m-0">
                                Rp. 38.000
                              </p>
                              <form
                                id="myform"
                                class="cart-items-number d-flex ml-auto"
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
                            </div>
                          </a>
                        </div>
                      </div>
                      <div>
                        <a
                          href="checkout.html"
                          class="text-decoration-none btn btn-block p-3"
                          type="button"
                        >
                          <div
                            class="
                              rounded
                              shadow
                              bg-success
                              d-flex
                              align-items-center
                              p-3
                              text-white
                            "
                          >
                            <div class="more">
                              <h6 class="m-0">Subtotal Rp. 113.000</h6>
                              <p class="small m-0">Proceed to checkout</p>
                            </div>
                            <div class="ml-auto">
                              <i class="icofont-simple-right"></i>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="sticky_sidebar">
              <div
                class="
                  bg-white
                  rounded
                  overflow-hidden
                  shadow-sm
                  mb-3
                  checkout-sidebar
                "
              >
                <div
                  class="
                    d-flex
                    align-items-center
                    beliayam-cart-item-profile
                    border-bottom
                    bg-white
                    p-3
                  "
                >
                  <img
                    alt="beliayam"
                    src="img/starter1.jpg"
                    class="mr-3 rounded-circle img-fluid"
                  />
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 font-weight-bold">Beli Ayam Store</h6>
                    <p class="mb-0 small text-muted">
                      <i class="feather-map-pin"></i> Jl. Jend. Sudirman Kav.
                      52-53 SCBD LOT 28, Jakarta Selatan
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-white p-3 clearfix">
                    <p class="font-weight-bold small mb-2">Bill Details</p>
                    <p class="mb-1">
                      Item Total <span class="small text-muted">(3 item)</span>
                      <span class="float-right text-dark">Rp. 113.000</span>
                    </p>
                    <p class="mb-1">
                      Store Charges
                      <span class="float-right text-dark">Rp. 0</span>
                    </p>
                    <p class="mb-3">
                      Delivery Fee
                      <span
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delivery partner fee - $3"
                        class="text-info ml-1"
                        ><i class="icofont-info-circle"></i></span
                      ><span class="float-right text-dark">Rp. 15.000</span>
                    </p>
                    <h6 class="mb-0 text-success">
                      Total Discount<span class="float-right text-success"
                        >Rp. 28.000</span
                      >
                    </h6>
                  </div>
                  <div class="p-3 border-top">
                    <h5 class="mb-0">
                      TO PAY
                      <span class="float-right text-danger">Rp. 100.000</span>
                    </h5>
                  </div>
                </div>
              </div>
              <p class="text-success text-center">
                Your Total Savings on this order Rp. 28.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style>
</style>