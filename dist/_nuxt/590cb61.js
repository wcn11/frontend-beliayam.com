(window.webpackJsonp=window.webpackJsonp||[]).push([[6,34],{2280:function(e,t,r){"use strict";r.r(t);var n={methods:{logout:function(){this.$store.dispatch("auth/logout"),window.location.reload()}}},d=r(17),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"beliayam-account bg-white rounded shadow-sm overflow-hidden"},[e._m(0),e._v(" "),r("div",{staticClass:"account-sections"},[r("ul",{staticClass:"list-group"},[r("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun"}},[r("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[r("i",{staticClass:"fad fa-user beliayam-icofont bg-danger"}),e._v("Akun Saya\n            "),r("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[r("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),r("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun/pesanan-saya"}},[r("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[r("i",{staticClass:"fad fa-box-heart beliayam-icofont bg-danger"}),e._v("Pesanan Saya\n            "),r("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[r("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),r("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/promo"}},[r("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[r("i",{staticClass:"fad fa-badge-percent beliayam-icofont bg-danger"}),e._v("Promo\n            "),r("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[r("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),r("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/akun/alamat"}},[r("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[r("i",{staticClass:"fad fa-address-book beliayam-icofont bg-dark"}),e._v("\n            Alamat\n            "),r("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[r("i",{staticClass:"fad fa-chevron-right"})])])]),e._v(" "),e._m(1),e._v(" "),r("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.logout()}}},[e._m(2)])],1)])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-4 profile text-center border-bottom"},[r("img",{staticClass:"img-fluid rounded-pill",attrs:{src:"/img/user.png"}}),e._v(" "),r("h6",{staticClass:"font-weight-bold m-0 mt-2"},[e._v("Beranda")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"help_support.html"}},[r("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[r("i",{staticClass:"fad fa-phone-alt beliayam-icofont bg-warning"}),e._v("Bantuan & Dukungan\n            "),r("span",{staticClass:"badge badge-success p-1 badge-pill ml-auto"},[r("i",{staticClass:"fad fa-chevron-right"})])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"border-bottom bg-white d-flex align-items-center p-3"},[r("i",{staticClass:"fad fa-lock beliayam-icofont bg-danger"}),e._v("\n            Logout\n          ")])}],!1,null,null,null);t.default=component.exports},2345:function(e,t,r){var content=r(2412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("8f5e8216",content,!0,{sourceMap:!1})},2411:function(e,t,r){"use strict";r(2345)},2412:function(e,t,r){var n=r(22)(!1);n.push([e.i,".border-custom-radio .custom-control-input:checked~.custom-control-label[data-v-6e6446ee]:before{border:2px solid #cf430f}.modal-container[data-v-6e6446ee]{z-index:1050!important}",""]),e.exports=n},2454:function(e,t,r){"use strict";r.r(t);var n=r(5),d=(r(57),r(27),r(15),r(42),{name:"ProfileAdress",fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAllProvince();case 2:return t.next=4,e.getAddresses();case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{addresses:[],showModal:!1,updateAddress:{showModal:!1,data:{}},deleteAddress:{showModal:!1,data:{}},searchProvinceQuery:"",newAddress:{label:"",receiver_name:"",phone:"",address1:"",address2:"",details:"",state:{},city:{},district:{},sub_district:{},postcode:"",default:!1},regions:{state:[],cities:{},districts:{},sub_districts:{},postcode:""}}},methods:{openModal:function(){$(document).ready((function(){$("#exampleModal").modal("show")}))},setLabelAddress:function(){var label=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Rumah",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add";"add"!=e?this.updateAddress.data.label=label:this.newAddress.label=label},getAddresses:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$cookies.get("client_id")){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$axios.$get("".concat("https://be-dev.beliayam.com/api/v1","/users/address?user_id=").concat(r)).then((function(t){t.data.length>0&&(e.addresses=t.data[0])}));case 5:case"end":return t.stop()}}),t)})))()},setDefaultAddress:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d=t.$store.state.auth.user,r.next=3,t.$axios.$put("".concat("https://be-dev.beliayam.com/api/v1","/users/address/").concat(e,"/default"),{address_id:e,user_id:d._id}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.error){e.next=3;break}return t.$toast.error(r.message),e.abrupt("return");case 3:return e.next=5,t.getAddresses();case 5:t.$toast.success(r.message);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e&&e.response&&e.response.error?t.$toast.error(e.response.message):t.$toast.warning("Terjadi Kesalahan, gagal mengupdate data")}));case 3:case"end":return r.stop()}}),r)})))()},closeModalDeleteAddress:function(){var e=this;this.$vfm.hide("modal-delete-address").then((function(){e.deleteAddress.show=!1}))},saveNewAddress:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$store.state.auth.user,t.next=3,e.$axios.$post("".concat("https://be-dev.beliayam.com/api/v1","/users/address"),{user_id:r._id,label:e.newAddress.label,receiver_name:e.newAddress.receiver_name,address1:e.newAddress.address1,address2:e.newAddress.address2,city:e.newAddress.city,state:e.newAddress.state,district:e.newAddress.district,sub_district:e.newAddress.sub_district,postcode:e.newAddress.postcode,phone:e.newAddress.phone,details:e.newAddress.details,default:e.newAddress.default}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.error){t.next=5;break}return e.$toast.error(r.message),t.abrupt("return");case 5:return t.next=7,e.getAddresses();case 7:e.$toast.success(r.message),$("#modal-new-address").appendTo("body").modal("hide");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){t&&t.response&&t.response.error?e.$toast.error(t.response.message):e.$toast.warning("Server Sibuk")}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},updateNewAddress:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.updateAddress){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.$put("".concat("https://be-dev.beliayam.com/api/v1","/users/address/").concat(e.updateAddress.data._id),e.updateAddress.data).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.error&&e.$toast.error(r.message),t.next=3,e.getAddresses();case 3:return e.$toast.success(r.message),t.abrupt("return");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){t&&t.response&&t.response.error?e.$toast.error(t.response.message):e.$toast.warning("Terjadi Kesalahan, gagal mengupdate data")}));case 4:t.sent,$("#modal-edit-address").appendTo("body").modal("hide");case 6:case"end":return t.stop()}}),t)})))()},openModalDeleteAddress:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,data;case 2:e.deleteAddress.data=t.sent,$("#modal-delete-address").appendTo("body").modal("show");case 4:case"end":return t.stop()}}),t)})))()},deleteNewAddress:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$delete("".concat("https://be-dev.beliayam.com/api/v1","/users/address/").concat(e.deleteAddress.data._id)).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(r),!r.error){t.next=5;break}e.$toast.error(r.message),t.next=8;break;case 5:return t.next=7,e.getAddresses();case 7:e.$toast.success(r.message);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){t&&t.response&&t.response.error?e.$toast.error(t.response.message):e.$toast.warning("Terjadi Kesalahan, gagal menghapus alamat")}));case 2:$("#modal-delete-address").appendTo("body").modal("hide");case 3:case"end":return t.stop()}}),t)})))()},getAllProvince:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("".concat("https://be-dev.beliayam.com/api/v1","/region/provinces")).then((function(t){e.regions.state=t.data}));case 2:case"end":return t.stop()}}),t)})))()},getCities:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,d,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"new",d=e.length>1&&void 0!==e[1]?e[1]:0,o="new"==n?t.newAddress.state.id:d,r.next=5,t.$axios.$get("".concat("https://be-dev.beliayam.com/api/v1","/region/province/").concat(o)).then((function(e){e.data.length>0&&(t.regions.cities=e.data[0])}));case 5:case"end":return r.stop()}}),r)})))()},getDistricts:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,d,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"new",d=e.length>1&&void 0!==e[1]?e[1]:0,o="new"==n?t.newAddress.city.id:d,r.next=5,t.$axios.$get("".concat("https://be-dev.beliayam.com/api/v1","/region/regency/").concat(o)).then((function(e){e.data.length>0&&(t.regions.districts=e.data[0])}));case 5:case"end":return r.stop()}}),r)})))()},getSubDistricts:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,d,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"new",d=e.length>1&&void 0!==e[1]?e[1]:0,o=t.newAddress.district,o="new"==n?t.newAddress.district.id:d,r.next=6,t.$axios.$get("".concat("https://be-dev.beliayam.com/api/v1","/region/district/").concat(o)).then((function(e){e.data.length>0&&(t.regions.sub_districts=e.data[0])}));case 6:case"end":return r.stop()}}),r)})))()},showModalNewAddress:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$("#modal-new-address").appendTo("body").modal("show");case 1:case"end":return e.stop()}}),e)})))()},openModalEditAddress:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var address;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(address=t.addresses.address.filter((function(address){return address._id===e}))).length<=0&&t.$toast.error("Tidak dapat mengubah alamat"),r.next=4,t.getCities("update",address[0].state.id);case 4:return r.next=6,t.getDistricts("update",address[0].city.id);case 6:return r.next=8,t.getSubDistricts("update",address[0].district.id);case 8:t.updateAddress.data=address[0],$("#modal-edit-address").appendTo("body").modal("show");case 10:case"end":return r.stop()}}),r)})))()}}}),o=d,l=(r(2411),r(17)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"py-4 beliayam-main-body"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("ProfilePartialSidebar"),e._v(" "),r("div",{staticClass:"col-lg-8 p-4 bg-white rounded shadow-sm"},[r("div",{staticClass:"beliayam-my_address"},[r("div",{staticClass:"d-flex align-items-center mb-2"},[r("p",{staticClass:"mb-0 h6"},[e._v("Alamat Saya")]),e._v(" "),r("button",{staticClass:"btn btn-outline-danger mb-0 ml-auto",on:{click:function(t){return e.showModalNewAddress()}}},[e._v("\n              alamat baru\n            ")])]),e._v(" "),e._l(e.addresses.address,(function(address){return r("div",{key:address._id,staticClass:"\n              custom-control custom-radio\n              px-0\n              mb-3\n              position-relative\n              border-custom-radio\n            "},[r("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadioInline1",name:"customRadioInline1",checked:""}}),e._v(" "),r("label",{staticClass:"custom-control-label w-100",attrs:{for:"customRadioInline1"}},[r("div",[r("div",{staticClass:"p-3 bg-white rounded shadow-sm w-100"},[r("div",{staticClass:"d-flex align-items-center mb-2"},[r("p",{staticClass:"mb-0 h6"},[e._v(e._s(address.label))]),e._v(" "),address.default?r("p",{staticClass:"mb-0 badge badge-danger ml-auto"},[e._v("\n                      utama\n                    ")]):r("p",{staticClass:"mb-0 badge badge-danger ml-auto",attrs:{role:"button"},on:{click:function(t){return e.setDefaultAddress(address._id)}}},[e._v("\n                      pilih\n                    ")])]),e._v(" "),r("p",{staticClass:"small text-muted m-0"},[e._v(e._s(address.phone))]),e._v(" "),r("p",{staticClass:"small text-muted m-0"},[e._v(e._s(address.address1))]),e._v(" "),r("p",{staticClass:"small text-muted m-0"},[e._v("\n                    "+e._s(address.sub_district.name)+",\n                    "+e._s(address.district.name)+", "+e._s(address.city.name)+"\n                  ")]),e._v(" "),r("p",{staticClass:"small text-muted m-0"},[e._v("\n                    "+e._s(address.state.name)+", "+e._s(address.postcode)+"\n                  ")]),e._v(" "),r("p",{staticClass:"pt-2 m-0 text-right"},[r("span",{staticClass:"small"},[r("a",{staticClass:"text-decoration-none text-danger",attrs:{href:"javascript:void(0)",id:"button-modal-new-address"},on:{click:function(t){return e.openModalEditAddress(address._id)}}},[e._v("\n                        edit")])]),e._v(" "),r("span",{staticClass:"small ml-3"},[r("a",{staticClass:"text-decoration-none text-danger",attrs:{href:"#","data-toggle":"modal","data-target":"#Delete"},on:{click:function(t){return e.openModalDeleteAddress(address)}}},[e._v("\n                        hapus")])])])])])])])})),e._v(" "),e.addresses.length<=0?r("div",[e._v("Belum ada alamat")]):e._e()],2)])],1)]),e._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"modal-new-address",tabindex:"-1","aria-labelledby":"modal-new-addressLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered"},[r("div",{staticClass:"container modal-content"},[e._m(0),e._v(" "),r("div",{staticClass:"modal-body"},[r("form",{},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[e._v("Informasi Penerimaan Produk")]),e._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"receiver"}},[e._v("Nama Penerima")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.receiver_name,expression:"newAddress.receiver_name"}],staticClass:"form-control",attrs:{type:"text",id:"receiver",placeholder:"Nama Penerima Pesanan"},domProps:{value:e.newAddress.receiver_name},on:{input:function(t){t.target.composing||e.$set(e.newAddress,"receiver_name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone"}},[e._v("Nomor HP")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.phone,expression:"newAddress.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Contoh: 0812"},domProps:{value:e.newAddress.phone},on:{input:function(t){t.target.composing||e.$set(e.newAddress,"phone",t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"card mt-4"},[r("div",{staticClass:"card-header"},[e._v("Alamat Pengiriman Pesanan")]),e._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"label"}},[e._v("Label Alamat")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.label,expression:"newAddress.label"}],staticClass:"form-control",attrs:{type:"text",id:"label",placeholder:"Contoh: Rumah Ibu"},domProps:{value:e.newAddress.label},on:{input:function(t){t.target.composing||e.$set(e.newAddress,"label",t.target.value)}}}),e._v(" "),r("div",{staticClass:"btn-group btn-group-toggle w-100 mt-3",attrs:{"data-toggle":"buttons"}},[r("label",{staticClass:"btn btn-outline-danger active",on:{click:function(t){return e.setLabelAddress("Rumah")}}},[r("input",{attrs:{type:"radio",name:"options",id:"option1",checked:""}}),e._v("\n                      Rumah\n                    ")]),e._v(" "),r("label",{staticClass:"btn btn-outline-danger",on:{click:function(t){return e.setLabelAddress("Kantor")}}},[r("input",{attrs:{type:"radio",name:"options",id:"option2"}}),e._v("\n                      Kantor\n                    ")]),e._v(" "),r("label",{staticClass:"btn btn-outline-danger",on:{click:function(t){return e.setLabelAddress("Apartment")}}},[r("input",{attrs:{type:"radio",name:"options",id:"option3"}}),e._v("\n                      Apartment\n                    ")])])]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputAddress"}},[e._v("Alamat")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.address1,expression:"newAddress.address1"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"Jl. Jenderal Sudirman RT 02/10"},domProps:{value:e.newAddress.address1},on:{input:function(t){t.target.composing||e.$set(e.newAddress,"address1",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputAddress"}},[e._v("Alamat 2")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.address2,expression:"newAddress.address2"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"Jl. Soekarno Hatta RT 04/10"},domProps:{value:e.newAddress.address2},on:{input:function(t){t.target.composing||e.$set(e.newAddress,"address2",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputAddress2"}},[e._v("Detail/Patokan")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.details,expression:"newAddress.details"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress2",placeholder:"Apartment, Blok, Pos Satpam"},domProps:{value:e.newAddress.details},on:{input:function(t){t.target.composing||e.$set(e.newAddress,"details",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputState"}},[e._v("Provinsi")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.state,expression:"newAddress.state"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newAddress,"state",t.target.multiple?r:r[0])},function(t){return e.getCities()}]}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("Pilih Provinsi...")]),e._v(" "),e._l(e.regions.state,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputState"}},[e._v("Kota & Kabupaten")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.city,expression:"newAddress.city"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newAddress,"city",t.target.multiple?r:r[0])},function(t){return e.getDistricts()}]}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("Pilih Kota/kabupaten...")]),e._v(" "),e._l(e.regions.cities.regencies,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputState"}},[e._v("Kecamatan")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.district,expression:"newAddress.district"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newAddress,"district",t.target.multiple?r:r[0])},function(t){return e.getSubDistricts()}]}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("Pilih Kecamatan...")]),e._v(" "),e._l(e.regions.districts.districts,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-8"},[r("label",{attrs:{for:"inputState"}},[e._v("Kelurahan & desa")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.sub_district,expression:"newAddress.sub_district"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newAddress,"sub_district",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("\n                        Pilih Kelurahan/desa...\n                      ")]),e._v(" "),e._l(e.regions.sub_districts.villages,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                        "+e._s(t.name)+"\n                      ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"inputZip"}},[e._v("Kode POS")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.postcode,expression:"newAddress.postcode"}],staticClass:"form-control",attrs:{type:"text",id:"inputZip"},domProps:{value:e.newAddress.postcode},on:{input:function(t){t.target.composing||e.$set(e.newAddress,"postcode",t.target.value)}}})])])])]),e._v(" "),r("div",{staticClass:"card mt-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group mb-0"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress.default,expression:"newAddress.default"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck"},domProps:{checked:Array.isArray(e.newAddress.default)?e._i(e.newAddress.default,null)>-1:e.newAddress.default},on:{change:function(t){var r=e.newAddress.default,n=t.target,d=!!n.checked;if(Array.isArray(r)){var o=e._i(r,null);n.checked?o<0&&e.$set(e.newAddress,"default",r.concat([null])):o>-1&&e.$set(e.newAddress,"default",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.newAddress,"default",d)}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"gridCheck"}},[e._v("\n                      Jadikan Alamat Utama\n                    ")])])])])])])]),e._v(" "),r("div",{staticClass:"modal-footer p-0 border-0"},[e._m(1),e._v(" "),r("div",{staticClass:"col-6 m-0 p-0"},[r("button",{staticClass:"btn btn-danger btn-lg btn-block",attrs:{type:"button"},on:{click:function(t){return e.saveNewAddress()}}},[e._v("\n              Simpan Alamat\n            ")])])])])])]),e._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"modal-edit-address",tabindex:"-1","aria-labelledby":"modal-new-addressLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered"},[r("div",{staticClass:"container modal-content"},[e._m(2),e._v(" "),r("div",{staticClass:"modal-body"},[r("form",{},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[e._v("Informasi Penerimaan Produk")]),e._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"receiver"}},[e._v("Nama Penerima")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.receiver_name,expression:"updateAddress.data.receiver_name"}],staticClass:"form-control",attrs:{type:"text",id:"receiver",placeholder:"Nama Penerima Pesanan"},domProps:{value:e.updateAddress.data.receiver_name},on:{input:function(t){t.target.composing||e.$set(e.updateAddress.data,"receiver_name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone"}},[e._v("Nomor HP")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.phone,expression:"updateAddress.data.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Contoh: 0812"},domProps:{value:e.updateAddress.data.phone},on:{input:function(t){t.target.composing||e.$set(e.updateAddress.data,"phone",t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"card mt-4"},[r("div",{staticClass:"card-header"},[e._v("Alamat Pengiriman Pesanan")]),e._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"label"}},[e._v("Label Alamat")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.label,expression:"updateAddress.data.label"}],staticClass:"form-control",attrs:{type:"text",id:"label",placeholder:"Contoh: Rumah Ibu"},domProps:{value:e.updateAddress.data.label},on:{input:function(t){t.target.composing||e.$set(e.updateAddress.data,"label",t.target.value)}}}),e._v(" "),r("div",{staticClass:"btn-group btn-group-toggle w-100 mt-3",attrs:{"data-toggle":"buttons"}},[r("label",{staticClass:"btn btn-outline-danger active",on:{click:function(t){return e.setLabelAddress("Rumah","update")}}},[r("input",{attrs:{type:"radio",name:"options",id:"option1",checked:""}}),e._v("\n                      Rumah\n                    ")]),e._v(" "),r("label",{staticClass:"btn btn-outline-danger",on:{click:function(t){return e.setLabelAddress("Kantor","update")}}},[r("input",{attrs:{type:"radio",name:"options",id:"option2"}}),e._v("\n                      Kantor\n                    ")]),e._v(" "),r("label",{staticClass:"btn btn-outline-danger",on:{click:function(t){return e.setLabelAddress("Apartment","update")}}},[r("input",{attrs:{type:"radio",name:"options",id:"option3"}}),e._v("\n                      Apartment\n                    ")])])]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputAddress"}},[e._v("Alamat")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.address1,expression:"updateAddress.data.address1"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"Jl. Jenderal Sudirman RT 02/10"},domProps:{value:e.updateAddress.data.address1},on:{input:function(t){t.target.composing||e.$set(e.updateAddress.data,"address1",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputAddress"}},[e._v("Alamat 2")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.address2,expression:"updateAddress.data.address2"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"Jl. Soekarno Hatta RT 04/10"},domProps:{value:e.updateAddress.data.address2},on:{input:function(t){t.target.composing||e.$set(e.updateAddress.data,"address2",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputAddress2"}},[e._v("Detail/Patokan")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.details,expression:"updateAddress.data.details"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress2",placeholder:"Apartment, Blok, Pos Satpam"},domProps:{value:e.updateAddress.data.details},on:{input:function(t){t.target.composing||e.$set(e.updateAddress.data,"details",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputState"}},[e._v("Provinsi")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.state,expression:"updateAddress.data.state"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.updateAddress.data,"state",t.target.multiple?r:r[0])},function(t){return e.getCities("update",e.updateAddress.data.state.id)}]}},[r("option",{attrs:{disabled:""},domProps:{selected:e.regions.state.length<=0}},[e._v("\n                      Pilih Provinsi...\n                    ")]),e._v(" "),e._l(e.regions.state,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputState"}},[e._v("Kota & Kabupaten")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.city,expression:"updateAddress.data.city"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.updateAddress.data,"city",t.target.multiple?r:r[0])},function(t){return e.getDistricts("update",e.updateAddress.data.city.id)}]}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("Pilih Kota/kabupaten...")]),e._v(" "),e._l(e.regions.cities.regencies,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputState"}},[e._v("Kecamatan")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.district,expression:"updateAddress.data.district"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.updateAddress.data,"district",t.target.multiple?r:r[0])},function(t){return e.getSubDistricts("update",e.updateAddress.data.district.id)}]}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("Pilih Kecamatan...")]),e._v(" "),e._l(e.regions.districts.districts,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-8"},[r("label",{attrs:{for:"inputState"}},[e._v("Kelurahan & desa")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.sub_district,expression:"updateAddress.data.sub_district"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.updateAddress.data,"sub_district",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[e._v("\n                        Pilih Kelurahan/desa...\n                      ")]),e._v(" "),e._l(e.regions.sub_districts.villages,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v("\n                        "+e._s(t.name)+"\n                      ")])}))],2)]),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"inputZip"}},[e._v("Kode POS")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.postcode,expression:"updateAddress.data.postcode"}],staticClass:"form-control",attrs:{type:"text",id:"inputZip"},domProps:{value:e.updateAddress.data.postcode},on:{input:function(t){t.target.composing||e.$set(e.updateAddress.data,"postcode",t.target.value)}}})])])])]),e._v(" "),r("div",{staticClass:"card mt-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group mb-0"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.updateAddress.data.default,expression:"updateAddress.data.default"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck"},domProps:{checked:Array.isArray(e.updateAddress.data.default)?e._i(e.updateAddress.data.default,null)>-1:e.updateAddress.data.default},on:{change:function(t){var r=e.updateAddress.data.default,n=t.target,d=!!n.checked;if(Array.isArray(r)){var o=e._i(r,null);n.checked?o<0&&e.$set(e.updateAddress.data,"default",r.concat([null])):o>-1&&e.$set(e.updateAddress.data,"default",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.updateAddress.data,"default",d)}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"gridCheck"}},[e._v("\n                      Jadikan Alamat Utama\n                    ")])])])])])])]),e._v(" "),r("div",{staticClass:"modal-footer p-0 border-0"},[e._m(3),e._v(" "),r("div",{staticClass:"col-6 m-0 p-0"},[r("button",{staticClass:"btn btn-danger btn-lg btn-block",attrs:{type:"button"},on:{click:function(t){return e.updateNewAddress()}}},[e._v("\n              Simpan Alamat\n            ")])])])])])]),e._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"modal-delete-address",tabindex:"-1","aria-labelledby":"modal-new-addressLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered"},[r("div",{staticClass:"container modal-content"},[e._m(4),e._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"text-center"},[e._v("\n            Apakah Anda yakin untuk menghapus\n            "+e._s(e.deleteAddress.data.label?e.deleteAddress.data.label:"alamat")+"? Anda tidak dapat mengembalikan alamat yang sudah dihapus.\n          ")]),e._v(" "),r("div",{staticClass:"justify-content-around mx-auto text-center mt-5"},[r("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal"}},[e._v("\n              batal\n            ")]),e._v(" "),r("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.deleteNewAddress()}}},[e._v("\n              hapus\n            ")])])])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[e._v("Alamat Pengiriman Baru")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-6 m-0 p-0"},[r("button",{staticClass:"btn border-top btn-lg btn-block",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n              Batal\n            ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[e._v("Ubah Alamat Pengiriman")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-6 m-0 p-0"},[r("button",{staticClass:"btn border-top btn-lg btn-block",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n              Batal\n            ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-header justify-content-center"},[r("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("Hapus alamat")])])}],!1,null,"6e6446ee",null);t.default=component.exports;installComponents(component,{ProfilePartialSidebar:r(2280).default})}}]);