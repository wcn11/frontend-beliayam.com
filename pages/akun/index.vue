<template>
  <div id="page-account-index" class="animate__animated">
      <Profile/>
  </div>
</template>

<script>
export default {
  name: "PageProfile",
  // layout: "blog"
  middleware: "authenticated",
  head: {
    title: "Informasi Akun",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    document.getElementById("page-account-index").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-account-index")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
