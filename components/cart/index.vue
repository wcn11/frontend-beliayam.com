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
        <div class="row" v-if="getCarts.length > 0">
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
                      Keranjang ({{ getCarts.length }} items)
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
                        v-for="product in getCarts"
                        :key="product._id"
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
                          <div
                            class="ml-3 text-dark text-decoration-none w-100"
                          >
                            <h5 class="mb-1">{{ product.name }}</h5>
                            <p class="text-muted mb-2">
                              {{ product.price }}
                            </p>
                            <div class="d-flex align-items-center">
                              <p class="total_price font-weight-bold m-0">
                                {{ product.price * product.quantity }}
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
                                  @click="setDecrement(product._id)"
                                />
                                <input
                                  type="number"
                                  name="quantity"
                                  value="1"
                                  class="qty form-control"
                                  v-model="product.quantity"
                                />
                                <input
                                  type="button"
                                  value="+"
                                  class="qtyplus btn btn-success btn-sm"
                                  field="quantity"
                                  @click="setIncrement(product._id)"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          class="text-decoration-none btn btn-block p-3"
                          type="button"
                          @click="checkout()"
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
                            <div class="more text-white">
                              <h6 class="m-0">
                                Subtotal Rp.
                                {{
                                  getSelectedVouchers.grandTotalAfterDiscount
                                    ? getSelectedVouchers.grandTotalAfterDiscount
                                    : getCountCart
                                }}
                              </h6>
                              <p class="small m-0">Lanjutkan ke pembayaran</p>
                            </div>
                            <div class="ml-auto">
                              <i class="fad fa-caret-right"></i>
                            </div>
                          </div>
                        </div>
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
                    <h6 class="mb-1 font-weight-bold">Beli Ayam Warehouse</h6>
                    <p class="mb-0 small text-muted">
                      <i class="feather-map-pin"></i> Jl. Jend. Sudirman Kav.
                      52-53 SCBD LOT 28, Jakarta Selatan
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-white p-3 clearfix">
                    <p class="font-weight-bold small mb-2">Voucher</p>
                    <button
                      class="btn btn-light mb-1 w-100"
                      @click="openModalVouchers()"
                    >
                      <i class="fad fa-badge-percent text-danger"></i>
                      <span class="small text-muted">
                        Gunakan / Masukkan Voucher</span
                      >
                    </button>
                    <p
                      class="mb-1"
                      v-for="voucher in getSelectedVouchers.vouchers"
                      :key="voucher._id"
                    >
                      {{
                        voucher.voucherName
                          ? voucher.voucherName
                          : voucher.voucherCode
                      }}
                      <span class="float-right text-dark"
                        >-Rp. {{ voucher.discountValueFee }}</span
                      >
                    </p>
                    <h6 class="mb-0 text-success">
                      Total Diskon<span class="float-right text-success"
                        >- Rp. {{ getSelectedVouchers.totalVoucherFee }}</span
                      >
                    </h6>
                  </div>
                  <div class="bg-white p-3 clearfix">
                    <p class="font-weight-bold small mb-2">Rincian Tagihan</p>
                    <p class="mb-1">
                      Total produk
                      <span class="small text-muted"
                        >({{ this.$store.state.cart.carts.length }} item)</span
                      >
                      <span class="float-right text-dark"
                        >Rp. {{ getCountCart }}</span
                      >
                    </p>
                    <p class="mb-1">
                      Diskon
                      <span class="float-right text-dark"
                        >-Rp. {{ getSelectedVouchers.totalVoucherFee }}</span
                      >
                    </p>
                  </div>
                  <div class="p-3 border-top">
                    <h5 class="mb-0">
                      SubTotal
                      <span class="float-right text-danger"
                        >Rp.
                        {{
                          getSelectedVouchers.grandTotalAfterDiscount
                            ? getSelectedVouchers.grandTotalAfterDiscount
                            : getCountCart
                        }}</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
              <p class="text-success text-center">
                Anda Hemat Rp. {{ getSelectedVouchers.totalVoucherFee }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div id="modal-vouchers">
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
                    <div
                      class="voucher-list row"
                      v-for="(voucher, index) in getCartsVouchers"
                      :key="voucher._id"
                    >
                      <img
                        class="col-md-4 d-flex clearfix img-fluid img-voucher"
                        :src="`${baseApi}/${voucher.banner}`"
                        :alt="`${
                          voucher.voucherName
                            ? voucher.voucherName
                            : voucher.voucherCode
                        }`"
                      />
                      <div class="col-md-8 content-heading pl-2 pr-2">
                        <div>
                          <div>
                            <p class="mb-1 label-voucher">
                              {{
                                voucher.voucherName
                                  ? voucher.voucherName
                                  : voucher.voucherCode
                              }}
                              <button
                                class="
                                  btn btn-outline-danger
                                  font-weight-light
                                  float-right
                                "
                                @click="setVoucher(voucher, index)"
                              >
                                gunakan
                              </button>
                            </p>
                          </div>
                          <p>
                            Donec id elit non mi porta gravida at eget metus.
                            Etiam porta sem malesuada magna mollis euismod.
                            Donec sed odio dui.
                          </p>
                        </div>
                      </div>
                    </div>
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
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      cart: {},
      carts: [],
      vouchers: [],
      selectedVoucher: [],
    };
  },
  async fetch() {
    if (this.$store.state.cart.carts.length <= 0) {
      await this.$store.dispatch("cart/setCarts");
      this.carts = await this.$store.state.cart.carts;
    }
    await this.$store.dispatch("cart/setVouchers");
    this.vouchers = await this.$store.state.cart.vouchers;
  },
  methods: {
    checkout() {

// {
//     "cart": {
//         "cart_id": "61fc91c306d0d4a82ba7688e",
//         "products": [
//             "61fc0ff3e0755e0ebbd3d2ef"
//         ]
//     },
//     "user_id": "61f82e033a14993315d3c031",
//     "vouchers": [
//         ""
//     ],
//     "type": "checkout",
//     "platform": "all",
//     "isActive": "true"
// }

      this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/checkout/cart`,
          {
            user_id: this.$auth.user._id,
            product_id: productId,
            type: "plus",
            quantity: this.getCarts[product[0].indexFilter].quantity + 1,
          }
        )
        .then((results) => {
          if (results.data.error) {
            this.$toast.warning(results.data.message);
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
    },
    setVoucher(voucher, index) {
      // voucher.voucherIndex = index;

      this.selectedVoucher.push(voucher);

      this.$store.dispatch("cart/setVoucher", voucher);
    },
    setIncrement(productId) {
      const product = this.getCarts.filter((product, index) => {
        if (product._id === productId) {
          product.indexFilter = index;
          return product;
        }
      });

      if (product.length > 0) {
        if (product[0].onLive.stock > parseInt(product[0].quantity)) {
          this.$store.dispatch("cart/setIncrement", product[0]);

          this.$axios
            .$put(
              `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/quantity`,
              {
                user_id: this.$auth.user._id,
                product_id: productId,
                type: "plus",
                quantity: this.getCarts[product[0].indexFilter].quantity + 1,
              }
            )
            .then((results) => {
              if (results.data.error) {
                this.$toast.warning(results.data.message);
              }
            })
            .catch((err) => {
              if (err && err.response && err.response.data.error) {
                this.$toast.warning(err.response.data.message);
              } else {
                this.$toast.warning("Server Sibuk");
              }
            });
        }
      }
    },
    setDecrement(productId) {
      const product = this.getCarts.filter((product, index) => {
        if (product._id === productId) {
          product.indexFilter = index;
          return product;
        }
      });

      if (product.length > 0) {
        if (parseInt(product[0].quantity) > 1) {
          this.$store.dispatch("cart/setDecrement", product[0]);
          this.$axios
            .$put(
              `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/quantity`,
              {
                user_id: this.$auth.user._id,
                product_id: productId,
                type: "minus",
                quantity: 1,
              }
            )
            .then((results) => {
              if (results.data.error) {
                this.$toast.warning(results.data.message);
              }
            })
            .catch((err) => {
              if (err && err.response && err.response.data.error) {
                this.$toast.warning(err.response.data.message);
              } else {
                this.$toast.warning("Server Sibuk");
              }
            });
        }
      }
    },
    openModalVouchers() {
      $("#modal-vouchers").css("display", "block");
    },
    closeModal() {
      $("#modal-vouchers").css("display", "none");
    },
  },

  computed: {
    ...mapGetters("cart", [
      "getCarts",
      "getCountCart",
      "getCartsVouchers",
      "getSelectedVouchers",
    ]),
  },
};
</script>

<style scoped>
#modal-vouchers {
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
.voucher-list {
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
}
.label-voucher {
  font-size: 5vh;
  font-weight: 500;
}
.img-voucher {
  border-radius: 15px;
}

@media only screen and (max-device-width: 767px) {
  .content-heading {
    margin-top: 10px;
  }
}
</style>