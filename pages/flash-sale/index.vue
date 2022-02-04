<template>
  <div id="page-flash-sale-index" class="animate__animated">
    <flashSale />
  </div>
</template>

<script>
export default {
  name: "FlashSale",
  layout: "default",
  mounted() {
    document.getElementById("page-flash-sale-index").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-flash-sale-index")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>
