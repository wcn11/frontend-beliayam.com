<template>
  <div id="page-login" class="animate__animated">
    <AuthLogin />
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: "blank",
  middleware: "alreadyAuthenticated",
  mounted() {
    document.getElementById("page-login").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-login")
      .classList.add("animate__fadeOutRight");
  },
};
</script>

<style>
</style>
