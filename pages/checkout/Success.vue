<template>
  <div>
      <CheckoutSuccess/>
  </div>
</template>

<script>
export default {
  name: "PageCheckoutSuccess",
  // layout: "blog"

  head: {
    title: "Pesanan Berhasil",
    htmlAttrs: {
      lang: "en",
    },
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
