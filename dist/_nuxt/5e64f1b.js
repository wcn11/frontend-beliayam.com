(window.webpackJsonp=window.webpackJsonp||[]).push([[5,35],{2269:function(e,t,o){"use strict";o.r(t);var r={methods:{logout:function(){this.$store.dispatch("auth/logout"),window.location.reload()}}},n=o(16),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"beliayam-account bg-white rounded shadow-sm overflow-hidden"},[e._m(0),e._v(" "),o("div",{staticClass:"account-sections"},[o("ul",{staticClass:"list-group"},[o("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun"}},[o("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[o("i",{staticClass:"fad fa-user beliayam-icofont bg-danger"}),e._v("Akun Saya\n            "),o("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[o("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),o("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun/pesanan-saya"}},[o("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[o("i",{staticClass:"fad fa-box-heart beliayam-icofont bg-success"}),e._v("Pesanan Saya\n            "),o("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[o("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),o("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/promo"}},[o("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[o("i",{staticClass:"fad fa-badge-percent beliayam-icofont bg-success"}),e._v("Promo\n            "),o("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[o("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),o("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun/alamat"}},[o("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[o("i",{staticClass:"fad fa-address-book beliayam-icofont bg-dark"}),e._v("\n            Alamat\n            "),o("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[o("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),e._m(1),e._v(" "),o("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.logout()}}},[e._m(2)])],1)])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"p-4 profile text-center border-bottom"},[o("img",{staticClass:"img-fluid rounded-pill",attrs:{src:"/img/user.png"}}),e._v(" "),o("h6",{staticClass:"font-weight-bold m-0 mt-2"},[e._v("Beranda")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"help_support.html"}},[o("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[o("i",{staticClass:"fad fa-phone-alt beliayam-icofont bg-warning"}),e._v("Bantuan & Dukungan\n            "),o("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[o("i",{staticClass:"fad fa-chevron-right"})])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[o("i",{staticClass:"fad fa-lock beliayam-icofont bg-danger"}),e._v("\n            Logout\n          ")])}],!1,null,null,null);t.default=component.exports},2317:function(e,t,o){var content=o(2369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("0f131d24",content,!0,{sourceMap:!1})},2368:function(e,t,o){"use strict";o(2317)},2369:function(e,t,o){var r=o(23)(!1);r.push([e.i,"#headingPassword[data-v-51249c1e]{background:linear-gradient(135deg,#ce0000,#a70000);color:#fff;text-align:center;padding:2px}.btn-heading-password[data-v-51249c1e]{font-size:17px;color:#fff}#collapsePassword[data-v-51249c1e]{border:1px solid linear-gradient(135deg,#ce0000,#a70000)}",""]),e.exports=r},2421:function(e,t,o){"use strict";o.r(t);var r=o(10),n=o(5),c=(o(42),o(35),o(29),o(25),o(14),o(43),o(26),o(44),o(41),o(34));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var d={name:"Profile",data:function(){return{changePassword:{old_password:"",password:"",password_confirmation:""},changeName:{name:""},changeEmail:{email:""},changePhone:{phone:""},verifyPhone:{showModal:!1,data:""},verifyEmail:{showModal:!1,data:""}}},methods:{changePasswordMethod:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.changePassword.old_password&&""!==e.changePassword.password&&""!==e.changePassword.password_confirmation){t.next=3;break}return e.$toast.warning("Bidang tidak boleh kosong"),t.abrupt("return");case 3:e.$axios.$put("".concat("https://be-dev.beliayam.com/api/v1","/users/profile/password/change"),{user_id:e.user._id,old_password:e.changePassword.old_password,password:e.changePassword.password,password_confirmation:e.changePassword.password_confirmation}).then((function(t){t.error?e.$toast.warning(t.message):(e.$toast.success(t.message),e.$store.dispatch("auth/getUser"),document.querySelector("#collapsePassword").classList.remove("show"),e.changePassword.old_password="",e.changePassword.password="",e.changePassword.password_confirmation="")})).catch((function(t){t&&t.response&&t.response.error?e.$toast.warning(t.response.message):e.$toast.warning("Gagal Memuat Data")}));case 4:case"end":return t.stop()}}),t)})))()},verifyEmailMethod:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.verifyEmail.showModal=!e.verifyEmail.showModal;case 1:case"end":return t.stop()}}),t)})))()},verifyOtpEmailMethod:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user.isEmailVerified){t.next=2;break}return t.abrupt("return");case 2:e.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/users/profile/email/verify"),{user_id:e.user._id,code:e.verifyEmail.data}).then((function(t){t.error?e.$toast.warning(t.message):(e.$toast.success(t.message),e.$store.dispatch("auth/getUser"),e.verifyEmail.showModal=!1)})).catch((function(t){t&&t.response&&t.response.error?e.$toast.warning(t.response.message):e.$toast.warning("Gagal Memuat Data")}));case 3:case"end":return t.stop()}}),t)})))()},verifyOtpPhoneMethod:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.verifyPhone.data){t.next=3;break}return e.$toast.warning("Bidang tidak boleh kosong"),t.abrupt("return");case 3:e.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/users/phone/verify"),{user_id:e.user._id,code:e.verifyPhone.data}).then((function(t){t.error?e.$toast.warning(t.message):(e.$toast.success(t.message),e.$store.dispatch("auth/getUser"),e.verifyPhone.showModal=!1)})).catch((function(t){t&&t.response&&t.response.error?e.$toast.warning(t.response.message):e.$toast.warning("Gagal Memuat Data")}));case 4:case"end":return t.stop()}}),t)})))()},resendOtpPhone:function(){var e=this;this.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/users/phone/resend"),{user_id:this.user._id,phone:this.user.phone}).then((function(t){t.error?e.$toast.warning(t.data.message):(e.$toast.success(t.message),e.$store.dispatch("auth/getUser"))})).catch((function(t){t&&t.response&&t.response.data.error?e.$toast.warning(t.response.data.message):e.$toast.warning("Gagal Memuat Data")}))},resendOtpEmail:function(){var e=this;this.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/users/profile/email/resend"),{user_id:this.user._id}).then((function(t){t.error?e.$toast.warning(t.data.message):(e.$toast.success(t.message),e.$store.dispatch("auth/getUser"))})).catch((function(t){t&&t.response&&t.response.data.error?e.$toast.warning(t.response.data.message):e.$toast.warning("Gagal Memuat Data")}))},verifyPhoneMethod:function(){this.verifyPhone.showModal=!this.verifyPhone.showModal},changeEmailMethod:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""===e.changeEmail.email&&e.$toast.warning("Bidang tidak boleh kosong"),e.$axios.$put("".concat("https://be-dev.beliayam.com/api/v1","/users/profile/email/change"),{user_id:e.user._id,new_email:e.changeEmail.email}).then((function(t){t.error?e.$toast.warning(t.message):(document.querySelector("#collapseEmail").classList.remove("show"),e.$toast.success(t.message),e.$store.dispatch("auth/getUser"))})).catch((function(t){t&&t.response&&t.response.data.error?e.$toast.warning(t.response.data.message):e.$toast.warning("Gagal Memuat Data")}));case 2:case"end":return t.stop()}}),t)})))()},changePhoneMethod:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""===e.changePhone.phone&&e.$toast.warning("Bidang tidak boleh kosong"),e.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/users/phone"),{user_id:e.user._id,phone:e.changePhone.phone}).then((function(t){t.error?e.$toast.warning(t.message):(document.querySelector("#collapsePhone").classList.remove("show"),e.$toast.success(t.message),e.$store.dispatch("auth/getUser"))})).catch((function(t){t&&t.response&&t.response.data.error?e.$toast.warning(t.response.data.message):e.$toast.warning("Gagal Memuat Data")}));case 2:case"end":return t.stop()}}),t)})))()},changeNameMethod:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""===e.changeName.name&&e.$toast.warning("Bidang tidak boleh kosong"),e.$axios.$put("".concat("https://be-dev.beliayam.com/api/v1","/users/profile/name/change"),{user_id:e.user._id,name:e.changeName.name}).then((function(t){t.error?e.$toast.warning(t.message):(document.querySelector("#collapseName").classList.remove("show"),e.$toast.success(t.message),e.$store.dispatch("auth/getUser"))})).catch((function(t){t&&t.response&&t.response.data.error?e.$toast.warning(t.response.data.message):e.$toast.warning("Gagal Memuat Data")}));case 2:case"end":return t.stop()}}),t)})))()}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("auth",["user"]))},m=d,f=(o(2368),o(16)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"py-4 beliayam-main-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("ProfilePartialSidebar"),e._v(" "),o("div",{staticClass:"col-lg-8 p-4 bg-white rounded shadow-sm"},[o("h4",{staticClass:"mb-4 profile-title"},[e._v("Informasi Akun")]),e._v(" "),o("div",{attrs:{id:"edit_profile"}},[o("div",{staticClass:"p-0"},[o("form",{attrs:{action:"my_account.html"}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputName1"}},[e._v("Nama")]),e._v(" "),o("div",{staticClass:"justify-content-between d-flex"},[o("h5",[e._v(e._s(e.user&&e.user.name?e.user.name:"Cusyam"))]),e._v(" "),o("p",{staticClass:"text-danger float-right",attrs:{"data-toggle":"collapse","data-target":"#collapseName",role:"button"}},[e._v("\n                    edit\n                  ")])]),e._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseName"}},[o("div",{staticClass:"card card-body"},[o("div",{staticClass:"form-inline"},[o("div",{staticClass:"form-group mb-2"},[e._v("Nama:")]),e._v(" "),o("div",{staticClass:"form-group mx-sm-3 mb-2"},[o("label",{staticClass:"sr-only",attrs:{for:"inputName"}},[e._v("Nama Baru")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.changeName.name,expression:"changeName.name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"Nama baru"},domProps:{value:e.changeName.name},on:{input:function(t){t.target.composing||e.$set(e.changeName,"name",t.target.value)}}})]),e._v(" "),o("button",{staticClass:"btn btn-danger mb-2",attrs:{type:"button"},on:{click:function(t){return e.changeNameMethod()}}},[e._v("\n                        konfirmasi\n                      ")])])])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputNumber1"}},[e._v("No. Telepon\n                  "),e.user&&e.user.isPhoneVerified?o("span",[o("i",{staticClass:"fad fa-check-circle text-info"})]):e._e()]),e._v(" "),o("div",{staticClass:"justify-content-between d-flex"},[e.user&&e.user.phone?o("h5",[e._v("\n                    "+e._s(e.user.phone||"")+"\n                  ")]):o("p",{staticClass:"text-muted font-italic"},[e._v("\n                    Telepon belum ditambahkan\n                  ")]),e._v(" "),o("p",{staticClass:"text-danger",attrs:{"data-toggle":"collapse","data-target":"#collapsePhone",role:"button"}},[e._v("\n                    "+e._s(e.user&&e.user.phone?"edit":"tambahkan")+"\n                  ")])]),e._v(" "),e.user&&e.user.phone&&!e.user.isPhoneVerified?o("div",[o("p",{staticClass:"font-italic text-danger",attrs:{role:"button"},on:{click:function(t){return e.verifyPhoneMethod()}}},[e._v("\n                    verifikasi\n                  ")])]):e._e(),e._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapsePhone"}},[o("div",{staticClass:"card card-body"},[o("div",{staticClass:"form-inline"},[o("div",{staticClass:"form-group mb-2"},[e._v("No. Telp:")]),e._v(" "),o("div",{staticClass:"form-group mx-sm-3 mb-2"},[o("label",{staticClass:"sr-only",attrs:{for:"inputPhone"}},[e._v("No Telepon")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.changePhone.phone,expression:"changePhone.phone"}],staticClass:"form-control",attrs:{type:"text",id:"inputPhone",placeholder:"Cth: 0815"},domProps:{value:e.changePhone.phone},on:{input:function(t){t.target.composing||e.$set(e.changePhone,"phone",t.target.value)}}})]),e._v(" "),o("button",{staticClass:"btn btn-danger mb-2",attrs:{type:"button"},on:{click:function(t){return e.changePhoneMethod()}}},[e._v("\n                        konfirmasi\n                      ")])])])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email\n                  "),e.user&&e.user.isEmailVerified?o("span",[o("i",{staticClass:"fad fa-check-circle text-info"})]):e._e()]),e._v(" "),o("div",{staticClass:"justify-content-between d-flex"},[e.user&&e.user.email?o("h5",[e._v("\n                    "+e._s(e.user.email||"")+"\n                  ")]):o("p",{staticClass:"text-muted font-italic"},[e._v("\n                    Email belum ditambahkan\n                  ")]),e._v(" "),e.user&&"google"!==e.user.registeredBy&&e.user&&"facebook"!==e.user.registeredBy?o("p",{staticClass:"text-danger",attrs:{"data-toggle":"collapse","data-target":"#collapseEmail",role:"button"}},[e._v("\n                    "+e._s(e.user&&e.user.email?"edit":"tambahkan")+"\n                  ")]):e._e()]),e._v(" "),e.user&&e.user.email&&!e.user.isEmailVerified?o("div",[o("p",{staticClass:"font-italic text-danger",attrs:{role:"button"},on:{click:function(t){return e.verifyEmailMethod()}}},[e._v("\n                    verifikasi\n                  ")])]):e._e(),e._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseEmail"}},[o("div",{staticClass:"card card-body"},[o("form",{staticClass:"form-inline"},[o("div",{staticClass:"form-group mb-2"},[e._v("Email:")]),e._v(" "),o("div",{staticClass:"form-group mx-sm-3 mb-2"},[o("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[e._v("Email")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.changeEmail.email,expression:"changeEmail.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Cth: john.f.kennedy@gmail.com"},domProps:{value:e.changeEmail.email},on:{input:function(t){t.target.composing||e.$set(e.changeEmail,"email",t.target.value)}}})]),e._v(" "),o("button",{staticClass:"btn btn-danger mb-2",attrs:{type:"button"},on:{click:function(t){return e.changeEmailMethod()}}},[e._v("\n                        konfirmasi\n                      ")])])])])])])]),e._v(" "),e.user&&"google"!==e.user.registeredBy&&e.user&&"facebook"!==e.user.registeredBy?o("div",{staticClass:"accordion",attrs:{id:"accordionPassword"}},[o("div",{staticClass:"card"},[e._m(0),e._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapsePassword","aria-labelledby":"headingPassword","data-parent":"#accordionPassword"}},[o("div",{staticClass:"card-body"},[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"formGroupOldPassword"}},[e._v("Password lama")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.changePassword.old_password,expression:"changePassword.old_password"}],staticClass:"form-control",attrs:{type:"password",id:"formGroupOldPassword",placeholder:"*****"},domProps:{value:e.changePassword.old_password},on:{input:function(t){t.target.composing||e.$set(e.changePassword,"old_password",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"formGroupNewPassword"}},[e._v("Password baru")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.changePassword.password,expression:"changePassword.password"}],staticClass:"form-control",attrs:{type:"password",id:"formGroupNewPassword",placeholder:"*******"},domProps:{value:e.changePassword.password},on:{input:function(t){t.target.composing||e.$set(e.changePassword,"password",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"formGroupConfirmNewPassword"}},[e._v("Konfirmasi password baru")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.changePassword.password_confirmation,expression:"changePassword.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"formGroupConfirmNewPassword",placeholder:"*******"},domProps:{value:e.changePassword.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.changePassword,"password_confirmation",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"text-center"},[o("button",{staticClass:"btn btn-success btn-block btn-lg",attrs:{type:"button"},on:{click:function(t){return e.changePasswordMethod()}}},[e._v("\n                        Simpan perubahan\n                      ")])])])])])])]):e._e()])])],1)]),e._v(" "),o("vue-final-modal",{attrs:{name:"modal-verify-phone","click-to-close":!0,"lock-scroll":!1,"fit-parent":!0,drag:!0},model:{value:e.verifyPhone.showModal,callback:function(t){e.$set(e.verifyPhone,"showModal",t)},expression:"verifyPhone.showModal"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered"},[o("div",{staticClass:"container modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[e._v("Verifikasi Telepon")])]),e._v(" "),o("div",{staticClass:"modal-body"},[o("div",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputChangePhoneOTP"}},[e._v("Kode OTP")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyPhone.data,expression:"verifyPhone.data"}],staticClass:"form-control",attrs:{type:"tel",id:"inputChangePhoneOTP",placeholder:"****"},domProps:{value:e.verifyPhone.data},on:{input:function(t){t.target.composing||e.$set(e.verifyPhone,"data",t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-danger font-italic",attrs:{role:"button"},on:{click:function(t){return e.resendOtpPhone()}}},[e._v("kirim ulang kode OTP")])])]),e._v(" "),o("div",{staticClass:"justify-content-around mx-auto text-center mt-5"},[o("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.verifyOtpPhoneMethod()}}},[e._v("\n              verifikasi\n            ")])])])])])]),e._v(" "),o("vue-final-modal",{attrs:{name:"modal-verify-email","click-to-close":!0,"lock-scroll":!1,"fit-parent":!0,drag:!0},model:{value:e.verifyEmail.showModal,callback:function(t){e.$set(e.verifyEmail,"showModal",t)},expression:"verifyEmail.showModal"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered"},[o("div",{staticClass:"container modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[e._v("Verifikasi Email")])]),e._v(" "),o("div",{staticClass:"modal-body"},[o("div",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputChangePhone"}},[e._v("Kode OTP")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyEmail.data,expression:"verifyEmail.data"}],staticClass:"form-control",attrs:{type:"tel",id:"inputChangePhone",placeholder:"****"},domProps:{value:e.verifyEmail.data},on:{input:function(t){t.target.composing||e.$set(e.verifyEmail,"data",t.target.value)}}}),e._v(" "),o("span",{staticClass:"text-danger font-italic",attrs:{role:"button"},on:{click:function(t){return e.resendOtpEmail()}}},[e._v("kirim ulang kode OTP")])])]),e._v(" "),o("div",{staticClass:"justify-content-around mx-auto text-center mt-5"},[o("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.verifyOtpEmailMethod()}}},[e._v("\n              verifikasi\n            ")])])])])])])],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card-header",attrs:{id:"headingPassword"}},[o("h2",{staticClass:"mb-0"},[o("button",{staticClass:"\n                      btn btn-link btn-block\n                      text-left text-decoration-none\n                      btn-heading-password\n                    ",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsePassword","aria-expanded":"true","aria-controls":"collapsePassword"}},[o("i",{staticClass:"fad fa-lock-alt"}),e._v(" Password\n                  ")])])])}],!1,null,"51249c1e",null);t.default=component.exports;installComponents(component,{ProfilePartialSidebar:o(2269).default})}}]);