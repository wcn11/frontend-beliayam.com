(window.webpackJsonp=window.webpackJsonp||[]).push([[10,16],{2109:function(t,e,n){"use strict";n.r(e);n(171);var o={name:"googleSignIn",props:{clientId:{type:String,required:!0},warning:{default:!0,type:Boolean},className:String,successCallBack:Function,failureCallBack:Function,customButton:{default:!1,type:Boolean},customButtonId:{Default:null,type:String},longTitle:{default:!1,type:Boolean},theme:{default:"light",type:String},scope:{default:"email profile openid",type:String},buttonWidth:{default:120,type:Number},buttonHeight:{default:36,type:Number}},mounted:function(){window.__google_oauth_useful_variables={client_id:this.clientId,warning:this.warning,customButtonId:this.customButtonId,attachSignin:this.attachSignin,onSignIn:this.onSignIn,onFailSignIn:this.onFailSignIn},gapi.load("auth2",(function(){try{window.auth2=gapi.auth2.init({client_id:window.__google_oauth_useful_variables.client_id,cookiepolicy:"single_host_origin"})}catch(t){window.__google_oauth_useful_variables.warning&&console.warn(t)}try{window.__google_oauth_useful_variables.customButtonId&&window.__google_oauth_useful_variables.attachSignin(document.getElementById(window.__google_oauth_useful_variables.customButtonId))}catch(t){window.__google_oauth_useful_variables.warning&&console.warn(t)}})),this.customButton||gapi.signin2.render("googleSignIn",{scope:this.scope,width:this.width,height:this.height,longTitle:this.longTitle,theme:this.theme,onsuccess:this.onSignIn,onfailure:this.onFailSignIn}),this.validate()},methods:{validate:function(){void 0===this.successCallBack?this.warning&&console.warn("Google Sign In --\x3e Specify the success callback method to get the data"):"function"!=typeof this.successCallBack&&this.warning&&console.warn("Google Sign In --\x3e Success Callback must be a valid Function"),void 0===this.failureCallBack?this.warning&&console.warn("Google Sign In --\x3e Specify the Failure callback method to get the Error data"):"function"!=typeof this.failureCallBack&&this.warning&&console.warn("Google Sign In --\x3e Failure Callback must be a valid Function"),this.customButton&&void 0===this.customButtonId&&this.warning&&console.warn("Google Sign In --\x3e Please Provide customButtonId or change the customButton to false")},attachSignin:function(element){window.auth2.attachClickHandler(element,{},(function(t){window.__google_oauth_useful_variables.onSignIn(t)}),(function(t){window.__google_oauth_useful_variables.onFailSignIn(t)}))},onSignIn:function(t){var e=t.getAuthResponse().id_token,n=t.getBasicProfile();t.disconnect(),"function"==typeof this.successCallBack&&this.successCallBack({id_token:e,id:n.getId()?n.getId():null,name:n.getName()?n.getName():null,image:n.getImageUrl()?n.getImageUrl():null,email:n.getEmail()?n.getEmail():null})},onFailSignIn:function(t){"function"==typeof this.failureCallBack&&this.failureCallBack(t)}}},r=n(18),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:void 0!==t.className?t.className:null,attrs:{id:"googleSignIn"}},[t.customButton?t._t("default"):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},2113:function(t,e,n){var content=n(2123);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("76ca22b6",content,!0,{sourceMap:!1})},2122:function(t,e,n){"use strict";n(2113)},2123:function(t,e,n){var o=n(24)(!1);o.push([t.i,".btn-google{background-color:#e44c33}.btn-facebook{background-color:#1877f2}",""]),t.exports=o},2127:function(t,e,n){"use strict";n.r(e);var o=n(4),r=(n(46),n(37),{components:{googleSignIn:n(2109).default},data:function(){return{googleClientId:"1004618276737-cjmh00l7402tbkarddo08innpltqg5oo.apps.googleusercontent.com",phone:"0895402275040",verifyPhoneOtp:{showModal:!1,data:""}}},methods:{getSuccessData:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$axios.$post("".concat("https://api-live.beliayam.com/api/v1","/auth/social/login"),{name:t.name,email:t.email,loginBy:"google",loginAt:"website"}).then((function(t){t.error?e.$toast.warning(t.message):(e.$store.dispatch("auth/loginBySocial",t.data.token),e.$router.push("/"))})).catch((function(t){t&&t.response&&t.response.error?e.$toast.warning(t.response.message):e.$toast.warning("Server Sibuk")}));case 1:case"end":return n.stop()}}),n)})))()},getFailureData:function(t){console.log(t)},confirmOtp:function(){this.phone?this.verifyPhoneOtp.showModal=!0:this.$toast.warning("No. Telepon belum di isi")},verifyOtpPhoneForgetPasswordMethod:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.verifyPhoneOtp.data){e.next=3;break}return t.$toast.warning("Bidang tidak boleh kosong"),e.abrupt("return");case 3:return e.next=5,t.$axios.$post("".concat("https://api-live.beliayam.com/api/v1","/auth/password/forget/phone/verify"),{phone:t.phone,code:t.verifyPhoneOtp.data}).then((function(e){e.error?t.$toast.warning(e.message):(t.$store.dispatch("auth/setCookieLogin",e.data.token),t.$toast.success(e.message),t.verifyPhoneOtp.showModal=!1,t.$router.push("/"))})).catch((function(e){console.log(e),e&&e.response&&e.response.error?t.$toast.warning(e.response.message):t.$toast.warning("Gagal Memuat Data")}));case 5:case"end":return e.stop()}}),e)})))()},resendOtpPhone:function(){var t=this;this.$axios.$post("".concat("https://api-live.beliayam.com/api/v1","/auth/password/forget/phone/resend"),{phone:this.phone}).then((function(e){e.error?t.$toast.warning(e.message):t.$toast.success(e.message)})).catch((function(e){e&&e.response&&e.response.data.error?t.$toast.warning(e.response.data.message):t.$toast.warning("Gagal Memuat Data")}))},submitForgetPasswordByPhone:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.phone){e.next=3;break}return t.$toast.warning("Bidang tidak boleh kosong"),e.abrupt("return");case 3:t.$axios.$post("".concat("https://api-live.beliayam.com/api/v1","/auth/password/forget/phone"),{phone:t.phone}).then((function(e){e.error?t.$toast.warning(e.message):(t.$toast.success(e.message),t.verifyPhoneOtp.showModal=!0)})).catch((function(e){e&&e.response&&e.response.data.error?t.$toast.warning(e.response.data.message):t.$toast.warning("Server Sibuk")}));case 4:case"end":return e.stop()}}),e)})))()}}}),l=(n(2122),n(18)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"beliayam-main-body beliayam-signin-main animate__animated"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex align-items-center justify-content-center vh-100"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-6 pl-lg-5"},[n("div",{staticClass:"beliayam-signin shadow-sm bg-white p-4 rounded"},[n("div",{staticClass:"p-3"},[n("h2",{staticClass:"my-0"},[t._v("Temukan Akun Anda")]),t._v(" "),n("p",{staticClass:"small mb-4"},[t._v("Cari akun untuk melanjutkan.")]),t._v(" "),n("div",{staticClass:"form"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"phone-forgot-password"}},[t._v("No. Telepon")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{placeholder:"Masukkan no. telepon",type:"tel",id:"phone-forgot-password","aria-describedby":"phoneHelp"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-center mt-2 mb-3"},[n("span",{staticClass:"text-danger",attrs:{to:"login/forgot-password",role:"button"},on:{click:function(e){return t.confirmOtp()}}},[t._v("konfirmasi kode OTP")])]),t._v(" "),n("button",{staticClass:"btn btn-success btn-lg rounded btn-block",attrs:{type:"submit"},on:{click:function(e){return t.submitForgetPasswordByPhone()}}},[t._v("\n                Kirim kode OTP\n              ")])]),t._v(" "),n("p",{staticClass:"text-muted text-center small m-0 py-3"},[t._v("atau")]),t._v(" "),n("NuxtLink",{staticClass:"btn text-center mt-1 mb-2 btn-outline-dark w-100",attrs:{to:"/login/forgot-password"}},[n("span",[n("i",{staticClass:"fad fa-envelope"}),t._v(" reset password dengan\n                email")])]),t._v(" "),n("NuxtLink",{staticClass:"btn btn-dark btn-block rounded btn-lg",attrs:{to:"/login/phone",href:"javascript:void(0)"}},[n("i",{staticClass:"fad fa-mobile-alt"}),t._v(" Masuk Dengan Telepon\n            ")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("googleSignIn",{attrs:{clientId:""+t.googleClientId,successCallBack:t.getSuccessData,failureCallBack:t.getFailureData,customButton:!0,customButtonId:"buttonLoginByGoogle"}}),t._v(" "),n("p",{staticClass:"text-center mt-3 mb-0"},[n("NuxtLink",{staticClass:"text-dark",attrs:{to:"/register"}},[t._v("Belum Punya Akun ?\n                "),n("span",{staticClass:"text-danger"},[t._v("Daftar Disini")])])],1)],1)])])])]),t._v(" "),n("vue-final-modal",{attrs:{name:"modal-verify-verify-otp","click-to-close":!0,"lock-scroll":!1,"fit-parent":!0,drag:!0},model:{value:t.verifyPhoneOtp.showModal,callback:function(e){t.$set(t.verifyPhoneOtp,"showModal",e)},expression:"verifyPhoneOtp.showModal"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"container modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v("Verifikasi Nomor Telepon")])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"inputChangePhone"}},[t._v("Kode OTP")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyPhoneOtp.data,expression:"verifyPhoneOtp.data"}],staticClass:"form-control",attrs:{type:"tel",id:"inputChangePhone",placeholder:"****"},domProps:{value:t.verifyPhoneOtp.data},on:{input:function(e){e.target.composing||t.$set(t.verifyPhoneOtp,"data",e.target.value)}}}),t._v(" "),n("span",{staticClass:"text-danger font-italic",attrs:{role:"button"},on:{click:function(e){return t.resendOtpPhone()}}},[t._v("kirim ulang kode OTP")])])]),t._v(" "),n("div",{staticClass:"justify-content-around mx-auto text-center mt-5"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.verifyOtpPhoneForgetPasswordMethod()}}},[t._v("\n              verifikasi\n            ")])])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page shadow-sm bg-success col-lg-6"},[n("div",{staticClass:"beliayam-slider m-0"},[n("div",{staticClass:"beliayam-slider-item text-center"},[n("div",{staticClass:"\n                d-flex\n                align-items-center\n                justify-content-center\n                vh-100\n                flex-column\n              "},[n("i",{staticClass:"fad fa-badge-percent display-1 text-warning"}),t._v(" "),n("h4",{staticClass:"my-4 text-white"},[t._v("Best Prices & Offers")]),t._v(" "),n("p",{staticClass:"text-center text-white-50 mb-5 px-4"},[t._v("\n                Cheaper prices than your local"),n("br"),t._v("supermarket, great\n                cashback offers to top it off.\n              ")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-info btn-block rounded btn-lg btn-facebook",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"fab fa-facebook mr-2"}),t._v(" Masuk Dengan Facebook\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn border btn-block rounded btn-lg btn-google",attrs:{id:"buttonLoginByGoogle",href:"javascript:void(0)"}},[n("i",{staticClass:"fab text-light fa-google text-danger mr-2"}),t._v("\n              Masuk Dengan Google\n            ")])}],!1,null,null,null);e.default=component.exports}}]);