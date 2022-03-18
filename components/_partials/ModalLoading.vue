<template>
  <div
    class="modal fade"
    id="modalGlobalLoading"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalGlobalLoadingLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <img :src="require('static/img/loading.gif')" alt="Memuat data..." />
    </div>
  </div>
</template>

<script>
export default {
  name: "PartialsModalLoading",
  mounted() {
    $("#modalGlobalLoading").appendTo("body").modal("show");
  },
  beforeDestroy() {
    $("#modalGlobalLoading").modal("hide");
    $("body").removeClass("modal-open")
    $(".modal-backdrop").remove();
  },
};
</script>

<style>
.modal {
  overflow-y: auto !important;
}
</style>