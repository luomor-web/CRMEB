(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/swiperBg"],{"7ffb":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("1df3"),n=t.getSystemInfoSync().statusBarHeight+"px",r=getApp(),s={name:"swiperBg",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(e,i){var a=this;e&&(this.imgUrls=e.imgList?e.imgList.list:[],this.isShow=!e.isShow||e.isShow.val,t.getImageInfo({src:this.imgUrls.length?this.imgUrls[0].img:"",success:function(t){t&&t.height>0?a.$set(a,"imageH",t.height/t.width*690):a.$set(a,"imageH",320)},fail:function(t){a.$set(a,"imageH",320)}}))}},imageH:function(t,e){}},data:function(){return{indicatorDots:!1,circular:!0,autoplay:!0,interval:4e3,duration:500,imgUrls:[],name:this.$options.name,isIframe:!1,mt:-55,isShow:!0,imageH:320,swiperCur:0}},created:function(){var e=t.getSystemInfoSync(),i=e.platform;this.statusBarHeight=e.statusBarHeight,this.mt="android"===i?2*parseFloat(n)+170:2*parseFloat(n)+168,this.isIframe=r.globalData.isIframe},mounted:function(){},methods:{goDetail:function(e){(0,a.goPage)().then((function(i){var a=e.info[1].value;a&&(-1!=a.indexOf("http")||(-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(a)?t.navigateTo({url:a}):t.switchTab({url:a,fail:function(){t.reLaunch({url:a})}})))}))},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},swiperChange:function(t){var e=t.detail,i=(e.current,e.source);"autoplay"!==i&&"touch"!==i||(this.swiperCur=t.detail.current)}}};e.default=s}).call(this,i("543d")["default"])},"995c":function(t,e,i){"use strict";i.r(e);var a=i("7ffb"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},aa3d:function(t,e,i){"use strict";i.r(e);var a=i("b520"),n=i("995c");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("e857");var s,o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=u.exports},b520:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,!t.isIframe||t.imgUrls.length&&t.imageH?null:t.$t("暂无图片，请上传图片"));t.$mp.data=Object.assign({},{$root:{m0:i}})},r=[]},c1dc:function(t,e,i){},e857:function(t,e,i){"use strict";var a=i("c1dc"),n=i.n(a);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/swiperBg-create-component',
    {
        'pages/index/visualization/components/swiperBg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("aa3d"))
        })
    },
    [['pages/index/visualization/components/swiperBg-create-component']]
]);
