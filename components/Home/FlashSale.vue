<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="beliayam-vegan">
            <div class="fresh-vegan pb-2">
              <div class="d-flex align-items-center mt-4 mb-2">
                <h5 class="m-0">Flash Sale</h5>
                <a href="listing.html" class="ml-auto text-dark"
                  >lihat lainnya</a
                >
              </div>

              <VueSlickCarousel
                v-bind="settings"
                :arrows="true"
                class="trending-slider"
              >
                <div class="beliayam-slider-item">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                      ml-2
                      mr-2
                    "
                  >
                    <div class="list-card-beliayam-2 p-3">
                      <div class="member-plan position-absolute">
                        <span class="badge badge-danger">10%</span>
                      </div>
                      <a
                        href="product_details.html"
                        class="text-decoration-none text-dark"
                      >
                        <img src="img/green/g1.jpg" class="img" />
                        <h5 class="text-dark">Daging Ayam Fillet</h5>
                        <h6 class="mb-1 font-weight-bold">
                          Rp. 42.000 <del class="text-danger">Rp. 45.000</del>
                        </h6>
                        <p class="text-gray mb-0 small">Fresh Premium item.</p>
                        <p class="small text-muted m-0 text-dark">
                          1 Kilogram.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="beliayam-slider-item">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                      ml-2
                      mr-2
                    "
                  >
                    <div class="list-card-beliayam-2 p-3">
                      <div class="member-plan position-absolute">
                        <span class="badge badge-success">10%</span>
                      </div>
                      <a
                        href="product_details.html"
                        class="text-decoration-none text-dark"
                      >
                        <img src="img/green/g2.jpg" class="img" />
                        <h5 class="text-dark">Ayam Broiler</h5>
                        <h6 class="mb-1 font-weight-bold">Rp. 38.000</h6>
                        <p class="text-gray mb-0 small">Fresh Premium item.</p>
                        <p class="small text-muted m-0 text-dark">1 Ekor.</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="beliayam-slider-item">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                      ml-2
                      mr-2
                    "
                  >
                    <div class="list-card-beliayam-2 p-3">
                      <div class="member-plan position-absolute">
                        <span class="badge badge-dark">10%</span>
                      </div>
                      <a
                        href="product_details.html"
                        class="text-decoration-none text-dark"
                      >
                        <img src="img/green/g3.jpg" class="img" />
                        <h5 class="text-dark">Ayam Pejantan</h5>
                        <h6 class="mb-1 font-weight-bold">
                          Rp. 45.000 <del class=" text-danger">Rp. 40.000</del>
                        </h6>
                        <p class="text-gray mb-0 small">Fresh Premium item.</p>
                        <p class="small text-muted m-0 text-dark">1 Ekor.</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="beliayam-slider-item">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                      ml-2
                      mr-2
                    "
                  >
                    <div class="list-card-beliayam-2 p-3">
                      <div class="member-plan position-absolute">
                        <span class="badge badge-success">10%</span>
                      </div>
                      <a
                        href="product_details.html"
                        class="text-decoration-none text-dark"
                      >
                        <img src="img/green/g2.jpg" class="img" />
                        <h5 class="text-dark">Ayam Broiler</h5>
                        <h6 class="mb-1 font-weight-bold">Rp. 38.000</h6>
                        <p class="text-gray mb-0 small">Fresh Premium item.</p>
                        <p class="small text-muted m-0 text-dark">1 Ekor.</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="beliayam-slider-item">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                      ml-2
                      mr-2
                    "
                  >
                    <div class="list-card-beliayam-2 p-3">
                      <div class="member-plan position-absolute">
                        <span class="badge badge-success">10%</span>
                      </div>
                      <a
                        href="product_details.html"
                        class="text-decoration-none text-dark"
                      >
                        <img src="img/green/g4.jpg" class="img" />
                        <h5 class="text-dark">Ayam Frozen</h5>
                        <h6 class="mb-1 font-weight-bold">
                          Rp. 30.000 <del class="text-danger">Rp. 25.000</del>
                        </h6>
                        <p class="text-gray mb-0 small">Fresh Premium item.</p>
                        <p class="small text-muted m-0 text-dark">
                          700 - 900 Gram.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "HomeParting",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        centerPadding: "30px",
        slidesToShow: 4,
        arrows: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 545,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "100px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "20px",
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>