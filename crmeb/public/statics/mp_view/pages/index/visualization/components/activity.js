(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/activity"],{"038f":function(t,a,n){"use strict";n.r(a);var i=n("72ed"),e=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(a,t,(function(){return i[t]}))}(c);a["default"]=e.a},"72ed":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n("1754"),e=getApp(),c={name:"activity",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,a){if(t){var n=JSON.parse(JSON.stringify(t.imgList.list));this.activityOne=t.imgList.list[0],n.splice(0,1),this.activity=n,this.isShow=t.isShow.val}}}},data:function(){return{activity:[],activityOne:{},name:this.$options.name,isShow:!0,isIframe:e.globalData.isIframe}},created:function(){},methods:{gopage:function(a){(0,i.goPage)().then((function(n){-1!=a.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(a),t.navigateTo({url:a}))}))}}};a.default=c}).call(this,n("543d")["default"])},"828c":function(t,a,n){},a295:function(t,a,n){"use strict";n.r(a);var i=n("a2f3"),e=n("038f");for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);n("cab2");var o,r=n("f0c5"),u=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);a["default"]=u.exports},a2f3:function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return i}));var e=function(){var t=this,a=t.$createElement;t._self._c},c=[]},cab2:function(t,a,n){"use strict";var i=n("828c"),e=n.n(i);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/activity-create-component',
    {
        'pages/index/visualization/components/activity-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a295"))
        })
    },
    [['pages/index/visualization/components/activity-create-component']]
]);