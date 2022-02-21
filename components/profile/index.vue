<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
        <ProfilePartialSidebar />
        <div class="col-lg-8 p-4 bg-white rounded shadow-sm">
          <h4 class="mb-4 profile-title">Akun</h4>
          <div id="edit_profile">
            <div class="p-0">
              <form action="my_account.html">
                <div class="form-group">
                  <label for="exampleInputName1">Nama</label>
                  <h5>{{ $store.state.auth.user.name }}</h5>
                  <div>
                    <p
                      class="text-danger"
                      data-toggle="collapse"
                      data-target="#collapseName"
                      role="button"
                    >
                      edit
                    </p>
                  </div>

                  <div class="collapse" id="collapseName">
                    <div class="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputNumber1">No. Telepon</label>
                  <h5>{{ $store.state.auth.user.phone }}</h5>

                  <div>
                    <p
                      class="text-danger"
                      data-toggle="collapse"
                      data-target="#collapsePhone"
                      role="button"
                    >
                      {{ $store.state.auth.user.phone ? 'edit' : 'tambahkan' }}
                    </p>
                  </div>

                  <div class="collapse" id="collapsePhone">
                    <div class="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <h5>{{ $store.state.auth.user.email }}</h5>

                  <div>
                    <p
                      class="text-danger"
                      data-toggle="collapse"
                      data-target="#collapseEmail"
                      role="button"
                    >
                      edit
                    </p>
                  </div>

                  <div class="collapse" id="collapseEmail">
                    <div class="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <!-- <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-success btn-block btn-lg"
                  >
                    Save Changes
                  </button>
                </div> -->
              </form>
            </div>
            <div class="additional mt-3">
              <div class="change_password mb-1">
                <a
                  href="change_password.html"
                  class="p-3 btn-light border btn d-flex align-items-center"
                  >Change Password <i class="fad fa-chevron-right ml-auto"></i
                ></a>
              </div>
              <div class="deactivate_account">
                <a
                  href="deactivate_account.html"
                  class="p-3 btn-light border btn d-flex align-items-center"
                  >Deactivate Account
                  <i class="fad fa-chevron-right ml-auto"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile",
};
</script>


