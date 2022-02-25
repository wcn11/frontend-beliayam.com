<template>
  <div id="page-recover-reset-password" class="animate__animated">
    <AuthRecoverResetPasswordByEmail />
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: "blank",
  middleware: "alreadyAuthenticated",
  mounted() {
    document.getElementById("page-recover-reset-password").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-recover-reset-password")
      .classList.add("animate__fadeOutRight");
  },
};
</script>

<style>
</style>
