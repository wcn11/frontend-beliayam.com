<template>
  <div v-if="products && products.length > 0">
    <div class="title d-flex align-items-center py-3">
      <h5 class="m-0">Sebentar Lagi Habis Nih!</h5>
      <NuxtLink to="/produk-terbatas" class="ml-auto text-white text-see-more"
        >Produk Lainnya <i class="text-white fad fa-chevron-circle-right"></i
      ></NuxtLink>
    </div>

    <div class="beliayam-recommend">
      <div class="row">
        <div
          class="col-12 col-md-4 mb-3"
          v-for="product in products"
          :key="product._id"
        >
          <NuxtLink
            :to="`${product.slug}`"
            class="text-dark text-decoration-none"
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
              <div class="beliayam-slider-item m-2 rounded">
                <div
                  class="member-plan position-absolute"
                  v-if="product.stock <= 0"
                >
                  <span class="badge m-3 badge-danger-out-of-stock">
                    Habis
                  </span>
                </div>
                <img
                  :src="`${baseApi}/${product.image}`"
                  class="img-fluid p-1 mx-auto img-rounded shadow-sm"
                  :alt="`${product.name}`"
                />
              </div>
              <div class="p-3 position-relative">
                <h6 class="mb-1 font-weight-bold">
                  {{ product.name }}
                </h6>
                <p class="badge badge-danger" v-if="product.stock > 0">
                  Hampir habis
                </p>
                <p class="badge badge-danger" v-else>Habis</p>
                <div class="d-flex align-items-center">
                  <h6 class="m-0">
                    {{ product.price | formatMoney }}/{{ product.weight }}
                    Kilogram
                  </h6>
                  <NuxtLink :to="`/${product.slug}`" class="ml-auto">
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success w-100"><i class="fad fa-shopping-cart"></i> Beli ini</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "HomeLimitedStock",
  components: { VueSlickCarousel },
  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/_s?page=${this.fetchProductSetting.page}&show=${this.fetchProductSetting.show}&sortBy=${this.fetchProductSetting.sortBy}&orderBy=${this.fetchProductSetting.orderBy}&min_stock=${this.fetchProductSetting.min_stock}&max_stock=${this.fetchProductSetting.max_stock}`
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
        show: 3,
        sortBy: "ASC",
        orderBy: "name",
        min_stock: 0,
        max_stock: 10,
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
};
</script>

<style scoped>
.text-see-more {
  background-color: #cf430f;
  color: white;
  font-size: 14px;
  padding: 7px;
  border-radius: 9px;
}
.badge-danger-out-of-stock {
  color: #ffe5e5;
  background-color: rgb(205 77 0);
}
.img-rounded {
  border-radius: 12px !important;
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