

<script>
export default {
  name: "_p",
  layout: "blank",

  methods: {
    downloadCertificate() {
      const user = this.$route.query.user;

      let url = `${process.env.NUXT_ENV_BASE_URL}/certificate/competition/template/2021/${user}.jpg`;

      this.$axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/jpg" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `${user}.jpg`;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(err => {
            alert("Sertifikat Tidak Ditemukan")
        });
    },
  },
  created() {
    this.downloadCertificate();
  },
};
</script>