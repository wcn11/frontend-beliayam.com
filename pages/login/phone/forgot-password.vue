<template>
  <div id="page-login-forgot-password-by-phone" class="animate__animated">
    <AuthForgotPasswordPhone />
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: "blank",
  middleware: "alreadyAuthenticated",
  mounted() {
    document.getElementById("page-login-forgot-password-by-phone").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-login-forgot-password-by-phone")
      .classList.add("animate__fadeOutRight");
  },
};
</script>

<style>
</style>
