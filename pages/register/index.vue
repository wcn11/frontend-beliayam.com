<template>
  <div id="page-register" class="animate__animated">
    <AuthSignUp />
  </div>
</template>

<script>
export default {
  name: "Signup",
  layout: "blank",

  mounted() {
    document.getElementById("page-register").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-register")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>
