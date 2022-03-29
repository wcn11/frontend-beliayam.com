<template>
  <div id="page-promo-index" class="animate__animated">
    <div class="slider-container">
      <div class="slider-wrapper">
        <div class="slider-slide">
          <a href="javascript:void(0)">
            <img
              :src="`${this.$config.baseURL}/img/banner-global.jpg`"
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
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Promo Beliayam.com
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 margin-bottom-10"
            v-for="promo in promos"
            :key="promo._id"
          >
            <div class="rounded bg-promo text-center card-shadow">
              <div class="bg-white rounded shadow-sm mb-3">
                <img
                  :src="`${baseApi}/${promo.image_promo}`"
                  class="img-fluid"
                />
              </div>

              <h5 class="mt-2 mb-1 text-white">{{ promo.name }}</h5>
              <p class="mt-2 mb-1 text-white bg-danger">
                <i class="fad fa-badge-discount"></i> {{ promo.tags }}
              </p>
              <div class="pt-3 p-2">
                <NuxtLink :to="`/promo/${promo.slug}`">
                  <p
                    class="btn btn-warning btn-lg btn-block btn-view-promo mb-0"
                  >
                    <i class="fad fa-tags mr-1"></i> Lihat Produk
                  </p>
                </NuxtLink>
              </div>
              <div @click="openModalDetailPromo(promo)" role="button">
                <p class="mb-0 pt-2 pb-2 small text-dark">
                  <i class="fad fa-file-contract mr-1"></i> Syarat & Ketentuan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="modal fade"
      id="modal-promo-detail"
      tabindex="-1"
      aria-labelledby="modal-promo-detailLabel"
      aria-hidden="true"
      v-if="selectedPromo"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-promo-detailLabel">
              Syarat & Ketentuan
            </h5>
          </div>
          <div class="modal-body">
            {{ selectedPromo.termsAndConditions }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              oke
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promo",
  // layout: "blog"
  async fetch() {
    await this.$axios
      .$get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/promo?page=${this.promo.page}&show=${this.promo.show}&sortBy=${this.promo.sortBy}&orderBy=${this.promo.orderBy}&platform=${this.promo.platform}&isActive=${this.promo.isActive}`
      )
      .then((res) => {
        this.promos = res.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      promos: [],
      selectedPromo: {},
      promo: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "name",
        platform: ["all"],
        isActive: true,
      },
    };
  },
  head: {
    title: "Promo Beliayam.com",
    htmlAttrs: {
      lang: "id",
    },
  },
  methods: {
    openModalDetailPromo(promo) {
      this.selectedPromo = promo;
      $("#modal-promo-detail").appendTo("body").modal("show");
    },
  },
  mounted() {
    document
      .getElementById("page-promo-index")
      .classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-promo-index")
      .classList.add("animate__fadeOutLeft");
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

/* @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
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
  } */
/* } */
</style>
