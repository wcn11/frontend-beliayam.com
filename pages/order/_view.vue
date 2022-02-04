<template>
  <div id="page-order-_view" class="animate__animated">
    <ProfileOrderView />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  mounted() {
    document.getElementById("page-order-_view").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-order-_view")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>
