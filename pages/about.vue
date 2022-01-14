<template>
  <div>
    <About />
    <div>{{ content }} - {{ renderedOn }}</div>
    <button @click="refresh">Refresh</button>
    <NuxtLink to="/">Ke Beranda</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "about",
  asyncData() {
    return {
      content: "Created at: " + new Date(),
      renderedOn: process.client ? "client" : "server",
    };
  },
  data: () => {
    return {
      title: "Tentang Beliayam.com",
    };
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  methods: {
    refresh() {
      this.$nuxt.refresh();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
    window.onNuxtReady(() => {
      console.log("123");
    });
  },
};
</script>
