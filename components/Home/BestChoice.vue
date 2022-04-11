<template>
  <div v-if="products && products.length > 0">
    <div class="title d-flex align-items-center py-3">
      <h5 class="m-0">Produk Beliayam.com</h5>
      <NuxtLink to="/pilihan" class="ml-auto text-white text-see-more"
        >Produk Lainnya <i class="text-white fad fa-chevron-circle-right"></i
      ></NuxtLink>
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
                  <div
                    class="member-plan position-absolute"
                    v-if="product.stock <= 0"
                  >
                    <span class="badge badge-danger badge-discount">
                      Kehabisan Persediaan</span
                    >
                  </div>
                  <img
                    :src="`${baseApi}/${product.image}`"
                    class="img-fluid item-img w-100 mb-3 rounded"
                  />

                  <p class="text-label mb-0">
                    {{ product.name }}
                  </p>
                  <p class="">
                    <i class="fas fa-weight"></i> {{ product.weight }} Kilogram
                  </p>
                  <h6
                    class="price m-0 text-dark mt-2"
                    style="font-size: large; text-align: right"
                  >
                    {{ product.price | formatMoney }}
                  </h6>
                  <div style="text-align: center; padding-top: 5%">
                    <h6 class="btn btn-danger w-100">
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
  name: "HomeBestChoice",

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/_s/homepage?show=${this.fetchProductSetting.show}`
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
        // page: 1,
        show: 8,
        // sortBy: "ASC",
        // orderBy: "name",
        // min_stock: 10,
      },
    };
  },
};
</script>

<style scoped>
.text-see-more {
  background-color: #cf430f;
  color: white;
  font-size: 14px;
  padding: 7px;
  border-radius: 9px;
}
.item-img {
  max-height: 150px;
}
.text-label {
  white-space: nowrap;
  width: 100%;
  line-height: 1.5;
  font-weight: bold;
  font-size: calc(63% + 9px);
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 480px) {
  .text-see-more {
    font-size: 10px;
  }
  .text-label {
    font-size: calc(27% + 9px);
  }
}
@media (max-width: 768px) {
  .text-see-more {
    font-size: 10px;
  }
  .text-label {
    font-size: calc(27% + 9px);
  }
}
</style>