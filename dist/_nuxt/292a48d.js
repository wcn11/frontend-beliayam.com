(window.webpackJsonp=window.webpackJsonp||[]).push([[30,31],{2107:function(t,e,l){"use strict";l.r(e);var n={methods:{logout:function(){this.$store.dispatch("auth/logout"),window.location.reload()}}},c=l(18),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-4"},[l("div",{staticClass:"beliayam-account bg-white rounded shadow-sm overflow-hidden"},[t._m(0),t._v(" "),l("div",{staticClass:"account-sections"},[l("ul",{staticClass:"list-group"},[l("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun"}},[l("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[l("i",{staticClass:"fad fa-user beliayam-icofont bg-danger"}),t._v("Akun Saya\n            "),l("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[l("i",{staticClass:"fad fa-chevron-right"})])])]),t._v(" "),l("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun/pesanan-saya"}},[l("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[l("i",{staticClass:"fad fa-box-heart beliayam-icofont bg-success"}),t._v("Pesanan Saya\n            "),l("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[l("i",{staticClass:"fad fa-chevron-right"})])])]),t._v(" "),l("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/promo"}},[l("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[l("i",{staticClass:"fad fa-badge-percent beliayam-icofont bg-success"}),t._v("Promo\n            "),l("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[l("i",{staticClass:"fad fa-chevron-right"})])])]),t._v(" "),l("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun/alamat"}},[l("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[l("i",{staticClass:"fad fa-address-book beliayam-icofont bg-dark"}),t._v("\n            Alamat\n            "),l("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[l("i",{staticClass:"fad fa-chevron-right"})])])]),t._v(" "),t._m(1),t._v(" "),l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.logout()}}},[t._m(2)])],1)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-4 profile text-center border-bottom"},[l("img",{staticClass:"img-fluid rounded-pill",attrs:{src:"/img/user.png"}}),t._v(" "),l("h6",{staticClass:"font-weight-bold m-0 mt-2"},[t._v("Beranda")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"help_support.html"}},[l("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[l("i",{staticClass:"fad fa-phone-alt beliayam-icofont bg-warning"}),t._v("Bantuan & Dukungan\n            "),l("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[l("i",{staticClass:"fad fa-chevron-right"})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[l("i",{staticClass:"fad fa-lock beliayam-icofont bg-danger"}),t._v("\n            Logout\n          ")])}],!1,null,null,null);e.default=component.exports},2165:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{orderCompleted:!0}},methods:{viewStatus:function(){this.orderCompleted=!this.orderCompleted}}},c=l(18),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"py-4 beliayam-main-body"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("ProfilePartialSidebar"),t._v(" "),l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"row"},[t._m(0),t._v(" "),l("div",{staticClass:"tab-content col-lg-12",attrs:{id:"myTabContent"}},[l("div",{staticClass:"tab-pane fade show active",attrs:{id:"completed",role:"tabpanel","aria-labelledby":"completed-tab"}},[t.orderCompleted?l("div",{staticClass:"order-body",on:{click:function(e){return t.viewStatus()}}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]):l("div",{staticClass:"beliayam-status bg-white"},[t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])]),t._v(" "),t._m(11),t._v(" "),t._m(12)])])])],1)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-12 mb-4"},[l("ul",{staticClass:"\n                nav nav-tabs\n                custom-tabs\n                border-0\n                bg-white\n                rounded\n                overflow-hidden\n                shadow-sm\n                p-2\n                c-t-order\n                justify-content-around\n              ",attrs:{id:"myTab",role:"tablist"}},[l("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[l("a",{staticClass:"nav-link border-0 text-dark py-3 active",attrs:{id:"completed-tab","data-toggle":"tab",href:"#completed",role:"tab","aria-controls":"completed","aria-selected":"true"}},[l("i",{staticClass:"fad fa-check mr-2 text-success mb-0"}),t._v("\n                  Completed")])]),t._v(" "),l("li",{staticClass:"nav-item border-top",attrs:{role:"presentation"}},[l("a",{staticClass:"nav-link border-0 text-dark py-3",attrs:{id:"progress-tab","data-toggle":"tab",href:"#progress",role:"tab","aria-controls":"progress","aria-selected":"false"}},[l("i",{staticClass:"fad fa-clock mr-2 text-warning mb-0"}),t._v(" On\n                  Progress")])]),t._v(" "),l("li",{staticClass:"nav-item border-top",attrs:{role:"presentation"}},[l("a",{staticClass:"nav-link border-0 text-dark py-3",attrs:{id:"canceled-tab","data-toggle":"tab",href:"#canceled",role:"tab","aria-controls":"canceled","aria-selected":"false"}},[l("i",{staticClass:"fad fa-times mr-2 text-danger mb-0"}),t._v("\n                  Canceled")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"javascript:void(0)"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-success\n                            text-white\n                            py-1\n                            px-2\n                            mb-0\n                            rounded\n                            small\n                          "},[t._v("\n                          Delivered\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small mb-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_complete.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-success\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          Delivered\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_complete.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-success\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            mb-0\n                          "},[t._v("\n                          Delivered\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_onprocess.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-warning\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          On Process\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_canceled.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-danger\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          Canceled\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"\n                    p-3\n                    status-order\n                    bg-white\n                    border-bottom\n                    d-flex\n                    align-items-center\n                  "},[l("p",{staticClass:"m-0"},[l("i",{staticClass:"fad fa-calendar-alt"}),t._v(" 16 June, 11:30AM\n                  ")]),t._v(" "),l("a",{staticClass:"text-success ml-auto text-decoration-none",attrs:{href:"review.html"}},[t._v("Review")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-3 border-bottom"},[l("h6",{staticClass:"font-weight-bold"},[t._v("Order Status")]),t._v(" "),l("div",{staticClass:"tracking-wrap"},[l("div",{staticClass:"my-1 step active"},[l("span",{staticClass:"icon text-success"},[l("i",{staticClass:"fad fa-check"})]),t._v(" "),l("span",{staticClass:"text small"},[t._v("Preparing order")])]),t._v(" "),l("div",{staticClass:"my-1 step active"},[l("span",{staticClass:"icon text-success"},[l("i",{staticClass:"fad fa-check"})]),t._v(" "),l("span",{staticClass:"text small"},[t._v(" Ready to collect")])]),t._v(" "),l("div",{staticClass:"my-1 step"},[l("span",{staticClass:"icon text-success"},[l("i",{staticClass:"fad fa-check"})]),t._v(" "),l("span",{staticClass:"text small"},[t._v(" On the way ")])]),t._v(" "),l("div",{staticClass:"my-1 step"},[l("span",{staticClass:"icon text-success"},[l("i",{staticClass:"fad fa-check"})]),t._v(" "),l("span",{staticClass:"text small"},[t._v("Delivered Order")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-3 border-bottom bg-white"},[l("h6",{staticClass:"font-weight-bold"},[t._v("Destination")]),t._v(" "),l("p",{staticClass:"m-0 small"},[t._v("\n                    Jl. Fatmawati No.19, Jakarta Selatan\n                  ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-3 border-bottom"},[l("p",{staticClass:"font-weight-bold small mb-1"},[t._v("Courier")]),t._v(" "),l("img",{staticClass:"img-fluid sc-beliayam-logo mr-2",attrs:{src:"img/logo.png"}}),t._v(" "),l("span",{staticClass:"small text-success font-weight-bold"},[t._v("Beliayam.com Courier\n                  ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-3 bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-2"},[l("h6",{staticClass:"font-weight-bold mb-1"},[t._v("Total Cost")]),t._v(" "),l("h6",{staticClass:"font-weight-bold ml-auto mb-1"},[t._v("Rp. 100.000")])]),t._v(" "),l("p",{staticClass:"m-0 small text-muted"},[t._v("\n                    You can check your order detail here,"),l("br"),t._v("Thank you for\n                    order.\n                  ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"tab-pane fade",attrs:{id:"progress",role:"tabpanel","aria-labelledby":"progress-tab"}},[l("div",{staticClass:"order-body"},[l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_onprocess.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-warning\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          On Process\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])]),t._v(" "),l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_onprocess.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-warning\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          Dispatching\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])]),t._v(" "),l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_onprocess.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-warning\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          On the way\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"tab-pane fade",attrs:{id:"canceled",role:"tabpanel","aria-labelledby":"canceled-tab"}},[l("div",{staticClass:"order-body"},[l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_canceled.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-danger\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          Failed Payment\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])]),t._v(" "),l("div",{staticClass:"pb-3"},[l("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"status_canceled.html"}},[l("div",{staticClass:"p-3 rounded shadow-sm bg-white"},[l("div",{staticClass:"d-flex align-items-center mb-3"},[l("p",{staticClass:"\n                            bg-danger\n                            text-white\n                            py-1\n                            px-2\n                            rounded\n                            small\n                            m-0\n                          "},[t._v("\n                          Canceled\n                        ")]),t._v(" "),l("p",{staticClass:"text-muted ml-auto small m-0"},[l("i",{staticClass:"fad fa-clock"}),t._v(" 06/04/2020\n                        ")])]),t._v(" "),l("div",{staticClass:"d-flex"},[l("p",{staticClass:"text-muted m-0"},[t._v("\n                          Transaction. ID"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("#321DERS")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Delivered to"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Home")])]),t._v(" "),l("p",{staticClass:"text-muted m-0 ml-auto"},[t._v("\n                          Total Payment"),l("br"),t._v(" "),l("span",{staticClass:"text-dark font-weight-bold"},[t._v("Rp. 100.000")])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProfilePartialSidebar:l(2107).default})}}]);