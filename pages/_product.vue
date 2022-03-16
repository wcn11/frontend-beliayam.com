<template>
  <div id="page-product" class="animate__animated">
    <div v-if="product && Object.keys(product).length > 0">
      <nav aria-label="breadcrumb" class="breadcrumb mb-0">
        <div class="container">
          <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-danger">Home</NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Produk</li>
          </ul>
        </div>
      </nav>

      <section class="py-4 beliayam-main-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <div
                  class="member-plan position-absolute"
                  v-if="product.stock <= 0"
                >
                  <span class="badge m-3 badge-danger-out-of-stock">
                    Kehabisan Persediaan
                  </span>
                </div>
                <div v-if="product.hasPromo">
                  <span
                    class="badge badge-success badge-discount"
                    v-if="product.hasPromo.promoBy === 'percent'"
                    >
                      #{{product.hasPromo.tags}}
                    </span
                  >
                </div>
                <div v-else-if="product.hasDiscount && product.hasDiscount.isDiscount">
                  <span
                    class="badge badge-danger badge-discount"
                    v-if="product.hasDiscount.discountBy === 'price'"
                    >Diskon
                    {{
                      (product.hasDiscount.discount / product.price) * 100
                    }}%</span
                  >
                  <span class="badge badge-danger badge-discount" v-else
                    >Diskon
                    {{ product.hasDiscount.discount | formatMoney }}</span
                  >
                </div>
                <img
                  :src="`${this.$config.baseApi}/${product.image}`"
                  class="img-fluid shadow-sm rounded w-100"
                  alt="Responsive image"
                />
              </div>

              <div class="pd-f d-flex align-items-center mb-3">
                <button
                  class="
                    btn btn-warning
                    p-3
                    rounded
                    btn-block
                    d-flex
                    align-items-center
                    justify-content-center
                    mr-3
                    btn-lg
                  "
                  @click="addProductToCart()"
                >
                  <i class="fad fa-plus m-0 mr-2"></i> Keranjang
                </button>
                <button
                  class="
                    btn btn-success
                    p-3
                    rounded
                    btn-block
                    d-flex
                    align-items-center
                    justify-content-center
                    btn-lg
                    m-0
                  "
                >
                  <i class="fad fa-shopping-cart m-0 mr-2"></i> Beli
                </button>
              </div>
              <div class="text-danger font-italic" v-if="product.hasPromo">
                *Pembelian produk saat promo, me-reset produk yang sama pada
                keranjang
              </div>
              <div
                class="text-danger font-italic"
                v-else-if="product.hasDiscount.isDiscount"
              >
                *Pembelian produk saat diskon, me-reset produk yang sama pada
                keranjang
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-4 bg-white rounded shadow-sm">
                <div class="pt-0">
                  <h2 class="font-weight-bold">{{ product.name }}</h2>
                  <p
                    class="
                      font-weight-light
                      text-dark
                      m-0
                      d-flex
                      align-items-center
                    "
                  >
                    <b class="h6 text-dark m-0">{{
                      getPriceLabel() | formatMoney
                    }}</b>

                    <del class="ml-2 text-danger" v-if="getPriceBadge() > 0">{{
                      product.price | formatMoney
                    }}</del>
                    <span
                      class="badge badge-danger ml-2"
                      v-if="getPriceBadge() > 0"
                      >{{ getPriceBadge() }}% Hemat</span
                    >
                  </p>
                </div>
                <div class="pt-2">
                  <div class="row">
                    <div class="col-6">
                      <p class="font-weight-bold m-0">Pengiriman</p>
                      <p class="text-muted m-0">Gratis Ongkos Kirim</p>
                    </div>
                    <div class="col-6 text-right">
                      <p class="font-weight-bold m-0">Ketersediaan Produk:</p>
                      <p class="text-muted m-0">
                        {{ product.stock }} Kuantitas
                      </p>
                    </div>
                  </div>
                </div>
                <div class="details">
                  <div class="pt-3 bg-white">
                    <div class="d-flex align-items-center">
                      <div
                        class="btn-group beliayam-radio btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label class="btn btn-secondary">
                          <input type="radio" name="options" id="option3" />
                          {{ product.weight }} Kg
                        </label>
                      </div>
                      <div class="ml-auto">
                        <div id="myform" class="cart-items-number d-flex">
                          <input
                            type="button"
                            value="-"
                            class="qtyminus btn btn-success btn-sm"
                            field="quantity"
                            @click="setDecrementQuantity"
                            :disabled="
                              cart.quantity === 0 ||
                              cart.quantity === 1 ||
                              cart.quantity === '' ||
                              product.stock === 0
                            "
                          />
                          <input
                            type="text"
                            name="quantity"
                            class="qty form-control"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            @keyup="setQuantity($event)"
                            @change="checkQuantity($event)"
                            v-model="cart.quantity"
                          />
                          <input
                            type="button"
                            value="+"
                            class="qtyplus btn btn-success btn-sm"
                            field="quantity"
                            @click="setIncrementQuantity"
                            :disabled="
                              cart.quantity >= product.stock ||
                              cart.quantity === ''
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pt-3">
                    <div
                      class="text-danger text-center"
                      v-if="product.stock < cart.quantity"
                    >
                      <p>
                        Maks. persediaan produk ini hanya ada
                        {{ product.stock }} item.
                      </p>
                    </div>
                    <div
                      class="text-danger text-center"
                      v-if="
                        parseInt(cart.quantity) === 0 || cart.quantity === ''
                      "
                    >
                      <p>Min. Pembelian 1 Item</p>
                    </div>
                    <div
                      class="
                        input-group
                        mb-3
                        border
                        rounded
                        shadow-sm
                        overflow-hidden
                        bg-white
                      "
                    >
                      <div class="input-group-prepend">
                        <button
                          class="
                            border-0
                            btn btn-outline-secondary
                            text-success
                            bg-white
                          "
                        >
                          <i class="fad fa-sticky-note"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        class="
                          shadow-none
                          border-0
                          form-control form-control-lg
                          pl-0
                        "
                        placeholder="Tambah Catatan disini..."
                        aria-label=""
                        aria-describedby="basic-addon1"
                        v-model="cart.note"
                      />
                    </div>
                    <p class="font-weight-bold mb-2">Deskripsi Produk</p>
                    <p class="text-muted small mb-0">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProductRelatedProducts :products="relatedProducts" />
        </div>
      </section>

      <!-- Modal -->
      <div id="modal-cart-success">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content animate__animated animate__jello">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <i class="fad fa-egg-fried text-success"></i> Berhasil
                Ditambahkan
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
          </div>
        </div>
      </div>
    </div>

    <div class="not-found-anything" v-else>
      <div class="text-center">
        <h4>Tidak Ditemukan Apapun</h4>
      </div>
    </div>

    <div
      class="modal fade"
      id="outOfStockModal"
      tabindex="-1"
      aria-labelledby="outOfStockModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-danger justify-content-center">
            <h5 class="modal-title" id="outOfStockModalLabel">
              Kehabisan Persediaan
            </h5>
          </div>
          <div class="modal-body">
            <h6>Sayangnya persediaan produk sedang habis</h6>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              mengerti
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import moment from "moment";

