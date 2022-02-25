<template>
  <div id="page-promo-_product" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Produk Promo Beliayam.com
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div
            class="col-6 col-md-3 mb-3"
            v-for="promo in promos"
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-danger">110%</span>
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
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      {{ promo.price }}
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- <div class="col-6 col-md-3 mb-3">
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-danger">5%</span>
                  </div>
                  <div class="p-3">
                    <img
                      :src="`${this.$config.baseURL}/img/listing/v2.jpg`"
                      class="img-fluid item-img w-100 mb-3"
                    />
                    <h6
                      style="
                        white-space: nowrap;
                        width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      Ayam Broiler
                    </h6>
                    <h6 class="price m-0 text-danger">
                      <i class="fas fa-weight"></i> 1 Ekor
                    </h6>
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      Rp. 45.000
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-success">10%</span>
                  </div>
                  <div class="p-3">
                    <img
                      :src="`${this.$config.baseURL}/img/listing/v5.jpg`"
                      class="img-fluid item-img w-100 mb-3"
                    />
                    <h6
                      style="
                        white-space: nowrap;
                        width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      Drumstick/Paha Ayam
                    </h6>
                    <h6 class="price m-0 text-danger">
                      <i class="fas fa-weight"></i> 1 Ekor
                    </h6>
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      Rp. 45.000
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-success">10%</span>
                  </div>
                  <div class="p-3">
                    <img
                      :src="`${this.$config.baseURL}/img/listing/v6.jpg`"
                      class="img-fluid item-img w-100 mb-3"
                    />
                    <h6
                      style="
                        white-space: nowrap;
                        width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      Kulit Ayam
                    </h6>
                    <h6 class="price m-0 text-danger">
                      <i class="fas fa-weight"></i> 1 Ekor
                    </h6>
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      Rp. 45.000
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-success">10%</span>
                  </div>
                  <div class="p-3">
                    <img
                      :src="`${this.$config.baseURL}/img/listing/v3.jpg`"
                      class="img-fluid item-img w-100 mb-3"
                    />
                    <h6
                      style="
                        white-space: nowrap;
                        width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      Ayam Petelur
                    </h6>
                    <h6 class="price m-0 text-danger">
                      <i class="fas fa-weight"></i> 1 Ekor
                    </h6>
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      Rp. 45.000
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-warning">15%</span>
                  </div>
                  <div class="p-3">
                    <img
                      :src="`${this.$config.baseURL}/img/listing/v4.jpg`"
                      class="img-fluid item-img w-100 mb-3"
                    />
                    <h6
                      style="
                        white-space: nowrap;
                        width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      Dada Fillet
                    </h6>
                    <h6 class="price m-0 text-danger">
                      <i class="fas fa-weight"></i> 1 Ekor
                    </h6>
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      Rp. 45.000
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-danger">10%</span>
                  </div>
                  <div class="p-3">
                    <img
                      :src="`${this.$config.baseURL}/img/listing/v7.jpg`"
                      class="img-fluid item-img w-100 mb-3"
                    />
                    <h6
                      style="
                        white-space: nowrap;
                        width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      Chiken Wings/Sayap
                    </h6>
                    <h6 class="price m-0 text-danger">
                      <i class="fas fa-weight"></i> 1 Ekor
                    </h6>
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      Rp. 45.000
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
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
                <NuxtLink to="/broiler-09-10-kg" class="text-dark">
                  <div class="member-plan position-absolute">
                    <span class="badge m-3 badge-danger">5%</span>
                  </div>
                  <div class="p-3">
                    <img
                      :src="`${this.$config.baseURL}/img/listing/v8.jpg`"
                      class="img-fluid item-img w-100 mb-3"
                    />
                    <h6
                      style="
                        white-space: nowrap;
                        width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      Paha Fillet
                    </h6>
                    <h6 class="price m-0 text-danger">
                      <i class="fas fa-weight"></i> 1 Ekor
                    </h6>
                    <h6
                      class="price m-0 text-dark"
                      style="font-size: large; text-align: right"
                    >
                      Rp. 45.000
                    </h6>
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success">
                        <i class="fas fa-cart-plus"></i> Tambahkan
                      </h6>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Promo",
  head: {
    title: "Promo Beliayam.com",
    htmlAttrs: {
      lang: "id",
    },
  },
  data() {
    return {
      param: this.$route.params,
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
    };
  },
  methods: {
    async getPromoProducts() {
      await this.$axios
        .get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/promo/${this.$route.params.promo}/product?page=${this.promo.page}&show=${this.promo.show}&sortBy=${this.promo.sortBy}&orderBy=${this.promo.orderBy}&platform[]=${this.promo.platform}&isActive=${this.promo.isActive}`
        )
        .then((res) => {
          this.promos = res.data.data;
        });
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
