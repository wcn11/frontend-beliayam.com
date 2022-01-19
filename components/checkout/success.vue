<template>
<div>

    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container text-center">
        🎉 Pesanan Anda Sedang Kami Proses 🎉
      </div>
    </nav>
    <div class="row d-flex justify-content-center bg-success-order">
      <div class="col-md-6">
        <div class="p-5 text-center">
          <i class="icofont-check-circled display-1 text-warning"></i>
          <h1 class="text-white font-weight-bold">
            Pesanan Berhasil Dilakukan 🎉
          </h1>
          <p class="text-white">
            Cek status pemesanan anda di
            <a href="#" class="font-weight-bold text-decoration-none text-white"
              >Pesanan Saya</a
            >
            untuk informasi lebih lanjut.
          </p>
        </div>

        <div class="bg-white rounded p-3 m-5 text-center">
          <h6 class="font-weight-bold mb-2">Mempersiapkan pesanan Anda</h6>
          <p class="small text-muted">
            Pesanan anda akan disiapkan dan akan segera datang
          </p>
          <a
            href="status_onprocess.html"
            class="btn rounded btn-warning btn-lg btn-block"
            >Lihat Pesanan Saya</a
          >
        </div>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: "Checkout",
};
</script>

<style scoped>
.bg-success-order{
  background-color: #ce0000;
}
</style>