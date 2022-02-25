<template>
  <div>
    <div class="title d-flex align-items-center py-3">
      <h5 class="m-0">Bundling</h5>
      <NuxtLink to="/kategori" class="ml-auto text-dark"
        >lihat lainnya</NuxtLink
      >
    </div>

    <div class="beliayam-recommend">
      <div class="row">
        <div class="col-12 col-md-4 mb-3">
          <NuxtLink
            to="/broiler-09-10-kg"
            class="text-dark text-decoration-none"
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
              <VueSlickCarousel v-bind="settings" class="recommend-slider2">
                <div class="beliayam-slider-item m-2 rounded">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r1.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
                <div class="beliayam-slider-item m-2 rounded">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r2.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
                <div class="beliayam-slider-item m-2 rounded">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r3.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
              </VueSlickCarousel>
              <div class="p-3 position-relative">
                <h6 class="mb-1 font-weight-bold text-success">Ayam Broiler</h6>
                <p class="text-muted">Ayam Broiler yang berkualitas.</p>
                <div class="d-flex align-items-center">
                  <h6 class="m-0">Rp. 38.000/Ekor</h6>
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
            </div>
          </NuxtLink>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <NuxtLink
            to="/broiler-09-10-kg"
            class="text-dark text-decoration-none"
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
              <VueSlickCarousel v-bind="settings" class="recommend-slider2">
                <div class="beliayam-slider-item m-2">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r4.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
                <div class="beliayam-slider-item m-2">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r5.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
                <div class="beliayam-slider-item m-2">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r6.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
              </VueSlickCarousel>
              <div class="p-3 position-relative">
                <h6 class="mb-1 font-weight-bold text-success">
                  Ayam Pejantan
                </h6>
                <p class="text-muted">Ayam Pejantan Fresh dan Bergizi.</p>
                <div class="d-flex align-items-center">
                  <h6 class="m-0">Rp. 45.000/Ekor</h6>
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
            </div>
          </NuxtLink>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <NuxtLink
            to="/broiler-09-10-kg"
            class="text-dark text-decoration-none"
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
              <VueSlickCarousel v-bind="settings" class="recommend-slider2">
                <div class="beliayam-slider-item m-2">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r7.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
                <div class="beliayam-slider-item m-2">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r8.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
                <div class="beliayam-slider-item m-2">
                  <img
                    :src="`${this.$config.baseURL}/img/recommend/r9.jpg`"
                    class="img-fluid p-1 mx-auto img-rounded rounded shadow-sm"
                    alt="Responsive image"
                  />
                </div>
              </VueSlickCarousel>
              <div class="p-3 position-relative">
                <h6 class="mb-1 font-weight-bold text-success">Ayam Fillet</h6>
                <p class="text-muted">Ayam Fillet Premium item.</p>
                <div class="d-flex align-items-center">
                  <h6 class="m-0">Rp. 40.000/Kg</h6>
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
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "HomeBestSeller",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    };
  },
};
</script>

<style scoped>
.img-rounded {
  border-radius: 12px !important;
}
</style>