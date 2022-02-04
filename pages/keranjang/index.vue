<template>
  <div id="page-cart-index" class="animate__animated">
      <Cart/>
  </div>
</template>

<script>
export default {
  name: "PageCart",
  head: {
    title: "Keranjang",
    htmlAttrs: {
      lang: "en",
    }
  },
  mounted() {
    document.getElementById("page-cart-index").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-cart-index")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
  .margin-bottom-10{
    margin-bottom: 10px;
  }
</style>
