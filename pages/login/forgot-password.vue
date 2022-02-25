<template>
  <div id="page-login-forgot-password" class="animate__animated">
    <AuthForgotPasswordEmail />
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: "blank",
  middleware: "alreadyAuthenticated",
  mounted() {
    document.getElementById("page-login-forgot-password").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-login-forgot-password")
      .classList.add("animate__fadeOutRight");
  },
};
</script>

<style>
</style>
