<template>
  <div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ul class="d-flex align-items-center mb-0 p-0 list-unstyled">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-danger">Beranda</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Keranjang Anda
          </li>
        </ul>
      </div>
    </nav>

    <section class="py-4 beliayam-main-body" v-if="carts && carts.products">
      <div class="container">
        <div
          class="row"
          v-if="carts && carts.products && carts.products.length > 0"
        >
          <div class="col-lg-8">
            <div class="accordion" id="accordionExample">
              <div
                class="
                  card
                  border-0
                  beliayam-accor
                  rounded
                  shadow-sm
                  overflow-hidden
                "
              >
                <div class="card-header bg-white border-0 p-0" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="
                        btn
                        d-flex
                        align-items-center
                        bg-white
                        btn-block
                        text-left
                        btn-lg
                        h5
                        px-3
                        py-4
                        m-0
                      "
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Keranjang ({{ carts.products.length }} items)
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body p-0 border-top">
                    <div class="beliayam-cart">
                      <div
                        class="
                          cart-items
                          bg-white
                          position-relative
                          border-bottom
                        "
                        v-for="product in carts.products"
                        :key="product._id"
                      >
                        <div
                          class="d-flex align-items-center p-3"
                          v-if="product.productOnLive"
                        >
                          <NuxtLink :to="`/${product.slug}`"
                            ><img
                              :src="`${baseApi}/${product.image}`"
                              class="img-fluid"
                          /></NuxtLink>
                          <div
                            class="ml-3 text-dark text-decoration-none w-100"
                          >
                            <h5 class="mb-1">{{ product.name }}</h5>
                            <p class="text-muted mb-2">
                              {{ setPriceWithDiscount(product) | formatMoney }}
                              x
                              {{ product.quantity }}
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
                                  setTotalPriceProductWithDiscount(product)
                                    | formatMoney
                                }}
                              </h6>
                              <div
                                id="myform"
                                class="cart-items-number d-flex ml-auto"
                              >
                                <div
                                  class="btn"
                                  role="button"
                                  @click="removeProduct(product._id)"
                                >
                                  <i class="far fa-trash-alt"></i>
                                </div>
                                <input
                                  type="button"
                                  value="-"
                                  class="qtyminus btn btn-success btn-sm"
                                  @click="setDecrement(product._id)"
                                  :disabled="
                                    product.quantity === 0 ||
                                    product.quantity === 1 ||
                                    product.quantity === '' ||
                                    product.productOnLive.stock === 0
                                  "
                                />
                                <input
                                  type="text"
                                  name="quantity"
                                  class="qty form-control"
                                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                  @keyup="setQuantity($event, product._id)"
                                  @change="checkQuantity($event, product._id)"
                                  v-model="product.quantity"
                                />
                                <input
                                  type="button"
                                  value="+"
                                  class="qtyplus btn btn-success btn-sm"
                                  :disabled="
                                    product.quantity === 0 ||
                                    product.quantity === '' ||
                                    product.productOnLive.stock <=
                                      product.quantity
                                  "
                                  @click="setIncrement($event, product._id)"
                                />
                              </div>
                            </div>
                            <div v-if="!product.note">
                              <span
                                role="button"
                                :class="`w-50 text-danger note note-${product._id}`"
                                @click="setNote(product._id)"
                              >
                                tulis catatan
                              </span>

                              <div
                                :class="`input-wrapper mt-2 input-none input-note input-note-${product._id}`"
                                @focusout="closeNote()"
                              >
                                <input
                                  class="input"
                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                  type="text"
                                  v-model="product.note"
                                  @change="updateNote($event, product._id)"
                                  @keyup.enter="updateNote($event, product._id)"
                                />
                                <span class="placeholder"
                                  >Tulis catatan untuk item ini</span
                                >
                              </div>
                            </div>
                            <div class="d-flex" v-else>
                              <span :class="`notes notes-${product._id}`">{{
                                product.note
                              }}</span>

                              <div
                                :class="`input-wrapper mt-2 input-none edit-input-note edit-input-note-${product._id}`"
                                @focusout="closeNote()"
                              >
                                <input
                                  class="input"
                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                  type="text"
                                  v-model="product.note"
                                  @change="updateNote($event, product._id)"
                                  @keyup.enter="updateNote($event, product._id)"
                                />
                                <span class="placeholder"
                                  >Tulis catatan untuk item ini</span
                                >
                              </div>

                              <span
                                role="button"
                                :class="`w-25 text-danger edit-note edit-note-${product._id}`"
                                @click="editNote(product._id)"
                              >
                                Ubah
                              </span>
                            </div>

                            <div
                              class="text-danger text-right"
                              v-if="
                                product.productOnLive.stock < product.quantity
                              "
                            >
                              <p>
                                Maks. beli
                                {{ product.productOnLive.stock }} kuantitas
                              </p>
                            </div>
                            <div
                              class="text-danger text-right"
                              v-if="
                                parseInt(product.quantity) === 0 ||
                                product.quantity === ''
                              "
                            >
                              <p>Min. Pembelian 1 Item</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          class="text-decoration-none btn btn-block p-3"
                          type="button"
                          @click="checkout()"
                        >
                          <div
                            class="
                              rounded
                              shadow
                              bg-success
                              d-flex
                              align-items-center
                              p-3
                              text-white
                            "
                          >
                            <div class="more text-white">
                              <h6 class="m-0">
                                Subtotal
                                {{ countTotalToPay | formatMoney }}
                                <!-- {{
                                  getSelectedVouchers.grandTotalAfterDiscount
                                    ? getSelectedVouchers.grandTotalAfterDiscount
                                    : getCountCart | formatMoney
                                }} -->
                              </h6>
                              <p class="small m-0">Lanjutkan ke pembayaran</p>
                            </div>
                            <div class="ml-auto">
                              <i class="fad fa-caret-right"></i>
                            </div>
                          </div>
                        </div>
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
                    :src="`${this.$config.baseURL}/img/starter1.jpg`"
                    class="mr-3 rounded-circle img-fluid"
                  />
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 font-weight-bold">Beli Ayam Warehouse</h6>
                    <p class="mb-0 small text-muted">
                      <i class="feather-map-pin"></i> Jl. Jend. Sudirman Kav.
                      52-53 SCBD LOT 28, Jakarta Selatan
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-white pl-2 pr-2 clearfix">
                    <p class="font-weight-bold small mb-2">Voucher</p>
                    <button
                      class="btn btn-light mb-1 w-100"
                      @click="openModalVouchers()"
                    >
                      <i class="fad fa-badge-percent text-danger"></i>
                      <span class="small text-muted">
                        Gunakan / Masukkan Voucher</span
                      >
                    </button>

                    <div
                      class="bg-white p-3 clearfix"
                      v-if="Object.keys(selectedVoucher).length > 0"
                    >
                      <p class="mb-1">
                        {{
                          selectedVoucher.voucherName
                            ? selectedVoucher.voucherName
                            : selectedVoucher.voucherCode
                        }}
                        <span class="float-right text-dark">{{
                          getPriceVoucherLabelPrice(selectedVoucher)
                            | formatMoney
                        }}</span>
                      </p>
                      <br />
                      <h6 class="mb-0 text-danger">
                        Total Diskon<span class="float-right text-danger">{{
                          getPriceVoucherLabelPrice(selectedVoucher)
                            | formatMoney
                        }}</span>
                      </h6>
                    </div>
                    <!-- <p
                      class="mb-1"
                      v-for="voucher in getSelectedVouchers.vouchers"
                      :key="voucher._id"
                    >
                      {{
                        voucher.voucherName
                          ? voucher.voucherName
                          : voucher.voucherCode
                      }}
                      <span class="float-right text-dark"
                        >-Rp. {{ voucher.discountValueFee }}</span
                      >
                    </p>
                    <h6 class="mb-0 text-success">
                      Total Diskon<span class="float-right text-success"
                        >- Rp. {{ getSelectedVouchers.totalVoucherFee }}</span
                      >
                    </h6> -->
                  </div>
                  <div class="bg-white p-3 clearfix">
                    <p class="font-weight-bold small mb-2">Rincian Tagihan</p>
                    <p class="mb-1">
                      Total produk
                      <span class="small text-muted"
                        >({{ carts.products.length }} item)</span
                      >
                      <span class="float-right text-dark">
                        {{ countSubtotalProduct() | formatMoney }}</span
                      >
                    </p>
                    <div v-if="charges.length">
                      <p
                        class="mb-1"
                        v-for="charge in charges"
                        :key="charge._id"
                      >
                        {{ charge.chargeName }}
                        <span class="float-right text-dark">{{
                          charge.chargeValue | formatMoney
                        }}</span>
                      </p>
                    </div>
                    <p
                      class="mb-1"
                      v-if="
                        selectedVoucher &&
                        Object.keys(selectedVoucher).length > 0
                      "
                    >
                      Voucher
                      <span class="float-right text-dark"
                        >-
                        {{
                          getPriceVoucherLabelPrice(selectedVoucher)
                            | formatMoney
                        }}</span
                      >
                    </p>
                  </div>
                  <div class="p-3 border-top">
                    <h5 class="mb-0">
                      Total
                      <span class="float-right text-danger">
                        {{ countTotalToPay | formatMoney }}</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
              <p class="text-success text-center" v-if="selectedVoucher">
                Anda Hemat
                {{ getSelectedVouchers.totalVoucherFee | formatMoney }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="order-body order-not-found"
          v-if="carts.products.length <= 0"
        >
          <div class="pb-3 text-center text-danger">
            <h4><i class="fad fa-cart-plus"></i> Keranjang Kamu Kosong</h4>
          </div>
        </div>
      </div>
    </section>

    <div
      class="order-body cart-not-found"
      v-if="Object.keys(carts).length <= 0"
    >
      <div class="pb-3 text-center text-danger">
        <h4><i class="fad fa-cart-plus"></i> Keranjang Kamu Kosong</h4>
      </div>
    </div>

    <div
      class="modal fade"
      id="modal-vouchers"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="modal-vouchersLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-vouchersLabel">Pakai Voucher</h5>
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
            <div class="input-group mb-3 input-wrapper mt-2">
              <input
                type="text"
                class="input"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                aria-label="Masukkan kode voucher"
                aria-describedby="button-addon2"
                v-model="appliedVoucher"
              />
              <span class="placeholder">Masukkan kode voucher</span>
              <div class="input-group-append">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  id="button-addon2"
                  @click="setVoucherByInput()"
                >
                  Terapkan
                </button>
              </div>
              <span class="text-danger font-italic"
                >*apply voucher akan mereset promo atau diskon pada produk</span
              >
            </div>
            <span role="button" class="text-danger pl-3" @click="resetVoucher()"
              ><i class="fad fa-sync-alt"></i> reset voucher</span
            >
            <div>
              <div class="paragraphs p-3">
                <div
                  class="justify-content-center"
                  v-if="getCartsVouchers.length > 0"
                >
                  <div
                    class="voucher-list row"
                    v-for="(voucher, index) in getCartsVouchers"
                    :key="voucher._id"
                  >
                    <div class="col-md-12 content-heading pl-2 pr-2 mt-2">
                      <div>
                        <div>
                          <div class="mb-1 label-voucher">
                            <h5 class="font-weight-bold">
                              {{ voucher.voucherName }}
                            </h5>
                            <h6>kode: {{ voucher.voucherCode }}</h6>
                            <button
                              class="
                                btn btn-outline-danger
                                font-weight-light
                                float-right
                              "
                              @click="applyVoucher(voucher, index)"
                              :disabled="selectedVoucher._id && !voucher._id"
                            >
                              gunakan
                            </button>
                          </div>
                        </div>
                        <div>
                          <span>Berakhir dalam:</span> <br />
                          <span :id="`countDown-${voucher.voucherCode}`">
                            {{ voucher.discountEnd | formatDate }}
                            lagi!</span
                          ><br />

                          <span class="text-danger">Lihat Detail</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="justify-content-center"
                  v-if="getCartsVouchers.length <= 0"
                >
                  <h4 class="font-weight-bold">Voucher Tidak Tersedia</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="modal fade"
      id="modal-vouchers"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="modal-vouchersLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-vouchersLabel">Pakai Voucher</h5>
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
            <div class="input-group mb-3 input-wrapper mt-2">
              <input
                type="text"
                class="input"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                aria-label="Masukkan kode voucher"
                aria-describedby="button-addon2"
                v-model="appliedVoucher"
              />
              <span class="placeholder">Masukkan kode voucher</span>
              <div class="input-group-append">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  id="button-addon2"
                  @click="setVoucherByInput()"
                >
                  Terapkan
                </button>
              </div>
            </div>
            <span role="button" class="text-danger pl-3" @click="resetVoucher()"
              >reset voucher</span
            >
            <div>
              <div class="paragraphs p-3">
                <div class="justify-content-center">
                  <div
                    class="voucher-list row"
                    v-for="(voucher, index) in getCartsVouchers"
                    :key="voucher._id"
                  >
                    <div class="col-md-12 content-heading pl-2 pr-2 mt-2">
                      <div>
                        <div>
                          <div class="mb-1 label-voucher">
                            <h5 class="font-weight-bold">
                              {{ voucher.voucherName }}
                            </h5>
                            <h6>kode: {{ voucher.voucherCode }}</h6>
                            <button
                              class="
                                btn btn-outline-danger
                                font-weight-light
                                float-right
                              "
                              @click="applyVoucher(voucher, index)"
                              :disabled="selectedVoucher._id && !voucher._id"
                            >
                              gunakan
                            </button>
                          </div>
                        </div>
                        <div>
                          <span>Berakhir dalam:</span> <br />
                          <span :id="`countDown-${voucher.voucherCode}`"
                            >{{
                              formatDateToCountDown(
                                voucher.discountEnd,
                                voucher.voucherCode
                              )
                            }}
                            lagi!</span
                          ><br />

                          <span class="text-danger">Lihat Detail</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

moment.locale("id-ID");
export default {
  name: "Cart",
  data() {
    return {
      baseApi: process.env.NUXT_ENV_BASE_URL_API,
      vouchers: [],
      selectedVoucher: {},
      appliedVoucher: "",
      charges: [],
      carts: [],
      selectedVoucher: {},
      productIdTmp: "",
      displayDeleteConfirmation: true,
      chargeSetting: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "chargeName",
      },
      voucherSetting: {
        page: 1,
        show: 10,
        sortBy: "ASC",
        orderBy: "voucherCode",
        platform: "website",
        isActive: true,
      },
    };
  },
  async fetch() {
    this.$store.dispatch("setGlobalModal", true);
    await this.fetchCart();
    await this.fetchCharges();
    this.$store.dispatch("cart/setVouchers");

    this.$store.dispatch("setGlobalModal");
  },
  methods: {
    async fetchCart() {
      if (this.$store.state.cart.carts.length <= 0) {
        await this.$axios
          .$get(
            `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart?page=1&show=6&sortBy=ASC&orderBy=name`
          )
          .then((results) => {
            if (results.data) {
              this.carts = results.data;
            }
          });
        await this.$store.dispatch("cart/setVouchers", this.voucherSetting);
        this.vouchers = await this.$store.state.cart.vouchers;
      }
    },
    async fetchCharges() {
      if (this.$store.state.cart.carts.length <= 0) {
        await this.$axios
          .$get(
            `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/charge?page=${this.chargeSetting.page}&show=${this.chargeSetting.show}&sortBy=${this.chargeSetting.sortBy}&orderBy=${this.chargeSetting.orderBy}`
          )
          .then((results) => {
            if (!results.error) {
              this.charges = results.data;
            }
          });
      }
    },
    getPriceVoucherLabelPrice(voucher) {
      // let voucher = this.selectedVoucher;
      let price = 0;

      if (voucher.discountBy === "percent") {
        let discountPrice = (voucher.discountValue / 100) * this.carts.subTotal;
        price = this.carts.subTotal - discountPrice;
      } else {
        price = voucher.discountValue;
      }
      return price;
    },
    resetVoucher() {
      this.selectedVoucher = {};
      this.appliedVoucher = "";
      $("#modal-vouchers").modal("hide");
      this.$toast.warning("Voucher Dihapus");
    },
    async applyVoucher(voucher) {
      this.$store.dispatch("setGlobalModal", true);

      await this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/voucher/apply`,
          {
            voucher_id: voucher._id,
            user_id: this.$store.state.auth.user._id,
            cart_id: this.carts._id,
            platform: "website",
          }
        )
        .then((results) => {
          if (!results.error) {
            this.selectedVoucher = results.data;
            this.$toast.success("Voucher Diterapkan");
            $("#modal-vouchers").modal("hide");
            this.$store.dispatch("setGlobalModal", false);

            return;
          }

          this.$toast.warning(results.message);
          this.$store.dispatch("setGlobalModal", false);
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
            this.$store.dispatch("setGlobalModal", false);
          }
          this.$store.dispatch("setGlobalModal", false);
        });
      this.$store.dispatch("setGlobalModal", false);
    },
    async setVoucherByInput() {
      this.$store.dispatch("setGlobalModal", true);

      let voucherExist = this.getCartsVouchers.filter(
        (obj) =>
          obj.voucherCode.toLowerCase() === this.appliedVoucher.toLowerCase()
      );
      if (voucherExist.length <= 0) {
        this.$toast.warning("Kode Voucher Salah");

        this.$store.dispatch("setGlobalModal", false);

        return;
      }

      await this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/voucher/apply?voucherCode=${this.appliedVoucher}`,
          {
            voucher_id: voucherExist[0]._id,
            user_id: this.$store.state.auth.user._id,
            cart_id: this.carts._id,
            platform: "website",
          }
        )
        .then((results) => {
          if (!results.error) {
            this.selectedVoucher = results.data;
            this.$toast.success("Voucher Diterapkan");
            $("#modal-vouchers").modal("hide");
            this.selectedVoucher = voucherExist[0];
            this.appliedVoucher = "";
            this.$store.dispatch("setGlobalModal", false);

            return;
          }
          this.appliedVoucher = "";
          this.$toast.warning(results.message);
          this.$store.dispatch("setGlobalModal", false);
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.appliedVoucher = "";
            this.$toast.warning(err.response.message);
            this.$store.dispatch("setGlobalModal", false);
          }
        });

      this.$store.dispatch("setGlobalModal", false);
    },
    closeNote() {
      $(`.input-note`).css("display", "none");
      $(`.edit-input-note`).css("display", "none");
      $(`.edit-note`).css("display", "block");
      $(`.notes`).css("display", "block");
      $(`.note`).css("display", "block");
    },
    editNote(id) {
      $(`.edit-note-${id}`).css("display", "none");
      $(`.notes-${id}`).css("display", "none");
      $(`.edit-input-note-${id} input`).focus();
      $(`.edit-input-note-${id}`).css("display", "block");
    },
    setNote(id) {
      $(`.input-note-${id}`).css("display", "block");
      $(`.input-note-${id} input`).focus();
      $(`.note-${id}`).css("display", "none");
    },
    async removeProduct(id) {
      this.$store.dispatch("setGlobalModal", true);

      this.$axios
        .$delete(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/${this.$store.state.auth.user._id}/product/${id}`
        )
        .then(async (results) => {
          if (results.data.error) {
            this.$toast.warning(results.data.message);
            this.$store.dispatch("setGlobalModal", false);

            return;
          }
          this.$toast.success(results.message);
          await this.fetchCart();
          this.$store.dispatch("setGlobalModal", false);
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
            this.$store.dispatch("setGlobalModal", false);
          } else {
            this.$toast.warning("Server Sibuk");
            this.$store.dispatch("setGlobalModal", false);
          }
        });

      this.$store.dispatch("setGlobalModal", false);
    },
    async updateNote(event, id) {
      this.$store.dispatch("setGlobalModal", false);

      const note = event.target.value;
      this.$axios
        .$put(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/note`, {
          user_id: this.$store.state.auth.user._id,
          product_id: id,
          note,
        })
        .then(async (results) => {
          if (results.data.error) {
            // this.$toast.warning(results.data.message);
            this.$store.dispatch("setGlobalModal", false);
          }
          this.$toast.success(results.message);
          this.$store.dispatch("setGlobalModal", false);

          // this.closeNote();
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
            this.$store.dispatch("setGlobalModal", false);
          } else {
            this.$toast.warning("Server Sibuk");
            this.$store.dispatch("setGlobalModal", false);
          }
        });
      this.$store.dispatch("setGlobalModal", false);
    },
    setQuantity(evt, id) {
      this.carts.products.filter((product) => {
        if (product._id === id) {
          if (product.quantity < product.productOnLive.stock) {
            product.quantity = evt.target.value;
          }
        }
      });
    },
    checkQuantity(e, id) {
      this.carts.products.filter((product) => {
        if (product._id === id) {
          if (product.quantity === "" || parseInt(product.quantity) === 0) {
            product.quantity = 1;
            e.preventDefault();
          }

          if (product.quantity > product.productOnLive.stock) {
            product.quantity = product.productOnLive.stock;
            e.preventDefault();
          }
        }
      });
    },
    checkout() {
      this.$store.dispatch("setGlobalModal", true);

      const products = this.carts.products.map((product, index) => {
        return product._id;
      });

      const vouchers = [];

      if (Object.keys(this.selectedVoucher).length > 0) {
        vouchers.push(this.selectedVoucher._id);
      }

      this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/checkout/cart`, {
          cart: {
            cart_id: this.carts._id,
            products: products,
          },
          user_id: this.$store.state.auth.user._id,
          vouchers,
          type: "checkout",
          platform: "all",
        })
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            this.$store.dispatch("setGlobalModal", false);

            return;
          }
          this.$toast.success("Berhasil checkout!. Pilih Metode Pembayaran");
          this.$store.dispatch("setGlobalModal", false);

          this.$router.push("/checkout");
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
            this.$store.dispatch("setGlobalModal", false);
          }
          this.$store.dispatch("setGlobalModal", false);

          // else {
          //   this.$toast.warning("Server Sibuk");
          // }
        });
      this.$store.dispatch("setGlobalModal", false);
    },
    setVoucher(voucher, index) {
      this.selectedVoucher.push(voucher);

      this.$store.dispatch("setGlobalModal", true);

      this.$store.dispatch("cart/setVoucher", voucher);
      this.$store.dispatch("setGlobalModal");
    },
    setIncrement(event, productId) {
      this.$store.dispatch("setGlobalModal", true);

      this.carts.products.filter((product) => {
        if (product._id == productId) {
          if (product.quantity < product.productOnLive.stock) {
            this.$axios
              .$put(
                `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/quantity`,
                {
                  user_id: this.$store.state.auth.user._id,
                  product_id: productId,
                  type: "plus",
                  quantity: 1,
                }
              )
              .then((results) => {
                if (results.data.error) {
                  this.$toast.warning(results.data.message);
                  this.$store.dispatch("setGlobalModal");
                }
                product.quantity++;
                this.fetchCart();
                this.$store.dispatch("setGlobalModal");
              })
              .catch((err) => {
                if (err && err.response && err.response.data.error) {
                  this.$toast.warning(err.response.data.message);
                  this.$store.dispatch("setGlobalModal", false);
                } else {
                  this.$toast.warning("Server Sibuk");
                  this.$store.dispatch("setGlobalModal", false);
                }
              });
          }
          this.$store.dispatch("setGlobalModal", false);

          event.preventDefault();
        }
      });
    },
    setDecrement(productId) {
      this.$store.dispatch("setGlobalModal", true);

      this.carts.products.filter((product) => {
        if (product._id == productId) {
          if (product.quantity <= 1) {
            return;
          }
          this.$axios
            .$put(
              `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/update/quantity`,
              {
                user_id: this.$store.state.auth.user._id,
                product_id: productId,
                type: "minus",
                quantity: 1,
              }
            )
            .then((results) => {
              if (results.data.error) {
                this.$store.dispatch("setGlobalModal");

                this.$toast.warning(results.data.message);
              }
              product.quantity--;
              this.fetchCart();
              this.$store.dispatch("setGlobalModal");
            })
            .catch((err) => {
              if (err && err.response && err.response.data.error) {
                this.$toast.warning(err.response.data.message);
                this.$store.dispatch("setGlobalModal");
              } else {
                this.$toast.warning("Server Sibuk");
                this.$store.dispatch("setGlobalModal");
              }
            });
        }
      });
      this.$store.dispatch("setGlobalModal");
    },
    openModalVouchers() {
      $("#modal-vouchers").appendTo("body").modal("show");
    },
    closeModal() {
      $("#modal-vouchers").css("display", "none");
    },
    removeProduct(productId) {
      this.$store.dispatch("setGlobalModal", true);

      this.$axios
        .$delete(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart/${this.$store.state.auth.user._id}/product/${productId}`
        )
        .then((results) => {
          if (results.data.error) {
            this.$toast.warning(results.data.message);
            this.$store.dispatch("setGlobalModal");
          } else {
            this.fetchCart();
            this.$store.dispatch("setGlobalModal");
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
            this.$store.dispatch("setGlobalModal");
          } else {
            this.$toast.warning("Server Sibuk");
            this.$store.dispatch("setGlobalModal");
          }
        });
      this.$store.dispatch("setGlobalModal");
    },
    async resetAllCarts() {
      await this.$store.dispatch("cart/setCartsAndCartsNav");
    },
    setPriceWithDiscount(item) {
      if (this.carts && this.carts.products) {
        let price = 0;
        this.carts.products.filter((product) => {
          if (product._id === item._id) {
            let currentTime = moment().format();

            if (Object.keys(this.selectedVoucher).length <= 0) {
              if (
                product.hasPromo &&
                product.hasPromo.isActive &&
                product.hasPromo.promoStart < currentTime &&
                product.hasPromo.promoEnd > currentTime
              ) {
                if (product.hasPromo.promoBy === "percent") {
                  let discountPrice =
                    (product.hasPromo.promoValue / 100) *
                    product.productOnLive.price;
                  price += product.productOnLive.price - discountPrice;
                } else if (product.hasPromo.promoBy === "price") {
                  price +=
                    product.productOnLive.price - product.hasPromo.promoValue;
                } else {
                  price += product.productOnLive.price;
                }
              } else if (
                !product.hasPromo &&
                product.productOnLive.hasDiscount &&
                product.productOnLive.hasDiscount.isDiscount &&
                product.productOnLive.hasDiscount.discountStart < currentTime &&
                product.productOnLive.hasDiscount.discountEnd > currentTime
              ) {
                if (
                  product.productOnLive.hasDiscount.discountBy === "percent"
                ) {
                  let discountPrice =
                    (product.productOnLive.hasDiscount.discount / 100) *
                    product.productOnLive.price;
                  price += product.productOnLive.price - discountPrice;
                } else if (
                  product.productOnLive.hasDiscount.discountBy === "price"
                ) {
                  price +=
                    product.productOnLive.price -
                    product.productOnLive.hasDiscount.discount;
                } else {
                  price += product.productOnLive.price;
                }
              } else {
                price += product.productOnLive.price;
              }
              return price;
            }
            return (price = product.productOnLive.price);
            // return price += product.productOnLive.price;
            // }
          }
        });
        return price;
      }
    },
    setTotalPriceProductWithDiscount(item) {
      if (this.carts && this.carts.products) {
        let price = 0;

        this.carts.products.filter((product) => {
          if (product._id === item._id) {
            let currentTime = moment().format();

            if (Object.keys(this.selectedVoucher).length <= 0) {
              if (
                product.hasPromo &&
                product.hasPromo.isActive &&
                product.hasPromo.promoStart < currentTime &&
                product.hasPromo.promoEnd > currentTime
              ) {
                if (product.hasPromo.promoBy === "percent") {
                  let discountPrice =
                    (product.hasPromo.promoValue / 100) *
                    product.productOnLive.price;
                  price +=
                    (product.productOnLive.price - discountPrice) *
                    product.quantity;
                } else if (product.hasPromo.promoBy === "price") {
                  price +=
                    (product.productOnLive.price -
                      product.hasPromo.promoValue) *
                    product.quantity;
                } else {
                  price += product.productOnLive.price * product.quantity;
                }
              } else if (
                !product.hasPromo &&
                product.productOnLive.hasDiscount &&
                product.productOnLive.hasDiscount.isDiscount &&
                product.productOnLive.hasDiscount.discountStart < currentTime &&
                product.productOnLive.hasDiscount.discountEnd > currentTime
              ) {
                if (
                  product.productOnLive.hasDiscount.discountBy === "percent"
                ) {
                  let discountPrice =
                    (product.productOnLive.hasDiscount.discount / 100) *
                    product.productOnLive.price;
                  price +=
                    (product.productOnLive.price - discountPrice) *
                    product.quantity;
                } else if (
                  product.productOnLive.hasDiscount.discountBy === "price"
                ) {
                  price +=
                    (product.productOnLive.price -
                      product.productOnLive.hasDiscount.discount) *
                    product.quantity;
                } else {
                  price += product.productOnLive.price * product.quantity;
                }
              } else {
                price += product.productOnLive.price * product.quantity;
              }
              return price;
            }

            return (price += product.productOnLive.price * product.quantity);
          }
        });
        return price;
      }
    },
    countSubtotalProduct() {
      if (this.carts && this.carts.products) {
        let price = 0;

        const subTotal = this.carts.products.map((product) => {
          let currentTime = moment().format();

          if (Object.keys(this.selectedVoucher).length <= 0) {
            if (
              product.hasPromo &&
              product.hasPromo.isActive &&
              product.hasPromo.promoStart < currentTime &&
              product.hasPromo.promoEnd > currentTime
            ) {
              if (product.hasPromo.promoBy === "percent") {
                let discountPrice =
                  (product.hasPromo.promoValue / 100) *
                  product.productOnLive.price;
                price +=
                  (product.productOnLive.price - discountPrice) *
                  product.quantity;
              } else if (product.hasPromo.promoBy === "price") {
                price +=
                  (product.productOnLive.price - product.hasPromo.promoValue) *
                  product.quantity;
              } else {
                price += product.productOnLive.price * product.quantity;
              }
            } else if (
              product.productOnLive.hasDiscount &&
              product.productOnLive.hasDiscount.isDiscount &&
              product.productOnLive.hasDiscount.discountStart < currentTime &&
              product.productOnLive.hasDiscount.discountEnd > currentTime
            ) {
              if (product.productOnLive.hasDiscount.discountBy === "percent") {
                let discountPrice =
                  (product.productOnLive.hasDiscount.discount / 100) *
                  product.productOnLive.price;
                price +=
                  (product.productOnLive.price - discountPrice) *
                  product.quantity;
              } else if (
                product.productOnLive.hasDiscount.discountBy === "price"
              ) {
                price +=
                  (product.productOnLive.price -
                    product.productOnLive.hasDiscount.discount) *
                  product.quantity;
              } else {
                price += product.productOnLive.price * product.quantity;
              }
            } else {
              price += product.productOnLive.price * product.quantity;
            }
            return price;
          }
          return (price += product.productOnLive.price * product.quantity);
        });
        return subTotal[0];
      }
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
      "getCountCart",
      "getCartsVouchers",
      "getSelectedVouchers",
    ]),
    countTotalToPay() {
      let price = 0;
      if (this.carts && this.carts.products) {
        this.carts.products.map((product) => {
          let currentTime = moment().format();

          if (Object.keys(this.selectedVoucher).length <= 0) {
            if (
              product.hasPromo &&
              product.hasPromo.isActive &&
              product.hasPromo.promoStart < currentTime &&
              product.hasPromo.promoEnd > currentTime
            ) {
              if (product.hasPromo.promoBy === "percent") {
                let discountPrice =
                  (product.hasPromo.promoValue / 100) *
                  product.productOnLive.price;
                price +=
                  (product.productOnLive.price - discountPrice) *
                  product.quantity;
              } else if (product.hasPromo.promoBy === "price") {
                price +=
                  (product.productOnLive.price - product.hasPromo.promoValue) *
                  product.quantity;
              } else {
                price += product.productOnLive.price * product.quantity;
              }
            } else if (
              product.productOnLive.hasDiscount &&
              product.productOnLive.hasDiscount.isDiscount &&
              product.productOnLive.hasDiscount.discountStart < currentTime &&
              product.productOnLive.hasDiscount.discountEnd > currentTime
            ) {
              if (product.productOnLive.hasDiscount.discountBy === "percent") {
                let discountPrice =
                  (product.productOnLive.hasDiscount.discount / 100) *
                  product.productOnLive.price;
                price +=
                  (product.productOnLive.price - discountPrice) *
                  product.quantity;
              } else if (
                product.productOnLive.hasDiscount.discountBy === "price"
              ) {
                price +=
                  (product.productOnLive.price -
                    product.productOnLive.hasDiscount.discount) *
                  product.quantity;
              } else {
                price += product.productOnLive.price * product.quantity;
              }
            } else {
              price += product.productOnLive.price * product.quantity;
            }
            return price;
          }
          return (price += product.productOnLive.price * product.quantity);
        });
      }

      let subTotalProduct = price;
      let subTotalCharges = 0;
      let voucher = 0;
      let charges = this.charges;

      if (this.getPriceVoucherLabelPrice(this.selectedVoucher)) {
        voucher = this.getPriceVoucherLabelPrice(this.selectedVoucher);
      }

      for (let i = 0; i < charges.length; i++) {
        if (charges[i].chargeBy === "price") {
          subTotalCharges += charges[i].chargeValue;
        }
      }

      return subTotalProduct + subTotalCharges - voucher;
    },
  },
};
</script>

