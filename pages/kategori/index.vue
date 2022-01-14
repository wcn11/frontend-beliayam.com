<template>
  <div>

    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-success">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Kategori Beliayam.com
          </li>
        </ol>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-md-3 margin-bottom-10" v-for="i in 10" :key="i">
            <div class="bg-success rounded shadow-sm text-center p-2">
              <div class="bg-white rounded shadow-sm p-4 mb-3">
                <img src="img/promos/p1.png" class="img-fluid" />
              </div>
              <!-- <img class="p-beliayam-logo" src="img/logo.png" /> -->
              <h5 class="mt-2 mb-1 text-white">Broiler</h5>
              <p class="mt-2 mb-1 text-white">Rp. 19.000 - Rp. 75.000</p>
              <div class="pt-3">
                <NuxtLink to="/kategori/broiler">
                <p class="btn btn-warning btn-lg btn-block mb-0">
                  <i class="icofont-tag mr-1"></i> Cari Broiler
                </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <a href="#" class="text-success">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Promo details
          </li>
        </ol>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: "Kategori",
  // layout: "blog"

  head: {
    title: "Kategori Ayam",
    htmlAttrs: {
      lang: "en",
    }
  },
  mounted(){
      console.log(this.$route.params)
  }
};
</script>

<style scoped>
  .margin-bottom-10{
    margin-bottom: 10px;
  }
</style>
