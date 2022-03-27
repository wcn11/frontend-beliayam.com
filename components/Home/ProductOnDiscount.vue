<template>
  <section
    class="py-4 beliayam-main-body"
    v-if="products && products.length > 0"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="beliayam-vegan">
            <div class="fresh-vegan pb-2">
              <div class="d-flex align-items-center mt-4 mb-2">
                <h5 class="m-0">Lagi Diskon Nih!</h5>
                <NuxtLink
                  to="/produk/diskon"
                  class="ml-auto text-white text-see-more"
                  >Produk Diskon Lainnya
                  <i class="text-white fad fa-chevron-circle-right"></i
                ></NuxtLink>
              </div>

              <VueSlickCarousel
                v-bind="settings"
                :arrows="true"
                class="trending-slider"
                v-if="products.length > 0"
              >
                <div
                  class="beliayam-slider-item"
                  v-for="product in products"
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
                      ml-2
                      mr-2
                    "
                  >
                    <div class="list-card-beliayam-2 p-3">
                      <div class="member-plan position-absolute">
                        <span
                          class="badge badge-danger badge-discount"
                          v-if="product.hasDiscount.discountBy === 'price'"
                          >Diskon
                          {{
                            ((product.hasDiscount.discount / product.price) *
                              100)
                              | setSquareDecimal
                          }}%</span
                        >
                        <span class="badge badge-danger badge-discount" v-else
                          >Diskon {{ product.hasDiscount.discount }}%</span
                        >
                      </div>
                      <NuxtLink
                        :to="product.slug"
                        class="text-decoration-none text-dark"
                      >
                        <img :src="`${baseApi}/${product.image}`" class="img" />
                        <h5 class="text-dark label-product">
                          {{ product.name }}
                        </h5>
                        <h6 class="mb-1 font-weight-bold">
                          <span
                            v-if="product.hasDiscount.discountBy === 'price'"
                          >
                            Rp
                            {{
                              (product.price - product.hasDiscount.discount)
                                | formatMoney
                            }}
                          </span>
                          <span
                            v-if="product.hasDiscount.discountBy === 'percent'"
                          >
                            Rp
                            {{
                              (product.price -
                                (product.hasDiscount.discount / 100) *
                                  product.price)
                                | formatMoney
                            }}
                          </span>
                          <del class="text-danger"
                            >Rp {{ product.price | formatMoney }}</del
                          >
                        </h6>
                        <p class="text-gray mb-0 small">Fresh Premium item.</p>
                        <p class="small text-muted m-0 text-dark">
                          <i class="fas fa-weight"></i>
                          {{ product.weight || 1 }} Kilogram.
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "HomeProductOnDiscount",
  components: { VueSlickCarousel },

  // layout: "blog"
  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/discounts?page=${this.fetchProductSetting.page}&show=${this.fetchProductSetting.show}&sortBy=${this.fetchProductSetting.sortBy}&orderBy=${this.fetchProductSetting.orderBy}`
      )
      .then((res) => {
        this.products = res.data.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      products: [],
      fetchProductSetting: {
        page: 1,
        show: 8,
        sortBy: "ASC",
        orderBy: "name",
      },
      settings: {
        centerPadding: "30px",
        slidesToShow: 4,
        arrows: true,
        autoplay: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 545,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "100px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "20px",
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  filters: {
    formatDate(date) {
      return moment(date).format("DD-MM-yyyy, HH:mm");
    },
    formatMoney(val) {
      return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    },
    setSquareDecimal(val) {
      if (val) {
        return val.toFixed(0);
      }
    },
  },
};
</script>

<style scoped>
.label-product {
  font-size: 19px;
}

.text-see-more {
  background-color: #cf430f;
  color: white;
  font-size: 14px;
  padding: 7px;
  border-radius: 9px;
}
.member-plan {
  padding: 0px;
}
.badge-discount {
  position: absolute;
  margin: -10px;
}
.badge-danger {
  color: #f1e5dd;
  background-color: rgb(191 77 9);
  box-shadow: 0px 0px 2px 0px black;
}

@media (max-width: 480px) {
  .text-see-more {
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .text-see-more {
    font-size: 10px;
  }
}
</style>