<template>
  <div>
    <Slide bubble width="300" :isOpen="showNavigation">
      <ul class="list-group">
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div>
            <i class="fad fa-home-heart"></i>
            Beranda
          </div>
        </li>

        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div>
            <i class="fad fa-turkey"></i>

            Kategori
          </div>
          <i
            class="fad fa-chevron-right arrow-mobile-nav"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          ></i>
        </li>
        <div class="collapse ml-3" id="collapseExample">
          <div class="list-group">
            <a href="javascript:void(0)" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Broiler</a
            >
            <a href="javascript:void(0)" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Kampung</a
            >
            <a href="javascript:void(0)" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Pejantan</a
            >
            <a href="javascript:void(0)" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Pilihan</a
            >
            <a href="javascript:void(0)" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Trading</a
            >
          </div>
        </div>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div>
            <i class="fad fa-badge-percent"></i>

            Promo
          </div>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div>
            <i class="fad fa-user-alt"></i>

            Akun Saya
          </div>
          <i
            class="fad fa-chevron-right arrow-mobile-nav"
            data-toggle="collapse"
            data-target="#akun-collape"
            aria-expanded="false"
            aria-controls="akun-collape"
          ></i>
        </li>
        <div class="collapse ml-3" id="akun-collape">
          <div class="list-group">
            <a href="/akun" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Profil</a
            >
            <a href="/akun/pesanan-saya" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Pesanan</a
            >
            <a href="/akun/alamat" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Alamat</a
            >
            <a href="javascript:void(0)" class="list-group-item text-white"
              ><i class="fad fa-circle"></i> Voucher</a
            >
          </div>
        </div>

        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
          v-if="!isAuthenticated"
        >
          <a href="/login">
            <i class="fad fa-badge-percent"></i>

            Login
          </a>
        </li>

        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
          v-if="!isAuthenticated"
        >
          <a href="/register">
            <i class="fad fa-badge-percent"></i>

            Daftar
          </a>
        </li>
      </ul>
    </Slide>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide, // Register your component
  },
  data() {
    return {
      showNavigation: false,
    };
  },
  methods: {
    navClicked() {
      this.showNavigation = false;
    },
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
};
</script>

<style>
.list-group-item {
  background-color: unset;
  border: unset;
}
.list-group-item:hover {
  background: #343536;
}

.arrow-mobile-nav:hover {
  cursor: pointer;
}

.bm-burger-button {
  cursor: pointer;
  height: 21px;
  position: relative;
  top: 0px;
  left: 0px;
  width: 28px;
}
.bm-burger-bars {
  background-color: #373a47;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #212531; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  font-size: 20px;
  margin-left: 0;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  font-weight: 700;
  color: white;
}
</style>
