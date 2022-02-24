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
  methods: {},
  mounted() {
    document.getElementById("page-home").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document.getElementById("page-home").classList.add("animate__fadeOutLeft");
  },
};
</script>
