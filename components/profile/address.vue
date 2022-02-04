<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
          <ProfilePartialSidebar/>
        <div class="col-lg-8 p-4 bg-white rounded shadow-sm">
          <div class="beliayam-my_address">
            <h4 class="mb-4 profile-title">My Addresses</h4>
            <div
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
                      <p class="mb-0 h6">Home</p>
                      <p class="mb-0 badge badge-success ml-auto">Default</p>
                    </div>
                    <p class="small text-muted m-0">Jl. Fatmawati No.19</p>
                    <p class="small text-muted m-0">Jakarta Selatan</p>
                    <p class="pt-2 m-0 text-right">
                      <span class="small"
                        ><a
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          class="text-decoration-none text-success"
                          ><i class="fad fa-edit"></i> Edit</a
                        ></span
                      >
                      <span class="small ml-3"
                        ><a
                          href="#"
                          data-toggle="modal"
                          data-target="#Delete"
                          class="text-decoration-none text-danger"
                          ><i class="fad fa-trash"></i> Delete</a
                        ></span
                      >
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div
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
                id="customRadioInline2"
                name="customRadioInline1"
                class="custom-control-input"
              />
              <label
                class="custom-control-label w-100"
                for="customRadioInline2"
              >
                <div>
                  <div class="p-3 rounded bg-white shadow-sm w-100">
                    <div class="d-flex align-items-center mb-2">
                      <p class="mb-0 h6">Work</p>
                    </div>
                    <p class="small text-muted m-0">
                      Jl. Jend. Sudirman Kav. 52-53 SCBD
                    </p>
                    <p class="small text-muted m-0">LOT 28, Jakarta Selatan</p>
                    <p class="pt-2 m-0 text-right">
                      <span class="small"
                        ><a
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          class="text-decoration-none text-success"
                          ><i class="fad fa-edit"></i> Edit</a
                        ></span
                      >
                      <span class="small ml-3"
                        ><a
                          href="#"
                          data-toggle="modal"
                          data-target="#Delete"
                          class="text-decoration-none text-danger"
                          ><i class="fad fa-trash"></i> Delete</a
                        ></span
                      >
                    </p>
                  </div>
                </div>
              </label>
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
};
</script>


