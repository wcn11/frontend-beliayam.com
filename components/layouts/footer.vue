<template>
  <div>
    <footer class="section-footer border-top bg-white">
      <section class="footer-top py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-md-right text-center">
              <a
                target="_blank"
                href="https://www.facebook.com/beliayamcom"
                class="btn btn-icon btn-light"
                ><i class="fab fa-facebook"></i
              ></a>
              <a
                target="_blank"
                href="https://twitter.com/beliayamcom"
                class="btn btn-icon btn-light"
                ><i class="fab fa-twitter"></i
              ></a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@beliayamcom"
                class="btn btn-icon btn-light"
                ><i class="fab fa-tiktok"></i
              ></a>
              <a
                target="_blank"
                href="https://www.instagram.com/beliayamcom"
                class="btn btn-icon btn-light"
                ><i class="fab fa-instagram"></i
              ></a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCzsf-wBSJxGb61pxkoXxrjA"
                class="btn btn-icon btn-light"
                ><i class="fab fa-youtube"></i
              ></a>
            </div>
          </div>
        </div>
      </section>

      <section class="footer-main border-top pt-5 pb-4">
        <div class="container">
          <div class="row">
            <aside class="column col-md">
              <h6 class="title">Kategori</h6>
              <ul class="list-unstyled list-padding">
                <li>
                  <a href="/kategori/broiler" class="text-dark">Broiler</a>
                </li>
                <li>
                  <a href="/kategori/merah" class="text-dark">Merah</a>
                </li>
                <li>
                  <a href="/kategori/kampung" class="text-dark">Kampung</a>
                </li>
                <li>
                  <a href="/kategori/pejantan" class="text-dark">Pejantan</a>
                </li>
                <li>
                  <a href="/kategori/parting" class="text-dark">Parting</a>
                </li>
              </ul>
            </aside>
            <aside class="column col-md">
              <h6 class="title">Ketentuan</h6>
              <ul class="list-unstyled list-padding">
                <li>
                  <a href="javascript:void(0)" class="text-dark">Kemitraan</a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="text-dark"
                    >Syarat & Ketentuan</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="text-dark"
                    >Kebijakan Pengguna</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="text-dark"
                    >Retur Pembelian</a
                  >
                </li>
              </ul>
            </aside>
            <aside class="column col-md">
              <h6 class="title">FAQ</h6>
              <ul class="list-unstyled list-padding">
                <li>
                  <a href="/faq" class="text-dark">FAQ</a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="text-dark">FAQ Bisnis</a>
                </li>
              </ul>
            </aside>
            <aside class="column col-md">
              <h6 class="title">Pembayaran</h6>
              <ul class="list-unstyled list-padding">
                <li class="mb-2 row">
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/bca.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/bni.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/bri.png')"
                  />
                </li>
                <li class="mb-2 row">
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/cimb.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/mandiri.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/danamon.png')"
                  />
                </li>
                <li class="mb-2 row">
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/maybank.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/permata.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/maybank2u.png')"
                  />
                </li>
                <li class="mb-2 row">
                  <img
                    class="img-responsive col-xs 4"
                    :src="
                      require('static/icons/payment-gateway/danamon-aja.png')
                    "
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/sinarmas.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/dana.png')"
                  />
                </li>
                <li class="mb-2 row">
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/link.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/ovo.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/shopee.png')"
                  />
                </li>
                <li class="mb-2 row">
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/link-app.png')"
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="
                      require('static/icons/payment-gateway/shopee-qris.png')
                    "
                  />
                  <img
                    class="img-responsive col-xs 4"
                    :src="require('static/icons/payment-gateway/alfamart.png')"
                  />
                </li>
              </ul>
            </aside>

            <aside class="column col-md">
              <h6 class="title">Hubungi Kami</h6>
              <div class="list-unstyled list-adding">
                <p>
                  Office 8, Level 18-A Jl. Jend. Sudirman Kav. 52-53 SCBD LOT
                  28, Jakarta Selatan
                </p>
                <div>
                  <span>Telp. 0251 8395655</span>
                  <span> Email support@beliayam.com </span>
                </div>
              </div>
            </aside>
            <!-- <aside class="column col-md">
              <h6 class="title">My Order</h6>
              <ul class="list-unstyled list-padding">
                <li><a href="my_order.html" class="text-dark">My order</a></li>
                <li>
                  <a href="status_complete.html" class="text-dark"
                    >Status Complete</a
                  >
                </li>
                <li>
                  <a href="status_onprocess.html" class="text-dark"
                    >Status on Process</a
                  >
                </li>
                <li>
                  <a href="status_canceled.html" class="text-dark"
                    >Status Canceled</a
                  >
                </li>
                <li><a href="review.html" class="text-dark">Review</a></li>
              </ul>
            </aside> -->
            <!-- <aside class="column col-md">
              <h6 class="title">My Account</h6>
              <ul class="list-unstyled list-padding">
                <li>
                  <a class="text-dark" href="my_account.html"> My account</a>
                </li>
                <li><a class="text-dark" href="promos.html"> Promos</a></li>
                <li>
                  <a class="text-dark" href="my_address.html"> My address</a>
                </li>
                <li>
                  <a class="text-dark" href="terms_conditions.html">
                    Terms &amp; conditions</a
                  >
                </li>
                <li>
                  <a class="text-dark" href="help_support.html">
                    Help &amp; support</a
                  >
                </li>
                <li>
                  <a class="text-dark" href="help_ticket.html"> Help ticket</a>
                </li>
                <li><a class="text-dark" href="signin.html"> Logout</a></li>
              </ul>
            </aside> -->
            <!-- <aside class="column col-md">
              <h6 class="title">Extra Pages</h6>
              <ul class="list-unstyled list-padding">
                <li>
                  <a href="promo_details.html" class="text-dark">
                    Promo Details
                  </a>
                </li>
                <li>
                  <a href="terms_conditions.html" class="text-dark">
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="help_support.html" class="text-dark">
                    Help Support
                  </a>
                </li>
                <li>
                  <a href="refund_payment.html" class="text-dark">
                    Refund Payment
                  </a>
                </li>
                <li><a href="faq.html" class="text-dark"> FAQ </a></li>
                <li><a href="signin.html" class="text-dark"> Sign In </a></li>
              </ul>
            </aside> -->
            <aside class="column col-md">
              <h6 class="title">Unduh Aplikasi</h6>
              <div style="margin: 20px"></div>
              <a href="javascript:void(0)">
                <img :src="require('static/img/appstore.png')" height="40" />
              </a>
              <div style="margin: 20px"></div>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.ptbeliayam.beliayamcom"
              >
                <img :src="require('static/img/googleplay.png')" height="40" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section class="footer-bottom border-top py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span class="pr-2">© 2019 - {{ currentYear }} beliayam.com</span>
              <span class="pr-2"
                ><a href="privacy.html" class="text-dark">Privacy</a></span
              >
              <span class="pr-2"
                ><a href="javascript:void()" class="text-dark"
                  >Terms & Conditions</a
                ></span
              >
            </div>
          </div>
        </div>
      </section>
    </footer>

    <!-- Bottom Navbar -->
    <nav
      class="
        navbar navbar-dark
        bg-mobile-nav
        navbar-expand
        fixed-bottom
        d-md-none d-lg-none d-xl-none
        pt-4
        mobile-nav-container
      "
    >
      <ul class="navbar-nav nav-justified w-100">
        <li class="nav-item title-footer">
          <p>Beliayam.com</p>
        </li>
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link">
            <i class="fad fa-home-heart"></i>
            <p class="title-mobile-nav">Beranda</p>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/akun/pesanan-saya" class="nav-link">
            <i class="fad fa-box-heart"></i>
            <p class="title-mobile-nav">Pesanan</p>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/keranjang" class="nav-link">
            <span class="ml-1 cart-label-count" v-if="isAuthenticated">
              {{ getCartsNav.length > 99 ? `99+` : getCartsNav.length }}
            </span>
            <i class="fad fa-cart-arrow-down"></i>
            <p class="title-mobile-nav">Keranjang</p>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)" class="nav-link">
            <i class="fad fa-headset"></i>
            <p class="title-mobile-nav">Bantuan</p>
          </a>
        </li>
        <li class="nav-item">
          <NuxtLink to="/akun" class="nav-link">
            <i class="fad fa-user"></i>
            <p class="title-mobile-nav">Akun</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LayoutFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapGetters("cart", ["getCartsNav"]),
    ...mapGetters("auth", ["isAuthenticated"]),
  },
};
</script>

<style>
.mobile-nav-container {
  border-radius: 12px 12px 0px 0px;
}
.bg-mobile-nav {
  background: #cf430f;
}
.title-mobile-nav {
  color: white;
}
.title-footer {
  position: absolute;
  padding: 4px;
  top: -20px;
  left: 0px;
  color: white;
  border-radius: 5px 10px;
  font-size: 15px;
  background-color: #cf430f;
}

.cart-label-count {
  background-color: #ffffff;
  color: #cf430f;
  padding: 4px;
  font-weight: 700;
  border-radius: 18px;
  font-size: 10px;
  position: absolute;
  transform: translate(75%, -80%);
}
</style>