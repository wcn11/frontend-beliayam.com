<template>
  <div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Keranjang Anda
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row" v-if="carts.products && carts.products.length > 0">
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
                      Keranjang ({{ carts.products.length }} items)
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
                        v-for="product in carts.products"
                        :key="product._id"
                      >
                        <div class="d-flex align-items-center p-3">
                          <NuxtLink :to="`/${product.slug}`"
                            ><img
                              :src="`${baseApi}/${product.image}`"
                              class="img-fluid"
                          /></NuxtLink>
                          <div
                            class="ml-3 text-dark text-decoration-none w-100"
                          >
                            <h5 class="mb-1">{{ product.name }}</h5>
                            <p class="text-muted mb-2">
                              {{ product.price | formatMoney }} x
                              {{ product.quantity }}
                            </p>
                            <div
                              class="
                                d-flex
                                align-items-center
                                price-counter-container
                              "
                            >
                              <h6 class="total_price font-weight-bold m-0">
                                {{
                                  (product.price * product.quantity)
                                    | formatMoney
                                }}
                              </h6>
                              <div
                                id="myform"
                                class="cart-items-number d-flex ml-auto"
                              >
                                <div
                                  class="btn"
                                  role="button"
                                  @click="removeProduct(product._id)"
                                >
                                  <i class="far fa-trash-alt"></i>
                                </div>
                                <button
                                  type="button"
                                  class="qtyminus btn btn-success btn-sm"
                                  @click="setDecrement(product._id)"
                                  :disabled="
                                    product.quantity === 0 ||
                                    product.quantity === 1 ||
                                    product.quantity === '' ||
                                    product.productOnLive.stock === 0
                                  "
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  class="qty form-control"
                                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                  @keyup="setQuantity($event, product._id)"
                                  @change="checkQuantity($event, product._id)"
                                  v-model="product.quantity"
                                />
                                <button
                                  type="button"
                                  class="qtyplus btn btn-success btn-sm"
                                  :disabled="
                                    product.quantity === 0 ||
                                    product.quantity === '' ||
                                    product.productOnLive.stock <=
                                      product.quantity
                                  "
                                  @click="setIncrement($event, product._id)"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div v-if="!product.note">
                              <span
                                role="button"
                                :class="`w-50 text-danger note note-${product._id}`"
                                @click="setNote(product._id)"
                              >
                                tulis catatan
                              </span>

                              <div
                                :class="`input-wrapper mt-2 input-none input-note input-note-${product._id}`"
                                @focusout="closeNote()"
                              >
                                <input
                                  class="input"
                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                  type="text"
                                  v-model="product.note"
                                  @change="updateNote($event, product._id)"
                                  @keyup.enter="updateNote($event, product._id)"
                                />
                                <span class="placeholder"
                                  >Tulis catatan untuk item ini</span
                                >
                              </div>
                            </div>
                            <div class="d-flex" v-else>
                              <span :class="`notes notes-${product._id}`">{{
                                product.note
                              }}</span>

                              <div
                                :class="`input-wrapper mt-2 input-none edit-input-note edit-input-note-${product._id}`"
                                @focusout="closeNote()"
                              >
                                <input
                                  class="input"
                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                  type="text"
                                  v-model="product.note"
                                  @change="updateNote($event, product._id)"
                                  @keyup.enter="updateNote($event, product._id)"
                                />
                                <span class="placeholder"
                                  >Tulis catatan untuk item ini</span
                                >
                              </div>

                              <span
                                role="button"
                                :class="`w-25 text-danger edit-note edit-note-${product._id}`"
                                @click="editNote(product._id)"
                              >
                                Ubah
                              </span>
                            </div>

                            <div
                              class="text-danger text-right"
                              v-if="
                                product.productOnLive.stock < product.quantity
                              "
                            >
                              <p>
                                Maks. beli
                                {{ product.productOnLive.stock }} kuantitas
                              </p>
                            </div>
                            <div
                              class="text-danger text-right"
                              v-if="
                                parseInt(product.quantity) === 0 ||
                                product.quantity === ''
                              "
                            >
                              <p>Min. Pembelian 1 Item</p>
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
                                Subtotal
                                {{ countSubtotalProduct | formatMoney }}
                                <!-- {{
                                  getSelectedVouchers.grandTotalAfterDiscount
                                    ? getSelectedVouchers.grandTotalAfterDiscount
                                    : getCountCart | formatMoney
                                }} -->
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
                        >({{ carts.products.length }} item)</span
                      >
                      <span class="float-right text-dark">
                        {{ countSubtotalProduct | formatMoney }}</span
                      >
                    </p>
                    <p class="mb-1">
                      Diskon
                      <span class="float-right text-dark"
                        >-
                        {{
                          getSelectedVouchers.totalVoucherFee | formatMoney
                        }}</span
                      >
                    </p>
                  </div>
                  <div class="p-3 border-top">
                    <h5 class="mb-0">
                      SubTotal
                      <span class="float-right text-danger">
                        {{
                          (getSelectedVouchers.grandTotalAfterDiscount
                            ? getSelectedVouchers.grandTotalAfterDiscount
                            : getCountCart) | formatMoney
                        }}</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
              <p class="text-success text-center">
                Anda Hemat
                {{ getSelectedVouchers.totalVoucherFee | formatMoney }}
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
import moment from "moment";

