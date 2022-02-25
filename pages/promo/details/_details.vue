<template>
  <div id="page-promo-_details-_details" class="animate__animated">

    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Promo Beliayam.com
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="bg-success rounded shadow-sm text-center p-2">
              <div class="bg-white rounded shadow-sm p-4 mb-3">
                <img :src="`${this.$config.baseURL}/img/promos/p1.png`" class="img-fluid w-100 h-100 cover-full`" />
              </div>
              <img class="p-beliayam-logo" :src="`${this.$config.baseURL}/img/logo.png`" />
              <h5 class="mt-2 mb-1 text-white">Beliayam.com</h5>
              <div class="pt-3">
                <p class="btn btn-warning btn-lg btn-block mb-0">
                  <i class="fad fa-tags mr-1"></i> AYAMNYUS50 OFF
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div
              class="beliayam-promo overflow-hidden rounded shadow-sm bg-white"
            >
              <div class="promo_detail">
                <div
                  class="title p-3 bg-white shadow-sm d-flex align-items-center"
                >
                  <div class="title">
                    <h5 class="font-weight-bold text-success">
                      Diskon Hingga 20%
                    </h5>
                    <p class="small text-muted m-0">
                      Tersedia Hingga 25%
                    </p>
                  </div>
                  <div class="ml-auto">
                    <NuxtLink to="/promo/by-one-get-one/produk"
                      class="btn btn-lg btn-danger bg-danger px-5 border-0"
                      >Lihat Produk Promo</NuxtLink
                    >
                  </div>
                </div>
                <div class="p-3 bg-light">
                  <p class="font-weight-bold mb-2">Deskripsi</p>
                  <p class="small m-0">
                    Enjoy free delivery every buy long bread, only at New York.
                    Thank You for choosing Beliayam.com 😊
                  </p>
                </div>
                <div class="p-3">
                  <p class="font-weight-bold mb-2">Syarat & Ketentuan</p>
                  <ul class="pl-3 mb-0">
                    <li class="text-muted">
                      Easypromos only uses detials of its users to facilitate
                      the successful operation of the promotions.<br />Easypromos
                      will never utilize detials of registered users for any
                      other reason.
                    </li>
                    <li class="text-muted">
                      Easypromos cannot be held responsible for the prizes,
                      products or services offered to useres thorugh the
                      promotions.
                    </li>
                    <li class="text-muted">
                      Easypromos cannot be held responsible for the prizes,
                      products or services offered to useres thorugh the
                      promotions.
                    </li>
                    <li class="text-muted">
                      Easypromos only uses detials of its users to facilitate
                      the successful operation of the promotions.<br />Easypromos
                      will never utilize detials of registered users for any
                      other reason.
                    </li>
                    <li class="text-muted">
                      Easypromos cannot be held responsible for the prizes,
                      products or services offered to useres thorugh the
                      promotions.
                    </li>
                  </ul>
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
  name: "Promo",
  // layout: "blog"

  head: {
    title: "Promo Beliayam.com",
    htmlAttrs: {
      lang: "id",
    },
  },
  mounted() {
    document.getElementById("page-promo-_details-_details").classList.add("animate__fadeInRight");
  },
  beforeDestroy() {
    document
      .getElementById("page-promo-_details-_details")
      .classList.add("animate__fadeOutLeft");
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}

.btn-view-promo {
  color: darkred;
  background-color: #ffffff;
  border-color: #ffc107;
}

.bg-promo {
  background-color: #ffba08 !important;
}
.slider-container {
  width: 100%;
  /* height: 190px; */
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 0;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-shadow {
  box-shadow: 1px 1px 5px 0px grey;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .slider-image {
    height: 120px;
  }
}

@media only screen and (min-width: 481px) {
  .slider-image {
    height: 175px;
  }
}

@media only screen and (min-width: 690px) {
  .slider-image {
    height: 250px;
  }
}
</style>
