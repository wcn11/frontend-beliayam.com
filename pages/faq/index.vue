<template>
  <div id="page-category-_category" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">FAQ</li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="beliayam-listing">
              <div class="d-flex align-items-center mb-3">
                <h4>Frequently Asked Questions</h4>
              </div>
            </div>
            <div class="accordion" id="accordionFAQ">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      Apa itu BeliAyam.Com ?
                    </button>
                  </h2>
                </div>

                <div
                  id="collapse1"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    beliayam.com merupakan sebuah Start-Up yang bergerak
                    dibidang pendistribusian berbagai jenis daging ayam yang
                    berrbasis aplikasi dan website. Kami menjual berbagai jenis
                    produk daging ayam mulai dari ayam broiler, pejantan,
                    kampung, partingan dan produk lainnya. Beliayam.com hadir
                    sebagai solusi masyarakat Indonesia dalam mendapatkan daging
                    ayam segar dengan mudah dan ekonomis.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse2">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Bagaimana cara masuk ke akun Beliayam.com saya ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="collapse2"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Klik tombol login atau masuk pada menu diatas. Terdapat 4
                    metode masuk akun beliayam.com, yaitu menggunakan email,
                    nomor telepon, google, dan facebook. Isi data diri yang
                    diperlukan.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse4">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Bagaimana cara daftar akun Beliayam.com ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse4"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Klik tombol daftar atau registrasi pada menu diatas.
                    Terdapat 4 metode pendaftaran akun beliayam.com, yaitu
                    menggunakan email, nomor telepon, google, dan facebook. Isi
                    data diri yang diperlukan.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse5">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >
                      Bagaimana cara mengubah nomor handphone yang terhubung
                      dengan akun saya ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-5"
                  class="collapse"
                  aria-labelledby="collapse5"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Jika kamu belum login, harap melakukan login terlebih
                    dahulu. Kemudian masuk ke akun saya dengan meng-klik tombol
                    akun saya, lalu pilih menambahkan atau mengubah nomor
                    telepon
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse6">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-6"
                      aria-expanded="false"
                      aria-controls="collapse-6"
                    >
                      Bagaimana cara mengubah alamat email akun saya ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-6"
                  class="collapse"
                  aria-labelledby="collapse6"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Masuk ke akun saya dengan meng-klik tombol akun saya, lalu
                    pilih menambahkan atau mengubah alamat email
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse7">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-7"
                      aria-expanded="false"
                      aria-controls="collapse-7"
                    >
                      Bagaimana jika saya lupa kata sandi akun saya ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-7"
                  class="collapse"
                  aria-labelledby="collapse7"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Masuk ke halaman login atau masuk, klik tombol lupa
                    password. Terdapat 2 metode lupa kata sandi, yaitu reset
                    password dengan email terdaftar atau nomor telepon
                    terdaftar. Lalu ikuti langkah selanjutnya
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse8">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-8"
                      aria-expanded="false"
                      aria-controls="collapse-8"
                    >
                      Ayam jenis apa saja yang dijual ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-8"
                  class="collapse"
                  aria-labelledby="collapse8"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Beli ayam.com menyediakan segala jenis ayam dari berbagai
                    ukuran. Beliayam.com memiliki produk ayam terlengkap untuk
                    memenuhi kebutuhan setiap pelanggan. jangan kuatir dengan
                    produk dari beli ayam.com. ayam di beli ayam. com sudah
                    memiliki sertifikasi halal dan nkv. dan sudah melewati qc yg
                    ketat. ayam broiler ayam pejantan ayam merah ayam kampung
                    partingan / potongan custom (Pilihan)
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse9">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-9"
                      aria-expanded="false"
                      aria-controls="collapse-9"
                    >
                      Bagaimana cara pemesanannya ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-9"
                  class="collapse"
                  aria-labelledby="collapse9"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Pilih produk pada halaman produk atau langsung dari halaman
                    utama, atur kuantitas pembelian produk lalu tambahkan ke
                    keranjang, masuk ke halaman keranjang atau langsung ke
                    halaman checkout.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse10">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-10"
                      aria-expanded="false"
                      aria-controls="collapse-10"
                    >
                      Bagaimana sistem pembayarannya ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-10"
                  class="collapse"
                  aria-labelledby="collapse10"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    pelanggan bisa melakukan pembayaran secara COD ataupun
                    Transfer
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse11">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-11"
                      aria-expanded="false"
                      aria-controls="collapse-11"
                    >
                      Bagaimana sistem pembayaran dengan metode COD (Bayar
                      ditempat) ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-11"
                  class="collapse"
                  aria-labelledby="collapse11"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Pelanggan bisa melakukan pembayaran secara COD ataupun
                    Transfer Setelah checkout, segera lakukan pembayaran Pilih
                    pembayaran secara Cash On Delivery Pembayaran akan dilakukan
                    saat Kurir mengantar Produk kerumah anda. diharapkan
                    membayarkan dengan uang pas
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse12">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-12"
                      aria-expanded="false"
                      aria-controls="collapse-12"
                    >
                      Bagaimana sistem pembayaran dengan metode TRANSFER ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-12"
                  class="collapse"
                  aria-labelledby="collapse12"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Setelah checkout, segera lakukan pembayaran (OTOMATIS via
                    VIRTUAL AKUN). Sistem Beli Ayam Com akan melakukan
                    verifikasi pembayaran Anda. Pesanan akan segera di proses
                    dan diantarkan sampai ke depan rumah Anda
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse13">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-13"
                      aria-expanded="false"
                      aria-controls="collapse-13"
                    >
                      Mana saja area yang jangkauan pengiriman Beliayam.com ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-13"
                  class="collapse"
                  aria-labelledby="collapse13"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Untuk saat ini Beliayam.com baru melayani Area JABODETABEK
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse14">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-14"
                      aria-expanded="false"
                      aria-controls="collapse-14"
                    >
                      Kapan pengiriman dilakukan ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-14"
                  class="collapse"
                  aria-labelledby="collapse14"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Pesanan akan dikirim dihari yang sama jika pemesanan masuk
                    sebelum jam: 16.00 WIB
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse15">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-15"
                      aria-expanded="false"
                      aria-controls="collapse-15"
                    >
                      Apakah ada minimal pembelanjaan ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-15"
                  class="collapse"
                  aria-labelledby="collapse15"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Tidak ada minimal pembelian di Beliayam.com
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse16">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-16"
                      aria-expanded="false"
                      aria-controls="collapse-16"
                    >
                      Apakah Beliayam.com melayani pembelian dalam partai besar
                      ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-16"
                  class="collapse"
                  aria-labelledby="collapse16"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Ya, kami melayani pembelian dalam jumlah besar,baik horeka
                    maupun retail
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse17">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-17"
                      aria-expanded="false"
                      aria-controls="collapse-17"
                    >
                      Apakah diperbolehkan untuk retur ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-17"
                  class="collapse"
                  aria-labelledby="collapse17"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    Retur diperbolehkan apabila produk yang Anda terima tidak
                    sesuai dan tidak memenuhi spesifikasi yang telah dipesan
                    sebelumnya. Dengan catatan, pengecekan terhadap produk
                    disaksikan oleh kurir pada saat pengantaran produk (Sebelum
                    kurir pergi). Jika memang tidak sesuai, maka produk
                    pengganti akan dikirim keesokan harinya.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse18">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse-19"
                      aria-expanded="false"
                      aria-controls="collapse-19"
                    >
                      Bagaimana cara untuk komplain dan retur ?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse-19"
                  class="collapse"
                  aria-labelledby="collapse18"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    1. setiap menerima produk dari Beliayam.com wajib di cek
                    terlebih dahulu <br/> 2. jangan di terima jika produk yang di
                    terima tidak sesuai pesanan, berbau, berlendir, berwarna
                    hijau. dan harus di retur kembali ke beliayam.com 3. Info
                    retur yang diterima oleh pihak beliayam.com maximal adalah 3
                    jam setelah produk diterima. 4. wajib menyertakan foto atau
                    video jika komplain terkait dengan berat dan warna hijau.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="collapse3">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="collapse3"
                  data-parent="#accordionFAQ"
                >
                  <div class="card-body">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
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
  name: "FrequentlyAskedQuestions",
  // layout: "blog"

  head() {
    return {
      title: "Frequently Asked Questions",
      htmlAttrs: {
        lang: "id",
      },
    };
  },
  mounted() {
    document
      .getElementById("page-category-_category")
      .classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-category-_category")
      .classList.add("animate__fadeOutLeft");
  },
  methods: {},

  filters: {
    formatDate(date) {
      return moment(date).format("DD-MM-yyyy, HH:mm");
    },

    formatMoney(val) {
      return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.item-img {
  max-height: 215px;
  height: 215px;
}
.label-product {
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.margin-bottom-10 {
  margin-bottom: 10px;
}
.category-description {
  font-size: 15px;
}

.not-found-anything {
  margin: 10%;
}
</style>
