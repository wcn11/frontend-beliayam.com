<template>
  <div id="page-verify-register-by-phone" class="animate__animated">
    <AuthVerifySignUpByPhone />
  </div>
</template>

<script>
export default {
  name: "VerifyRegisterByPhone",
  layout: "blank",

  mounted() {
    document.getElementById("page-verify-register-by-phone").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-verify-register-by-phone")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>