moment.locale("id-ID");
export default {
  name: "Cart",
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      vouchers: [],
      carts: [],
      selectedVoucher: [],
    };
  },
  async fetch() {
    await this.fetchCart();
  },
  methods: {
    async fetchCart() {
      if (this.$store.state.cart.carts.length <= 0) {
        await this.$axios
          .$get(
            `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart?page=1&show=6&sortBy=ASC&orderBy=name`
          )
          .then((results) => {
            if (results.data) {
              this.carts = results.data;
            }
          });
        await this.$store.dispatch("cart/setVouchers");
        this.vouchers = await this.$store.state.cart.vouchers;
      }
    },
    closeNote() {
      $(`.input-note`).css("display", "none");
      $(`.edit-input-note`).css("display", "none");
      $(`.edit-note`).css("display", "block");
      $(`.notes`).css("display", "block");
      $(`.note`).css("display", "block");
    },
    editNote(id) {
      $(`.edit-note-${id}`).css("display", "none");
      $(`.notes-${id}`).css("display", "none");
      $(`.edit-input-note-${id} input`).focus();
      $(`.edit-input-note-${id}`).css("display", "block");
    },
    setNote(id) {
      $(`.input-note-${id}`).css("display", "block");
      $(`.input-note-${id} input`).focus();
      $(`.note-${id}`).css("display", "none");
    },
    async removeProduct(id) {
      this.$axios
        .$delete(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/${this.$store.state.auth.user._id}/product/${id}`
        )
        .then(async (results) => {
          if (results.data.error) {
            this.$toast.warning(results.data.message);
            return;
          }
          this.$toast.success(results.message);
          await this.fetchCart();
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
    },
    async updateNote(event, id) {
      const note = event.target.value;
      this.$axios
        .$put(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/note`, {
          user_id: this.$store.state.auth.user._id,
          product_id: id,
          note,
        })
        .then(async (results) => {
          if (results.data.error) {
            this.$toast.warning(results.data.message);
          }
          this.$toast.success(results.message);
          this.closeNote();
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
    },
    setQuantity(evt, id) {
      this.carts.products.filter((product) => {
        if (product._id === id) {
          if (product.quantity < product.productOnLive.stock) {
            product.quantity = evt.target.value;
          }
        }
      });
    },
    checkQuantity(e, id) {
      this.carts.products.filter((product) => {
        if (product._id === id) {
          if (product.quantity === "" || parseInt(product.quantity) === 0) {
            product.quantity = 1;
            e.preventDefault();
          }

          if (product.quantity > product.productOnLive.stock) {
            product.quantity = product.productOnLive.stock;
            e.preventDefault();
          }
        }
      });
    },
    checkout() {
      const products = this.carts.map((product, index) => {
        return product._id;
      });

      this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/checkout/cart`, {
          cart: {
            cart_id: this.$store.state.cart.cart._id,
            products: products,
          },
          user_id: this.$store.state.auth.user._id,
          vouchers: [],
          type: "checkout",
          platform: "all",
          isActive: "true",
        })
        .then((results) => {
          if (results.data.error) {
            this.$toast.warning(results.data.message);
          }
          console.log(results);
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
      this.selectedVoucher.push(voucher);

      this.$store.dispatch("cart/setVoucher", voucher);
    },
    setIncrement(event, productId) {
      this.carts.products.filter((product) => {
        if (product._id == productId) {
          if (product.quantity < product.productOnLive.stock) {
            this.$axios
              .$put(
                `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/quantity`,
                {
                  user_id: this.$store.state.auth.user._id,
                  product_id: productId,
                  type: "plus",
                  quantity: 1,
                }
              )
              .then((results) => {
                if (results.data.error) {
                  this.$toast.warning(results.data.message);
                }
                product.quantity++;
              })
              .catch((err) => {
                if (err && err.response && err.response.data.error) {
                  this.$toast.warning(err.response.data.message);
                } else {
                  this.$toast.warning("Server Sibuk");
                }
              });
          }

          event.preventDefault();
        }
      });
    },
    setDecrement(productId) {
      this.carts.products.filter((product) => {
        if (product._id == productId) {
          if (product.quantity <= 1) {
            return;
          }

          this.$axios
            .$put(
              `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/quantity`,
              {
                user_id: this.$store.state.auth.user._id,
                product_id: productId,
                type: "minus",
                quantity: 1,
              }
            )
            .then((results) => {
              if (results.data.error) {
                this.$toast.warning(results.data.message);
              }
              product.quantity--;
            })
            .catch((err) => {
              if (err && err.response && err.response.data.error) {
                this.$toast.warning(err.response.data.message);
              } else {
                this.$toast.warning("Server Sibuk");
              }
            });
          // }

          event.preventDefault();
        }
      });
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
      "getCountCart",
      "getCartsVouchers",
      "getSelectedVouchers",
    ]),
    countSubtotalProduct() {
      if (this.carts && this.carts.products) {
        const cart = this.carts;
        const products = cart.products;

        let price = 0;

        const subTotal = products.map((product) => {
          let currentTime = moment().format();

          if (
            product.productOnLive.hasPromo &&
            product.productOnLive.hasPromo.isActive &&
            product.productOnLive.hasPromo.promoStart < currentTime &&
            product.productOnLive.hasPromo.promoEnd > currentTime
          ) {
            if (product.productOnLive.hasPromo.promoBy === "percent") {
              let discountPrice =
                (product.productOnLive.hasPromo.promoValue / 100) *
                product.productOnLive.price;
              price +=
                (product.productOnLive.price - discountPrice) *
                product.quantity;
            } else if (product.productOnLive.hasPromo.promoBy === "price") {
              price +=
                (product.productOnLive.price -
                  product.productOnLive.hasPromo.promoValue) *
                product.quantity;
            } else {
              price += product.productOnLive.price * product.quantity;
            }
          } else if (
            product.productOnLive.hasDiscount &&
            product.productOnLive.hasDiscount.isDiscount &&
            product.productOnLive.hasDiscount.discountStart < currentTime &&
            product.productOnLive.hasDiscount.discountEnd > currentTime
          ) {
            if (product.productOnLive.hasDiscount.discountBy === "percent") {
              let discountPrice =
                (product.productOnLive.hasDiscount.discount / 100) *
                product.productOnLive.price;
              price +=
                (product.productOnLive.price - discountPrice) *
                product.quantity;
            } else if (
              product.productOnLive.hasDiscount.discountBy === "price"
            ) {
              price +=
                (product.productOnLive.price -
                  product.productOnLive.hasDiscount.discount) *
                product.quantity;
            } else {
              price += product.productOnLive.price * product.quantity;
            }
          } else {
            price += product.productOnLive.price * product.quantity;
          }
          return price;
        });
        return subTotal[0];
      }
    },
  },
};
</script>

<style scoped>
.notes {
  max-width: calc(65% - 4ch);
  padding-right: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.input-none {
  display: none;
}
.input-wrapper {
  max-width: 360px;
  width: 100%;
  position: relative;
}
.input {
  height: 30px;
  border-radius: 4px;
  border: 1px solid #f52c5c;
  width: 100%;
  outline: none;
  box-sizing: border-box;
}
.placeholder {
  pointer-events: none;
  position: absolute;
  font-weight: 400;
  top: 18px;
  left: 8px;
  padding: 0 8px;
  background-color: #b4390c;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: grey;
}

.input:not(:placeholder-shown).input:not(:focus) + .placeholder {
  transform: scale(0.75) translateY(-36px) translateX(-15%);
  color: white;
  transition: 0.2s ease;
}

.input:focus {
  border-color: #b4390c;
}

.input:focus + .placeholder {
  transform: scale(0.75) translateY(-36px) translateX(-15%);
  color: white;
  transition: 0.2s ease;
}

.input:invalid:not(:placeholder-shown) {
  transition: 0.2s ease;
  border-color: #f52c5c;
}

.input:invalid:not(:placeholder-shown) + .placeholder {
  transition: 0.2s ease;
  color: white;
}
.input:invalid:not(:placeholder-shown).input:not(:focus) + .placeholder {
  transform: scale(0.75) translateY(-36px) translateX(-15%);
  color: white;
  transition: 0.2s ease;
}

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

@media only screen and (max-device-width: 480px) {
  .content-heading {
    margin-top: 10px;
  }
  .total_price {
    font-size: calc(45% + 8px);
  }
}

@media only screen and (max-device-width: 380px) {
  .total_price {
    font-size: calc(45% + 7px);
  }
}
</style>