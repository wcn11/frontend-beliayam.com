<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
        <ProfilePartialSidebar />
        <div class="col-lg-8 p-4 bg-white rounded shadow-sm">
          <div class="beliayam-my_address">
            <div class="d-flex align-items-center mb-2">
              <p class="mb-0 h6">Alamat Saya</p>
              <button
                class="btn btn-outline-danger mb-0 ml-auto"
                @click="showModalNewAddress()"
              >
                alamat baru
              </button>
            </div>
            <div
              v-for="address in addresses.address"
              :key="address._id"
              class="
                custom-control custom-radio
                px-0
                mb-3
                position-relative
                border-custom-radio
              "
            >
              <input
                type="radio"
                id="customRadioInline1"
                name="customRadioInline1"
                class="custom-control-input"
                checked
              />
              <label
                class="custom-control-label w-100"
                for="customRadioInline1"
              >
                <div>
                  <div class="p-3 bg-white rounded shadow-sm w-100">
                    <div class="d-flex align-items-center mb-2">
                      <p class="mb-0 h6">{{ address.label }}</p>
                      <p
                        class="mb-0 badge badge-success ml-auto"
                        v-if="address.default"
                      >
                        utama
                      </p>
                      <p
                        class="mb-0 badge badge-danger ml-auto"
                        role="button"
                        v-else
                        @click="setDefaultAddress(address._id)"
                      >
                        pilih
                      </p>
                    </div>
                    <p class="small text-muted m-0">{{ address.phone }}</p>
                    <p class="small text-muted m-0">{{ address.address1 }}</p>
                    <p class="small text-muted m-0">
                      {{ address.sub_district.name }},
                      {{ address.district.name }}, {{ address.city.name }}
                    </p>
                    <p class="small text-muted m-0">
                      {{ address.state.name }}, {{ address.postcode }}
                    </p>
                    <p class="pt-2 m-0 text-right">
                      <span class="small"
                        ><a
                          href="javascript:void(0)"
                          class="text-decoration-none text-success"
                          id="button-modal-new-address"
                          @click="openModalEditAddress(address._id)"
                        >
                          edit</a
                        ></span
                      >
                      <span class="small ml-3"
                        ><a
                          href="#"
                          data-toggle="modal"
                          data-target="#Delete"
                          class="text-decoration-none text-danger"
                          @click="openModalDeleteAddress(address)"
                        >
                          hapus</a
                        ></span
                      >
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div v-if="addresses.length <= 0">Belum ada alamat</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modal-new-address"
      tabindex="-1"
      aria-labelledby="modal-new-addressLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="container modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Alamat Pengiriman Baru</h5>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="card">
                <div class="card-header">Informasi Penerimaan Produk</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="receiver">Nama Penerima</label>
                    <input
                      type="text"
                      class="form-control"
                      id="receiver"
                      placeholder="Nama Penerima Pesanan"
                      v-model="newAddress.receiver_name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Nomor HP</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Contoh: 0812"
                      v-model="newAddress.phone"
                    />
                  </div>
                </div>
              </div>
              <div class="card mt-4">
                <div class="card-header">Alamat Pengiriman Pesanan</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="label">Label Alamat</label>
                    <input
                      type="text"
                      class="form-control"
                      id="label"
                      placeholder="Contoh: Rumah Ibu"
                      v-model="newAddress.label"
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
                        <input type="radio" name="options" id="option2" />
                        Kantor
                      </label>
                      <label
                        class="btn btn-outline-danger"
                        @click="setLabelAddress('Apartment')"
                      >
                        <input type="radio" name="options" id="option3" />
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
                      v-model="newAddress.address1"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Alamat 2</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Jl. Soekarno Hatta RT 04/10"
                      v-model="newAddress.address2"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Detail/Patokan</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                      v-model="newAddress.details"
                      placeholder="Apartment, Blok, Pos Satpam"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputState">Provinsi</label>
                    <select
                      id="inputState"
                      class="form-control"
                      v-model="newAddress.state"
                      @change="getCities()"
                    >
                      <option disabled selected>Pilih Provinsi...</option>
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
                      v-model="newAddress.city"
                      @change="getDistricts()"
                    >
                      <option disabled selected>Pilih Kota/kabupaten...</option>
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
                      v-model="newAddress.district"
                      @change="getSubDistricts()"
                    >
                      <option disabled selected>Pilih Kecamatan...</option>
                      <option
                        v-for="district in regions.districts.districts"
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
                        v-model="newAddress.sub_district"
                      >
                        <option disabled selected>
                          Pilih Kelurahan/desa...
                        </option>
                        <option
                          v-for="sub_district in regions.sub_districts.villages"
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
                        v-model="newAddress.postcode"
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
                        v-model="newAddress.default"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Jadikan Alamat Utama
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer p-0 border-0">
            <div class="col-6 m-0 p-0">
              <button
                type="button"
                class="btn border-top btn-lg btn-block"
                data-dismiss="modal"
              >
                Batal
              </button>
            </div>
            <div class="col-6 m-0 p-0">
              <button
                type="button"
                class="btn btn-success btn-lg btn-block"
                @click="saveNewAddress()"
              >
                Simpan Alamat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modal-edit-address"
      tabindex="-1"
      aria-labelledby="modal-new-addressLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="container modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ubah Alamat Pengiriman</h5>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="card">
                <div class="card-header">Informasi Penerimaan Produk</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="receiver">Nama Penerima</label>
                    <input
                      type="text"
                      class="form-control"
                      id="receiver"
                      placeholder="Nama Penerima Pesanan"
                      v-model="updateAddress.data.receiver_name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Nomor HP</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Contoh: 0812"
                      v-model="updateAddress.data.phone"
                    />
                  </div>
                </div>
              </div>

              <div class="card mt-4">
                <div class="card-header">Alamat Pengiriman Pesanan</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="label">Label Alamat</label>
                    <input
                      type="text"
                      class="form-control"
                      id="label"
                      placeholder="Contoh: Rumah Ibu"
                      v-model="updateAddress.data.label"
                    />
                    <div
                      class="btn-group btn-group-toggle w-100 mt-3"
                      data-toggle="buttons"
                    >
                      <label
                        class="btn btn-outline-danger active"
                        @click="setLabelAddress('Rumah', 'update')"
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
                        @click="setLabelAddress('Kantor', 'update')"
                      >
                        <input type="radio" name="options" id="option2" />
                        Kantor
                      </label>
                      <label
                        class="btn btn-outline-danger"
                        @click="setLabelAddress('Apartment', 'update')"
                      >
                        <input type="radio" name="options" id="option3" />
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
                      v-model="updateAddress.data.address1"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Alamat 2</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Jl. Soekarno Hatta RT 04/10"
                      v-model="updateAddress.data.address2"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Detail/Patokan</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                      v-model="updateAddress.data.details"
                      placeholder="Apartment, Blok, Pos Satpam"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputState">Provinsi</label>
                    <select
                      id="inputState"
                      class="form-control"
                      v-model="updateAddress.data.state"
                      @change="getCities('update', updateAddress.data.state.id)"
                    >
                      <option disabled :selected="regions.state.length <= 0">
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
                      v-model="updateAddress.data.city"
                      @change="
                        getDistricts('update', updateAddress.data.city.id)
                      "
                    >
                      <option disabled selected>Pilih Kota/kabupaten...</option>
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
                      v-model="updateAddress.data.district"
                      @change="
                        getSubDistricts(
                          'update',
                          updateAddress.data.district.id
                        )
                      "
                    >
                      <option disabled selected>Pilih Kecamatan...</option>
                      <option
                        v-for="district in regions.districts.districts"
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
                        v-model="updateAddress.data.sub_district"
                      >
                        <option disabled selected>
                          Pilih Kelurahan/desa...
                        </option>
                        <option
                          v-for="sub_district in regions.sub_districts.villages"
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
                        v-model="updateAddress.data.postcode"
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
                        v-model="updateAddress.data.default"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Jadikan Alamat Utama
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer p-0 border-0">
            <div class="col-6 m-0 p-0">
              <button
                type="button"
                class="btn border-top btn-lg btn-block"
                data-dismiss="modal"
              >
                Batal
              </button>
            </div>
            <div class="col-6 m-0 p-0">
              <button
                type="button"
                class="btn btn-success btn-lg btn-block"
                @click="updateNewAddress()"
              >
                Simpan Alamat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modal-delete-address"
      tabindex="-1"
      aria-labelledby="modal-new-addressLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="container modal-content">
          <div class="modal-header justify-content-center">
            <h5 class="modal-title" id="exampleModalLabel">Hapus alamat</h5>
          </div>
          <div class="modal-body">
            <div class="text-center">
              Apakah Anda yakin untuk menghapus
              {{
                deleteAddress.data.label ? deleteAddress.data.label : "alamat"
              }}? Anda tidak dapat mengembalikan alamat yang sudah dihapus.
            </div>

            <div class="justify-content-around mx-auto text-center mt-5">
              <button class="btn btn-secondary" data-dismiss="modal">
                batal
              </button>
              <button class="btn btn-danger" @click="deleteNewAddress()">
                hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfileAdress",
  async fetch() {
    await this.getAllProvince();

    await this.getAddresses();
  },
  data() {
    return {
      addresses: [],
      showModal: false,
      updateAddress: {
        showModal: false,
        data: {},
      },
      deleteAddress: {
        showModal: false,
        data: {},
      },
      searchProvinceQuery: "",
      newAddress: {
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
        default: false,
      },
      regions: {
        state: [],
        cities: {},
        districts: {},
        sub_districts: {},
        postcode: "",
      },
    };
  },
  methods: {
    openModal() {
      $(document).ready(function () {
        $("#exampleModal").modal("show");
      });
    },
    setLabelAddress(label = "Rumah", type = "add") {
      if (type == "add") {
        this.newAddress.label = label;
        return;
      }
      this.updateAddress.data.label = label;
    },
    async getAddresses() {
      const client_id = this.$cookies.get("client_id");

      if (!client_id) {
        return;
      }
      await this.$axios
        .$get(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/address?user_id=${client_id}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            this.addresses = res.data[0];
          }
        });
    },
    async setDefaultAddress(addressId) {
      const user = this.$store.state.auth.user;

      await this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/address/${addressId}/default`,
          {
            address_id: addressId,
            user_id: user._id,
          }
        )
        .then(async (results) => {
          if (results.error) {
            this.$toast.error(results.message);
            return;
          }

          await this.getAddresses();

          this.$toast.success(results.message);
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.error(err.response.message);
          } else {
            this.$toast.warning("Terjadi Kesalahan, gagal mengupdate data");
          }
        });
    },
    closeModalDeleteAddress() {
      this.$vfm.hide("modal-delete-address").then(() => {
        this.deleteAddress.show = false;
      });
    },
    async saveNewAddress() {
      const user = this.$store.state.auth.user;

      const response = await this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/address`, {
          user_id: user._id,
          label: this.newAddress.label,
          receiver_name: this.newAddress.receiver_name,
          address1: this.newAddress.address1,
          address2: this.newAddress.address2,
          city: this.newAddress.city,
          state: this.newAddress.state,
          district: this.newAddress.district,
          sub_district: this.newAddress.sub_district,
          postcode: this.newAddress.postcode,
          phone: this.newAddress.phone,
          details: this.newAddress.details,
          default: this.newAddress.default,
        })
        .then(async (results) => {
          if (results.error) {
            this.$toast.error(results.message);
            return;
          } else {
            await this.getAddresses();
            this.$toast.success(results.message);
            $("#modal-new-address").appendTo("body").modal("hide");
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
    async updateNewAddress() {
      if (!this.updateAddress) {
        return;
      }

      const response = await this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/address/${this.updateAddress.data._id}`,
          this.updateAddress.data
        )
        .then(async (results) => {
          if (results.error) {
            this.$toast.error(results.message);
          }

          await this.getAddresses();
          this.$toast.success(results.message);
          return;
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.error(err.response.message);
          } else {
            this.$toast.warning("Terjadi Kesalahan, gagal mengupdate data");
          }
        });
      $("#modal-edit-address").appendTo("body").modal("hide");
    },
    async openModalDeleteAddress(data) {
      this.deleteAddress.data = await data;
      $("#modal-delete-address").appendTo("body").modal("show");
    },
    async deleteNewAddress() {
      await this.$axios
        .$delete(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/address/${this.deleteAddress.data._id}`
        )

        .then(async (results) => {
          console.log(results);
          if (results.error) {
            this.$toast.error(results.message);
          } else {
            await this.getAddresses();
            this.$toast.success(results.message);
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.error(err.response.message);
          } else {
            this.$toast.warning("Terjadi Kesalahan, gagal menghapus alamat");
          }
        });
      $("#modal-delete-address").appendTo("body").modal("hide");
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
        state = this.newAddress.state.id;
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
        city = this.newAddress.city.id;
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
      let district = this.newAddress.district;

      if (type == "new") {
        district = this.newAddress.district.id;
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

    async showModalNewAddress() {
      $("#modal-new-address").appendTo("body").modal("show");
    },
    async openModalEditAddress(addressId) {
      const address = this.addresses.address.filter(
        (address) => address._id === addressId
      );

      if (address.length <= 0) {
        this.$toast.error("Tidak dapat mengubah alamat");
      }

      await this.getCities("update", address[0].state.id);

      await this.getDistricts("update", address[0].city.id);

      await this.getSubDistricts("update", address[0].district.id);

      this.updateAddress.data = address[0];

      $("#modal-edit-address").appendTo("body").modal("show");
    },
  },
};
</script>

<style scoped>
.border-custom-radio
  .custom-control-input:checked
  ~ .custom-control-label::before {
  border-color: #080808;
  border: 2px solid #cf430f;
}
.modal-container {
  z-index: 1050 !important;
}
</style>


