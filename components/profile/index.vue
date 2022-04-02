<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
        <ProfilePartialSidebar />
        <div class="col-lg-8 p-4 bg-white rounded shadow-sm">
          <h4 class="mb-4 profile-title">Informasi Akun</h4>
          <div id="edit_profile">
            <div class="p-0">
              <form action="my_account.html">
                <div class="form-group">
                  <label for="exampleInputName1">Nama</label>
                  <div class="justify-content-between d-flex">
                    <h5>{{ user && user.name ? user.name : "Cusyam" }}</h5>
                    <p
                      class="text-danger float-right"
                      data-toggle="collapse"
                      data-target="#collapseName"
                      role="button"
                    >
                      edit
                    </p>
                  </div>

                  <div class="collapse" id="collapseName">
                    <div class="card card-body">
                      <div class="form-inline">
                        <div class="form-group mb-2">Nama:</div>
                        <div class="form-group mx-sm-3 mb-2">
                          <label for="inputName" class="sr-only"
                            >Nama Baru</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            placeholder="Nama baru"
                            v-model="changeName.name"
                          />
                        </div>
                        <button
                          type="button"
                          class="btn btn-danger mb-2"
                          @click="changeNameMethod()"
                        >
                          konfirmasi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputNumber1"
                    >No. Telepon
                    <span v-if="user && user.isPhoneVerified"
                      ><i class="fad fa-check-circle text-info"></i></span
                  ></label>

                  <div class="justify-content-between d-flex">
                    <h5 v-if="user && user.phone">
                      {{ user.phone || "" }}
                    </h5>
                    <p class="text-muted font-italic" v-else>
                      Telepon belum ditambahkan
                    </p>
                    <p
                      class="text-danger"
                      data-toggle="collapse"
                      data-target="#collapsePhone"
                      role="button"
                    >
                      {{ user && user.phone ? "edit" : "tambahkan" }}
                    </p>
                  </div>
                  <div v-if="user && user.phone && !user.isPhoneVerified">
                    <p
                      class="font-italic text-danger"
                      role="button"
                      @click="verifyPhoneMethod()"
                    >
                      verifikasi
                    </p>
                  </div>

                  <div class="collapse" id="collapsePhone">
                    <div class="card card-body">
                      <div class="form-inline">
                        <div class="form-group mb-2">No. Telp:</div>
                        <div class="form-group mx-sm-3 mb-2">
                          <label for="inputPhone" class="sr-only"
                            >No Telepon</label
                          >
                          <input
                            type="tel"
                            class="form-control"
                            id="inputPhone"
                            placeholder="Cth: 0815"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            v-model="changePhone.phone"
                          />
                        </div>
                        <button
                          type="button"
                          class="btn btn-danger mb-2"
                          @click="changePhoneMethod()"
                        >
                          konfirmasi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1"
                    >Email
                    <span v-if="user && user.isEmailVerified"
                      ><i class="fad fa-check-circle text-info"></i></span
                  ></label>

                  <div class="justify-content-between d-flex">
                    <h5 v-if="user && user.email">
                      {{ user.email || "" }}
                    </h5>
                    <p class="text-muted font-italic" v-else>
                      Email belum ditambahkan
                    </p>
                    <p
                      class="text-danger"
                      data-toggle="collapse"
                      data-target="#collapseEmail"
                      role="button"
                      v-if="
                        user &&
                        user.registeredBy !== 'google' &&
                        user &&
                        user.registeredBy !== 'facebook'
                      "
                    >
                      {{ user && user.email ? "edit" : "tambahkan" }}
                    </p>
                  </div>

                  <div v-if="user && user.email && !user.isEmailVerified">
                    <p
                      class="font-italic text-danger"
                      role="button"
                      @click="verifyEmailMethod()"
                    >
                      verifikasi
                    </p>
                  </div>

                  <div class="collapse" id="collapseEmail">
                    <div class="card card-body">
                      <form class="form-inline">
                        <div class="form-group mb-2">Email:</div>
                        <div class="form-group mx-sm-3 mb-2">
                          <label for="inputEmail" class="sr-only">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            placeholder="Cth: john.f.kennedy@gmail.com"
                            v-model="changeEmail.email"
                          />
                        </div>
                        <button
                          type="button"
                          class="btn btn-danger mb-2"
                          @click="changeEmailMethod()"
                        >
                          konfirmasi
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="accordion"
              id="accordionPassword"
              v-if="
                user &&
                user.registeredBy !== 'google' &&
                user &&
                user.registeredBy !== 'facebook'
              "
            >
              <div class="card">
                <div class="card-header" id="headingPassword">
                  <h2 class="mb-0">
                    <button
                      class="
                        btn btn-link btn-block
                        text-left text-decoration-none
                        btn-heading-password
                      "
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapsePassword"
                      aria-expanded="true"
                      aria-controls="collapsePassword"
                    >
                      <i class="fad fa-lock-alt"></i> Password
                    </button>
                  </h2>
                </div>

                <div
                  id="collapsePassword"
                  class="collapse"
                  aria-labelledby="headingPassword"
                  data-parent="#accordionPassword"
                >
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label for="formGroupOldPassword">Password lama</label>
                        <input
                          type="password"
                          class="form-control"
                          id="formGroupOldPassword"
                          placeholder="*****"
                          v-model="changePassword.old_password"
                        />
                      </div>
                      <div class="form-group">
                        <label for="formGroupNewPassword">Password baru</label>
                        <input
                          type="password"
                          class="form-control"
                          id="formGroupNewPassword"
                          placeholder="*******"
                          v-model="changePassword.password"
                        />
                      </div>
                      <div class="form-group">
                        <label for="formGroupConfirmNewPassword"
                          >Konfirmasi password baru</label
                        >
                        <input
                          type="password"
                          class="form-control"
                          id="formGroupConfirmNewPassword"
                          placeholder="*******"
                          v-model="changePassword.password_confirmation"
                        />
                      </div>

                      <div class="text-center">
                        <button
                          type="button"
                          class="btn btn-danger btn-block btn-lg"
                          @click="changePasswordMethod()"
                        >
                          Simpan perubahan
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vue-final-modal
      name="modal-verify-phone"
      :click-to-close="true"
      :lock-scroll="false"
      :fit-parent="true"
      :drag="true"
      v-model="verifyPhone.showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="container modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Verifikasi Telepon</h5>
          </div>
          <div class="modal-body">
            <div>
              <div class="form-group">
                <label for="inputChangePhoneOTP">Kode OTP</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputChangePhoneOTP"
                  placeholder="****"
                  v-model="verifyPhone.data"
                />
                <span
                  class="text-danger font-italic"
                  role="button"
                  @click="resendOtpPhone()"
                  >kirim ulang kode OTP</span
                >
              </div>
            </div>
            <div class="justify-content-around mx-auto text-center mt-5">
              <button class="btn btn-danger" @click="verifyOtpPhoneMethod()">
                verifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </vue-final-modal>

    <vue-final-modal
      name="modal-verify-email"
      :click-to-close="true"
      :lock-scroll="false"
      :fit-parent="true"
      :drag="true"
      v-model="verifyEmail.showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="container modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Verifikasi Email</h5>
          </div>
          <div class="modal-body">
            <div>
              <div class="form-group">
                <label for="inputChangePhone">Kode OTP</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputChangePhone"
                  placeholder="****"
                  v-model="verifyEmail.data"
                />
                <span
                  class="text-danger font-italic"
                  role="button"
                  @click="resendOtpEmail()"
                  >kirim ulang kode OTP</span
                >
              </div>
            </div>
            <div class="justify-content-around mx-auto text-center mt-5">
              <!-- <button
                class="btn btn-secondary"
                @click="closeModalDeleteAddress()"
              >
                batal
              </button> -->
              <button class="btn btn-danger" @click="verifyOtpEmailMethod()">
                verifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </vue-final-modal>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {
      changePassword: {
        old_password: "",
        password: "",
        password_confirmation: "",
      },
      changeName: {
        name: "",
      },
      changeEmail: {
        email: "",
      },
      changePhone: {
        phone: "",
      },
      verifyPhone: {
        showModal: false,
        data: "",
      },
      verifyEmail: {
        showModal: false,
        data: "",
      },
    };
  },
  methods: {
    async changePasswordMethod() {
      if (
        this.changePassword.old_password === "" ||
        this.changePassword.password === "" ||
        this.changePassword.password_confirmation === ""
      ) {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }

      this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/profile/password/change`,
          {
            user_id: this.user._id,
            old_password: this.changePassword.old_password,
            password: this.changePassword.password,
            password_confirmation: this.changePassword.password_confirmation,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$toast.success(results.message);

          this.$store.dispatch("auth/getUser");

          document.querySelector("#collapsePassword").classList.remove("show");

          this.changePassword.old_password = "";
          this.changePassword.password = "";
          this.changePassword.password_confirmation = "";
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    async verifyEmailMethod() {
      this.verifyEmail.showModal = !this.verifyEmail.showModal;
    },
    async verifyOtpEmailMethod() {
      if (this.user.isEmailVerified) {
        return;
      }

      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/profile/email/verify`,
          {
            user_id: this.user._id,
            code: this.verifyEmail.data,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$toast.success(results.message);

          this.$store.dispatch("auth/getUser");

          this.verifyEmail.showModal = false;
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    async verifyOtpPhoneMethod() {
      if (this.verifyPhone.data === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
        return;
      }

      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/phone/verify`,
          {
            user_id: this.user._id,
            code: this.verifyPhone.data,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          this.$toast.success(results.message);

          this.$store.dispatch("auth/getUser");

          this.verifyPhone.showModal = false;
        })
        .catch((err) => {
          if (err && err.response && err.response.error) {
            this.$toast.warning(err.response.message);
          } else {
            this.$toast.warning("Gagal Memuat Data");
          }
        });
    },
    resendOtpPhone() {
      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/phone/resend`,
          {
            user_id: this.user._id,
            phone: this.user.phone,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.data.message);
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
    resendOtpEmail() {
      this.$axios
        .$post(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/profile/email/resend`,
          {
            user_id: this.user._id,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.data.message);
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
    verifyPhoneMethod() {
      this.verifyPhone.showModal = !this.verifyPhone.showModal;

      // this.verifyPhone.data = data;
    },
    async changeEmailMethod() {
      if (this.changeEmail.email === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
      }

      this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/profile/email/change`,
          {
            user_id: this.user._id,
            new_email: this.changeEmail.email,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          document.querySelector("#collapseEmail").classList.remove("show");

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
      if (this.changePhone.phone === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
      }

      this.$axios
        .$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/phone`, {
          user_id: this.user._id,
          phone: this.changePhone.phone,
        })
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          document.querySelector("#collapsePhone").classList.remove("show");

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
      if (this.changeName.name === "") {
        this.$toast.warning("Bidang tidak boleh kosong");
      }

      this.$axios
        .$put(
          `${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/profile/name/change`,
          {
            user_id: this.user._id,
            name: this.changeName.name,
          }
        )
        .then((results) => {
          if (results.error) {
            this.$toast.warning(results.message);
            return;
          }

          document.querySelector("#collapseName").classList.remove("show");

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
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>


<style scoped>
#headingPassword {
  background: linear-gradient(135deg, #ce0000 0%, #a70000 100%);
  color: white;
  text-align: center;
  padding: 2px;
}
.btn-heading-password {
  font-size: 17px;
  color: white;
}
#collapsePassword {
  border: 1px solid;
  border-color: linear-gradient(135deg, #ce0000 0%, #a70000 100%);
}
</style>