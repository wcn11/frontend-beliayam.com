<template>
  <div v-if="promos.length > 0">
    <div class="py-3">
      <div class="d-flex align-items-center mb-3">
        <!-- <h5 class="m-0">Promo untukmu</h5> -->
        <NuxtLink to="/promo" class="ml-auto text-white text-see-more"
          >Promo Menarik Lainnya
          <i class="text-white fad fa-chevron-circle-right"></i>
        </NuxtLink>
      </div>

      <!-- <div
          v-if="promos"> -->
      <VueSlickCarousel
        v-bind="settings"
        :arrows="true"
        :dots="true"
        class="pb-0 mb-0"
        v-if="promos.length > 0"
      >
        <!-- <div class="p-1 v-" v-for="promo in promos" :key="promo._id">
          <NuxtLink class="col-md-12" :to="`/promo/${promo.slug}`"
            ><img
              :src="`${baseApi}/${promo.image_promo}`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div> -->

        <NuxtLink class="col-lg-12" to="/promo"
          ><img
            :src="`${baseURL}/img/banner-global-res.jpg`"
            class="w-100 img-carousel rounded"
            alt="Promo"
        /></NuxtLink>

        <NuxtLink
          class="col-lg-12"
          v-for="promo in promos"
          :key="promo._id"
          :to="`/promo/${promo.slug}`"
          ><img
            :src="`${baseApi}/${promo.image_promo}`"
            class="w-100 img-carousel rounded"
            alt="Promo"
        /></NuxtLink>
        <!-- <NuxtLink class="col-lg-12" to="`/promo/${promo.slug}`"
          ><img
            :src="`${this.$config.baseURL}/img/contoh-banner-promo-2.jpeg`"
            class="img-carousel w-100 rounded"
            alt="Responsive image"
        /></NuxtLink> -->
      </VueSlickCarousel>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "HomePromo",
  components: { VueSlickCarousel },
  async fetch() {
    this.$store.dispatch("setGlobalModal", true);
    await this.$axios
      .$get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/promo?page=${this.promo.page}&show=${this.promo.show}&sortBy=${this.promo.sortBy}&orderBy=${this.promo.orderBy}&platform=${this.promo.platform}&isActive=${this.promo.isActive}`
      )
      .then((res) => {
        this.promos = res.data;
        this.$store.dispatch("setGlobalModal", false);
      });
    this.$store.dispatch("setGlobalModal", false);
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      baseURL: process.env.NUXT_ENV_BASE_URL,
      promos: [],
      promo: {
        page: 1,
        show: 5,
        sortBy: "ASC",
        orderBy: "name",
        platform: ["all"],
        isActive: true,
      },
      settings: {
        centerMode: false,
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        rows: 1,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="css">
@import url("../../static/css/style.css");
.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  opacity: 0.75;
  /* color: #120f0f; */
  -webkit-font-smoothing: antialiased;
}
.slick-cloned {
  display: none;
}

.text-see-more {
    color: white;
    font-size: 14px;
    padding: 7px;
    border-radius: 9px;
    background-color: #cf430f;
    box-shadow: 1px 1px 1px 0px black;
}

@media (max-width: 480px) {
  .img-carousel {
    height: 125px;
  }
  .text-see-more {
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .img-carousel {
    height: 125px;
  }
  .text-see-more {
    font-size: 10px;
  }
}
</style>