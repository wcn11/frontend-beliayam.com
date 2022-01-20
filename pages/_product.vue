<template>
  <div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-success">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Produk</li>
        </ol>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <VueSlickCarousel v-bind="settings" class="recommend-slider mb-3">
              <div class="beliayam-slider-item">
                <img
                  src="img/recommend/r1.jpg"
                  class="img-fluid mx-auto shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
              <div class="beliayam-slider-item">
                <img
                  src="img/recommend/r2.jpg"
                  class="img-fluid mx-auto shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
              <div class="beliayam-slider-item">
                <img
                  src="img/recommend/r3.jpg"
                  class="img-fluid mx-auto shadow-sm rounded"
                  alt="Responsive image"
                />
              </div>
            </VueSlickCarousel>

            <div class="pd-f d-flex align-items-center mb-3">
              <a
                href="cart.html"
                class="
                  btn btn-warning
                  p-3
                  rounded
                  btn-block
                  d-flex
                  align-items-center
                  justify-content-center
                  mr-3
                  btn-lg
                "
                ><i class="icofont-plus m-0 mr-2"></i> ADD TO CART</a
              >
              <a
                href="cart.html"
                class="
                  btn btn-success
                  p-3
                  rounded
                  btn-block
                  d-flex
                  align-items-center
                  justify-content-center
                  btn-lg
                  m-0
                "
                ><i class="icofont-cart m-0 mr-2"></i> BUY NOW</a
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-4 bg-white rounded shadow-sm">
              <div class="pt-0">
                <h2 class="font-weight-bold">Ayam Broiler</h2>
                <p
                  class="
                    font-weight-light
                    text-dark
                    m-0
                    d-flex
                    align-items-center
                  "
                >
                  Product MRP : <b class="h6 text-dark m-0">Rp. 38.000</b>
                  <span class="badge badge-danger ml-2">50% OFF</span>
                </p>
                <a href="review.html">
                  <div class="rating-wrap d-flex align-items-center mt-2">
                    <ul class="rating-stars list-unstyled">
                      <li>
                        <i class="icofont-star text-warning"></i>
                        <i class="icofont-star text-warning"></i>
                        <i class="icofont-star text-warning"></i>
                        <i class="icofont-star text-warning"></i>
                        <i class="icofont-star"></i>
                      </li>
                    </ul>
                    <p class="label-rating text-muted ml-2 small">
                      (245 Reviews)
                    </p>
                  </div>
                </a>
              </div>
              <div class="pt-2">
                <div class="row">
                  <div class="col-6">
                    <p class="font-weight-bold m-0">Pengiriman</p>
                    <p class="text-muted m-0">Gratis Ongkos Kirim</p>
                  </div>
                  <div class="col-6 text-right">
                    <p class="font-weight-bold m-0">Ketersediaan Produk:</p>
                    <p class="text-muted m-0">1 Kg</p>
                  </div>
                </div>
              </div>
              <div class="details">
                <div class="pt-3 bg-white">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-group beliayam-radio btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <!-- <label class="btn btn-secondary active">
<input type="radio" name="options" id="option1" checked> 4 pcs
</label>
<label class="btn btn-secondary">
<input type="radio" name="options" id="option2"> 6 pcs
</label> -->
                      <label class="btn btn-secondary">
                        <input type="radio" name="options" id="option3" /> 1 Kg
                      </label>
                    </div>
                    <a class="ml-auto" href="#">
                      <form
                        id="myform"
                        class="cart-items-number d-flex"
                        method="POST"
                        action="#"
                      >
                        <input
                          type="button"
                          value="-"
                          class="qtyminus btn btn-success btn-sm"
                          field="quantity"
                        />
                        <input
                          type="text"
                          name="quantity"
                          value="1"
                          class="qty form-control"
                        />
                        <input
                          type="button"
                          value="+"
                          class="qtyplus btn btn-success btn-sm"
                          field="quantity"
                        />
                      </form>
                    </a>
                  </div>
                </div>
                <div class="pt-3">
                  <div
                    class="
                      input-group
                      mb-3
                      border
                      rounded
                      shadow-sm
                      overflow-hidden
                      bg-white
                    "
                  >
                    <div class="input-group-prepend">
                      <button
                        class="
                          border-0
                          btn btn-outline-secondary
                          text-success
                          bg-white
                        "
                      >
                        <i class="icofont-note"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="
                        shadow-none
                        border-0
                        form-control form-control-lg
                        pl-0
                      "
                      placeholder="Tambah Catatan disini..."
                      aria-label=""
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <p class="font-weight-bold mb-2">Deskripsi Produk</p>
                  <p class="text-muted small mb-0">
                    Jual & beli Ayam Kampung Super online dengan mudah dan cepat
                    kapanpun dimanapun di Tokopedia sekarang! Lihat
                    Selengkapnya. Cek Aneka Rekomendasi Ayam Kampung Super
                    Terlengkap & Terbaik Lainnya. Ayam Kampung Super. Ayam
                    Kampung Kuning. Ayam Kampung Betina. Ayam Kampung 1 Kg. Ayam
                    Kampung Frozen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h5 class="mt-3 mb-3">Produk Terkait</h5>

        <div class="pick_today">
          <div class="row">
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
                    <div class="member-plan position-absolute">
                      <span class="badge m-3 badge-danger">10%</span>
                    </div>
                    <div class="p-3">
                      <img
                        :src="`${this.$config.baseURL}/img/listing/v1.jpg`"
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
                        Ayam Pejantan
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
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
                  <NuxtLink to="/broiler-08-09-kg" class="text-dark">
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
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "Products",
  components: { VueSlickCarousel },
  // layout: "blog"
  asyncData() {
    return { content: "Created at: " + new Date() };
  },
  methods: {
    refresh() {
      this.$nuxt.refresh();
    },
  },
  loading: {
    color: "red",
    height: "5px",
  },

  head() {
    return {
      title: "Produk Ayam Broiler",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
  // mounted() {
  //   console.log(this.$route.params.product);
  // },
  // methods: {
  //   toFirstLetterUpperCase(word) {
  //     return word[0].toUpperCase() + word.substring(1);
  //   },
  // },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
