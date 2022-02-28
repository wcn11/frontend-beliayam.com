<template>
  <div>
    <div class="title d-flex align-items-center py-3">
      <h5 class="m-0">Pilihan terbaik</h5>
      <NuxtLink to="/best-choices" class="ml-auto text-dark"
        >lihat lainnya</NuxtLink
      >
    </div>

    <div class="pick_today">
      <div class="row">
        <div
          class="col-6 col-md-3 mb-3"
          v-for="product in products"
          :key="product._id"
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
              <NuxtLink :to="`/${product.slug}`" class="text-dark">
                <div class="p-3">
                  <img
                    :src="`${baseApi}/${product.image}`"
                    class="img-fluid item-img w-100 mb-3 rounded"
                  />

                  <h5
                    style="
                      white-space: nowrap;
                      width: 100%;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    "
                  >
                    {{ product.name }}
                  </h5>
                  <h6 class="price m-0 text-dark">
                    <i class="fas fa-weight"></i> {{ product.weight }} Kilogram
                  </h6>
                  <h6
                    class="price m-0 text-dark"
                    style="font-size: large; text-align: right"
                  >
                    {{ product.price | formatMoney }}
                  </h6>
                  <div style="text-align: center; padding-top: 5%">
                    <h6 class="btn btn-success w-100">
                      <i class="fas fa-cart-plus"></i> Beli ini
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
</template>

<script>
export default {
  name: "HomeProductLowStock",

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/_s?page=${this.fetchProductSetting.page}&show=${this.fetchProductSetting.show}&sortBy=${this.fetchProductSetting.sortBy}&orderBy=${this.fetchProductSetting.orderBy}&min_stock=${this.fetchProductSetting.min_stock}`
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
        show: 8,
        sortBy: "ASC",
        orderBy: "name",
        min_stock: 40,
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
.item-img {
  max-height: 150px;
}
</style>