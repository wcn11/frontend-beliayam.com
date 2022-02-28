<template>
  <div>
    <div class="title d-flex align-items-center py-3">
      <h5 class="m-0">Sebentar Lagi Habis Nih!</h5>
      <NuxtLink to="/produk-terbatas" class="ml-auto text-dark"
        >lihat lainnya</NuxtLink
      >
    </div>

    <div class="beliayam-recommend">
      <div class="row">
        <div
          class="col-12 col-md-4 mb-3"
          v-for="product in products"
          :key="product._id"
        >
          <NuxtLink
            :to="`${product.slug}`"
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
              <div class="beliayam-slider-item m-2 rounded">
                <div
                  class="member-plan position-absolute"
                  v-if="product.stock <= 0"
                >
                  <span class="badge m-3 badge-danger-out-of-stock">
                    Habis
                  </span>
                </div>
                <img
                  :src="`${baseApi}/${product.image}`"
                  class="img-fluid p-1 mx-auto img-rounded shadow-sm"
                  :alt="`${product.name}`"
                />
              </div>
              <div class="p-3 position-relative">
                <h6 class="mb-1 font-weight-bold">
                  {{ product.name }}
                </h6>
                <p class="badge badge-danger" v-if="product.stock > 0">
                  Hampir habis
                </p>
                <p class="badge badge-danger" v-else>Habis</p>
                <div class="d-flex align-items-center">
                  <h6 class="m-0">
                    {{ product.price | formatMoney }}/{{ product.weight }}
                    Kilogram
                  </h6>
                  <NuxtLink :to="`/${product.slug}`" class="ml-auto">
                    <div style="text-align: center; padding-top: 5%">
                      <h6 class="btn btn-success w-100">ambil semua</h6>
                    </div>
                    <!-- <form
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
                    </form> -->
                  </NuxtLink>
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
  name: "HomeLimitedStock",
  components: { VueSlickCarousel },
  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/_s?page=${this.fetchProductSetting.page}&show=${this.fetchProductSetting.show}&sortBy=${this.fetchProductSetting.sortBy}&orderBy=${this.fetchProductSetting.orderBy}&min_stock=${this.fetchProductSetting.min_stock}&max_stock=${this.fetchProductSetting.max_stock}`
      )
      .then((res) => {
        this.products = res.data.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      products: [],
      fetchProductSetting: {
        page: 1,
        show: 20,
        sortBy: "ASC",
        orderBy: "name",
        min_stock: 0,
        max_stock: 20,
      },
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

  filters: {
    formatDate(date) {
      return moment(date).format("DD-MM-yyyy, HH:mm");
    },
    formatMoney(val) {
      let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(val);
    },
  },
};
</script>

<style scoped>
.badge-danger-out-of-stock {
  color: #ffe5e5;
  background-color: rgb(205 77 0);
}
.img-rounded {
  border-radius: 12px !important;
}
</style>