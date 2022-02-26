<template>
  <div>
    <footer class="section-footer border-top bg-white">
      <section class="footer-top py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-md-right">
              <a href="#" class="btn btn-icon btn-light"
                ><i class="fab fa-facebook"></i
              ></a>
              <a href="#" class="btn btn-icon btn-light"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="btn btn-icon btn-light"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="btn btn-icon btn-light"
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
              <h6 class="title">Products</h6>
              <ul class="list-unstyled list-padding">
                <li><a href="listing.html" class="text-dark">Listing</a></li>
                <li>
                  <a href="product_details.html" class="text-dark">Detail</a>
                </li>
                <li>
                  <a href="picks_today.html" class="text-dark">Trending</a>
                </li>
                <li>
                  <a href="recommend.html" class="text-dark">Recommended</a>
                </li>
                <li>
                  <a href="fresh_chiken.html" class="text-dark">Most Popular</a>
                </li>
              </ul>
            </aside>
            <aside class="column col-md">
              <h6 class="title">Checkout Process</h6>
              <ul class="list-unstyled list-padding">
                <li><a href="cart.html" class="text-dark">Cart</a></li>
                <li><a href="cart.html" class="text-dark">Order Address</a></li>
                <li><a href="cart.html" class="text-dark">Delivery Time</a></li>
                <li><a href="cart.html" class="text-dark">Order Payment</a></li>
                <li><a href="checkout.html" class="text-dark">Checkout</a></li>
                <li>
                  <a href="successful.html" class="text-dark">Successful</a>
                </li>
              </ul>
            </aside>
            <aside class="column col-md">
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
            </aside>
            <aside class="column col-md">
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
            </aside>
            <aside class="column col-md">
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
            </aside>
            <aside class="column col-md">
              <h6 class="title">Download Apps Now</h6>
              <div style="margin: 20px"></div>
              <div href="#">
                <img :src="require('static/img/appstore.png')" height="40" />
              </div>
              <div style="margin: 20px"></div>
              <div href="#">
                <img src="require('static/img/playmarket.png')" height="40" />
              </div>
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
export default {
  name: "LayoutFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
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
</style>