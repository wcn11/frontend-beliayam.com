<template>
  <div id="page-register-by-phone" class="animate__animated">
    <AuthForgotPasswordPhone />
  </div>
</template>

<script>
export default {
  name: "LoginByPhone",
  layout: "blank",

  mounted() {
    document
      .getElementById("page-register-by-phone")
      .classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-register-by-phone")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>
