<template>
  <div
    class="modal fade show"
    id="modalGlobalLoading"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalGlobalLoadingLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <img :src="require('static/img/loading.gif')" alt="Memuat data..." />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "PartialsGlobalLoading",
  watch: {
    "getGlobalModalState": function (newValue, oldValue) {
      if (newValue == true) {
        this.openModal();
      } else {
        $("#modalGlobalLoading").modal("hide");
      }
    },
  },
    computed: {
    ...mapGetters( [
        "getGlobalModalState"
    ]),
  },
  methods: {
    openModal() {
      $("#modalGlobalLoading").appendTo("body").modal("show");
    },
  },
};
</script>

<style>
</style>