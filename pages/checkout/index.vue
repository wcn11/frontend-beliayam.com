<template>
  <div>
      <Checkout/>
  </div>
</template>

<script>
export default {
  name: "PageCheckout",
  // layout: "blog"

  head: {
    title: "Checkout",
    htmlAttrs: {
      lang: "en",
    },
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
