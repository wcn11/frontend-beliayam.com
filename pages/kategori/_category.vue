<template>
  <div id="page-category-_category" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <NuxtLink to="/kategori" class="text-danger">Kategori</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ toFirstLetterUpperCase(this.$route.params.category) }}
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
                <h4>
                  {{ toFirstLetterUpperCase(this.$route.params.category) }}
                </h4>
              </div>

              <div class="d-flex align-items-center mb-3 category-description" v-if="categories.category" v-html="JSON.parse(JSON.stringify(categories.category.description))">
                
              </div>
              <div
                class="row"
                v-if="categories.products && categories.products.length > 0"
              >
                <div
                  class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3"
                  v-for="ctg in categories.products"
                  :key="ctg._id"
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
                      <NuxtLink :to="`/${ctg.slug}`" class="text-dark">
                        <div
                          v-if="ctg.hasPromo"
                          class="member-plan position-absolute"
                        >
                          <span class="badge badge-danger badge-discount">
                            {{ ctg.hasPromo.tags }}
                          </span>
                        </div>
                        <div
                          class="member-plan position-absolute"
                          v-else-if="
                            !ctg.hasPromo &&
                            ctg.hasDiscount &&
                            ctg.hasDiscount.isDiscount
                          "
                        >
                          <span
                            class="badge badge-danger badge-discount"
                            v-if="ctg.hasDiscount.discountBy === 'percent'"
                            >Diskon {{ ctg.hasDiscount.discount }}%</span
                          >
                          <span class="badge badge-danger badge-discount" v-else
                            >Diskon
                            {{
                              ((ctg.hasDiscount.discount / ctg.price) * 100)
                                | setSquareDecimal
                            }}%</span
                          >
                        </div>
                        <div
                          v-if="ctg.stock <= 0"
                          class="member-plan position-absolute"
                        >
                          <span class="badge badge-danger badge-discount">
                            Habis
                          </span>
                        </div>
                        <img
                          :src="`${baseApi}/${ctg.image}`"
                          class="img-fluid item-img w-100 mb-3"
                        />
                        <div class="pt-1 px-3">
                          <h6 class="label-product">
                            {{ ctg.name }}
                          </h6>
                          <h6 class="price m-0 text-danger text-muted">
                            <i class="fas fa-weight"></i>
                            {{ ctg.weight }} /Kilogram
                          </h6>
                          <h6
                            class="price m-0 text-dark pt-4"
                            style="font-size: large; text-align: right"
                          >
                            {{ ctg.price | formatMoney }}
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <NuxtLink :to="`/${ctg.slug}`">
                              <h6 class="btn btn-danger w-100">
                                <i class="fas fa-cart-plus"></i> Beli
                              </h6>
                            </NuxtLink>
                          </div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <div class="not-found-anything" v-else>
                <div class="text-center">
                  <h4>
                    Produk
                    <span>{{
                      toFirstLetterUpperCase(this.$route.params.category)
                    }}</span>
                    Belum Tersedia
                  </h4>
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
  name: "CategoryDynamic",
  // layout: "blog"

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/category/_s?key=${this.$route.params.category}&page=${this.category.page}&show=${this.category.show}&sortBy=${this.category.sortBy}&orderBy=${this.category.orderBy}&status=${this.category.status}`
      )
      .then((res) => {
        this.categories = res.data.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      categories: [],
      category: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "name",
        status: "active",
      },
    };
  },

  head() {
    return {
      title: this.toFirstLetterUpperCase(this.$route.params.category),
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  mounted() {
    document
      .getElementById("page-category-_category")
      .classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-category-_category")
      .classList.add("animate__fadeOutLeft");
  },
  methods: {
    toFirstLetterUpperCase(word) {
      return word //[0].toUpperCase() + word.substring(1);
    },
  },
};
</script>

<style scoped>
.item-img {
  max-height: 195px;
  height: 195px;
}
.badge-discount {
  position: absolute;
  margin: 7px;
}
.badge-danger {
  color: #f1e5dd;
  background-color: rgb(191 77 9);
  box-shadow: 0px 0px 2px 0px black;
}

.label-product {
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.margin-bottom-10 {
  margin-bottom: 10px;
}
.category-description {
  font-size: 15px;
}

.not-found-anything {
  margin: 10%;
}

@media (max-width: 1200px) {
  .item-img {
    max-height: 180px;
    height: 180px;
  }
}

@media (max-width: 992px) {
  .item-img {
    max-height: 290px;
    height: 290px;
  }
}

@media (max-width: 767px) {
  .item-img {
    max-height: 230px;
    height: 230px;
  }
}

/* @media (max-width: 576px) {
  .item-img {
    max-height: 360px;
    height: 360px;
  }
} */

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
