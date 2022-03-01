<template>
  <div class="pick_today" v-if="products && products.length > 0">
    <h5 class="mt-3 mb-3">Produk Terkait</h5>
    <div class="row" v-if="products && products > 0">
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
            <NuxtLink :to="product.slug" class="text-dark">
              <div class="member-plan position-absolute">
                <span class="badge m-3 badge-danger">10%</span>
              </div>
              <div class="p-3">
                <img
                  :src="`${baseApi}/${product.image}`"
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
                  {{ product.name }}
                </h6>
                <h6 class="price m-0 text-dark">
                  <i class="fas fa-weight"></i> 1 Ekor
                </h6>
                <h6
                  class="price m-0 text-dark"
                  style="font-size: large; text-align: right"
                >
                  {{ product.price | formatMoney }}
                </h6>
                <div style="text-align: center; padding-top: 5%">
                  <h6 class="btn btn-success w-100">
                    <i class="fas fa-cart-plus"></i> Tambahkan
                  </h6>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-else>
      <div class="col-12 col-md-12 mb-3 text-muted related-products-empty">
        Belum ada produk terkait
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: ["products"],
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      baseURL: process.env.NUXT_ENV_BASE_URL,
    };
  },
};
</script>

<style scoped>
.related-products-empty {
  font-size: 24px;
}
.item-img {
  max-height: 150px;
}
</style>
