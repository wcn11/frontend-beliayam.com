(window.webpackJsonp=window.webpackJsonp||[]).push([[47,23],{2286:function(t,e,n){var content=n(2304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("199a6b22",content,!0,{sourceMap:!1})},2303:function(t,e,n){"use strict";n(2286)},2304:function(t,e,n){var r=n(22),o=n(140),c=n(2305),d=r(!1),l=o(c);d.push([t.i,".btn-pay[data-v-75f34212]{background-color:#cf430f}.bill-expired[data-v-75f34212]{-webkit-animation:blinker-data-v-75f34212 1s linear infinite;animation:blinker-data-v-75f34212 1s linear infinite;color:red}@-webkit-keyframes blinker-data-v-75f34212{50%{opacity:0}}@keyframes blinker-data-v-75f34212{50%{opacity:0}}.bg-success-order[data-v-75f34212]{background:url("+l+");background-repeat:no-repeat;background-position:bottom;background-size:contain}.va-container[data-v-75f34212]{border:3px solid #c5c5c5;border-radius:6px}",""]),t.exports=d},2305:function(t,e,n){t.exports=n.p+"img/background-footer.2c760d3.png"},2348:function(t,e,n){var content=n(2418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6abd762e",content,!0,{sourceMap:!1})},2366:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(42),n(57),n(76),n(0));n.n(o).a.locale("id-ID");var c={name:"Checkout",data:function(){return{order:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$route.query.order_id){e.next=4;break}return t.$toast.error("Pesanan tidak ditemukan"),t.$router.push("/"),e.abrupt("return");case 4:return n=t.$route.query.order_id,e.next=7,t.$axios.get("".concat("https://main-v1.beliayam.com/api/v1","/order/").concat(n)).then((function(e){t.order=e.data.data})).catch((function(t){console.error(t)}));case 7:t.order&&t.order.payment&&1!==t.order.payment.payment_status_code&&t.$router.push("/akun/pesanan-saya/order?trx_id=".concat(t.order.order_id));case 8:case"end":return e.stop()}}),e)})))()},methods:{formatDateToCountDown:function(t){var e=new Date(t).getTime(),n=setInterval((function(){var t=(new Date).getTime(),r=e-t,o=Math.floor(r/864e5),c=Math.floor(r%864e5/36e5),d=Math.floor(r%36e5/6e4),l=Math.floor(r%6e4/1e3);document.getElementById("countDown").innerHTML=o+"hari "+c+"jam "+d+"menit "+l+"detik ",r<0&&(clearInterval(n),document.getElementById("demo").innerHTML="EXPIRED")}),1e3)}}},d=(n(2303),n(17)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"row d-flex justify-content-center bg-success-order"},[n("div",{staticClass:"col-md-6"},[t._m(1),t._v(" "),t.order&&t.order.bill?n("div",{staticClass:"bg-white rounded p-3 m-5 text-center"},["cash"!==t.order.payment.pg_type?n("div"):t._e(),t._v(" "),n("h6",{staticClass:"font-weight-bold mb-2"},[t._v("Batas Akhir Pembayaran")]),t._v(" "),n("h5",{staticClass:"bill-expired"},[t._v("\n          "+t._s(t._f("formatDate")(t.order.bill.bill_expired))+"\n        ")]),t._v(" "),n("div",[n("div",["cash"!==t.order.payment.pg_type?n("div",{staticClass:"p-2 va-container"},[n("span",[t._v("Kode Virtual "+t._s(t.order.payment.pg_name)+" Anda")]),t._v(" "),n("h4",{staticClass:"mt-4 mb-4 font-weight-bolder"},[t.order.payment.pg_icon?n("img",{staticClass:"img-thumbnail img-responsive",attrs:{src:t.order.payment.pg_icon}}):t._e(),t._v("\n                "+t._s(t.order.response.trx_id)+"\n              ")]),t._v(" "),n("a",{staticClass:"btn btn-outline-secondary ",attrs:{href:t.order.response.redirect_url,target:"_blank"}},[n("i",{staticClass:"fad fa-file-invoice"}),t._v(" \n\n                Bayar Dengan \n                "),t.order.payment.pg_icon?n("img",{staticClass:"img-thumbnail img-responsive",attrs:{src:t.order.payment.pg_icon}}):n("span",[t._v(t._s(t.order.payment.pg_name))])])]):t._e()])]),t._v(" "),n("p",{staticClass:"small text-mutedm mt-2"},[t._v("\n          Pesanan anda akan disiapkan dan akan segera datang\n        ")]),t._v(" "),n("hr",{staticClass:"w-50 mt-5"}),t._v(" "),n("div",{staticClass:"mt-4"},[n("h6",[n("span",{staticClass:"text-muted"},[t._v("Kode pesanan: #")]),t._v(t._s(t.order.order_id)+"\n          ")]),t._v(" "),t._m(2)]),t._v(" "),n("div",[n("h6",[t._v("Total Pembayaran")]),t._v(" "),n("h5",[t._v(t._s(t._f("formatMoney")(t.order.bill.bill_total)))])]),t._v(" "),n("NuxtLink",{staticClass:"btn rounded btn-warning btn-lg btn-block",attrs:{to:"/akun/pesanan-saya/order?trx_id="+t.order.order_id}},[t._v("Lihat Pesanan Saya")]),t._v(" "),t._m(3)],1):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"breadcrumb mb-0",attrs:{"aria-label":"breadcrumb"}},[n("div",{staticClass:"container text-center"},[t._v("\n      🎉 Pesanan Anda Sedang Kami Proses 🎉\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5 text-center"},[n("i",{staticClass:"fad fa-check-circle display-1 text-success"}),t._v(" "),n("h1",{staticClass:"text-dark font-weight-bold"},[t._v("\n          Pesanan Berhasil Dilakukan\n        ")]),t._v(" "),n("p",{staticClass:"text-dark"},[t._v("\n          Cek status pemesanan anda di\n          "),n("a",{staticClass:"font-weight-bold text-decoration-none text-dark",attrs:{href:"/akun/pesanan-saya"}},[t._v("Pesanan Saya")]),t._v("\n          untuk informasi lebih lanjut.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-danger font-italic"},[n("i",{staticClass:"fad fa-info-circle"}),t._v(" Kode pesanan bukan kode Virtual\n            Akun!\n          ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("p",{staticClass:"text-muted font-italic"},[t._v("\n            Muat ulang halaman jika status pembayaran belum berubah\n          ")])])}],!1,null,"75f34212",null);e.default=component.exports},2417:function(t,e,n){"use strict";n(2348)},2418:function(t,e,n){var r=n(22)(!1);r.push([t.i,".margin-bottom-10[data-v-0baaf83f]{margin-bottom:10px}",""]),t.exports=r},2476:function(t,e,n){"use strict";n.r(e);var r={name:"PageCheckoutSukses",head:{title:"Pesanan Berhasil",htmlAttrs:{lang:"en",script:[{src:"~/static/js/countdown.min.js"}]}},mounted:function(){document.getElementById("page-checkout-success").classList.add("animate__fadeInRight")},beforeDestroy:function(){document.getElementById("page-checkout-success").classList.add("animate__fadeOutLeft")}},o=(n(2417),n(17)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animate__animated",attrs:{id:"page-checkout-success"}},[e("CheckoutSuccess")],1)}),[],!1,null,"0baaf83f",null);e.default=component.exports;installComponents(component,{CheckoutSuccess:n(2366).default})}}]);