<template>
  <div>
    <LayoutsHeader :user="user"></LayoutsHeader>

    <LayoutsFooter :user="user"></LayoutsFooter>

    <div v-if="$nuxt.isOffline">You are offline</div>
    
    <GlobalModal v-if="this.$store.state.globalModal"/>

  </div>
</template>


<script>
import GlobalModal from "../components/_partials/GlobalLoading.vue"

export default {
  async fetch() {
    if (this.$store.getters["auth/isAuthenticated"]) {
      const user = await this.$axios.$get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/me`
      );
      // this.$store.dispatch("auth/getUser");
      this.$store.commit("auth/setUser", user.data);
      this.user = user.data;
    }
  },
  components: {
    GlobalModal
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async setScript() {
      // const user = await this.$axios.$get(
      //   `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/me`
      // );

      // await this.$store.dispatch("auth/getUser")
      // Dark Mode
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      );
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme) {
        document.documentElement.setAttribute("class", currentTheme);

        if (currentTheme === "dark") {
          toggleSwitch.checked = true;
        }
      }
      function switchTheme(e) {
        if (e.target.checked) {
          document.documentElement.setAttribute("class", "dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.setAttribute("class", "light");
          localStorage.setItem("theme", "light");
        }
      }
      toggleSwitch.addEventListener("change", switchTheme, false);
    },
  },
  mounted() {
    this.setScript();
  },
};
</script>

<style scoped>
#modal-loading {
  background-color: rgb(135 19 19 / 65%);
  height: 100%;
  min-height: 100%;
}

.loading-container {
  position: relative;
  top: 40%;
  bottom: 60%;
}
</style>