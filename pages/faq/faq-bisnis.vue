<template>
  <div id="page-category-_category" class="animate__animated">
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            FAQ Business
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="beliayam-listing">
              <div class="d-flex align-items-center mb-3">
                <h4>Frequently Asked Questions Business</h4>
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
                      Apakah bisa pesan ayam dalam jumlah besar?
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
                    Beliayam.com juga melayani penjualan business to business
                    dalam jumlah besar
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
                      Apakah pemesanan dalam jumlah besar akan mendapatkan harga
                      spesial?
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
                    Pemesanan dalam jumlah besar akan mendapatkan harga
                    spesial/diskon dari harga satuan.
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
                      Berapa jumlah pemesanan minimum untuk mendapatkan harga
                      spesial?
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
                    Jumlah minimum order untuk mendapatkan harga spesial ialah
                    50 item/order. Semakin banyak pemesanan, semakin banyak
                    diskon yang diperoleh
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
                      Produk apa saja yang bisa dipesan dalam jumlah besar?
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
                    Semua produk beliayam.com bisa dipesan dalam jumlah besar
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
                      Berapa lama pesanan akan dikirim?
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
                    Pesanan akan dikirim sesegera mungkin. Untuk pesanan diatas
                    200 ekor, paling lambat akan dikirim 3 hari setelah
                    pemesanan
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
                      Bagaimana cara memesan produk dalam jumlah besar?
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
                    Pemesanan bisa dilakukan menggunakan aplikasi dan website
                    beliayam.com. Bagi konsumen yang sudah berlangganan, akan
                    mendapatkan kode voucher untuk mendapatkan harga spesial.
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
                      Bagaimana cara untuk berlangganan?
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
                    Cara untuk berlangganan bisa menghubungi kontak person
                    kemitraan beliayam.com : +62 818-0250-9366
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
  name: "FrequentlyAskedQuestionBusiness",
  head() {
    return {
      title: "Frequently Asked Questions Business",
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
