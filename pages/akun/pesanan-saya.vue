<template>
  <div id="page-account-order" class="animate__animated">
      <ProfileOrder/>
  </div>
</template>

<script>
export default {
  name: "PageProfile",
  // layout: "blog"

  head: {
    title: "Pesanan Saya",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    document.getElementById("page-account-order").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-account-order")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
