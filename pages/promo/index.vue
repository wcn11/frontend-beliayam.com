<template>
  <div>
    <div class="slider-container">
      <div class="slider-wrapper">
        <div class="slider-slide">
          <a href="https://www.tokopedia.com/hotel/">
            <img
              :src="`${this.$config.baseURL}/img/contoh-banner-promo.jpg`"
              class="slider-image"
              alt=""
              data-slider-impression='{"event":"promoView","eventCategory":"promo microsite - promo list","eventAction":"impression on promo","eventLabel":"","ecommerce":{"promoView":{"promotions":[{"id":87171,"name":"\/promo - p1 - slider banner","position":1,"creative":"87171","creative_url":"https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2019\/08\/Hotel_Launching_Digital-Hompage.jpg"}]}}}'
            />
          </a>
        </div>
      </div>
    </div>

    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-success">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Promo Beliayam.com
          </li>
        </ol>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-md-4 margin-bottom-10" v-for="i in 10" :key="i">
            <div class="rounded bg-promo text-center card-shadow">
              <div class="bg-white rounded shadow-sm mb-3">
                <img
                  :src="require('static/img/promo1.jpg')"
                  class="img-fluid"
                />
              </div>

              <h5 class="mt-2 mb-1 text-white">Broiler</h5>
              <p class="mt-2 mb-1 text-white">Rp. 19.000 - Rp. 75.000</p>
              <div class="pt-3 p-2">
                <NuxtLink to="/promo/but-one-get-one">
                  <p
                    class="btn btn-warning btn-lg btn-block btn-view-promo mb-0"
                  >
                    <i class="icofont-tag mr-1"></i> Lihat Produk
                  </p>
                </NuxtLink>
              </div>
              <NuxtLink to="/promo/details/by-one-get-one">
                <p class="mb-0 pt-2 pb-2 small text-dark">
                  <i class="fad fa-file-contract mr-1"></i> Syarat & Ketentuan
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <a href="#" class="text-success">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Promo details
          </li>
        </ol>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Promo",
  // layout: "blog"

  head: {
    title: "Promo Beliayam.com",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}

.btn-view-promo {
  color: darkred;
  background-color: #ffffff;
  border-color: #ffc107;
}

.bg-promo {
  background-color: #ffba08 !important;
}
.slider-container {
  width: 100%;
  /* height: 190px; */
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 0;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-shadow {
  box-shadow: 1px 1px 5px 0px grey;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .slider-image {
    height: 120px;
  }
}

@media only screen and (min-width: 481px) {
  .slider-image {
    height: 175px;
  }
}

@media only screen and (min-width: 690px) {
  .slider-image {
    height: 250px;
  }
}
</style>
