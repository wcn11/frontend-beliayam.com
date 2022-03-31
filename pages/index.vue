<template>
  <div id="page-home" class="animate__animated">
    <Home />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {};
  },
  beforeDestroy() {
    document.getElementById("page-home").classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
#page-home {
  background: url("~/static/img/background-global.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
}
</style>
