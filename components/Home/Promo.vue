<template>
  <div>
    <div class="py-3">
      <div class="d-flex align-items-center mb-3">
        <h5 class="m-0">Flash Sale</h5>
        <NuxtLink to="/promo" class="ml-auto text-dark">lihat lainnya</NuxtLink>
      </div>

      <!-- <div
          v-if="promos"> -->
      <VueSlickCarousel
        v-bind="settings"
        :arrows="true"
        :dots="true"
        class="pb-0 mb-0"
      >
        <div class="p-1 v-" v-for="promo in promos" :key="promo._id">
          <NuxtLink class="col-md-4" :to="`/promo/${promo.slug}`"
            ><img
              :src="`${baseApi}/${promo.image_promo}`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>

        <div class="p-1">
          <NuxtLink class="col-md-4" to="/promo/broiler-10-11-kg"
            ><img
              :src="`${this.$config.baseURL}/img/promo1.jpg`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>
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
    await this.$axios
      .$get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/promo?page=${this.promo.page}&show=${this.promo.show}&sortBy=${this.promo.sortBy}&orderBy=${this.promo.orderBy}&platform[]=${this.promo.platform}&isActive=${this.promo.isActive}`
      )
      .then((res) => {
        this.promos = res.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      promos: [],
      promo: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "name",
        platform: ["all"],
        isActive: true,
      },
      settings: {
        centerMode: true,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
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
</style>