<template>
  <div id="page-category-_category" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <NuxtLink to="/kategori" class="text-danger"
              >Pilihan Terbaik</NuxtLink
            >
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
                <h4>Produk Pilihan</h4>
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

              <!-- <div class="d-flex align-items-center mb-3 category-description">
                {{ categories.category && categories.category.description }}
              </div> -->
              <div class="row" v-if="products && products.length > 0">
                <div
                  class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3"
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
                    "
                  >
                    <div class="list-card-image">
                      <NuxtLink :to="`/${product.slug}`" class="text-dark">
                        <img
                          :src="`${baseApi}/${product.image}`"
                          class="img-fluid item-img w-100 mb-3"
                        />

                        <div class="p-3">
                          <h5
                            style="
                              white-space: nowrap;
                              width: 100%;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            {{ product.name }}
                          </h5>
                          <h6 class="mb-1 font-weight-bold">
                            {{ product.price | formatMoney }}
                          </h6>
                          <p class="small text-muted m-0 text-dark">
                            {{ product.weight || 1 }} Kilogram.
                          </p>
                          <h6
                            class="price m-0 text-dark"
                            style="font-size: large; text-align: right"
                          >
                            {{ product.price | formatMoney }}
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <NuxtLink :to="`/${product.slug}`">
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
                    <span> Diskon </span>
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
  name: "ProductOnDiscount",
  // layout: "blog"

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/_s?page=${this.fetchProductSetting.page}&show=${this.fetchProductSetting.show}&sortBy=${this.fetchProductSetting.sortBy}&orderBy=${this.fetchProductSetting.orderBy}&min_stock=${this.fetchProductSetting.min_stock}`
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
        show: 20,
        sortBy: "ASC",
        orderBy: "name",
        min_stock: 40,
      },
    };
  },

  head() {
    return {
      title: "Pilihan Terbaik Daging Ayam!",
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
  methods: {},
  
};
</script>

<style scoped>
.label-product {
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
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

.item-img {
  max-height: 180px;
  height: 180px;
}
</style>
