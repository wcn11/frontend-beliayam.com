<template>
  <ModalLoading v-if="getGlobalModalState" />
</template>

<script>
import ModalLoading from "./ModalLoading.vue";

import { mapGetters } from "vuex";
export default {
  name: "PartialsGlobalLoading",
  components: {
    ModalLoading,
  },
  watch: {
    "getGlobalModalState": function (newValue) {
      if(newValue == false) {
        $("#modalGlobalLoading").modal("hide");
      }
    },
  },
  computed: {
    ...mapGetters(["getGlobalModalState"]),
  },
};
</script>

<style>
</style>