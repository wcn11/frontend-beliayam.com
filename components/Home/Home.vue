<!-- Please remove this file from your project -->
<template>
  <div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0 d-none">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <a href="#" class="text-danger">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page"></li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="beliayam-home-page home-container">
              <HomePromo />

              <HomeCategories />

              <!-- <HomeProductShortcut /> -->

              <HomeProductOnDiscount />

              <HomeBestChoice />

              <HomeLimitedStock />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <p v-if="$fetchState.pending">Memuat data...</p>
    <p v-else-if="$fetchState.error">Terjadi Kesalahan :(</p>
    <div v-else>
      <h1>Beliayam.com</h1>
      <ul>
        <li v-for="mountain of mountains" :key="mountain.title">{{ mountain.title }}</li>
      </ul>
      <button class="btn btn-danger" @click="$fetch">Refresh</button>
    </div> -->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mountains: [],
    };
  },
  created() {
    this.$store.dispatch("setGlobalModal", true);
  },
  mounted() {
    this.$store.dispatch("setGlobalModal", false);
  },

  head: {
    title: "Beranda Beliayam.com",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: "fixed-bottom-padding",
    },
  },
};
</script>

<style scoped>
.home-container {
  margin-top: 20%;
}

@media only screen and (max-device-width: 576px) {
  .home-container {
    margin-top: 15%;
  }
}
</style>