<style scoped>
.notes {
  max-width: calc(65% - 4ch);
  padding-right: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.input-none {
  display: none;
}
.input-wrapper {
  width: 100%;
  margin-left: 8px;
  position: relative;
}
.input {
  height: 35px;
  border-radius: 4px;
  border: 1px solid #f52c5c;
  width: 79%;
  outline: none;
  box-sizing: border-box;
}
.placeholder {
  pointer-events: none;
  position: absolute;
  font-weight: 400;
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

#modal-vouchers {
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
.voucher-list {
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
}
.label-voucher {
  font-size: 5vh;
  font-weight: 500;
}
.img-voucher {
  border-radius: 15px;
}
.cart-not-found {
  margin-top: 15%;
  margin-bottom: 15%;
}

@media only screen and (max-device-width: 480px) {
  .content-heading {
    margin-top: 10px;
  }
  .total_price {
    font-size: calc(45% + 8px);
  }
}

@media only screen and (max-device-width: 380px) {
  .total_price {
    font-size: calc(45% + 7px);
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
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
.order-not-found {
  margin-top: 25%;
  margin-bottom: 25%;
}

.cart-items-number {
  width: 120px;
}

@media only screen and (max-device-width: 480px) {
  .input {
    margin-left: 8px;
    height: 35px;
    width: 70%;
  }
}

@media only screen and (max-device-width: 380px) {
  .input {
    margin-left: 8px;
    height: 35px;
    width: 72%;
  }
}
</style>