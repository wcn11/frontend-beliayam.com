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
          <div class="col-lg-8 mb-4">
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
                            <h5 class="mb-1 label-product">
                              {{ product.name }}
                            </h5>
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
                                  <i class="far fa-trash-alt icon-delete"></i>
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

                            <!-- <div v-if="product.note === ''"> -->
                            <div class="product-note">
                              <span :class="`notes notes-${product._id}`">{{
                                product.note
                              }}</span>
                            </div>

                            <span
                              role="button"
                              :class="`w-50 text-danger note note-${product._id}`"
                              @click="setNote(product._id)"
                            >
                              {{
                                product.note === ""
                                  ? "Tulis Catatan"
                                  : "Ubah Catatan"
                              }}
                            </span>

                            <div
                              :class="`input-wrapper mt-2 input-none input-note input-note-${product._id}`"
                            >
                              <textarea
                                :class="`input input-${product._id}`"
                                type="text"
                                v-model="product.note"
                                @change="updateNote($event, product._id)"
                                @keyup.enter="updateNote($event, product._id)"
                                @focusout="closeNote()"
                              ></textarea>
                              <!-- <input
                                  class="input"
                                  type="text"
                                  v-model="product.note"
                                  @change="updateNote($event, product._id)"
                                  @keyup.enter="updateNote($event, product._id)"
                                  @focusout="closeNote()"
                                /> -->
                              <span class="placeholder"
                                >Tulis Catatan Untuk Item Ini</span
                              >
                            </div>
                            <!-- </div> -->

                            <!-- <div class="d-flex" v-else>
                              <span :class="`notes notes-${product._id}`">{{
                                product.note
                              }}</span>

                              <div
                                :class="`input-wrapper mt-2 input-none edit-input-note edit-input-note-${product._id}`"
                              >
                                <textarea
                                  class="input"
                                  type="text"
                                  v-model="product.note"
                                  @change="updateNote($event, product._id)"
                                  @keyup.enter="updateNote($event, product._id)"
                                  @focusout="closeNote()"
                                ></textarea>
                                <span class="placeholder"
                                  >Tulis Catatan Untuk Item Ini</span
                                >
                              </div>

                              <span
                                role="button"
                                :class="`w-25 text-danger edit-note edit-note-${product._id}`"
                                @click="editNote(product._id)"
                              >
                                Ubah Catatan
                              </span>
                            </div> -->

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
                              bg-danger
                              d-flex
                              align-items-center
                              p-3
                              text-white
                            "
                          >
                            <div class="more text-white">
                              <h6 class="m-0">
                                Subtotal {{ countTotalToPay | formatMoney }}
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
                    :src="`${baseURL}/img/starter1.jpg`"
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
                <div class="mt-3">
                  <div class="bg-white pl-2 pr-2 clearfix">
                    <p class="font-weight-bold ml-2 mb-2 text-details">
                      Voucher
                    </p>
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
                        <span class="float-right text-dark"
                          >
                          {{
                            getPriceVoucherLabelPrice(selectedVoucher)
                              | formatMoney
                          }}</span
                        >
                      </p>
                      <br />
                      <h6 class="mb-0 text-danger">
                        Total Diskon<span class="float-right text-danger"
                          >
                          {{
                            getPriceVoucherLabelPrice(selectedVoucher)
                              | formatMoney
                          }}</span
                        >
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
                    <p class="font-weight-bold mb-2 text-details">
                      Rincian Tagihan
                    </p>
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
                        >-{{
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
              <p
                class="text-success text-center"
                v-if="
                  selectedVoucher && Object.keys(selectedVoucher).length > 0
                "
              >
                Anda Hemat Rp
                <span v-if="selectedVoucher.discountBy === 'percent'">
                  {{
                    ((selectedVoucher.discountValue / 100) * countTotalProduct)
                      | formatMoney
                  }}</span
                >
                <span v-if="selectedVoucher.discountBy === 'price'">
                  {{ selectedVoucher.discountValue | formatMoney }}</span
                >
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
              <span class="text-danger font-italic text-reset-discount"
                >*apply voucher mereset promo dan diskon pada produk</span
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
                    <div
                      :class="`col-md-12 content-heading pl-2 pr-2 mt-2 disable-voucher disable-voucher-${voucher._id}`"
                    >
                      <div>
                        <div>
                          <div class="mb-1 label-voucher">
                            <h5 class="font-weight-bold">
                              {{ voucher.voucherName }}
                            </h5>
                            <h6>kode: {{ voucher.voucherCode }}</h6>
                            <div v-if="voucher.minimumOrderBy">
                              <div v-if="voucher.minimumOrderBy == 'quantity'">
                                <button
                                  class="
                                    btn btn-outline-danger
                                    font-weight-light
                                    float-right
                                  "
                                  @click="applyVoucher(voucher, index)"
                                  :disabled="
                                    selectedVoucher._id && !voucher._id
                                  "
                                  v-if="
                                    voucher.minimumOrderValue <=
                                    carts.totalQuantity
                                  "
                                >
                                  gunakan
                                </button>
                                <span
                                  class="
                                    font-italic
                                    text-danger
                                    small
                                    float-right
                                  "
                                  v-else
                                >
                                  *Min:
                                  {{ voucher.minimumOrderValue }} kuantitas
                                </span>
                              </div>

                              <div
                                v-else-if="voucher.minimumOrderBy == 'total'"
                              >
                                <button
                                  class="
                                    btn btn-outline-danger
                                    font-weight-light
                                    float-right
                                  "
                                  @click="applyVoucher(voucher, index)"
                                  :disabled="
                                    selectedVoucher._id && !voucher._id
                                  "
                                  v-if="
                                    voucher.minimumOrderValue <=
                                    countTotalProduct
                                  "
                                >
                                  gunakan
                                </button>
                                <span
                                  class="
                                    font-italic
                                    text-danger
                                    small
                                    float-right
                                  "
                                  v-else
                                >
                                  *Min:
                                  {{ voucher.minimumOrderValue | formatMoney }}
                                  belanja
                                </span>
                              </div>
                            </div>

                            <button
                              class="
                                btn btn-outline-danger
                                font-weight-light
                                float-right
                              "
                              @click="applyVoucher(voucher, index)"
                              :disabled="selectedVoucher._id && !voucher._id"
                              v-else
                            >
                              gunakan
                            </button>
                          </div>
                        </div>
                        <div>
                          <span>Berakhir dalam:</span> <br />
                          <span :id="`countDown-${voucher.voucherCode}`">
                            {{ voucher.discountEnd | formatDate }} </span
                          ><br />

                          <span
                            class="text-danger"
                            @click="openModalDetailVoucher(voucher)"
                            >Lihat Detail</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="justify-content-center"
                  v-if="getCartsVouchers.length <= 0"
                >
                  <h4 class="font-weight-bold text-center">Voucher Tidak Tersedia</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#wizardUncompleteInfo" class="inline d-none" id="btn-show-wizard"
      >Show</a
    >
    <div id="wizardUncompleteInfo" style="display: none">
      <section class="signup-step-container">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <div class="wizard">
                <div class="wizard-inner">
                  <div class="connecting-line"></div>
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                      <a
                        href="#step1"
                        data-toggle="tab"
                        aria-controls="step1"
                        role="tab"
                        aria-expanded="true"
                        ><span class="round-tab">1 </span>
                        <i>Informasi Akun</i></a
                      >
                    </li>
                    <li
                      role="presentation"
                      class="disabled"
                      v-if="
                        this.$store.state.auth.user &&
                        this.$store.state.auth.user.addresses &&
                        this.$store.state.auth.user.addresses.length <= 0
                      "
                    >
                      <a
                        href="#step2"
                        data-toggle="tab"
                        aria-controls="step2"
                        role="tab"
                        aria-expanded="false"
                        ><span class="round-tab">2</span>
                        <i>Alamat Pengiriman</i></a
                      >
                    </li>
                    <li role="presentation" class="disabled">
                      <a
                        href="#step3"
                        data-toggle="tab"
                        aria-controls="step3"
                        role="tab"
                        v-if="
                          this.$store.state.auth.user &&
                          this.$store.state.auth.user.addresses
                        "
                        ><span class="round-tab">{{
                          this.$store.state.auth.user.addresses.length > 0
                            ? "2"
                            : "3"
                        }}</span>
                        <i>Lanjutkan Ke Pembayaran</i></a
                      >
                    </li>
                  </ul>
                </div>

                <form role="form" action="index.html" class="login-box">
                  <div class="tab-content" id="main_form">
                    <div class="tab-pane active" role="tabpanel" id="step1">
                      <h4 class="text-center mb-5">
                        Informasi Akun Yang Dibutuhkan
                      </h4>
                      <div class="row" v-if="this.$store.state.auth.user">
                        <div class="col-md-6">
                          <div
                            class="form-group"
                            v-if="this.$store.state.auth.user.name"
                          >
                            <label>Nama</label>
                            <h5>{{ this.$store.state.auth.user.name }}</h5>
                          </div>

                          <div v-else>
                            <label>Nama anda*</label>
                            <div class="input-group mb-3">
                              <input
                                type="text"
                                name="name"
                                class="form-control"
                                placeholder="Nama anda"
                                aria-label="Nama anda"
                                aria-describedby="button-addon2"
                                v-model="userData.name"
                              />
                              <div class="input-group-append">
                                <button
                                  class="btn btn-danger"
                                  type="button"
                                  id="button-addon2"
                                  @click="changeNameMethod()"
                                >
                                  tambah
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div
                            class="form-group"
                            v-if="this.$store.state.auth.user.email"
                          >
                            <label
                              >Alamat Email*
                              <i
                                class="text-info fad fa-check-circle"
                                v-if="
                                  this.$store.state.auth.user.isEmailVerified
                                "
                              ></i
                            ></label>
                            <h5>{{ this.$store.state.auth.user.email }}</h5>
                          </div>

                          <div v-else>
                            <label>Alamat email*</label>
                            <div class="input-group mb-3">
                              <input
                                type="text"
                                name="email"
                                class="form-control"
                                placeholder="Alamat Email"
                                aria-label="Alamat Email"
                                aria-describedby="button-addon2"
                                v-model="userData.email"
                              />
                              <div class="input-group-append">
                                <button
                                  class="btn btn-danger"
                                  type="button"
                                  id="button-addon2"
                                  @click="changeEmailMethod()"
                                >
                                  tambah
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div
                            class="form-group"
                            v-if="this.$store.state.auth.user.phone"
                          >
                            <label
                              >No. Telepon
                              <i
                                class="text-info fad fa-check-circle"
                                v-if="
                                  this.$store.state.auth.user.isPhoneVerified
                                "
                              ></i
                            ></label>
                            <h5>{{ this.$store.state.auth.user.phone }}</h5>
                          </div>
                          <div v-else>
                            <label>No. Telepon*</label>
                            <div class="input-group mb-3">
                              <input
                                type="tel"
                                name="phone"
                                class="form-control"
                                placeholder="No. Telepon"
                                aria-label="No. Telepon"
                                aria-describedby="button-addon2"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                v-model="userData.phone"
                              />
                              <div class="input-group-append">
                                <button
                                  class="btn btn-danger"
                                  type="button"
                                  id="button-addon2"
                                  @click="changePhoneMethod()"
                                >
                                  tambah
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        *anda dapat mengubah informasi akun
                        <a href="/akun" class="text-danger"> disini</a>
                      </div>

                      <ul class="list-inline pull-right">
                        <li>
                          <button
                            type="button"
                            class="default-btn text-white next-step"
                            :disabled="!nextStepToAddress()"
                          >
                            Lanjutkan
                            <i class="fad fa-chevron-circle-right"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tab-pane"
                      role="tabpanel"
                      id="step2"
                      v-if="
                        this.$store.state.auth.user &&
                        this.$store.state.auth.user.addresses &&
                        this.$store.state.auth.user.addresses.length <= 0
                      "
                    >
                      <h4 class="text-center mb-5">Alamat</h4>

                      <form class="">
                        <div class="card">
                          <div class="card-header">
                            Informasi Penerima Produk
                          </div>
                          <div class="card-body">
                            <div class="form-group">
                              <label for="receiver">Nama Penerima</label>
                              <input
                                type="text"
                                class="form-control"
                                id="receiver"
                                placeholder="Nama Penerima Pesanan"
                                v-model="userData.address.receiver_name"
                              />
                            </div>
                            <div class="form-group">
                              <label for="phone">Nomor HP</label>
                              <input
                                type="tel"
                                class="form-control"
                                placeholder="Contoh: 0812"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                v-model="userData.address.phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="card mt-4">
                          <div class="card-header">
                            Alamat Pengiriman Pesanan
                          </div>
                          <div class="card-body">
                            <div class="form-group">
                              <label for="label">Label Alamat</label>
                              <input
                                type="text"
                                class="form-control"
                                id="label"
                                placeholder="Contoh: Rumah Ibu"
                                v-model="userData.address.label"
                              />
                              <div
                                class="btn-group btn-group-toggle w-100 mt-3"
                                data-toggle="buttons"
                              >
                                <label
                                  class="btn btn-outline-danger active"
                                  @click="setLabelAddress('Rumah')"
                                >
                                  <input
                                    type="radio"
                                    name="options"
                                    id="option1"
                                    checked
                                  />
                                  Rumah
                                </label>
                                <label
                                  class="btn btn-outline-danger"
                                  @click="setLabelAddress('Kantor')"
                                >
                                  <input
                                    type="radio"
                                    name="options"
                                    id="option2"
                                  />
                                  Kantor
                                </label>
                                <label
                                  class="btn btn-outline-danger"
                                  @click="setLabelAddress('Apartment')"
                                >
                                  <input
                                    type="radio"
                                    name="options"
                                    id="option3"
                                  />
                                  Apartment
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="inputAddress">Alamat</label>
                              <textarea
                                type="text"
                                class="form-control"
                                id="inputAddress"
                                placeholder="Jl. Jenderal Sudirman RT 02/10"
                                v-model="userData.address.address1"
                              />
                            </div>
                            <div class="form-group">
                              <label for="inputAddress">Alamat 2</label>
                              <textarea
                                type="text"
                                class="form-control"
                                id="inputAddress"
                                placeholder="Jl. Soekarno Hatta RT 04/10"
                                v-model="userData.address.address2"
                              />
                            </div>
                            <div class="form-group">
                              <label for="inputAddress2">Detail/Patokan</label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputAddress2"
                                v-model="userData.address.details"
                                placeholder="Apartment, Blok, Pos Satpam"
                              />
                            </div>
                            <div class="form-group">
                              <label for="inputState">Provinsi</label>
                              <select
                                id="inputState"
                                class="form-control"
                                v-model="userData.address.state"
                                @change="getCities()"
                              >
                                <option disabled selected>
                                  Pilih Provinsi...
                                </option>
                                <option
                                  v-for="state in regions.state"
                                  :value="state"
                                  :key="state.id"
                                >
                                  {{ state.name }}
                                </option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputState">Kota & Kabupaten</label>
                              <select
                                id="inputState"
                                class="form-control"
                                v-model="userData.address.city"
                                @change="getDistricts()"
                              >
                                <option disabled selected>
                                  Pilih Kota/kabupaten...
                                </option>
                                <option
                                  v-for="city in regions.cities.regencies"
                                  :value="city"
                                  :key="city.id"
                                >
                                  {{ city.name }}
                                </option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputState">Kecamatan</label>
                              <select
                                id="inputState"
                                class="form-control"
                                v-model="userData.address.district"
                                @change="getSubDistricts()"
                              >
                                <option disabled selected>
                                  Pilih Kecamatan...
                                </option>
                                <option
                                  v-for="district in regions.districts
                                    .districts"
                                  :value="district"
                                  :key="district.id"
                                >
                                  {{ district.name }}
                                </option>
                              </select>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-8">
                                <label for="inputState">Kelurahan & desa</label>
                                <select
                                  id="inputState"
                                  class="form-control"
                                  v-model="userData.address.sub_district"
                                >
                                  <option disabled selected>
                                    Pilih Kelurahan/desa...
                                  </option>
                                  <option
                                    v-for="sub_district in regions.sub_districts
                                      .villages"
                                    :value="sub_district"
                                    :key="sub_district.id"
                                  >
                                    {{ sub_district.name }}
                                  </option>
                                </select>
                              </div>
                              <div class="form-group col-md-4">
                                <label for="inputZip">Kode POS</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputZip"
                                  v-model="userData.address.postcode"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card mt-4">
                          <div class="card-body">
                            <div class="form-group mb-0">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                  v-model="userData.address.default"
                                />
                                <label class="form-check-label" for="gridCheck">
                                  Jadikan Alamat Utama
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="mb-4">
                        *anda dapat mengubah alamat
                        <a href="/akun/alamat" class="text-danger"> disini</a>
                      </div>

                      <div class="m-0 p-0 text-center-webkit">
                        <button
                          type="button"
                          class="btn btn-success btn-block w-50"
                          @click="saveNewAddress()"
                        >
                          Simpan Alamat
                        </button>
                      </div>

                      <ul class="list-inline pull-right">
                        <li>
                          <button type="button" class="default-btn prev-step">
                            <i class="fad fa-chevron-circle-left"></i> Kembali
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="default-btn text-white next-step"
                            :disabled="!nextStepToCheckout()"
                          >
                            Lanjutkan
                            <i class="fad fa-chevron-circle-right"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane" role="tabpanel" id="step3">
                      <h4 class="text-center">Lanjutkan Checkout</h4>

                      <div class="m-0 p-0 text-center-webkit">
                        <button
                          type="button"
                          class="btn btn-success btn-block w-50"
                          @click="checkout()"
                        >
                          Lanjutkan Ke Pembayaran
                        </button>
                      </div>

                      <ul class="list-inline pull-right">
                        <li>
                          <button type="button" class="default-btn prev-step">
                            <i class="fad fa-chevron-circle-left"></i> Kembali
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div
      class="modal fade"
      id="modalDetailVoucher"
      tabindex="-1"
      aria-labelledby="modalDetailVoucherLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalDetailVoucherLabel">
              Syarat & Ketentuan
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
          <div class="modal-body" v-if="selectedDetailVoucher">
            <header>
              <p class="font-weight-bold">
                {{ selectedDetailVoucher.voucherName }}
              </p>
              <div v-html="selectedDetailVoucher.termsAndConditions"></div>
            </header>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
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
      baseURL: process.env.NUXT_ENV_BASE_URL,
      totalProductPrice: 0,
      vouchers: [],
      selectedVoucher: {},
      appliedVoucher: "",
      charges: [],
      carts: [],
      selectedVoucher: {},
      selectedDetailVoucher: {},
      productIdTmp: "",
      displayDeleteConfirmation: true,
      regions: {
        state: [],
        cities: {},
        districts: {},
        sub_districts: {},
        postcode: "",
      },
      userData: {
        phone: "",
        name: "",
        email: "",
        address: {
          label: "",
          receiver_name: "",
          phone: "",
          address1: "",
          address2: "",
          details: "",
          state: {},
          city: {},
          district: {},
          sub_district: {},
          postcode: "",
          default: true,
        },
      },
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

    await this.getAllProvince();

    this.$store.dispatch("setGlobalModal");
    this.$store.dispatch("setGlobalModal", false);
  },
  mounted() {
    this.setScript();
  },
  watch: {
    "carts.totalQuantity": function (newValue, oldValue) {
      if (this.selectedVoucher) {
        if (
          this.selectedVoucher.minimumOrderBy &&
          this.selectedVoucher.minimumOrderBy == "quantity"
        ) {
          if (this.selectedVoucher.minimumOrderValue > newValue) {
            this.selectedVoucher = {};
          }
        }
      }
    },
    countTotalProduct: function (newValue, oldValue) {
      if (this.selectedVoucher) {
        if (
          this.selectedVoucher.minimumOrderBy &&
          this.selectedVoucher.minimumOrderBy == "total"
        ) {
          if (this.selectedVoucher.minimumOrderValue > newValue) {
            this.selectedVoucher = {};
          }
        }
      }
    },
  },
  methods: {
    openModalDetailVoucher(voucher) {
      $("#modal-vouchers").modal("hide");
      this.selectedDetailVoucher = voucher;
      $("#modalDetailVoucher").appendTo("body").modal("show");
    },
    setLabelAddress(label = "Rumah") {
      this.userData.address.label = label;
    },
    async saveNewAddress() {
      const user = this.$store.state.auth.user;

      const response = await this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/address`, {
          user_id: user._id,
          label: this.userData.address.label,
          receiver_name: this.userData.address.receiver_name,
          address1: this.userData.address.address1,
          address2: this.userData.address.address2,
          city: this.userData.address.city,
          state: this.userData.address.state,
          district: this.userData.address.district,
          sub_district: this.userData.address.sub_district,
          postcode: this.userData.address.postcode,
          phone: this.userData.address.phone,
          details: this.userData.address.details,
          default: this.userData.address.default,
        })
        .then(async (results) => {
          if (results.error) {
            this.$toast.error(results.message);
            return;
          } else {
            this.$toast.success(results.message);

            this.$store.dispatch("auth/getUser");
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.error(err.response.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
    },
    nextStepToCheckout() {
      if (this.$store.state.auth.user) {
        if (!this.$store.state.auth.user.addresses) {
          return false;
        }

        if (this.$store.state.auth.user.addresses.length <= 0) {
          return false;
        }
        return true;
      }
      return false;
    },
    nextStepToAddress() {
      if (this.$store.state.auth.user) {
        if (
          !this.$store.state.auth.user.name ||
          !this.$store.state.auth.user.phone ||
          !this.$store.state.auth.user.email
        ) {
          return false;
        }
        return true;
      }
      return true;
    },
    async changeEmailMethod() {
      if (this.userData.email === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
      }

      let user_id = this.$store.state.auth.user._id;

      this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/profile/email/change`,
          {
            user_id,
            new_email: this.userData.email,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$toast.success(results.message);

          this.$store.dispatch("auth/getUser");
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    async changeNameMethod() {
      if (this.userData.name === "") {
        this.$toast.warning("Bidang Nama tidak boleh kosong");
      }

      let user_id = this.$store.state.auth.user._id;

      this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/profile/name/change`,
          {
            user_id,
            name: this.userData.name,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$toast.success(results.message);

          this.$store.dispatch("auth/getUser");
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    async changePhoneMethod() {
      if (this.userData.phone === "") {
        this.$toast.warning("Bidang No. Telepon tidak boleh kosong");
      }

      let user_id = this.$store.state.auth.user._id;

      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/phone?sendSms=false`,
          {
            user_id,
            phone: this.userData.phone,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$toast.success(results.message);

          this.$store.dispatch("auth/getUser");
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    async fetchCart() {
      if (this.isAuthenticated) {
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
      $(`.notes`).css("display", "unset");
      $(`.note`).css("display", "unset");
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
      $(`.input-${id}`).focus();
      $(`.note-${id}`).css("display", "none");
      $(`.notes-${id}`).css("display", "none");
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
          }
          // this.$toast.success(results.message);

          // this.closeNote();
        })
        .catch((err) => {
          if (err && err.response && err.response.data.error) {
            this.$toast.warning(err.response.data.message);
          } else {
            this.$toast.warning("Server Sibuk");
          }
        });
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
    wizardUncompleteInfo(show = true) {
      if (show) {
        $(document).ready(function () {
          $(".inline").modaal({
            content_source: "#wizardUncompleteInfo",
            fullscreen: true,
          });
          $("#btn-show-wizard").click();
        });
        return;
      }
      $(".inline").modaal("close");
    },
    checkout() {
      if (this.$store.state.auth.user) {
        if (
          !this.$store.state.auth.user.name ||
          !this.$store.state.auth.user.phone ||
          !this.$store.state.auth.user.email
        ) {
          this.wizardUncompleteInfo();

          this.$toast.warning("Beberapa informasi dibutuhkan untuk pemesanan");
          return;
        }
        if (
          this.$store.state.auth.user.addresses &&
          this.$store.state.auth.user.addresses.length <= 0
        ) {
          this.wizardUncompleteInfo();

          this.$toast.warning(
            "Alamat pengiriman dibutuhkan untuk pengiriman pesanan"
          );
          return;
        }
      }

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

          window.location.href = "/checkout";

          // this.$router.push("/checkout");
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

    async getAllProvince() {
      await this.$axios
        .$get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/region/provinces`)
        .then((res) => {
          this.regions.state = res.data;
        });
    },
    async getCities(type = "new", id = 0) {
      let state;

      if (type == "new") {
        state = this.userData.address.state.id;
      } else {
        state = id;
      }

      await this.$axios
        .$get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/region/province/${state}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            this.regions.cities = res.data[0];
          }
        });
    },
    async getDistricts(type = "new", id = 0) {
      let city;

      if (type == "new") {
        city = this.userData.address.city.id;
      } else {
        city = id;
      }

      await this.$axios
        .$get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/region/regency/${city}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            this.regions.districts = res.data[0];
          }
        });
    },
    async getSubDistricts(type = "new", id = 0) {
      let district = this.userData.address.district;

      if (type == "new") {
        district = this.userData.address.district.id;
      } else {
        district = id;
      }

      await this.$axios
        .$get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/region/district/${district}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            this.regions.sub_districts = res.data[0];
          }
        });
    },
    setScript() {
      // ------------step-wizard-------------
      $(document).ready(function () {
        $(".nav-tabs > li a[title]").tooltip();

        //Wizard
        $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
          var target = $(e.target);

          if (target.parent().hasClass("disabled")) {
            return false;
          }
        });

        $(".next-step").click(function (e) {
          var active = $(".wizard .nav-tabs li.active");
          active.next().removeClass("disabled");
          nextTab(active);
        });
        $(".prev-step").click(function (e) {
          var active = $(".wizard .nav-tabs li.active");
          prevTab(active);
        });
      });

      function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
      }
      function prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
      }

      $(".nav-tabs").on("click", "li", function () {
        $(".nav-tabs li.active").removeClass("active");
        $(this).addClass("active");
      });
    },
  },

  computed: {
    ...mapGetters("cart", [
      "getCountCart",
      "getCartsVouchers",
      "getSelectedVouchers",
    ]),
    ...mapGetters("auth", ["isAuthenticated"]),
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
    countTotalProduct() {
      let price = 0;
      if (this.carts && this.carts.products) {
        this.carts.products.map((product) => {
          let currentTime = moment().format();

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
              return true;
            } else if (product.hasPromo.promoBy === "price") {
              price +=
                (product.productOnLive.price - product.hasPromo.promoValue) *
                product.quantity;
              return true;
            } else {
              price += product.productOnLive.price * product.quantity;
              return true;
            }
          } else if (
            !product.hasPromo &&
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
              return true;
            } else if (
              product.productOnLive.hasDiscount.discountBy === "price"
            ) {
              price +=
                (product.productOnLive.price -
                  product.productOnLive.hasDiscount.discount) *
                product.quantity;
              return true;
            } else {
              price += product.productOnLive.price * product.quantity;
              return true;
            }
          }
          price += product.productOnLive.price * product.quantity;

          return true;
        });
      }

      return price;
    },
  },
};
</script>

<style>
.label-product {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  width: 550px;
  font-size: 15px;
}
.modaal-wrapper {
  z-index: 9998 !important;
}
.text-center-webkit {
  text-align: center;
  text-align: -webkit-center;
}
</style>

<style scoped>
.text-reset-discount {
  margin-left: 8px;
}
.text-details {
  font-size: 17px;
}
.product-note {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 300px;
}
.input-none {
  display: none;
}
.input-wrapper {
  width: 100%;
  margin-left: 0px;
  position: relative;
}
.input {
  height: 60px;
  border-radius: 4px;
  border: 1px solid #f52c5c;
  width: 81%;
  outline: none;
  box-sizing: border-box;
  line-height: 30px;
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
.icon-delete {
  margin-right: 0px;
}

/* for wizard */

i {
  margin-right: 10px;
}

/*------------------------*/
input:focus,
button:focus,
.form-control:focus {
  outline: none;
  box-shadow: none;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: #fff;
}
/*----------step-wizard------------*/
.d-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
.align-items-center {
  align-items: center;
}

/*---------signup-step-------------*/
.bg-color {
  background-color: #333;
}
.signup-step-container {
  padding: 150px 0px;
  padding-bottom: 60px;
}

.wizard .nav-tabs {
  position: relative;
  margin-bottom: 0;
  border-bottom-color: transparent;
}

.wizard > div.wizard-inner {
  position: relative;
  margin-bottom: 50px;
  text-align: center;
  text-align: -webkit-right;
}

.connecting-line {
  height: 2px;
  background: #e0e0e0;
  position: absolute;
  width: 75%;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 15px;
  z-index: 1;
}

.wizard .nav-tabs > li.active > a,
.wizard .nav-tabs > li.active > a:hover,
.wizard .nav-tabs > li.active > a:focus {
  color: #555555;
  cursor: default;
  border: 0;
  border-bottom-color: transparent;
}

span.round-tab {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  border-radius: 50%;
  background: #fff;
  z-index: 2;
  position: absolute;
  left: 0;
  text-align: center;
  font-size: 16px;
  color: #0e214b;
  font-weight: 500;
  border: 1px solid #ddd;
}
span.round-tab i {
  color: #555555;
}
.wizard li.active span.round-tab {
  background: #0db02b;
  color: #fff;
  border-color: #0db02b;
}
.wizard li.active span.round-tab i {
  color: #5bc0de;
}
.wizard .nav-tabs > li.active > a i {
  color: #0db02b;
}

.wizard .nav-tabs > li {
  width: 25%;
}

.wizard li:after {
  content: " ";
  position: absolute;
  left: 46%;
  opacity: 0;
  margin: 0 auto;
  bottom: 0px;
  border: 5px solid transparent;
  border-bottom-color: red;
  transition: 0.1s ease-in-out;
}

.wizard .nav-tabs > li a {
  width: 30px;
  height: 30px;
  margin: 20px auto;
  border-radius: 100%;
  padding: 0;
  background-color: transparent;
  position: relative;
  top: 0;
}
.wizard .nav-tabs > li a i {
  position: absolute;
  top: -15px;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 700;
  color: #000;
}

.wizard .nav-tabs > li a:hover {
  background: transparent;
}

.wizard .tab-pane {
  position: relative;
  padding-top: 20px;
}

.wizard h3 {
  margin-top: 0;
}
.prev-step,
.next-step {
  font-size: 13px;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  margin-top: 30px;
}
.next-step {
  background-color: #b73a0c;
}
.skip-btn {
  background-color: #cec12d;
}
.step-head {
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
}
.term-check {
  font-size: 14px;
  font-weight: 400;
}
.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40px;
  margin-bottom: 0;
}
.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 40px;
  margin: 0;
  opacity: 0;
}
.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 40px;
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 2;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: 38px;
  padding: 0.375rem 0.75rem;
  line-height: 2;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 0.25rem 0.25rem 0;
}
.footer-link {
  margin-top: 30px;
}
.all-info-container {
}
.list-content {
  margin-bottom: 10px;
}
.list-content a {
  padding: 10px 15px;
  width: 100%;
  display: inline-block;
  background-color: #f5f5f5;
  position: relative;
  color: #565656;
  font-weight: 400;
  border-radius: 4px;
}
.list-content a[aria-expanded="true"] i {
  transform: rotate(180deg);
}
.list-content a i {
  text-align: right;
  position: absolute;
  top: 15px;
  right: 10px;
  transition: 0.5s;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #fdfdfd;
}
.list-box {
  padding: 10px;
}
.signup-logo-header .logo_area {
  width: 200px;
}
.signup-logo-header .nav > li {
  padding: 0;
}
.signup-logo-header .header-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-inline li {
  display: inline-block;
}
.pull-right {
  float: right;
}
/*-----------custom-checkbox-----------*/
/*----------Custom-Checkbox---------*/
input[type="checkbox"] {
  position: relative;
  display: inline-block;
  margin-right: 5px;
}
input[type="checkbox"]::before,
input[type="checkbox"]::after {
  position: absolute;
  content: "";
  display: inline-block;
}
input[type="checkbox"]::before {
  height: 16px;
  width: 16px;
  border: 1px solid #999;
  left: 0px;
  top: 0px;
  background-color: #fff;
  border-radius: 2px;
}
input[type="checkbox"]::after {
  height: 5px;
  width: 9px;
  left: 4px;
  top: 4px;
}
input[type="checkbox"]:checked::after {
  content: "";
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: rotate(-45deg);
}
input[type="checkbox"]:checked::before {
  background-color: #18ba60;
  border-color: #18ba60;
}

@media (max-width: 1200px) {
  .label-product {
    width: 300px;
  }
}

@media (max-width: 992px) {
  .label-product {
    width: 300px;
  }
}

@media (max-width: 767px) {
  .sign-content h3 {
    font-size: 40px;
  }
  .wizard .nav-tabs > li a i {
    display: none;
  }
  .signup-logo-header .navbar-toggle {
    margin: 0;
    margin-top: 8px;
  }
  .signup-logo-header .logo_area {
    margin-top: 0;
  }
  .signup-logo-header .header-flex {
    display: block;
  }
}

@media only screen and (max-device-width: 720px) {
  .label-product {
    width: 400px;
  }
}

@media only screen and (max-device-width: 576px) {
  .label-product {
    width: 350px;
  }
}

@media only screen and (max-device-width: 540px) {
  .label-product {
    width: 300px;
  }
}
@media only screen and (max-device-width: 480px) {
  .input {
    margin-left: 8px;
    height: 35px;
    width: 78%;
  }

  .product-note {
    width: 270px;
  }
  .content-heading {
    margin-top: 10px;
  }
  .total_price {
    font-size: calc(45% + 8px);
  }
  .label-product {
    width: 250px;
  }
}
@media only screen and (max-device-width: 446px) {
  .input {
    margin-left: 8px;
    height: 35px;
    width: 70%;
  }
  .product-note {
    width: 245px;
  }
}

@media only screen and (max-device-width: 400px) {
  .product-note {
    width: 225px;
  }
  .label-product {
    width: 200px;
  }
}
@media only screen and (max-device-width: 380px) {
  .input {
    margin-left: 8px;
    height: 35px;
    width: 71%;
  }
  .product-note {
    width: 200px;
  }
  .total_price {
    font-size: calc(45% + 7px);
  }
  .label-product {
    width: 200px;
  }
}
@media only screen and (max-device-width: 360px) {
  .input {
    margin-left: 8px;
    height: 35px;
    width: 70%;
  }
  .product-note {
    width: 195px;
  }
}
</style>