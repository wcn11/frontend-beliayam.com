<template>
  <div>
    <div class="py-3">
      <div class="d-flex align-items-center mb-3">
        <h5 class="m-0">Promo untukmu...</h5>
        <a href="/promo" class="ml-auto btn btn-outline-success btn-sm"
          >promo lainnya ...</a
        >
      </div>
      <VueSlickCarousel
        v-bind="settings"
        :arrows="true"
        :dots="true"
        class="pb-0 mb-0"
      >
        <div class="p-1">
          <NuxtLink class="col-md-4" to="/promo/broiler-10-11-kg"
            ><img
              :src="`${this.$config.baseURL}/img/promo1.jpg`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>
        <div class="p-1">
          <NuxtLink class="col-md-4" to="/promo/broiler-10-11-kg"
            ><img
              :src="`${this.$config.baseURL}/img/promo2.jpg`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>
        <div class="p-1">
          <NuxtLink class="col-md-4" to="/promo/broiler-10-11-kg"
            ><img
              :src="`${this.$config.baseURL}/img/promo3.jpg`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>
        <div class="p-1">
          <NuxtLink class="col-md-4" to="/promo/broiler-10-11-kg"
            ><img
              :src="`${this.$config.baseURL}/img/promo4.jpg`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>
        <div class="p-1">
          <NuxtLink class="col-md-4" to="/promo/broiler-10-11-kg"
            ><img
              :src="`${this.$config.baseURL}/img/promo2.jpg`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>
        <div class="p-1">
          <NuxtLink class="col-md-4" to="/promo/broiler-10-11-kg"
            ><img
              :src="`${this.$config.baseURL}/img/promo3.jpg`"
              class="img-fluid mx-auto rounded"
              alt="Responsive image"
          /></NuxtLink>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "HomePromo",
  components: { VueSlickCarousel },
  data() {
    return {
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
  }
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