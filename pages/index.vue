<template>
  <div id="page-home" class="animate__animated">
    <!-- <button @click="setRefreshToken()">click</button> -->
    <Home />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {};
  },
  methods: {
    // setRefreshToken() {
    //   this.$auth.strategy.token.reset();
    //   this.$auth.refreshTokens();
    // },
  },
  mounted() {
    document.getElementById("page-home").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document.getElementById("page-home").classList.add("animate__fadeOutLeft");
  },
};
</script>
