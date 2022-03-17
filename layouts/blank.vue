<template>
  <div>
    <Nuxt />
    <GlobalModal />
  </div>
</template>
<script> 
import GlobalModal from "../components/_partials/GlobalLoading.vue";

export default {
  async fetch() {
    if (this.$store.getters["auth/isAuthenticated"]) {
      const user = await this.$axios.$get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/me`
      );

      this.$store.commit("auth/setUser", user.data);
      this.user = user.data;
    }
  },
  components: {
    GlobalModal,
  },
};
</script>