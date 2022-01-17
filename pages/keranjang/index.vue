<template>
  <div>
      <Cart/>
  </div>
</template>

<script>
export default {
  name: "PageCart",
  // layout: "blog"

  head: {
    title: "Keranjang",
    htmlAttrs: {
      lang: "en",
    }
  },
  mounted(){
      console.log(this.$route.params)
  }
};
</script>

<style scoped>
  .margin-bottom-10{
    margin-bottom: 10px;
  }
</style>
