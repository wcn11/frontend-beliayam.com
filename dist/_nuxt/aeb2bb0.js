(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{2121:function(t,e,r){var content=r(2136);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("d622cfd0",content,!0,{sourceMap:!1})},2135:function(t,e,r){"use strict";r(2121)},2136:function(t,e,r){var n=r(25)(!1);n.push([t.i,".btn-google{background-color:#e44c33}.btn-facebook{background-color:#1877f2}",""]),t.exports=n},2169:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(46),{fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query,n=r.token,o=r.id,c=r.signature,n&&o&&c||(t.badLink=!0),e.next=4,t.$axios.post("".concat("https://be-dev.beliayam.com/api/v1","/auth/password/verify"),{token:n,id:o,signature:c}).then((function(e){if(e.error)return t.$toast.warning(e.data.data.message),void(t.badLink=!0);t.user=e.data.data,t.signature=c})).catch((function(e){e&&e.response&&e.response.data.error?t.$toast.warning(e.response.data.message):t.$toast.error("Server Sibuk"),t.badLink=!0}));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{signature:"",badLink:!1,password:"qweqwe",password_confirmation:"qweqwe",user:{}}},methods:{submitResetPassword:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.password&&""!==t.password_confirmation){e.next=3;break}return t.$toast.warning("Bidang tidak boleh kosong"),e.abrupt("return");case 3:t.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/auth/password/change"),{_id:t.user._id,password:t.password,password_confirmation:t.password_confirmation},{headers:{signature:t.signature}}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.error){e.next=3;break}return t.$toast.warning(r.message),e.abrupt("return");case 3:return e.next=5,t.$store.dispatch("auth/loginBySocial",r.data.token);case 5:t.$toast.success(r.message),t.$router.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return e&&e.response&&e.response.data.error?void t.$toast.warning(e.response.data.message):void t.$toast.warning("Server Sibuk")}));case 4:case"end":return e.stop()}}),e)})))()}}}),c=o,d=(r(2135),r(18)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"beliayam-main-body beliayam-signin-main animate__animated"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row d-flex align-items-center justify-content-center vh-100"},[t._m(0),t._v(" "),r("div",{staticClass:"col-lg-6 pl-lg-5"},[r("div",{staticClass:"beliayam-signin shadow-sm bg-white p-4 rounded"},[t.badLink?r("div",{staticClass:"p-3"},[t._v("Bad Link")]):r("div",{staticClass:"p-3"},[r("h2",{staticClass:"my-0"},[t._v("Reset Password")]),t._v(" "),r("p",{staticClass:"small mb-4"},[t._v("Update password anda")]),t._v(" "),r("div",{staticClass:"form"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"Masukkan password",type:"text",id:"password","aria-describedby":"passwordHelp"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Konfirmasi Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control",attrs:{placeholder:"Masukkan konfirmasi password",type:"text",id:"password-confirmation","aria-describedby":"passwordConfirmationHelp"},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn-success btn-lg rounded btn-block",attrs:{type:"submit"},on:{click:function(e){return t.submitResetPassword()}}},[t._v("\n                Update password\n              ")])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"landing-page shadow-sm bg-success col-lg-6"},[r("div",{staticClass:"beliayam-slider m-0"},[r("div",{staticClass:"beliayam-slider-item text-center"},[r("div",{staticClass:"\n                d-flex\n                align-items-center\n                justify-content-center\n                vh-100\n                flex-column\n              "},[r("i",{staticClass:"fad fa-badge-percent display-1 text-warning"}),t._v(" "),r("h4",{staticClass:"my-4 text-white"},[t._v("Best Prices & Offers")]),t._v(" "),r("p",{staticClass:"text-center text-white-50 mb-5 px-4"},[t._v("\n                Cheaper prices than your local"),r("br"),t._v("supermarket, great\n                cashback offers to top it off.\n              ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);