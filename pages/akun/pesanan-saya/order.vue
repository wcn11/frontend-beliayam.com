<template>
  <div id="page-account-order-details" class="animate__animated">
      <ProfileOrderDetails/>
  </div>
</template>

<script>
export default {
  name: "PagesAkunPesananSayaOrder",
  // layout: "blog"

  head: {
    title: "Pesanan Saya",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    document.getElementById("page-account-order-details").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-account-order-details")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
