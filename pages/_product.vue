<template>
  <div id="page-product" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-success">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Produk</li>
        </ol>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <VueSlickCarousel v-bind="settings" class="recommend-slider mb-3">
              <div class="beliayam-slider-item p-2">
                <img
                    :src="`${this.$config.baseURL}/img/listing/product-demo.png`"
                  class="img-fluid shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
              <div class="beliayam-slider-item p-2">
                <img
                  src="img/recommend/r2.jpg"
                  class="img-fluid shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
              <div class="beliayam-slider-item p-2">
                <img
                  src="img/recommend/r3.jpg"
                  class="img-fluid shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
            </VueSlickCarousel>

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
                  Produk MRP :
                  <b class="h6 text-dark m-0">{{ product.price }}</b>
                  <span class="badge badge-danger ml-2">50% OFF</span>
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
                    <p class="text-muted m-0">{{ product.stock }} Kuantitas</p>
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
                          value="1"
                          class="qty form-control"
                          @keydown="filterQuantity($event)"
                          @keyup="setQuantity($event)"
                          @change="checkQuantity($event)"
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
                    v-if="parseInt(cart.quantity) === 0 || cart.quantity === ''"
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

        <Product :products="relatedProducts" />
      </div>
    </section>

    <!-- Modal -->
    <div id="modal-cart-success">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content animate__animated animate__jello">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <i class="fad fa-egg-fried text-success"></i> Berhasil Ditambahkan
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
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "Products",
  components: { VueSlickCarousel },
  // layout: "blog"
  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/${this.$route.params.product}`
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
    async addProductToCart() {
      const response = await this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart`, {
          product_id: this.product._id,
          user_id: this.$auth.user._id,
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
    filterQuantity(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return evt.preventDefault();
      }
      return true;
    },
    setQuantity(evt) {
      this.cart.quantity = evt.target.value;
    },
    refresh() {
      this.$nuxt.refresh();
    },
    async setRelatedProductsFilter() {
      return (this.relatedProducts = await this.products.filter(
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
