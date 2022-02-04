<template>
  <div id="page-verification" class="animate__animated">
    <Verification />
  </div>
</template>

<script>
export default {
  name: "Verifikasi",
  layout: "blank",

  mounted() {
    document.getElementById("page-verification").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-verification")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>
