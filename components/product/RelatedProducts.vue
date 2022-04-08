<template>
  <div class="pick_today">
    <h5 class="mt-3 mb-3">Produk Terkait</h5>
    <div class="row" v-if="products && products.products">
      <div
        class="col-6 col-md-3 mb-3"
        v-for="product in filterProduct"
        :key="product._id"
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
          <div class="list-card-image">
            <NuxtLink :to="product.slug" class="text-dark">
              <div
                class="member-plan position-absolute"
                v-if="product.stock <= 0"
              >
                <span class="badge m-3 badge-danger-out-of-stock">
                  Kehabisan Persediaan
                </span>
              </div>
              <div
                v-if="product.hasPromo && product.hasPromo._id"
                class="member-plan position-absolute"
              >
                <span class="badge badge-danger badge-discount">
                  {{ product.hasPromo.tags }}
                </span>
              </div>
              <div
                class="member-plan position-absolute"
                v-else-if="
                  !product.hasPromo &&
                  product.hasDiscount &&
                  product.hasDiscount.isDiscount
                "
              >
                <span
                  class="badge badge-danger badge-discount"
                  v-if="product.hasDiscount.discountBy === 'percent'"
                  >Diskon {{ product.hasDiscount.discount }}%</span
                >
                <span class="badge badge-danger badge-discount" v-else
                  >Diskon
                  {{
                    ((product.hasDiscount.discount / product.price) * 100)
                      | setSquareDecimal
                  }}%</span
                >
              </div>
              <div class="p-3">
                <img
                  :src="`${baseApi}/${product.image}`"
                  class="img-fluid item-img w-100 mb-3"
                  v-if="product.image"
                />
                <img
                  :src="`${baseURL}/default/product.jpg`"
                  class="img-fluid item-img w-100 mb-3"
                  v-else
                />
                <h6 class="title-product">
                  {{ product.name }}
                </h6>
                <h6 class="price m-0 text-weight">
                  <i class="fas fa-weight"></i> 1 Ekor/ {{ product.weight }}Kg
                </h6>
                <div class="pt-4 text-right">
                  <del
                    class="ml-2 text-danger"
                    v-if="getPriceBadge(product) > 0"
                    >{{ product.price | formatMoney }}</del
                  >
                  <span
                    class="price m-0 text-dark"
                    style="font-size: large; text-align: right"
                  >
                    {{ getPriceLabel(product) | formatMoney }}
                  </span>
                </div>
                <div style="text-align: center; padding-top: 5%">
                  <h6 class="btn btn-danger w-100">
                    <i class="fas fa-cart-plus"></i> Tambahkan
                  </h6>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-else>
      <div class="col-12 col-md-12 mb-3 text-muted related-products-empty">
        Belum ada produk terkait
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

moment.locale("id-ID");

export default {
  name: "Index",
  props: ["products", "currentProduct"],
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      baseURL: process.env.NUXT_ENV_BASE_URL,
    };
  },
  methods: {
    getPriceLabel(productVal) {
      const product = productVal;

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

    getPriceBadge(productVal) {
      const product = productVal;

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
  },
  computed: {
    filterProduct() {
      let products = [];

      if (
        this.products &&
        this.products.products &&
        this.products.products.length > 0 &&
        this.currentProduct
      ) {
        return (products = this.products.products.filter((product) => {
          if (product._id === this.currentProduct._id) {
            return false;
          }
          return product;
        }));
      }

      return products;
    },
  },
};
</script>

<style scoped>
.text-weight{
  color: #ff680d ;
  font-size: 12px;
}
.member-plan {
  padding: 10px;
}
.badge-discount {
  color: #f1e5dd;
  background-color: rgb(191 77 9);
  box-shadow: 0px 0px 2px 0px black;
}
.title-product {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: calc(45% + 10px);
}

.related-products-empty {
  font-size: 24px;
}
.item-img {
  max-height: 150px;
  border-radius: 6px;
}
</style>
