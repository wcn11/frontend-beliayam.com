(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{2272:function(t,e,o){"use strict";var r=o(6),c=o(2),n=o(7),d=o(55),l=o(381),m=o(380),f=o(8),h=c.RangeError,v=c.String,_=Math.floor,D=n(m),x=n("".slice),y=n(1..toFixed),P=function(t,e,o){return 0===e?o:e%2==1?P(t,e-1,o*t):P(t*t,e/2,o)},C=function(data,t,e){for(var o=-1,r=e;++o<6;)r+=t*data[o],data[o]=r%1e7,r=_(r/1e7)},w=function(data,t){for(var e=6,o=0;--e>=0;)o+=data[e],data[e]=_(o/t),o=o%t*1e7},k=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+D("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!f((function(){y({})}))},{toFixed:function(t){var e,o,r,c,n=l(this),m=d(t),data=[0,0,0,0,0,0],f="",_="0";if(m<0||m>20)throw h("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return v(n);if(n<0&&(f="-",n=-n),n>1e-21)if(o=(e=function(t){for(var e=0,o=t;o>=4096;)e+=12,o/=4096;for(;o>=2;)e+=1,o/=2;return e}(n*P(2,69,1))-69)<0?n*P(2,-e,1):n/P(2,e,1),o*=4503599627370496,(e=52-e)>0){for(C(data,0,o),r=m;r>=7;)C(data,1e7,0),r-=7;for(C(data,P(10,r,1),0),r=e-1;r>=23;)w(data,1<<23),r-=23;w(data,1<<r),C(data,1,1),w(data,2),_=k(data)}else C(data,0,o),C(data,1<<-e,0),_=k(data)+D("0",m);return _=m>0?f+((c=_.length)<=m?"0."+D("0",m-c)+_:x(_,0,c-m)+"."+x(_,c-m)):f+_}})},2290:function(t,e,o){var content=o(2319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("46c6d606",content,!0,{sourceMap:!1})},2318:function(t,e,o){"use strict";o(2290)},2319:function(t,e,o){var r=o(21)(!1);r.push([t.i,".text-weight[data-v-03caac00]{color:#ff680d;font-size:12px}.member-plan[data-v-03caac00]{padding:10px}.badge-discount[data-v-03caac00]{color:#f1e5dd;background-color:#bf4d09;box-shadow:0 0 2px 0 #000}.title-product[data-v-03caac00]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:calc(45% + 10px)}.related-products-empty[data-v-03caac00]{font-size:24px}.item-img[data-v-03caac00]{max-height:150px;border-radius:6px}",""]),t.exports=r},2369:function(t,e,o){"use strict";o.r(e);o(26),o(14),o(2272);var r=o(0),c=o.n(r);c.a.locale("id-ID");var n={name:"Index",props:["products","currentProduct"],data:function(){return{baseApi:"https://be-dev.beliayam.com",baseURL:"https://fe-dev.beliayam.com"}},methods:{getPriceLabel:function(t){var e=t,o=e.price,r=c()().format();if(e.hasPromo&&e.hasPromo.isActive&&e.hasPromo.promoStart<r&&e.hasPromo.promoEnd>r)if("percent"===e.hasPromo.promoBy){var n=e.hasPromo.promoValue/100*e.price;o=e.price-n}else o="price"===e.promoBy?e.price-e.hasPromo.promoValue:e.price;else{if(!(e.hasDiscount&&e.hasDiscount.isDiscount&&e.hasDiscount.discountStart<r&&e.hasDiscount.discountEnd>r))return o;if("percent"===e.hasDiscount.discountBy){var d=e.hasDiscount.discount/100*e.price;o=e.price-d}else o="price"===e.hasDiscount.discountBy?e.price-e.hasDiscount.discount:e.price}return o},getPriceBadge:function(t){var e=t,o=0,r=c()().format();if(e.hasPromo&&e.hasPromo.promoStart<r&&e.hasPromo.promoEnd>r)o="percent"===e.hasPromo.promoBy?e.hasPromo.promoValue:"price"===e.hasPromo.promoBy?e.hasPromo.discount/e.price*100:0;else{if(!(e.hasDiscount&&e.hasDiscount.isDiscount&&e.hasDiscount.discountStart<r&&e.hasDiscount.discountEnd>r))return o;o="percent"===e.hasDiscount.discountBy?e.hasDiscount.discount:"price"===e.hasDiscount.discountBy?e.hasDiscount.discount/e.price*100:e.price}return o}},computed:{filterProduct:function(){var t=this,e=[];return this.products&&this.products.products&&this.products.products.length>0&&this.currentProduct?this.products.products.filter((function(e){return e._id!==t.currentProduct._id&&e})):e}},filters:{formatDate:function(t){return c()(t).format("DD-MM-yyyy, HH:mm")},formatMoney:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)},setSquareDecimal:function(t){return t.toFixed(2)}}},d=(o(2318),o(16)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pick_today"},[o("h5",{staticClass:"mt-3 mb-3"},[t._v("Produk Terkait")]),t._v(" "),t.products&&t.products.products?o("div",{staticClass:"row"},t._l(t.filterProduct,(function(e){return o("div",{key:e._id,staticClass:"col-6 col-md-3 mb-3"},[o("div",{staticClass:"\n          list-card\n          bg-white\n          h-100\n          rounded\n          overflow-hidden\n          position-relative\n          shadow-sm\n        "},[o("div",{staticClass:"list-card-image"},[o("NuxtLink",{staticClass:"text-dark",attrs:{to:e.slug}},[e.stock<=0?o("div",{staticClass:"member-plan position-absolute"},[o("span",{staticClass:"badge m-3 badge-danger-out-of-stock"},[t._v("\n                Kehabisan Persediaan\n              ")])]):t._e(),t._v(" "),e.hasPromo?o("div",{staticClass:"member-plan position-absolute"},[o("span",{staticClass:"badge badge-success badge-discount"},[t._v("\n                #"+t._s(e.hasPromo.tags)+"\n              ")])]):!e.hasPromo&&e.hasDiscount&&e.hasDiscount.isDiscount?o("div",{staticClass:"member-plan position-absolute"},["percent"===e.hasDiscount.discountBy?o("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon "+t._s(e.hasDiscount.discount)+"%")]):o("span",{staticClass:"badge badge-danger badge-discount"},[t._v("Diskon\n                "+t._s(t._f("setSquareDecimal")(e.hasDiscount.discount/e.price*100))+"%")])]):t._e(),t._v(" "),o("div",{staticClass:"p-3"},[e.image?o("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseApi+"/"+e.image}}):o("img",{staticClass:"img-fluid item-img w-100 mb-3",attrs:{src:t.baseURL+"/default/product.jpg"}}),t._v(" "),o("h6",{staticClass:"title-product"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),o("h6",{staticClass:"price m-0 text-weight"},[o("i",{staticClass:"fas fa-weight"}),t._v(" 1 Ekor/ "+t._s(e.weight)+"Kg\n              ")]),t._v(" "),o("div",{staticClass:"pt-4 text-right"},[t.getPriceBadge(e)>0?o("del",{staticClass:"ml-2 text-danger"},[t._v(t._s(t._f("formatMoney")(e.price)))]):t._e(),t._v(" "),o("span",{staticClass:"price m-0 text-dark",staticStyle:{"font-size":"large","text-align":"right"}},[t._v("\n                  "+t._s(t._f("formatMoney")(t.getPriceLabel(e)))+"\n                ")])]),t._v(" "),o("div",{staticStyle:{"text-align":"center","padding-top":"5%"}},[o("h6",{staticClass:"btn btn-success w-100"},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Tambahkan\n                ")])])])])],1)])])})),0):o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-12 mb-3 text-muted related-products-empty"},[t._v("\n      Belum ada produk terkait\n    ")])])])}),[],!1,null,"03caac00",null);e.default=component.exports}}]);