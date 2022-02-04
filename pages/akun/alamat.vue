<template>
  <div id="page-account-address" class="animate__animated">
      <ProfileAddress/>
  </div>
</template>

<script>
export default {
  name: "PageProfileAddress",
  // layout: "blog"

  head: {
    title: "Informasi Akun",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    document.getElementById("page-account-address").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-account-address")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
