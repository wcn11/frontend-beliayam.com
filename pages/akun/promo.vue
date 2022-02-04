<template>
  <div id="page-account-promo" class="animate__animated">
      <ProfilePromo/>
  </div>
</template>

<script>
export default {
  name: "PageProfile",
  // layout: "blog"

  head: {
    title: "Informasi Akun",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    document.getElementById("page-account-promo").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-account-promo")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
