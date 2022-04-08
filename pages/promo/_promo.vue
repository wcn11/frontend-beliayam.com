<template>
  <div>
    <div id="page-promo-_product" class="animate__animated" v-if="promos">
      <nav aria-label="breadcrumb" class="breadcrumb mb-0">
        <div class="container">
          <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-danger">Home</NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Promo {{ promos.name }}
            </li>
          </ul>
        </div>
      </nav>

      <section
        class="py-4 beliayam-main-body"
        v-if="promos.products && promos.products.length > 0"
      >
        <div class="container">
          <!-- <h2>Promo {{ promos.name }}</h2> -->

          <img
            :src="`${baseApi}/${promos.image_promo}`"
            class="img-fluid img-responsive promo-image"
            :alt="promos.name"
            v-if="promos.image_promo"
          />
          <!-- <img
            :src="`${this.$config.baseURL}/default/promo.jpg`"
            class="img-fluid img-responsive promo-image"
            :alt="promos.name"
          /> -->

          <div
            class="
              d-flex
              align-items-center
              category-description
              mt-lg-5
              mb-lg-5
            "
          >
            <h3 class="font-weight-light">Produk Promo</h3>
          </div>
          <div class="row mt-4">
            <div
              class="col-6 col-md-3 mb-3"
              v-for="promo in promos.products"
              :key="promo._id"
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
                  <NuxtLink :to="`/${promo.slug}`" class="text-dark">
                    <div class="member-plan position-absolute">
                      <span class="badge m-3 badge-danger">{{
                        promos.tags
                      }}</span>
                    </div>
                    <img
                      :src="`${baseApi}/${promo.image}`"
                      class="img-fluid item-img w-100 mb-3 p-0"
                    />
                    <div class="p-3">
                      <h6
                        style="
                          white-space: nowrap;
                          width: 120px;
                          overflow: hidden;
                          text-overflow: ellipsis;
                        "
                      >
                        {{ promo.name }}
                      </h6>
                      <h6 class="price m-0 text-danger">
                        <i class="fas fa-weight"></i> 1 Ekor
                      </h6>
                      <div
                        class="text-right"
                        v-if="promos.promoBy === 'percent'"
                      >
                        <h6
                          class="price mt-3 text-dark"
                          style="font-size: large; text-align: right"
                        >
                          {{
                            (promo.price -
                              (promos.promoValue / 100) * promo.price)
                              | formatMoney
                          }}
                        </h6>
                        <del class="text-danger text-right">{{
                          promo.price | formatMoney
                        }}</del>
                      </div>
                      <div class="text-right" v-else>
                        <h6
                          class="price mt-3 text-dark"
                          style="font-size: large; text-align: right"
                        >
                          {{ (promo.price - promos.promoValue) | formatMoney }}
                        </h6>
                        <del class="text-danger text-right">{{
                          promo.price | formatMoney
                        }}</del>
                      </div>
                      <div style="text-align: center; padding-top: 5%">
                        <h6 class="btn btn-danger w-100">
                          <i class="fas fa-cart-plus"></i> Tambahkan
                        </h6>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="not-found-anything" v-else>
        <div class="text-center">
          <h4>
            Produk Promo
            <span>{{ promos.name }}</span>
            Belum Tersedia
          </h4>
        </div>
      </div>
    </div>

    <div class="not-found-anything" v-else>
      <div class="text-center">
        <h4>Promo Tidak Tidak Ditemukan Atau Promo Belum Tersedia</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promo",
  head() {
    return {
      title: `${this.title}`,
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  data() {
    return {
      title: "Promo Beliayam.com",
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      promos: [],
      promo: {
        page: 1,
        show: 100,
        sortBy: "ASC",
        orderBy: "name",
        platform: ["all"],
        isActive: true,
      },
    };
  },
  methods: {
    async getPromoProducts() {
      this.$store.dispatch("setGlobalModal", true);
      await this.$axios
        .get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/promo/_s?key=${this.$route.params.promo}`
        )
        .then((res) => {
          this.promos = res.data.data;
          this.title = this.promos.name;
        });
      this.$store.dispatch("setGlobalModal", false);
    },
  },
  mounted() {
    document
      .getElementById("page-promo-_product")
      .classList.add("animate__fadeInRight");

    this.getPromoProducts();
  },
  beforeDestroy() {
    document
      .getElementById("page-promo-_product")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.item-img {
  max-height: 180px;
  height: 180px;
}
.badge-danger {
  color: #ffe5e5;
  background-color: rgb(255 96 0 / 62%);
}
.margin-bottom-10 {
  margin-bottom: 10px;
}

.not-found-anything {
  margin: 10%;
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

.promo-image {
  border-radius: 10px 10px;
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
