<template>
  <div class="beliayam-body">
    <div class="pt-3 pb-2 beliayam-categories">
      <div class="d-flex align-items-center mb-4">
        <h5 class="m-0">Cari ayam ?</h5>
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
        <!-- <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/kampung">
              <img
                :src="`${this.$config.baseURL}/img/categorie/2.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Ayam Kampung</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/broiler">
              <img
                :src="`${this.$config.baseURL}/img/categorie/3.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Ayam Broiler</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/parting">
              <img
                :src="`${this.$config.baseURL}/img/categorie/4.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Produk Lainnya</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/merah">
              <img
                :src="`${this.$config.baseURL}/img/categorie/5.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Ayam Merah</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/organik">
              <img
                :src="`${this.$config.baseURL}/img/categorie/1.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Ayam Organik</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/petelur">
              <img
                :src="`${this.$config.baseURL}/img/categorie/2.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Ayam Petelur</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/nugget">
              <img
                :src="`${this.$config.baseURL}/img/categorie/5.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Nugget</p>
            </NuxtLink>
          </div>
        </div> -->
      </VueSlickCarousel>
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
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      categories: [],
      fetchCategorySetting: {
        page: 1,
        show: 5,
        sortBy: "ASC",
        orderBy: "name",
        status: "active",
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
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
        ],
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
.c-it {
  height: 130px;
  min-height: 130px;
}
.c-it img{
  height: 70px;
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