<template>
  <div id="page-checkout-success" class="animate__animated">
      <PaymentSuccess/>
  </div>
</template>

<script>
export default {
  name: "PagePaymentSukses",
  // layout: "blog"

  head: {
    title: "Pesanan Berhasil",
    htmlAttrs: {
      lang: "en",
    },
  },
  mounted() {
    document.getElementById("page-checkout-success").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-checkout-success")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
