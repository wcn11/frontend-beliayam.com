<template>
  <div>
    <div class="bg-white shadow-sm beliayam-main-nav">
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          bg-white
          beliayam-header
          py-0
          container
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
      </nav>
    </div>

    <!-- <location-picker @change="getLatLong" v-model="location" :options="options">
    </location-picker> -->

    <section class="py-4 beliayam-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="bg-white rounded shadow-sm overflow-hidden">
              <div class="address p-3 bg-light">
                <h6 class="m-0 text-dark d-flex align-items-center">
                  Alamat Pengiriman
                  <span class="small ml-auto"
                    ><NuxtLink
                      to="/akun/alamat"
                      class="font-weight-bold text-decoration-none text-danger"
                      @onclick="openModalAddress()"
                      ><i class="fad fa-location-arrow"></i> ubah
                      alamat</NuxtLink
                    ></span
                  >
                </h6>
              </div>
              <div>
                <div class="d-flex align-items-center">
                  <div class="card-body p-0 border-top">
                    <div class="beliayam-order_address">
                      <div class="p-3" v-if="cart.address">
                        <div class="font-weight-bold">
                          {{ cart.address.receiver_name
                          }}<span class="font-weight-light">
                            ({{ cart.address.label }})</span
                          >
                        </div>
                        <br />
                        <div>{{ cart.address.phone }}</div>
                        <div>
                          {{ cart.address.address1 }},
                          {{ cart.address.sub_district.name }},
                          {{ cart.address.district.name }}, ({{
                            cart.address.details
                          }})
                        </div>
                        <div>
                          {{ cart.address.city.name }},
                          {{ cart.address.state.name }}
                          {{ cart.address.postcode }}
                        </div>
                      </div>
                    </div>
                    <div class="pl-3 pb-3">
                      <hr />
                      <button
                        class="btn btn-light"
                        @click="getAddresses('show')"
                      >
                        Pilih Alamat Lain
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="address p-3 bg-light">
                <h6 class="m-0 text-dark d-flex align-items-center">
                  Pesanan
                  <span class="small ml-auto"
                    ><NuxtLink
                      to="/keranjang"
                      class="font-weight-bold text-decoration-none text-danger"
                      data-toggle="modal"
                      data-target="#exampleDelivery"
                      ><i class="fad fa-bags-shopping"></i> Ubah
                      pesanan</NuxtLink
                    ></span
                  >
                </h6>
              </div>
              <div class="p-3">
                <div
                  class="cart-items bg-white position-relative border-bottom"
                  v-for="item in cart.items"
                  :key="item._id"
                >
                  <div class="d-flex align-items-center p-3">
                    <img
                      :src="`${baseApi}/${item.product.image}`"
                      class="img-fluid"
                    />
                    <div class="ml-3 text-dark text-decoration-none w-100">
                      <h5 class="mb-1">{{ item.product.name }}</h5>
                      <p class="text-muted mb-2">
                        {{ item.product.price | formatMoney }} x
                        {{ item.details.quantity }}
                      </p>
                      <div
                        class="
                          d-flex
                          align-items-center
                          price-counter-container
                        "
                      >
                        <h6 class="total_price font-weight-bold m-0">
                          {{
                            (item.product.price * item.details.quantity)
                              | formatMoney
                          }}
                        </h6>
                      </div>
                      <div class="d-flex" v-if="item.details.note">
                        <div>
                          <span class="font-weight-bold">catatan:</span>
                          {{ item.details.note }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="address p-3 bg-light">
                <h6 class="text-dark m-0">Chanel Pembayaran</h6>
              </div>
              <div>
                <div class="accordion" id="accordionPaymentChannels">
                  <div class="d-flex align-items-center" id="headingThree">
                    <a
                      class="
                        p-3
                        d-flex
                        align-items-center
                        text-decoration-none text-danger
                        w-100
                      "
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapsePaymentChannel"
                      aria-expanded="false"
                      aria-controls="collapsePaymentChannel"
                    >
                      <i class="fad fa-badge mr-3"></i> Metode Pembayaran
                      <i class="fad fa-chevron-down ml-auto"></i>
                    </a>
                  </div>
                  <div
                    id="collapsePaymentChannel"
                    class="collapse p-3 border-top"
                    aria-labelledby="headingThree"
                    data-parent="#accordionPaymentChannels"
                  >
                    <div>
                      <div v-if="paymentMethod.data.cash" class="mb-4">
                        <h6>Cash (Bayar Melalui Kurir)</h6>
                        <label
                          v-for="payment in paymentMethod.data.cash"
                          :key="payment.pg_code"
                        >
                          <input
                            type="radio"
                            name="radio"
                            :value="payment"
                            v-model="selectedPayment.data"
                            :disabled="
                              cart.user &&
                              payment.pg_code === '101' &&
                              !cart.user.isPhoneVerified
                            "
                            :checked="cart.user && cart.user.isPhoneVerified"
                          />
                          <span class="w-75 font-weight-bold">
                            <img
                              :src="payment.icon"
                              class="img-fluid img-responsive"
                            />
                            {{ payment.pg_name }}</span
                          >

                          <div
                            role="text"
                            class="text-danger"
                            v-if="
                              cart.user &&
                              payment.pg_code === '101' &&
                              !cart.user.isPhoneVerified
                            "
                          >
                            *Verifikasi No. Telepon untuk fitur COD
                          </div>
                        </label>
                      </div>
                      <div v-if="paymentMethod.data.emoney" class="mb-4">
                        <h6>Dompet Digital</h6>
                        <label
                          v-for="payment in paymentMethod.data.emoney"
                          :key="payment.pg_code"
                        >
                          <input
                            type="radio"
                            name="radio"
                            :value="payment"
                            v-model="selectedPayment.data"
                          />
                          <span class="w-75 font-weight-bold">
                            <img
                              :src="payment.icon"
                              class="img-fluid img-responsive mr-3 ml-3"
                            />
                            {{ payment.pg_name }}</span
                          >
                        </label>
                      </div>
                      <div v-if="paymentMethod.data.emoney" class="mb-4">
                        <h6>Internet Banking</h6>
                        <label
                          v-for="payment in paymentMethod.data.ibanking"
                          :key="payment.pg_code"
                        >
                          <input
                            type="radio"
                            name="radio"
                            :value="payment"
                            v-model="selectedPayment.data"
                          />
                          <span class="w-75 font-weight-bold">
                            <img
                              :src="payment.icon"
                              class="img-fluid img-responsive mr-3 ml-3"
                            />
                            {{ payment.pg_name }}</span
                          >
                        </label>
                      </div>
                      <div v-if="paymentMethod.data.jumapp" class="mb-4">
                        <h6>App On The Go</h6>
                        <label
                          v-for="payment in paymentMethod.data.jumapp"
                          :key="payment.pg_code"
                        >
                          <input
                            type="radio"
                            name="radio"
                            :value="payment"
                            v-model="selectedPayment.data"
                          />
                          <span class="w-75 font-weight-bold">
                            <img
                              :src="payment.icon"
                              class="img-fluid img-responsive mr-3 ml-3"
                            />
                            {{ payment.pg_name }}</span
                          >
                        </label>
                      </div>
                      <div v-if="paymentMethod.data.qris" class="mb-4">
                        <h6>QRIS</h6>
                        <label
                          v-for="payment in paymentMethod.data.qris"
                          :key="payment.pg_code"
                        >
                          <input
                            type="radio"
                            name="radio"
                            :value="payment"
                            v-model="selectedPayment.data"
                          />
                          <span class="w-75 font-weight-bold">
                            <img
                              :src="payment.icon"
                              class="img-fluid img-responsive mr-3 ml-3"
                            />
                            {{ payment.pg_name }}</span
                          >
                        </label>
                      </div>
                      <div v-if="paymentMethod.data.retail" class="mb-4">
                        <h6>Retail (Pembayaran Gerai Aflamart / Indomaret)</h6>
                        <label
                          v-for="payment in paymentMethod.data.retail"
                          :key="payment.pg_code"
                        >
                          <input
                            type="radio"
                            name="radio"
                            :value="payment"
                            v-model="selectedPayment.data"
                          />
                          <span class="w-75 font-weight-bold">
                            <img
                              :src="payment.icon"
                              class="img-fluid img-responsive mr-3 ml-3"
                            />
                            {{ payment.pg_name }}</span
                          >
                        </label>
                      </div>
                      <div v-if="paymentMethod.data.va" class="mb-4">
                        <h6>Virtual Akun (Transfer)</h6>
                        <label
                          v-for="payment in paymentMethod.data.va"
                          :key="payment.pg_code"
                        >
                          <input
                            type="radio"
                            name="radio"
                            :value="payment"
                            v-model="selectedPayment.data"
                          />
                          <span class="w-75 font-weight-bold">
                            <img
                              :src="payment.icon"
                              class="img-fluid img-responsive mr-3 ml-3"
                            />
                            {{ payment.pg_name }}</span
                          >
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="sticky_sidebar">
              <div
                class="
                  bg-white
                  rounded
                  overflow-hidden
                  shadow-sm
                  mb-3
                  checkout-sidebar
                "
              >
                <div
                  class="
                    d-flex
                    align-items-center
                    beliayam-cart-item-profile
                    border-bottom
                    bg-white
                    p-3
                  "
                >
                  <img
                    alt="beliayam"
                    src="img/starter1.jpg"
                    class="mr-3 rounded-circle img-fluid"
                  />
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 font-weight-bold">Beli Ayam Warehouse</h6>
                    <p class="mb-0 small text-muted">
                      <i class="feather-map-pin"></i> Jl. Guru Muchtar,
                      RT.01/RW.12, Cimahpar, Kec. Bogor Utara, Kota Bogor, Jawa
                      Barat 16155
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-white p-3 clearfix">
                    <div class="bg-white p-3 clearfix">
                      <p class="font-weight-bold small mb-2">Rincian Tagihan</p>
                      <p class="mb-1">
                        Total Item
                        <span class="small text-muted"
                          >({{ cart.items && cart.items.length }})</span
                        >
                        <span class="float-right text-dark">{{
                          cart.subTotalProduct | formatMoney
                        }}</span>
                      </p>
                      <div v-if="cart.charges && cart.charges.length">
                        <p
                          class="mb-1"
                          v-for="charge in cart.charges"
                          :key="charge._id"
                        >
                          {{ charge.chargeName }}
                          <span class="float-right text-dark">{{
                            charge.chargeValue | formatMoney
                          }}</span>
                        </p>
                      </div>
                      <div v-if="cart.vouchers && cart.vouchers.length > 0">
                        <p>
                          Voucher
                          <span class="text-info ml-1"
                            ><i class="fad fa-circle-info"></i
                          ></span>
                          <span class="float-right text-dark"
                            >-{{ cart.subTotalVoucher | formatMoney }}</span
                          >
                        </p>
                        <!-- <p v-else>
                          Diskon
                          <span class="text-info ml-1"
                            ><i class="fad fa-circle-info"></i></span
                          ><span class="float-right text-dark">{{
                            0 | formatMoney
                          }}</span>
                        </p> -->
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-3 border-top">
                  <h5 class="mb-0">
                    Total
                    <span class="float-right text-danger">
                      {{ cart.baseTotal | formatMoney }}</span
                    >
                  </h5>
                </div>
                <button
                  class="btn btn-success btn-lg btn-block mt-3 mb-3"
                  @click="payOrder()"
                >
                  Pesan Sekarang
                </button>
                <p
                  class="text-success text-center"
                  v-if="Object.keys(selectedVoucher).length > 1"
                >
                  Kamu hemat {{ cart && cart.subTotalVoucher | formatMoney }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="modal fade"
      id="modalChangeAddress"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="modalChangeAddressLabel"
      aria-hidden="true"
      v-if="addresses.length > 0"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalChangeAddressLabel">
              Pilih Alamat Pengiriman
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="p-3"
              v-for="address in addresses[0].address"
              :key="address._id"
            >
              <div class="font-weight-bold">
                {{ address.receiver_name
                }}<span class="font-weight-light"> ({{ address.label }})</span>
                <span
                  role="button"
                  class="badge badge-success text-dark"
                  v-if="cart.address && cart.address._id === address._id"
                  >dipilih</span
                >
                <span
                  role="button"
                  class="badge badge-danger"
                  v-if="cart.address && cart.address._id !== address._id"
                  @click="setAddress(address)"
                  >pilih</span
                >
              </div>
              <br />
              <div>{{ address.phone }}</div>
              <div>
                {{ address.address1 }}, {{ address.sub_district.name }},
                {{ address.district.name }}, ({{ address.details }})
              </div>
              <div>
                {{ address.city.name }},
                {{ address.state.name }}
                {{ address.postcode }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="modal-loading"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="modal-loadingLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-body">
              <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <span>Sedang memproses pesanan...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LocationPicker } from "./maps/index.js";
import { mapGetters } from "vuex";
import moment from "moment";

moment.locale("id-ID");

// import mapPicker from "./maps/LocationPicker.vue";

export default {
  name: "Checkout",
  async fetch() {
    this.$store.dispatch("setGlobalModal", true);

    await this.$axios
      .get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/checkout/cart`)
      .then((res) => {
        this.cart = res.data.data;
      })
      .catch((err) => {
        if (err.response.data.error) {
          this.$toast.warning(err.response.data.message);
          this.$router.push("/");
        }
      });

    this.getPaymentChannel();

    this.$store.dispatch("cart/setVouchers");

    this.$store.dispatch("auth/getUser");

    this.$store.dispatch("setGlobalModal");
  },
  components: { LocationPicker }, // if installComponents is false
  data() {
    return {
      addresses: [],
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      cart: {},
      selectedPayment: {
        data: {
          pg_code: "",
          pg_name: "",
          type: "",
        },
      },
      paymentMethod: {
        id: "",
        name: "",
        data: [],
      },
      location: {
        lat: -6.208224,
        lng: 106.845744,
      },
      appliedVoucher: "",
      selectedVoucher: {},
      options: {
        // is not required
        map: {
          /** other map options **/
        },
        marker: {
          /** marker options **/
        },
        autocomplete: {
          /** autocomplete options **/
        },
      },
    };
  },
  methods: {
    async payOrder() {
      this.$store.dispatch("setGlobalModal", true);
      if (this.selectedPayment.data.pg_code === "") {
        this.$toast.warning("harap memilih metode pembayaran");
        return;
      }
      await this.$axios
        .post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/order`, {
          shipping_address: this.cart.address._id,
          user_id: this.$store.state.auth.user._id,
          payment: {
            pg_code: parseInt(this.selectedPayment.data.pg_code),
            type: this.selectedPayment.data.type,
          },
          type: "order",
          platform: "website",
        })
        .then((res) => {
          if (res.data.error) {
            this.$toast.warning(res.data.message);
            return;
          }
          if (res.data.data.bill.bill_no) {
            this.$toast.success("Pesanan berhasil diproses");
            this.$router.push({
              path: "/checkout/sukses",
              query: {
                order_id: res.data.data.order_id,
              },
            });
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          }
        });
      this.$store.dispatch("setGlobalModal", false);
    },
    setAddress(address) {
      this.cart.address = address;
      $("#modalChangeAddress").modal("hide");
    },
    getPriceLabel(voucher) {
      let price = 0;

      if (voucher.discountBy === "percent") {
        let discountPrice =
          (voucher.discountValue / 100) * this.cart.subTotalProduct;
        price = this.cart.subTotalProduct - discountPrice;
      } else {
        price = voucher.discountValue;
      }
      return price;
    },
    resetVoucher() {
      this.selectedVoucher = {};
      this.$toast.warning("Voucher Dihapus");
    },
    applyVoucher(voucher) {
      this.selectedVoucher = voucher;
      $("#modal-vouchers").modal("hide");
      this.$toast.success("Voucher Diterapkan");
    },
    setVoucherByInput() {
      let voucherExist = this.getCartsVouchers.filter(
        (obj) =>
          obj.voucherCode.toLowerCase() === this.appliedVoucher.toLowerCase()
      );
      if (voucherExist.length <= 0) {
        this.$toast.warning("Kode Voucher Salah");
        return;
      }
      $("#modal-vouchers").modal("hide");
      this.selectedVoucher = voucherExist[0];
    },
    // formatDateToCountDown(date, code) {
    //   if (this.getCartsVouchers.length > 0) {
    //     var countDownDate = new Date(date).getTime();

    //     var x = setInterval(function () {
    //       // Get today's date and time
    //       var now = new Date().getTime();

    //       // Find the distance between now and the count down date
    //       var distance = countDownDate - now;

    //       // Time calculations for days, hours, minutes and seconds
    //       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //       var hours = Math.floor(
    //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //       );
    //       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //       var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //       // Output the result in an element with id="demo"
    //       document.getElementById(`countDown-${code}`).innerHTML =
    //         days +
    //         "hari " +
    //         hours +
    //         "jam " +
    //         minutes +
    //         "menit " +
    //         seconds +
    //         "detik ";

    //       // If the count down is over, write some text
    //       if (distance < 0) {
    //         clearInterval(x);
    //         document.getElementById("demo").innerHTML = "EXPIRED";
    //       }
    //     }, 1000);
    //   }
    // },
    setVoucher(voucher, index) {
      this.selectedVoucher.push(voucher);

      this.$store.dispatch("cart/setVoucher", voucher);
    },
    getPaymentChannel() {
      this.$axios
        .get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/payment`)
        .then((res) => {
          // this.paymentMethod.data = res.data.data.sort();
          const groupByKey = _.mapValues(_.groupBy(res.data.data, "type"));

          this.paymentMethod.data = groupByKey;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getAddresses(showModal = "hide") {
      if (this.addresses.length <= 0) {
        await this.$axios
          .get(
            `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/address?user_id=${this.$store.state.auth.user._id}`
          )
          .then((res) => {
            this.addresses = res.data.data;
          })
          .catch((err) => {
            console.error(err);
          });
      }
      if ((showModal = "show")) {
        $("#modalChangeAddress").appendTo("body").modal(showModal);
      }
    },
    openModalAddress() {
      $("#modal-address").css("display", "block");
    },
    closeModal() {
      $("#modal-address").css("display", "none");
    },
    openModalVouchers() {
      $("#modal-vouchers").appendTo("body").modal("show");
    },
    closeModal() {
      $("#modal-vouchers").css("display", "none");
    },
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
  computed: {
    ...mapGetters("cart", [
      // "getCountCart",
      "getCartsVouchers",
      // "getSelectedVouchers",
    ]),

    countTotalToPay() {
      let cart = this.cart;

      let subTotalProduct = cart.subTotalProduct;
      let subTotalCharges = cart.subTotalCharges;
      let voucher = 0;

      if (this.getPriceLabel(this.selectedVoucher)) {
        voucher = this.getPriceLabel(this.selectedVoucher);
      }

      return subTotalProduct + subTotalCharges - voucher;
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 480px;
}

#modal-address {
  background-color: #0000008f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.btn-light {
  background-color: #dbdcdd;
}
.bg-light {
  background-color: #d5d5d5 !important;
}
label {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
}
label input {
  position: absolute;
  left: -9999px;
}
label input:checked + span {
  background-color: #dddddd;
}
label input:checked + span:before {
  box-shadow: inset 0 0 0 0.4375em #c9400e;
}
label span {
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
}
label span:hover {
  background-color: #d6d6e5;
}
label span:before {
  display: flex;
  flex-shrink: 0;
  content: "";
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 0.375em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #00005c;
}

.input-none {
  display: none;
}
.input-wrapper {
  max-width: 452px;
  width: 100%;
  position: relative;
}
.input {
  height: 40px;
  border-radius: 4px;
  border: 1px solid #f52c5c;
  width: 60%;
  outline: none;
  box-sizing: border-box;
  margin-left: 8px;
}
.placeholder {
  pointer-events: none;
  position: absolute;
  font-weight: 400;
  font-size: 15px;
  top: 18px;
  left: 8px;
  padding: 0 8px;
  background-color: #b4390c;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: grey;
}

.input:not(:placeholder-shown).input:not(:focus) + .placeholder {
  transform: scale(0.75) translateY(-36px) translateX(-15%);
  color: white;
  transition: 0.2s ease;
}

.input:focus {
  border-color: #b4390c;
}

.input:focus + .placeholder {
  transform: scale(0.75) translateY(-36px) translateX(-15%);
  color: white;
  transition: 0.2s ease;
}

.input:invalid:not(:placeholder-shown) {
  transition: 0.2s ease;
  border-color: #f52c5c;
}

.input:invalid:not(:placeholder-shown) + .placeholder {
  transition: 0.2s ease;
  color: white;
}
.input:invalid:not(:placeholder-shown).input:not(:focus) + .placeholder {
  transform: scale(0.75) translateY(-36px) translateX(-15%);
  color: white;
  transition: 0.2s ease;
}
.btn-apply {
  margin-left: 10px;
  margin-top: 8px;
}
.content-heading {
  border: 1px solid red;
  border-radius: 5px;
  padding: 5px;
}
@media only screen and (max-device-width: 480px) {
  .input {
    margin-left: 8px;
  }
}

@media only screen and (max-device-width: 380px) {
  .input {
    margin-left: 8px;
  }
}
</style>