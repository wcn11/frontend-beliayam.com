<template>
  <div class="beliayam-body">
    <div class="pt-3 pb-2 beliayam-categories">
      <div class="d-flex align-items-center mb-2">
        <h5 class="m-0">Cari ayam ?</h5>
        <NuxtLink to="/kategori" class="ml-auto text-dark"
          >lihat lainnya</NuxtLink
        >
      </div>
      <!-- <div class="categories-slider"> -->

      <VueSlickCarousel
        v-bind="settings"
        class="categories-slider"
      >
        <div class="col-c">
          <div
            class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it"
          >
            <NuxtLink to="/kategori/pejantan">
              <img
                :src="`${this.$config.baseURL}/img/categorie/1.png`"
                class="img-fluid px-2 mx-auto"
              />
              <p class="m-0 pt-2 text-muted text-center">Ayam Pejantan</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-c">
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
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "HomeCategories",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        slidesToScroll: 3,
        slidesToShow: 8,
        arrows: true,
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

<style>
.c-it{
  height: 100px;
  min-height: 100px;
}
</style>