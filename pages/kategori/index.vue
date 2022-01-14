<template>
  <div>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-md-3 margin-bottom-10" v-for="i in 10" :key="i">
            <div class="bg-success rounded shadow-sm text-center p-2">
              <div class="bg-white rounded shadow-sm p-4 mb-3">
                <img src="img/promos/p1.png" class="img-fluid" />
              </div>
              <img class="p-beliayam-logo" src="img/logo.png" />
              <h5 class="mt-2 mb-1 text-white">Broiler</h5>
              <div class="pt-3">
                <p class="btn btn-warning btn-lg btn-block mb-0">
                  <i class="icofont-tag mr-1"></i> Cari Broiler
                </p>
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
  name: "Category",
  // layout: "blog"
  mounted(){
      console.log(this.$route.params.category)
  }
};
</script>

<style scoped>
  .margin-bottom-10{
    margin-bottom: 10px;
  }
</style>
