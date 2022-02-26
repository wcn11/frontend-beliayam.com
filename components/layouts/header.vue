<template>
  <div>
    <div class="border-bottom p-3 d-none mobile-nav">
      <div class="title d-flex align-items-center">
        <NuxtLink
          to="/"
          class="text-decoration-none text-dark d-flex align-items-center"
        >
          <img
            class="beliayam-logo mr-2"
            :src="require('/static/img/logo.png')"
          />
          <h4 class="font-weight-bold text-dark m-0">Beliayam.com</h4>
        </NuxtLink>

        <p class="ml-auto m-0">
          <a
            href="javascript:void(0)"
            class="
              text-decoration-none
              bg-white
              p-1
              rounded
              shadow-sm
              d-flex
              align-items-center
            "
          >
            <i class="text-dark fad fa-badge-percent"></i>
            <span class="badge badge-danger p-1 ml-1 small">50%</span>
          </a>
        </p>
        <NuxtLink
          to="/keranjang"
          class="text-dark dropdown-toggle not-drop ml-auto m-0"
          id="dropdownCart"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i
            class="
              fad
              fa-shopping-cart
              d-flex
              align-items-center
              bg-light
              rounded-pill
              p-2
              shadow-sm
            "
          >
          </i>
          <span class="ml-1 cart-label-count">
            {{ getCartsNav.length }}
          </span>
        </NuxtLink>
        <a class="toggle ml-3" href="javascript:void(0)">
          <LayoutsMobileNav :carts="getCartsNav" />
          <!-- <i class="fas fa-bars"></i
        > -->
        </a>
      </div>
    </div>

    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
        <i class="fad fa-moon"></i>
      </label>
      <em>Mode Gelap!</em>
    </div>

    <div class="bg-white shadow-sm beliayam-main-nav">
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          bg-white
          beliayam-header
          py-0
          container-fluid
        "
      >
        <NuxtLink class="navbar-brand mr-0 navbar-logo" to="/"
          ><img
            class="img-fluid logo-img shadow-sm"
            :src="require('static/img/logo_navbar.png')"
        /></NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <div class="ml-3 d-flex align-items-center">
          <div class="dropdown mr-3">
            <a
              class="
                text-dark
                dropdown-toggle
                d-flex
                align-items-center
                beliayam-location-drop
              "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div>
                <i
                  class="
                    fad
                    fa-map-marker-alt
                    d-flex
                    align-items-center
                    bg-light
                    rounded-pill
                    p-2
                    border
                    shadow-sm
                    mr-2
                  "
                ></i>
              </div>
              <div>
                <p class="text-muted mb-0 small">Pilih Lokasi</p>
                Jakarta
              </div>
            </a>
            <div
              class="dropdown-menu beliayam-select-loaction p-3"
              aria-labelledby="navbarDropdown"
            >
              <span>Pilih Lokasi Pemesanan</span>
              <form class="form-inline my-2">
                <div class="input-group p-0 col-lg-12">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Cari Kota / Daerah"
                  />
                  <div class="input-group-prepend">
                    <div class="btn btn-success rounded-right btn-sm">
                      <i class="fad fa-location-arrow"></i> Deteksi
                    </div>
                  </div>
                </div>
              </form>
              <div class="city pt-2">
                <h6>Kota Teratas</h6>
                <p class="border-bottom m-0 py-1">
                  <a href="javascript:void(0)" class="text-dark">Jakarta</a>
                </p>
                <p class="border-bottom m-0 py-1">
                  <a href="javascript:void(0)" class="text-dark">Bekasi</a>
                </p>
                <p class="border-bottom m-0 py-1">
                  <a href="javascript:void(0)" class="text-dark">Tanggerang</a>
                </p>
                <p class="border-bottom m-0 py-1">
                  <a href="javascript:void(0)" class="text-dark">Depok</a>
                </p>
                <p class="m-0 py-1">
                  <a href="javascript:void(0)" class="text-dark"
                    >Alamat Lainnya</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div> -->
        <div class="ml-auto d-flex align-items-center">
          <div v-if="!isAuthenticated">
            <NuxtLink
              to="/login"
              class="mr-2 rounded-pill p-2 border shadow-sm bg-danger"
            >
              <i class="fad fa-sign-in-alt"></i>
              Masuk
            </NuxtLink>
            <NuxtLink
              to="/register"
              class="mr-2 rounded-pill p-2 border shadow-sm text-dark"
            >
              <i class="fad fa-sign-in-alt"></i>
              Daftar
            </NuxtLink>
          </div>

          <div class="dropdown mr-3" v-if="isAuthenticated">
            <a
              href="#"
              class="dropdown-toggle text-dark"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="/img/user.png"
                class="img-fluid rounded-circle header-user mr-2"
              />
              {{ user.name || "Cusyam" }}
            </a>
            <div
              class="dropdown-menu dropdown-menu-right top-profile-drop"
              aria-labelledby="dropdownMenuButton"
            >
              <NuxtLink class="dropdown-item" to="/akun">Akun saya</NuxtLink>
              <NuxtLink class="dropdown-item" to="/akun/pesanan-saya"
                >Pesanan Saya</NuxtLink
              >
              <NuxtLink class="dropdown-item" to="/promo">Promo</NuxtLink>
              <NuxtLink class="dropdown-item" to="/akun/alamat"
                >Alamat</NuxtLink
              >
              <a
                href="javascript:void(0)"
                class="dropdown-item"
                @click="logout()"
                >Logout</a
              >
            </div>
          </div>

          <div class="dropdown" v-if="isAuthenticated">
            <a
              href="#"
              class="text-dark dropdown-toggle not-drop"
              id="dropdownMenuNotification"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                class="
                  fad
                  fa-bell
                  d-flex
                  align-items-center
                  bg-light
                  rounded-pill
                  p-2
                  border
                  shadow-sm
                "
              >
              </i>
            </a>
            <div
              class="
                dropdown-menu dropdown-menu-right
                p-0
                beliayam-notifications-main
              "
              aria-labelledby="dropdownMenuNotification"
            >
              <div class="beliayam-notifications bg-white border-bottom p-2">
                <div class="position-absolute ml-n1 py-2">
                  <i
                    class="
                      fad
                      fa-check-circle
                      text-white
                      bg-success
                      rounded-pill
                      p-1
                    "
                  ></i>
                </div>
                <a
                  href="status_complete.html"
                  class="text-decoration-none text-dark"
                >
                  <div class="notifiction small">
                    <div class="ml-3">
                      <p class="font-weight-bold mb-1">Yay! Order Complete</p>
                      <p class="small m-0">
                        <i class="fad fa-calendar-alt"></i> Today, 05:14 AM
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="beliayam-notifications bg-white border-bottom p-2">
                <a
                  href="status_onprocess.html"
                  class="text-decoration-none text-muted"
                >
                  <div class="notifiction small">
                    <div class="ml-3">
                      <p class="font-weight-bold mb-1">Yipiee. order Success</p>
                      <p class="small m-0">
                        <i class="fad fa-calendar-alt"></i> Monday, 08:30 PM
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="beliayam-notifications bg-white p-2">
                <a
                  href="status_onprocess.html"
                  class="text-decoration-none text-muted"
                >
                  <div class="notifiction small">
                    <div class="ml-3">
                      <p class="font-weight-bold mb-1">New Promos Coming</p>
                      <p class="small m-0">
                        <i class="fad fa-calendar-alt"></i> Sunday, 10:30 AM
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="dropdown" v-if="isAuthenticated">
            <NuxtLink
              to="/keranjang"
              class="text-dark dropdown-toggle not-drop"
              id="dropdownCart"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                class="
                  fad
                  fa-shopping-cart
                  d-flex
                  align-items-center
                  bg-light
                  rounded-pill
                  p-2
                  shadow-sm
                "
              >
              </i>
              <span class="ml-1 cart-label-count">
                {{ getCartsNav.length }}
              </span>
            </NuxtLink>
            <div
              class="
                dropdown-menu dropdown-menu-right
                p-0
                beliayam-notifications-main
              "
              aria-labelledby="dropdownCart"
            >
              <div>
                <div>
                  <div class="p-2">
                    <span>Keranjang ({{ getCartsNav.length }}) </span>
                    <div class="float-right">
                      <NuxtLink to="/keranjang"> Lihat Keranjang </NuxtLink>
                    </div>
                  </div>

                  <div
                    class="beliayam-notifications bg-white border-bottom p-2"
                    v-for="cart in getCartsNav"
                    :key="cart._id"
                  >
                    <NuxtLink :to="`/${cart.slug}`">
                      <div class="position-absolute ml-n1 py-2 text-danger">
                        {{ cart.price | formatMoney }}
                      </div>
                      <div class="text-decoration-none text-dark">
                        <div class="notifiction small">
                          <div class="ml-3">
                            <p class="font-weight-bold mb-1">
                              {{ cart.name }}
                            </p>
                            <p class="small m-0">
                              <i class="fad fa-calendar-alt"></i>
                              {{ cart.quantity }} Produk ({{ cart.weight }}
                              kg)
                            </p>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <a
            href="cart.html"
            class="ml-2 text-dark bg-light rounded-pill p-2 border shadow-sm"
              id="dropdownMenuCart"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
          >
            <i class="fad fa-shopping-cart"></i>
          </a>

          <div
            class="
              dropdown-menu dropdown-menu-right
              p-0
            "
            aria-labelledby="dropdownMenuCart"
          >
            <div class="beliayam-notifications bg-white border-bottom p-2">
              <div class="position-absolute ml-n1 py-2">
                <i
                  class="
                    fad
                    fa-check-circle
                    text-white
                    bg-success
                    rounded-pill
                    p-1
                  "
                ></i>
              </div>
              <a
                href="status_complete.html"
                class="text-decoration-none text-dark"
              >
                <div class="notifiction small">
                  <div class="ml-3">
                    <p class="font-weight-bold mb-1">Yay! Order Complete</p>
                    <p class="small m-0">
                      <i class="fad fa-calendar-alt"></i> Today, 05:14 AM
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="beliayam-notifications bg-white border-bottom p-2">
              <a
                href="status_onprocess.html"
                class="text-decoration-none text-muted"
              >
                <div class="notifiction small">
                  <div class="ml-3">
                    <p class="font-weight-bold mb-1">Yipiee. order Success</p>
                    <p class="small m-0">
                      <i class="fad fa-calendar-alt"></i> Monday, 08:30 PM
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="beliayam-notifications bg-white p-2">
              <a
                href="status_onprocess.html"
                class="text-decoration-none text-muted"
              >
                <div class="notifiction small">
                  <div class="ml-3">
                    <p class="font-weight-bold mb-1">New Promos Coming</p>
                    <p class="small m-0">
                      <i class="fad fa-calendar-alt"></i> Sunday, 10:30 AM
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div> -->
        </div>
      </nav>

      <div class="bg-color-head">
        <div class="container menu-bar d-flex align-items-center">
          <div class="list-unstyled form-inline mb-0 ml-auto">
            <NuxtLink to="/promo" class="text-white bg-offer px-3 py-2"
              ><i class="fad fa-badge-percent h6"></i>Promo</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="breadcrumb" class="breadcrumb mb-0 d-none">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <a href="#" class="text-danger">Beranda</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page"></li>
        </ul>
      </div>
    </nav>

    <Nuxt />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "LayoutHeader",
  props: ["user"],
  fetch() {
    if (this.isAuthenticated) {
      // if (this.$store.state.cart.cartsNav.length <= 0) {
      this.$store.dispatch("cart/setCartsNav");
    }
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      window.location.reload();
    },
  },
  computed: {
    ...mapGetters("cart", ["getCartsNav"]),
    ...mapGetters("auth", ["isAuthenticated"]),
    // ...mapState("auth", ['user'])
  },

  filters: {
    formatDate(date) {
      return moment(date).format("DD-MM-yyyy, HH:mm");
    },
    formatMoney(val) {
      let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(val);
    },
  },
};
</script>

<style>
.navbar-logo {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}
.cart-label-count {
  background-color: #cf430f;
  color: white;
  padding: 4px;
  font-weight: 700;
  border-radius: 18px;
  font-size: 10px;
  position: absolute;
  transform: translate(110%, -50%);
}
</style>