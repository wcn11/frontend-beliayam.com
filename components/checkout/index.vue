<template>
  <div>
    <div class="bg-white shadow-sm beliayam-main-nav">
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          bg-white
          beliayam-header
          py-0
          container
        "
      >
        <NuxtLink class="navbar-brand mr-0 navbar-logo" to="/"
          ><img
            class="img-fluid logo-img shadow-sm"
            :src="require('static/img/logo_navbar.png')"
        /></NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>

    <!-- <location-picker @change="getLatLong" v-model="location" :options="options">
    </location-picker> -->

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="bg-white rounded shadow-sm overflow-hidden">
              <div class="address p-3 bg-light">
                <h6 class="m-0 text-dark d-flex align-items-center">
                  Alamat Pengiriman
                  <span class="small ml-auto"
                    ><a
                      href="javascript:void(0)"
                      class="font-weight-bold text-decoration-none text-success"
                      @onclick="openModalAddress()"
                      ><i class="fad fa-thumbtack"></i> ubah alamat</a
                    ></span
                  >
                </h6>
              </div>
              <div class="p-3">
                <div class="d-flex align-items-center">
                  <div class="card-body p-0 border-top">
                    <div class="beliayam-order_address">
                      <div class="p-3 row">
                        <div
                          class="
                            custom-control
                            col-lg-6
                            custom-radio
                            mb-3
                            position-relative
                            border-custom-radio
                          "
                        >
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            class="custom-control-input"
                            checked
                          />
                          <label
                            class="custom-control-label w-100"
                            for="customRadioInline1"
                          >
                            <div>
                              <div class="p-3 bg-white rounded shadow-sm w-100">
                                <div class="d-flex align-items-center mb-2">
                                  <p class="mb-0 h6">Home</p>
                                  <p class="mb-0 badge badge-success ml-auto">
                                    <i class="fad fa-check-circle"></i>
                                    Default
                                  </p>
                                </div>
                                <p class="small text-muted m-0">
                                  Jl. Fatmawati No.19
                                </p>
                                <p class="small text-muted m-0">
                                  Jakarta Selatan
                                </p>
                                <p class="pt-2 m-0 text-right">
                                  <span class="small"
                                    ><a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#exampleModal"
                                      class="text-decoration-none text-info"
                                      >Edit</a
                                    ></span
                                  >
                                </p>
                              </div>
                              <span
                                class="
                                  btn btn-light
                                  border-top
                                  btn-lg btn-block
                                "
                              >
                                Deliver Here
                              </span>
                            </div>
                          </label>
                        </div>
                        <div
                          class="
                            custom-control
                            col-lg-6
                            custom-radio
                            position-relative
                            border-custom-radio
                          "
                        >
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label w-100"
                            for="customRadioInline2"
                          >
                            <div>
                              <div class="p-3 rounded bg-white shadow-sm w-100">
                                <div class="d-flex align-items-center mb-2">
                                  <p class="mb-0 h6">Work</p>
                                  <p class="mb-0 badge badge-light ml-auto">
                                    <i class="fad fa-check-circle"></i> Select
                                  </p>
                                </div>
                                <p class="small text-muted m-0">
                                  Jl. Jend. Sudirman Kav. 52-53 SCBD
                                </p>
                                <p class="small text-muted m-0">
                                  LOT 28, Jakarta Selatan
                                </p>
                                <p class="pt-2 m-0 text-right">
                                  <span class="small"
                                    ><a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#exampleModal"
                                      class="text-decoration-none text-info"
                                      >Edit</a
                                    ></span
                                  >
                                </p>
                              </div>
                              <span
                                class="
                                  btn btn-light
                                  border-top
                                  btn-lg btn-block
                                "
                              >
                                Deliver Here
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="address p-3 bg-light">
                <h6 class="m-0 text-dark d-flex align-items-center">
                  Delivery Time
                  <span class="small ml-auto"
                    ><a
                      href="#"
                      class="font-weight-bold text-decoration-none text-success"
                      data-toggle="modal"
                      data-target="#exampleDelivery"
                      ><i class="fad fa-thumbtack"></i> Change</a
                    ></span
                  >
                </h6>
              </div>
              <div class="p-3">
                <div class="d-flex align-items-center">
                  <p class="mb-2 font-weight-bold">Monday</p>
                </div>
                <p class="small text-muted m-0">7 September</p>
                <p class="small text-muted m-0">6AM - 10AM</p>
              </div>
              <div class="address p-3 bg-light">
                <h6 class="m-0 text-dark">Payment Method</h6>
              </div>
              <div class="p-3">
                <a
                  href="#"
                  class="text-success text-decoration-none w-100"
                  data-toggle="modal"
                  data-target="#paymentModal"
                >
                  <div class="d-flex align-items-center">
                    <i class="fad fa-credit-card-front"></i>
                    <span class="ml-3">Edit Payment Method</span>
                    <i class="fad fa-chevron-right ml-auto"></i>
                  </div>
                </a>
              </div>
              <div class="address p-3 bg-light">
                <h6 class="text-dark m-0">Promo Code</h6>
              </div>
              <div>
                <div class="accordion" id="accordionExample">
                  <div class="d-flex align-items-center" id="headingThree">
                    <a
                      class="
                        p-3
                        d-flex
                        align-items-center
                        text-decoration-none text-success
                        w-100
                      "
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i class="fad fa-badge mr-3"></i> Add Promo Code
                      <i class="fad fa-chevron-down ml-auto"></i>
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse p-3 border-top"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="clearfix">
                      <div class="input-group-sm mb-2 input-group">
                        <input
                          placeholder="Enter promo code"
                          type="text"
                          class="form-control"
                        />
                        <div class="input-group-append">
                          <button
                            id="button-addon2"
                            type="button"
                            class="btn btn-success"
                          >
                            <i class="fad fa-percent"></i> APPLY
                          </button>
                        </div>
                      </div>
                      <div class="mb-0 input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fad fa-envelope"></i
                          ></span>
                        </div>
                        <textarea
                          placeholder="Any suggestions? We will pass it on..."
                          aria-label="With textarea"
                          class="form-control"
                        ></textarea>
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
                    <div class="bg-white p-3 clearfix">
                      <p class="font-weight-bold small mb-2">Bill Details</p>
                      <p class="mb-1">
                        Item Total
                        <span class="small text-muted">(3 item)</span>
                        <span class="float-right text-dark">Rp. 113.000</span>
                      </p>
                      <!-- <p class="mb-1">Store Charges <span class="float-right text-dark">$62.8</span></p> -->
                      <p class="mb-3">
                        Delivery Fee
                        <span
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delivery partner fee - $3"
                          class="text-info ml-1"
                          ><i class="fad fa-circle-info"></i></span
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
                <a
                  href="successful.html"
                  class="btn btn-success btn-lg btn-block mt-3 mb-3"
                  >Place Order</a
                >
                <p class="text-success text-center">
                  Your Total Savings on this order Rp. 28.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Delivery Address
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="form-row">
                <div class="col-md-12 form-group">
                  <label class="form-label">Delivery Area</label>

                  <div>
                    Lat:
                    <input type="text" id="lat" style="width: 200px" /> Long:
                    <input type="text" id="lng" style="width: 200px" />

                    <div id="map" style="width: 450px; height: 300px"></div>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="form-label">Alamat Lengkap</label
                  ><input
                    placeholder="Complete Address e.g. house number, street name, landmark"
                    id="location"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="col-md-12 form-group">
                  <label class="form-label"
                    >Instruksi Pengiriman / Gang / Jalan</label
                  ><input
                    placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-0 col-md-12 form-group">
                  <label class="form-label">Nickname</label>
                  <div
                    class="btn-group btn-group-toggle w-100"
                    data-toggle="buttons"
                  >
                    <label class="btn btn-outline-secondary active">
                      <input type="radio" name="options" id="option1" checked />
                      Home
                    </label>
                    <label class="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option2" /> Work
                    </label>
                    <label class="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option3" /> Other
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer p-0 border-0">
            <div class="col-6 m-0 p-0">
              <button
                type="button"
                class="btn border-top btn-lg btn-block"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
            <div class="col-6 m-0 p-0">
              <button type="button" class="btn btn-success btn-lg btn-block">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->


      <!-- Modal -->
      <div id="modal-address">
        <div
          class="
            modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg
          "
        >
          <div class="modal-content animate__animated animate__jello">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <i class="fad fa-egg-fried text-success"></i> Gunakan Voucher
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="closeModal()"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <div class="paragraphs p-3">
                  <div class="justify-content-center">
                  </div>
                </div>
                <!-- <div v-for="voucher in getCartsVouchers" :key="voucher._id">
                  <img :src="`${baseApi}/${voucher.banner}`" :alt="`${voucher.voucherName ? voucher.voucherName : voucher.voucherCode}`" class="img-fluid rounded">
                  <p>
                    {{ voucher.voucherName ? voucher.voucherName : voucher.voucherCode }}
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { LocationPicker } from "./maps/index.js";

// import mapPicker from "./maps/LocationPicker.vue";

export default {
  name: "Checkout",
  components: { LocationPicker }, // if installComponents is false
  data() {
    return {
      location: {
        lat: -6.208224,
        lng: 106.845744,
      },
      options: {
        // is not required
        map: {
          /** other map options **/
        },
        marker: {
          /** marker options **/
        },
        autocomplete: {
          /** autocomplete options **/
        },
      },
    };
  },
  methods: {
    openModalAddress() {
      $("#modal-address").css("display", "block");
    },
    closeModal() {
      $("#modal-address").css("display", "none");
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 480px;
}


#modal-address {
  background-color: #0000008f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
</style>