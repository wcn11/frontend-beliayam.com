<template>
  <div id="page-category-index" class="animated__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Kategori Beliayam.com
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 margin-bottom-10"
            v-for="ctg in categories"
            :key="ctg._id"
          >
            <div class="bg-danger rounded shadow-sm text-center p-2">
              <div class=" rounded shadow-sm mb-3">
                <img :src="`${baseApi}/${ctg.image}`" class="img-fluid" />
              </div>
              <!-- <img class="p-beliayam-logo" src="img/logo.png" /> -->
              <h5 class="mt-2 mb-1 text-white">{{ ctg.name }}</h5>
              <!-- <p class="mt-2 mb-1 text-white">Rp. 19.000 - Rp. 75.000</p> -->
              <div class="pt-3">
                <NuxtLink :to="`/kategori/${ctg.slug}`">
                  <p class="btn btn-warning btn-lg btn-block mb-0">
                    <i class="fad fa-tags mr-1"></i> Cari {{ ctg.name }}
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Kategori",
  // layout: "blog"

  async fetch() {
    await this.$axios
      .get(
        `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/category?page=${this.category.page}&show=${this.category.show}&sortBy=${this.category.sortBy}&orderBy=${this.category.orderBy}&status=${this.category.status}`
      )
      .then((res) => {
        this.categories = res.data.data;
      });
  },
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      categories: [],
      category: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "name",
        status: "active",
      },
    };
  },
  head: {
    title: "Kategori Ayam",
    htmlAttrs: {
      lang: "en",
    },
  },
  mounted() {
    document
      .getElementById("page-category-index")
      .classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-category-index")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
