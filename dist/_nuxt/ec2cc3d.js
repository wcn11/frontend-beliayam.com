(window.webpackJsonp=window.webpackJsonp||[]).push([[69,16,18],{2267:function(t,e,n){"use strict";n.r(e);n(172);var o={name:"googleSignIn",props:{clientId:{type:String,required:!0},warning:{default:!0,type:Boolean},className:String,successCallBack:Function,failureCallBack:Function,customButton:{default:!1,type:Boolean},customButtonId:{Default:null,type:String},longTitle:{default:!1,type:Boolean},theme:{default:"light",type:String},scope:{default:"email profile openid",type:String},buttonWidth:{default:120,type:Number},buttonHeight:{default:36,type:Number}},mounted:function(){window.__google_oauth_useful_variables={client_id:this.clientId,warning:this.warning,customButtonId:this.customButtonId,attachSignin:this.attachSignin,onSignIn:this.onSignIn,onFailSignIn:this.onFailSignIn},gapi.load("auth2",(function(){try{window.auth2=gapi.auth2.init({client_id:window.__google_oauth_useful_variables.client_id,cookiepolicy:"single_host_origin"})}catch(t){window.__google_oauth_useful_variables.warning&&console.warn(t)}try{window.__google_oauth_useful_variables.customButtonId&&window.__google_oauth_useful_variables.attachSignin(document.getElementById(window.__google_oauth_useful_variables.customButtonId))}catch(t){window.__google_oauth_useful_variables.warning&&console.warn(t)}})),this.customButton||gapi.signin2.render("googleSignIn",{scope:this.scope,width:this.width,height:this.height,longTitle:this.longTitle,theme:this.theme,onsuccess:this.onSignIn,onfailure:this.onFailSignIn}),this.validate()},methods:{validate:function(){void 0===this.successCallBack?this.warning&&console.warn("Google Sign In --\x3e Specify the success callback method to get the data"):"function"!=typeof this.successCallBack&&this.warning&&console.warn("Google Sign In --\x3e Success Callback must be a valid Function"),void 0===this.failureCallBack?this.warning&&console.warn("Google Sign In --\x3e Specify the Failure callback method to get the Error data"):"function"!=typeof this.failureCallBack&&this.warning&&console.warn("Google Sign In --\x3e Failure Callback must be a valid Function"),this.customButton&&void 0===this.customButtonId&&this.warning&&console.warn("Google Sign In --\x3e Please Provide customButtonId or change the customButton to false")},attachSignin:function(element){window.auth2.attachClickHandler(element,{},(function(t){window.__google_oauth_useful_variables.onSignIn(t)}),(function(t){window.__google_oauth_useful_variables.onFailSignIn(t)}))},onSignIn:function(t){var e=t.getAuthResponse().id_token,n=t.getBasicProfile();t.disconnect(),"function"==typeof this.successCallBack&&this.successCallBack({id_token:e,id:n.getId()?n.getId():null,name:n.getName()?n.getName():null,image:n.getImageUrl()?n.getImageUrl():null,email:n.getEmail()?n.getEmail():null})},onFailSignIn:function(t){"function"==typeof this.failureCallBack&&this.failureCallBack(t)}}},r=n(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:void 0!==t.className?t.className:null,attrs:{id:"googleSignIn"}},[t.customButton?t._t("default"):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},2349:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(41),n(14),n(42),{name:"Signup",components:{googleSignIn:n(2267).default},data:function(){return{googleClientId:"1004618276737-cjmh00l7402tbkarddo08innpltqg5oo.apps.googleusercontent.com",name:"",email:"",password:"",registerBy:"email",registerAt:"website"}},methods:{loginByFacebook:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(FB.login);case 2:if(n=e.sent,n.authResponse){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,FB.api("/me?fields=email,name",function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getSuccessData(n,"facebook");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})))()},getSuccessData:function(t){var e=arguments,n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r=e.length>1&&void 0!==e[1]?e[1]:"google",n.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/auth/social/login"),{name:t.name,email:t.email,loginBy:r,loginAt:"website"}).then((function(t){t.error?n.$toast.warning(t.message):(n.$store.dispatch("auth/loginBySocial",t.data.token),n.$router.push("/"))})).catch((function(t){t&&t.response&&t.response.error?n.$toast.warning(t.response.message):n.$toast.warning("Server Sibuk")}));case 2:case"end":return o.stop()}}),o)})))()},getFailureData:function(t){console.log(t)},submitRegister:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.name&&""!==t.email&&""!==t.password){e.next=3;break}return t.$toast.warning("Bidang tidak boleh kosong"),e.abrupt("return");case 3:return e.next=5,t.$store.dispatch("auth/register",{name:t.name,email:t.email,password:t.password,registerBy:t.registerBy,registerAt:t.registerAt});case 5:if(!(n=e.sent).error){e.next=9;break}return t.$toast.error(n.message),e.abrupt("return");case 9:t.$router.push("/");case 10:case"end":return e.stop()}}),e)})))()}}}),l=r,c=n(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"beliayam-main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex align-items-center justify-content-center vh-100"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-6 pl-lg-5"},[n("div",{staticClass:"beliayam-signup shadow bg-white p-4 rounded"},[n("div",{staticClass:"p-3"},[n("h2",{staticClass:"my-0"},[t._v("Ayo Mulai")]),t._v(" "),n("p",{staticClass:"small mb-4"},[t._v("\n              Buat akun untuk melihat pilihan terbaik kami untuk Anda!\n            ")]),t._v(" "),n("form",{attrs:{action:"verification.html"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"inputName"}},[t._v("Nama")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{placeholder:"Masukkan Name",type:"text",id:"inputName","aria-describedby":"emailHelp"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"inputEmail"}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{placeholder:"Masukkan Email",type:"email",id:"inputEmail","aria-describedby":"emailHelp"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"Masukkan Password",type:"password",id:"inputPassword"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-success rounded btn-lg btn-block",attrs:{type:"button"},on:{click:function(e){return t.submitRegister()}}},[t._v("\n                Mendaftar\n              ")])]),t._v(" "),n("p",{staticClass:"text-muted text-center small py-2 m-0"},[t._v("atau")]),t._v(" "),n("NuxtLink",{staticClass:"btn btn-dark btn-block rounded btn-lg",attrs:{to:"/register/phone"}},[n("i",{staticClass:"fad fa-mobile-alt"}),t._v(" Mendaftar Dengan Telepon\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-info btn-block rounded btn-lg btn-facebook",attrs:{href:"javascript:void(0)"},on:{click:t.loginByFacebook}},[n("i",{staticClass:"fab fa-facebook mr-2"}),t._v(" Masuk Dengan Facebook\n            ")]),t._v(" "),t._m(1),t._v(" "),n("googleSignIn",{attrs:{clientId:""+t.googleClientId,successCallBack:t.getSuccessData,failureCallBack:t.getFailureData,customButton:!0,customButtonId:"buttonLoginByGoogle"}}),t._v(" "),n("p",{staticClass:"text-center mt-3 mb-0"},[n("NuxtLink",{staticClass:"text-dark",attrs:{to:"/login"}},[t._v("Sudah Punya Akun ?\n                "),n("span",{staticClass:"text-danger"},[t._v("Masuk Disini")])])],1)],1)])])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page shadow-sm bg-success col-lg-6"},[n("div",{staticClass:"beliayam-slider m-0"},[n("div",{staticClass:"beliayam-slider-item text-center"},[n("div",{staticClass:"\n                d-flex\n                align-items-center\n                justify-content-center\n                vh-100\n                flex-column\n              "},[n("i",{staticClass:"fad fa-badge-percent display-1 text-warning"}),t._v(" "),n("h4",{staticClass:"my-4 text-white"},[t._v("Best Prices & Offers")]),t._v(" "),n("p",{staticClass:"text-center text-white-50 mb-5 px-4"},[t._v("\n                Cheaper prices than your local"),n("br"),t._v("supermarket, great\n                cashback offers to top it off.\n              ")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn border btn-block rounded btn-lg btn-google",attrs:{id:"buttonLoginByGoogle",href:"javascript:void(0)"}},[n("i",{staticClass:"fab text-light fa-google text-danger mr-2"}),t._v("\n              Mendaftar Dengan Google\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-switch-wrapper"},[n("label",{staticClass:"theme-switch",attrs:{for:"checkbox"}},[n("input",{attrs:{type:"checkbox",id:"checkbox"}}),t._v(" "),n("div",{staticClass:"slider round"}),t._v(" "),n("i",{staticClass:"fad fa-moon-cloud"})]),t._v(" "),n("em",[t._v("Mode Gelap!")])])}],!1,null,null,null);e.default=component.exports},2441:function(t,e,n){"use strict";n.r(e);var o={name:"Signup",layout:"blank",mounted:function(){document.getElementById("page-register").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-register").classList.add("animate__fadeOutLeft")}},r=n(16),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animate__animated",attrs:{id:"page-register"}},[e("AuthSignUp")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AuthSignUp:n(2349).default})}}]);