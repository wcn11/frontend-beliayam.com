<template>
  <div>
    <footer class="section-footer border-top bg-white">
      <section class="footer-top py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-md-right">
              <a href="#" class="btn btn-icon btn-light"
                ><i class="icofont-facebook"></i
              ></a>
              <a href="#" class="btn btn-icon btn-light"
                ><i class="icofont-twitter"></i
              ></a>
              <a href="#" class="btn btn-icon btn-light"
                ><i class="icofont-instagram"></i
              ></a>
              <a href="#" class="btn btn-icon btn-light"
                ><i class="icofont-youtube"></i
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
                ><a href="terms%26conditions.html" class="text-dark"
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
        bg-info
        navbar-expand
        fixed-bottom
        d-md-none d-lg-none d-xl-none
        pt-4
      "
    >
      <ul class="navbar-nav nav-justified w-100">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fad fa-home-heart"></i>
            <p>Beranda</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fad fa-box-heart"></i>
            <p>Pesanan</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fad fa-cart-arrow-down"></i>
            <p>Keranjang</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fad fa-headset"></i>
            <p>Bantuan</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fad fa-user"></i>
            <p>Akun</p>
          </a>
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
</style>