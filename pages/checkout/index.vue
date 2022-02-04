<template>
  <div id="page-checkout-index" class="animate__animated">
      <Checkout/>
  </div>
</template>

<script>
export default {
  name: "PageCheckout",
  layout: "blank",

  head: {
    title: "Checkout",
    htmlAttrs: {
      lang: "en",
    },
  },
  mounted() {
    document.getElementById("page-checkout-index").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-checkout-index")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