moment.locale("id-ID");
export default {
  name: "Products",
  components: { VueSlickCarousel },
  // layout: "blog"
  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/slug/${this.$route.params.product}`
      )
      .then((res) => {
        this.product = res.data.data;
        this.getRelatedProducts();
      });
  },
  data() {
    return {
      relatedProducts: [],
      cart: {
        product_id: "",
        quantity: 1,
        note: "",
      },
      product: {},
      products: [],
      categorySetting: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "name",
        status: "active",
      },
      settings: {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    };
  },

  methods: {
    getPriceLabel() {
      const product = this.product;

      let price = product.price;

      let currentTime = moment().format();

      if (
        product.hasPromo &&
        product.hasPromo.isActive &&
        product.hasPromo.promoStart < currentTime &&
        product.hasPromo.promoEnd > currentTime
      ) {
        if (product.hasPromo.promoBy === "percent") {
          let discountPrice =
            (product.hasPromo.promoValue / 100) * product.price;
          price = product.price - discountPrice;
        } else if (product.promoBy === "price") {
          price = product.price - product.hasPromo.promoValue;
        } else {
          price = product.price;
        }
      } else if (
        product.hasDiscount &&
        product.hasDiscount.isDiscount &&
        product.hasDiscount.discountStart < currentTime &&
        product.hasDiscount.discountEnd > currentTime
      ) {
        if (product.hasDiscount.discountBy === "percent") {
          let discountPrice =
            (product.hasDiscount.discount / 100) * product.price;
          price = product.price - discountPrice;
        } else if (product.hasDiscount.discountBy === "price") {
          price = product.price - product.hasDiscount.discount;
        } else {
          price = product.price;
        }
      } else {
        return price;
      }

      return price;
    },
    getPriceBadge() {
      const product = this.product;

      let price = 0;

      let currentTime = moment().format();

      if (
        product.hasPromo &&
        product.hasPromo.promoStart < currentTime &&
        product.hasPromo.promoEnd > currentTime
      ) {
        if (product.hasPromo.promoBy === "percent") {
          price = product.hasPromo.promoValue;
        } else if (product.hasPromo.promoBy === "price") {
          price = (product.hasPromo.discount / product.price) * 100;
        } else {
          price = 0;
        }
      } else if (
        product.hasDiscount &&
        product.hasDiscount.isDiscount &&
        product.hasDiscount.discountStart < currentTime &&
        product.hasDiscount.discountEnd > currentTime
      ) {
        if (product.hasDiscount.discountBy === "percent") {
          price = product.hasDiscount.discount;
        } else if (product.hasDiscount.discountBy === "price") {
          price = (product.hasDiscount.discount / product.price) * 100;
        } else {
          price = product.price;
        }
      } else {
        return price;
      }

      return price;
    },
    async addProductToCart() {
      if (this.product.stock <= 0) {
        $("#outOfStockModal").modal("show");

        return;
      }

      if (!this.$store.getters["auth/isAuthenticated"]) {
        this.$toast.success("Masuk Untuk Melanjutkan Belanja");
        this.$router.push("/login");
        return;
      }
      await this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart`, {
          product_id: this.product._id,
          user_id: this.$store.state.auth.user._id,
          quantity: this.cart.quantity,
          note: this.cart.note,
        })
        .then((results) => {
          if (results.data.error) {
            return;
          }
          this.resetCarts();
          $("#modal-cart-success").css("display", "block");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async resetCarts() {
      await this.$store.dispatch("cart/setCartsNav");
    },
    setIncrementQuantity(e) {
      if (this.product.stock > parseInt(this.cart.quantity)) {
        return this.cart.quantity++;
      }

      evt.preventDefault();
    },
    setDecrementQuantity(e) {
      if (this.cart.quantity > 1) {
        return this.cart.quantity--;
      }

      evt.preventDefault();
    },
    checkQuantity(e) {
      if (this.cart.quantity === "" || parseInt(this.cart.quantity) === 0) {
        this.cart.quantity = "1";
        e.target.value = "1";
      }

      if (parseInt(this.cart.quantity) > this.product.stock) {
        this.cart.quantity = this.product.stock;
        e.target.value = `${this.product.stock}`;
      }
    },
    setQuantity(evt) {
      this.cart.quantity = evt.target.value;
    },
    refresh() {
      this.$nuxt.refresh();
    },
    async setRelatedProductsFilter() {
      return (this.relatedProducts = await this.products.products.filter(
        (product) => product.slug !== this.$route.params.product
      ));
    },
    async getRelatedProducts() {
      await this.$axios
        .get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/category/_s?key=${this.product.category[0].slug}&page=${this.categorySetting.page}&show=${this.categorySetting.show}&sortBy=${this.categorySetting.sortBy}&orderBy=$${this.categorySetting.orderBy}&status=${this.categorySetting.status}`
        )
        .then((res) => {
          this.products = res.data.data;
          this.setRelatedProductsFilter();
        });
    },
    closeModal() {
      $("#modal-cart-success").css("display", "none");
    },
    toFirstLetterUpperCase(word) {
      return word[0].toUpperCase() + word.substring(1);
    },
    setScript() {
      // Quantity JS
      $(document).ready(function () {
        // This button will increment the value
        $(".qtyplus").click(function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var fieldName = $(this).attr("field");
          // Get its current value
          var currentVal = parseInt($("input[name=" + fieldName + "]").val());
          // If is not undefined
          if (!isNaN(currentVal)) {
            // Increment
            $("input[name=" + fieldName + "]").val(currentVal + 1);
          } else {
            // Otherwise put a 0 there
            $("input[name=" + fieldName + "]").val(1);
          }
        });
        // This button will decrement the value till 0
        $(".qtyminus").click(function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          let fieldName = $(this).attr("field");
          // Get its current value
          var currentVal = parseInt($("input[name=" + fieldName + "]").val());
          // If it isn't undefined or its greater than 0
          if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $("input[name=" + fieldName + "]").val(currentVal - 1);
          } else {
            // Otherwise put a 0 there
            $("input[name=" + fieldName + "]").val(1);
          }
        });
      });
    },

    checkInput(event) {
      return event.charCode >= 48 && event.charCode <= 57;
    },
  },
  loading: {
    color: "red",
    height: "5px",
  },
  head() {
    return {
      title: "Produk Ayam Broiler",
      htmlAttrs: {
        lang: "en",
      },
    };
  },

  filters: {
    formatDate(date) {
      return moment(date).format("DD-MM-yyyy, HH:mm");
    },
    formatMoney(val) {
      let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(val);
    },
  },

  mounted() {
    document
      .getElementById("page-product")
      .classList.add("animate__fadeInRight");
    this.setScript();
  },
  beforeDestroy() {
    document
      .getElementById("page-product")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.badge-discount {
  position: absolute;
  margin: 2%;
}
.badge-danger-out-of-stock {
  color: #ffe5e5;
  background-color: rgb(205 77 0);
}
.not-found-anything {
  margin: 10%;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}
#modal-cart-success {
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
