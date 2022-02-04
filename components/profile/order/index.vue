<template>
  <section class="py-4 beliayam-main-body">
    <div class="container">
      <div class="row">
        <ProfilePartialSidebar />
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-12 mb-4">
              <ul
                class="
                  nav nav-tabs
                  custom-tabs
                  border-0
                  bg-white
                  rounded
                  overflow-hidden
                  shadow-sm
                  p-2
                  c-t-order
                  justify-content-around
                "
                id="myTab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link border-0 text-dark py-3 active"
                    id="completed-tab"
                    data-toggle="tab"
                    href="#completed"
                    role="tab"
                    aria-controls="completed"
                    aria-selected="true"
                  >
                    <i class="fad fa-check mr-2 text-success mb-0"></i>
                    Completed</a
                  >
                </li>
                <li class="nav-item border-top" role="presentation">
                  <a
                    class="nav-link border-0 text-dark py-3"
                    id="progress-tab"
                    data-toggle="tab"
                    href="#progress"
                    role="tab"
                    aria-controls="progress"
                    aria-selected="false"
                  >
                    <i class="fad fa-clock mr-2 text-warning mb-0"></i> On
                    Progress</a
                  >
                </li>
                <li class="nav-item border-top" role="presentation">
                  <a
                    class="nav-link border-0 text-dark py-3"
                    id="canceled-tab"
                    data-toggle="tab"
                    href="#canceled"
                    role="tab"
                    aria-controls="canceled"
                    aria-selected="false"
                  >
                    <i class="fad fa-times mr-2 text-danger mb-0"></i>
                    Canceled</a
                  >
                </li>
              </ul>
            </div>
            <div class="tab-content col-lg-12" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="completed"
                role="tabpanel"
                aria-labelledby="completed-tab"
              >
                <div class="order-body" @click="viewStatus()" v-if="orderCompleted">
                  <div class="pb-3">
                    <a
                      href="javascript:void(0)"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-success
                              text-white
                              py-1
                              px-2
                              mb-0
                              rounded
                              small
                            "
                          >
                            Delivered
                          </p>
                          <p class="text-muted ml-auto small mb-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="pb-3">
                    <a
                      href="status_complete.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-success
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            Delivered
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="pb-3">
                    <a
                      href="status_complete.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-success
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              mb-0
                            "
                          >
                            Delivered
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="pb-3">
                    <a
                      href="status_onprocess.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-warning
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            On Process
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="pb-3">
                    <a
                      href="status_canceled.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-danger
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            Canceled
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="beliayam-status bg-white" v-else>
                  <div
                    class="
                      p-3
                      status-order
                      bg-white
                      border-bottom
                      d-flex
                      align-items-center
                    "
                  >
                    <p class="m-0">
                      <i class="fad fa-calendar-alt"></i> 16 June, 11:30AM
                    </p>
                    <a
                      href="review.html"
                      class="text-success ml-auto text-decoration-none"
                      >Review</a
                    >
                  </div>
                  <div class="p-3 border-bottom">
                    <h6 class="font-weight-bold">Order Status</h6>
                    <div class="tracking-wrap">
                      <div class="my-1 step active">
                        <span class="icon text-success"
                          ><i class="fad fa-check"></i
                        ></span>
                        <span class="text small">Preparing order</span>
                      </div>

                      <div class="my-1 step active">
                        <span class="icon text-success"
                          ><i class="fad fa-check"></i
                        ></span>
                        <span class="text small"> Ready to collect</span>
                      </div>

                      <div class="my-1 step">
                        <span class="icon text-success"
                          ><i class="fad fa-check"></i
                        ></span>
                        <span class="text small"> On the way </span>
                      </div>

                      <div class="my-1 step">
                        <span class="icon text-success"
                          ><i class="fad fa-check"></i
                        ></span>
                        <span class="text small">Delivered Order</span>
                      </div>
                    </div>
                  </div>

                  <div class="p-3 border-bottom bg-white">
                    <h6 class="font-weight-bold">Destination</h6>
                    <p class="m-0 small">
                      Jl. Fatmawati No.19, Jakarta Selatan
                    </p>
                  </div>
                  <div class="p-3 border-bottom">
                    <p class="font-weight-bold small mb-1">Courier</p>
                    <img
                      src="img/logo.png"
                      class="img-fluid sc-beliayam-logo mr-2"
                    />
                    <span class="small text-success font-weight-bold"
                      >Beliayam.com Courier
                    </span>
                  </div>

                  <div class="p-3 bg-white">
                    <div class="d-flex align-items-center mb-2">
                      <h6 class="font-weight-bold mb-1">Total Cost</h6>
                      <h6 class="font-weight-bold ml-auto mb-1">Rp. 100.000</h6>
                    </div>
                    <p class="m-0 small text-muted">
                      You can check your order detail here,<br />Thank you for
                      order.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="progress"
                role="tabpanel"
                aria-labelledby="progress-tab"
              >
                <div class="order-body">
                  <div class="pb-3">
                    <a
                      href="status_onprocess.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-warning
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            On Process
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="pb-3">
                    <a
                      href="status_onprocess.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-warning
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            Dispatching
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="pb-3">
                    <a
                      href="status_onprocess.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-warning
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            On the way
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="canceled"
                role="tabpanel"
                aria-labelledby="canceled-tab"
              >
                <div class="order-body">
                  <div class="pb-3">
                    <a
                      href="status_canceled.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-danger
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            Failed Payment
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="pb-3">
                    <a
                      href="status_canceled.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          <p
                            class="
                              bg-danger
                              text-white
                              py-1
                              px-2
                              rounded
                              small
                              m-0
                            "
                          >
                            Canceled
                          </p>
                          <p class="text-muted ml-auto small m-0">
                            <i class="fad fa-clock"></i> 06/04/2020
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID<br />
                            <span class="text-dark font-weight-bold"
                              >#321DERS</span
                            >
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to<br />
                            <span class="text-dark font-weight-bold">Home</span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment<br />
                            <span class="text-dark font-weight-bold"
                              >Rp. 100.000</span
                            >
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
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
  data() {
    return {
      orderCompleted: true,
    };
  },
  methods: {
    viewStatus(){
      this.orderCompleted = !this.orderCompleted;
    }
  }
};
</script>