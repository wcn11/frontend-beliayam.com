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
    return {
    };
  },
  beforeDestroy() {
    document.getElementById("page-home").classList.add("animate__fadeOutLeft");
  },
};
</script>
