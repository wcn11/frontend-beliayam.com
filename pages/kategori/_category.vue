<template>
  <div id="page-category-_category" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <NuxtLink to="/kategori" class="text-danger">Kategori</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ toFirstLetterUpperCase(this.$route.params.category) }}
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="beliayam-listing">
              <div class="d-flex align-items-center mb-3">
                <h4>
                  {{ toFirstLetterUpperCase(this.$route.params.category) }}
                </h4>
                <div class="m-0 text-center ml-auto">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn text-muted bg-white mr-2"
                    ><i class="fad fa-filter mr-1"></i> Filter</a
                  >
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn text-muted bg-white"
                    ><i class="fad fa-signal mr-1"></i> Sort</a
                  >
                </div>
              </div>

              <div class="d-flex align-items-center mb-3 category-description">
                {{ categories.category && categories.category.description }}
              </div>
              <div class="row">
                <div
                  class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3"
                  v-for="ctg in categories.products"
                  :key="ctg._id"
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
                      <NuxtLink :to="`/${ctg.slug}`" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">10%</span>
                        </div>
                        <img
                          :src="`${baseApi}/${ctg.image}`"
                          class="img-fluid item-img w-100 mb-3"
                        />
                        <div class="p-3">
                          <h6 class="label-product">
                            {{ ctg.name }}
                          </h6>
                          <h6 class="price m-0 text-danger">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-dark"
                            style="font-size: large; text-align: right"
                          >
                            {{ ctg.price | formatMoney }}
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <NuxtLink :to="`/${ctg.slug}`">
                              <h6 class="btn btn-success w-100">
                                <i class="fas fa-cart-plus"></i> Beli
                              </h6>
                            </NuxtLink>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v2.jpg')"
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
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-success">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v5.jpg')"
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
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-success">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v6.jpg')"
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
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-success">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v3.jpg')"
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
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-warning">15%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v4.jpg')"
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
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v7.jpg')"
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
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v8.jpg')"
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
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v9.jpg')"
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
                            Kepala Ayam
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v10.jpg')"
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
                            Ceker Ayam
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v11.jpg')"
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
                            Ati Ampela
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
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
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v12.jpg')"
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
                            Ayam Kampung
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CategoryDynamic",
  // layout: "blog"

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/category/_s?key=${this.$route.params.category}&page=${this.category.page}&show=${this.category.show}&sortBy=${this.category.sortBy}&orderBy=${this.category.orderBy}&status=${this.category.status}`
      )
      .then((res) => {
        this.categories = res.data.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      categories: [],
      category: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "name",
        status: "active",
      },
    };
  },

  head() {
    return {
      title: this.toFirstLetterUpperCase(this.$route.params.category),
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  // async asyncData(context) {
  //   // try {
  //     // Using the nuxtjs/http module here exposed via context.app
  //     const categories = await context.app.$axios.get(`${context.$config.baseURL}/promo/_s?key=${context.params.category}`)
  //     return { categories }
  //   // } catch (e) {
  //   //   error(e) // Show the nuxt error page with the thrown error
  //   // }
  // },
  mounted() {
    document
      .getElementById("page-category-_category")
      .classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-category-_category")
      .classList.add("animate__fadeOutLeft");
  },
  methods: {
    toFirstLetterUpperCase(word) {
      return word[0].toUpperCase() + word.substring(1);
    },
  },

  filters: {
    // dipindah ke filtes.js - 01-03-2022
    // formatDate(date) {
    //   return moment(date).format("DD-MM-yyyy, HH:mm");
    // },
    // formatMoney(val) {
    //   let formatter = new Intl.NumberFormat("id-ID", {
    //     style: "currency",
    //     currency: "IDR",
    //   });

    //   return formatter.format(val);
    // },
  },
};
</script>

<style scoped>
.label-product {
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.margin-bottom-10 {
  margin-bottom: 10px;
}
.category-description {
  font-size: 15px;
}
</style>
