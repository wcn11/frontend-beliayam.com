<template>
      <div
        v-if="productHomepage && productHomepage.length > 0"
        class="parent-product mt-4 mb-4"
      >
        <div
          class="child-product ml-2 mr-2"
          v-for="product in productHomepage"
          :key="product._id"
        >
          <NuxtLink :to="`/kategori/${product.slug}`">
            <span
              class="badge badge-pill badge-product-pill m-0 pt-2 text-center"
              >{{ product.name }}</span
            >
          </NuxtLink>
        </div>
      </div>
</template>

<script>
export default {
  name: "HomeProductShortcut",

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/product/_s/homepage?show=${this.fetchHomepageProductsSetting.show}`
      )
      .then((res) => {
        this.productHomepage = res.data.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      productHomepage: [],
      fetchHomepageProductsSetting: {
        show: 10,
      },
    };
  },
};
</script>

<style scoped>
.badge-product-pill {
  color: white;
  background-color: #cf430f;
}

.parent-product {
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
}

.text-shadow{
    text-shadow: 1px 1px 1px black;

}

.parent-product::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 7px;
  background-color: rgb(221 75 69 / 29%);
  box-shadow: inset -1px -1px 0 rgb(0 0 0 / 5%), inset 1px 1px 0 rgb(0 0 0 / 5%);
}

</style>