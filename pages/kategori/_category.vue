<template>
  <div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-success">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <NuxtLink to="/kategori" class="text-success">Kategori</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ toFirstLetterUpperCase(this.$route.params.category) }}
          </li>
        </ol>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="beliayam-listing">
              <div class="d-flex align-items-center mb-3">
                <h4>{{ toFirstLetterUpperCase(this.$route.params.category) }}</h4>
                <div class="m-0 text-center ml-auto">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn text-muted bg-white mr-2"
                    ><i class="icofont-filter mr-1"></i> Filter</a
                  >
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn text-muted bg-white"
                    ><i class="icofont-signal mr-1"></i> Sort</a
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v1.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Ayam Pejantan
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <NuxtLink to="/broiler-0123">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                            </NuxtLink>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v2.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Ayam Broiler
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-success">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v5.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Drumstick/Paha Ayam
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-success">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v6.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Kulit Ayam
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-success">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v3.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Ayam Petelur
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-warning">15%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v4.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Dada Fillet
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">10%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v7.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Chiken Wings/Sayap
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v8.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Paha Fillet
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v9.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Kepala Ayam
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v10.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Ceker Ayam
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v11.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Ati Ampela
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div
                    class="
                      list-card
                      bg-white
                      h-100
                      rounded
                      overflow-hidden
                      position-relative
                      shadow-sm
                    "
                  >
                    <div class="list-card-image">
                      <a href="product_details.html" class="text-dark">
                        <div class="member-plan position-absolute">
                          <span class="badge m-3 badge-danger">5%</span>
                        </div>
                        <div class="p-3">
                          <img
                            :src="require('static/img/listing/v12.jpg')"
                            class="img-fluid item-img w-100 mb-3"
                          />
                          <h6
                            style="
                              white-space: nowrap;
                              width: 120px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            "
                          >
                            Ayam Kampung
                          </h6>
                          <h6 class="price m-0 text-success">
                            <i class="fas fa-weight"></i> 1 Ekor
                          </h6>
                          <h6
                            class="price m-0 text-success"
                            style="font-size: large; text-align: right"
                          >
                            Rp. 45.000
                          </h6>
                          <div style="text-align: center; padding-top: 5%">
                            <h6 class="btn btn-success">
                              <i class="fas fa-cart-plus"></i> Beli
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
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
  name: "CategoryDynamic",
  // layout: "blog"

  head() {
    return {
      title: this.toFirstLetterUpperCase(this.$route.params.category),
      htmlAttrs: {
        lang: "en",
      },
    };
  },
  mounted() {
    console.log(this.$route.params.category);
  },
  methods: {
    toFirstLetterUpperCase(word) {
      return word[0].toUpperCase() + word.substring(1);
    },
  },
};
</script>

<style scoped>
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
