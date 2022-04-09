<template>
  <div class="beliayam-body">
    <div class="pt-3 pb-2 beliayam-categories">
      <div class="d-flex align-items-center mb-4">
        <h5 class="m-0">
          <span class="text-danger text-shadow">Beli Ayam</span> Apa Hari Ini ?
        </h5>
        <NuxtLink to="/kategori" class="ml-auto text-white text-see-more"
          >Kategori Lainnya
          <i class="text-white fad fa-chevron-circle-right"></i
        ></NuxtLink>
      </div>
      <!-- <div class="categories-slider"> -->

      <VueSlickCarousel
        v-bind="settings"
        class="categories-slider"
        v-if="categories && categories.length > 0"
      >
        <div class="col-c" v-for="category in categories" :key="category._id">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink :to="`/kategori/${category.slug}`">
              <img
                :src="`${baseApi}/${category.icon}`"
                class="img-fluid px-2 mx-auto"
                v-if="category.icon"
              />
              <img
                :src="`${this.$config.baseURL}/default/icon.png`"
                class="img-fluid px-2 mx-auto"
                v-else
              />
              <p class="m-0 pt-2 text-muted text-center">{{ category.name }}</p>
            </NuxtLink>
          </div>
        </div>
      </VueSlickCarousel>

      <!-- <div
        v-if="productHomepage && productHomepage.length > 0"
        class="parent-product mt-4 mb-4"
      >
        <div
          class="child-product ml-2 mr-2"
          v-for="product in productHomepage"
          :key="product._id"
        >
          <NuxtLink :to="`/kategori/${product.slug}`">
            <span
              class="badge badge-pill badge-product-pill m-0 pt-2 text-center"
              >{{ product.name }}</span
            >
          </NuxtLink>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "HomeCategories",
  components: { VueSlickCarousel },

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/category?page=${this.fetchCategorySetting.page}&show=${this.fetchCategorySetting.show}&sortBy=${this.fetchCategorySetting.sortBy}&orderBy=${this.fetchCategorySetting.orderBy}&status=${this.fetchCategorySetting.status}`
      )
      .then((res) => {
        this.categories = res.data.data;
      });

    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/_s/homepage?show=${this.fetchHomepageProductsSetting.show}`
      )
      .then((res) => {
        this.productHomepage = res.data.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      categories: [],
      productHomepage: [],
      fetchCategorySetting: {
        page: 1,
        show: 5,
        sortBy: "ASC",
        orderBy: "name",
        status: "active",
      },
      fetchHomepageProductsSetting: {
        show: 10,
      },
      settingsProduct: {
        slidesToScroll: 1,
        slidesToShow: 5,
        infinite: true,
        autoplay: false,
        arrows: false,
        adaptiveHeight: true,
      },
      settings: {
        slidesToScroll: 1,
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToScroll: 1,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 576,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToScroll: 1,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToScroll: 1,
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.badge-product-pill {
  color: white;
  background-color: #cf430f;
}
.text-see-more {
  background-color: #cf430f;
  color: white;
  font-size: 14px;
  padding: 7px;
  border-radius: 9px;
}
.c-it {
  height: 130px;
  min-height: 130px;
}
.c-it img {
  height: 70px;
}

.parent-product {
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
}

.text-shadow{
    text-shadow: 1px 1px 1px black;

}

.parent-product::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 7px;
  background-color: rgb(221 75 69 / 29%);
  box-shadow: inset -1px -1px 0 rgb(0 0 0 / 5%), inset 1px 1px 0 rgb(0 0 0 / 5%);
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