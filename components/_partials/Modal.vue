<template>
  <!-- Modal -->
  <div>
    <div
      class="modal fade"
      id="globalModal"
      tabindex="-1"
      aria-labelledby="globalModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="globalModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-html="this.$store.state.modal.data.htmlBody">
            <!-- {{
              this.$store.state.modal.data &&
              this.$store.state.modal.data.htmlBody
            }} -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              tutup
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state.modal.data,
    };
  },
};
</script>

<style>
</style>