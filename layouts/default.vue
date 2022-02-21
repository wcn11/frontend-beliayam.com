<template>
  <div>
    <!-- <button data-toggle="modal" data-target="#modal-loading">tes</button> -->
    <LayoutsHeader></LayoutsHeader>

    <LayoutsFooter></LayoutsFooter>

    <div v-if="$nuxt.isOffline">You are offline</div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modal-loading"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="justify-content-center text-center loading-container">
        <img :src="require('~/static/gif/loading.gif')" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      cookieToken: this.$cookies.get("bacClientToken")
    }
  },
  created(){

    this.$nuxt.$on('tokenSet', (token) => {
      this.cookieToken = token
      console.log('hehe')
    });
  },
  methods: {
    setScript() {
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