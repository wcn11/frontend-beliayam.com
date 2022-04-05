<template>
  <div id="page-category-_category" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Syaran & Ketentuan
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body p-5">
                <h3 class="card-title text-center">Syarat & Ketentuan</h3>

                <div class="mt-5">
                  <h5>Kebijakan Pengiriman</h5>
                  <p>
                    Maksimal pengiriman 2 (dua) hari setelah pembelian.<br /><br />

                    Jika pesanan belum diterima dalam waktu yang telah
                    ditentukan, Anda dapat menghubungi tim customer service kami
                    melalui e-mail support@beliayam.com untuk pengajuan
                    komplain. <br />
                    <br />

                    Pesanan diantarkan sesuai dengan Alamat yang Anda cantumkan
                    pada aplikasi saat melakukan proses check out. <br />
                    <br />
                    Apabila Anda tidak menerima produk yang dibeli dalam waktu
                    yang ditentukan, pesanan Anda akan dikembalikan ke gudang
                    beliayam.com. <br />
                    <br />
                    Apabila setelah 1x24 jam tidak ada konfirmasi dari pembeli.
                    Barang yang tidak diterima oleh pembeli pada waktu yang
                    telah ditentukan akan dianggap telah diterima dan
                    pengembalian dana tidak dapat dilakukan. <br />
                    <br />
                    Pembeli memahami bahwa setiap produk yang telah masuk dalam
                    proses pembayaran tidak dapat dibatalkan dengan alasan
                    apapun. <br />
                    <br />
                    beliayam.com tidak bertanggung jawab kepada Anda atas
                    kerugian dalam bentuk apapun yang timbul dari keterlambatan
                    pengiriman produk atau produk yang tidak berhasil diantarkan
                    dikarenakan kesalahan pihak pembeli. <br />
                    <br />
                  </p>
                </div>

                <div>
                  <h5>Penolakan</h5>
                  <p>
                    Anda memahami apabila pada saat pemesanan produk tidak
                    tersedia dikarenakan alasan apapun, beliayam.com akan
                    memberitahu Anda melalui e-mail atau telepon yang tercantum
                    dalam Aplikasi bahwa produk tidak tersedia dan menawarkan
                    kesediaan Anda untuk menunggu atau melakukan pengembalian
                    dana. Proses pengembalian dana paling lambat 5 (lima) hari
                    kerja setelah pemberitahuan.
                  </p>
                </div>

                <div>
                  <h5>Pembatalan</h5>
                  <p>
                    Ketika pembayaran telah dilakukan, Anda tidak dapat
                    membatalkan produk yang telah dibeli.
                  </p>
                </div>
                <div>
                  <h5>Kebijakan Pengembalian</h5>
                  <p>
                    beliayam.com berupaya dengan seksama untuk mengirimkan
                    produk yang layak untuk Anda, namun apabila Anda dikirimkan
                    produk yang Anda anggap tidak sesuai, Anda berhak untuk
                    menolak saat produk tersebut sampai di alamat pemesanan Anda
                    dengan memberikan alasan mengapa produk tidak dapat
                    diterima. <br /><br />

                    Namun apabila produk tersebut telah diterima yang dibuktikan
                    dengan tanda bukti pihak penerima, maka Anda tidak dapat
                    mengajukan pengembalian dana. <br /><br />

                    Maka itu, Anda wajib untuk meneliti dengan seksama bahwa
                    produk yang Anda terima telah sesuai. <br />
                    <br />

                    Kebijakan pengembalian dana atas produk yang tidak sesuai
                    akan diproses paling lambat dalam waktu 5 (lima) hari kerja
                    setelah Anda menginformasikan nomor akun bank Anda untuk
                    kepentingan pengembalian dana. <br /><br />
                  </p>
                </div>
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
  name: "SyaratDanKetentuan",
  head: {
    title: "Syarat & Ketentuan",
    htmlAttrs: {
      lang: "en",
      script: [
        {
          src: "~/static/js/countdown.min.js",
        },
      ],
    },
  },
};
</script>

<style>
</style>