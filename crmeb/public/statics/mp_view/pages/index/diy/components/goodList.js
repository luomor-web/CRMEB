(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/goodList"],{"332b":function(t,o,i){"use strict";var e;i.d(o,"b",(function(){return n})),i.d(o,"c",(function(){return a})),i.d(o,"a",(function(){return e}));var n=function(){var t=this,o=t.$createElement;t._self._c},a=[]},"752d":function(t,o,i){"use strict";i.r(o);var e=i("332b"),n=i("f1da");for(var a in n)"default"!==a&&function(t){i.d(o,t,(function(){return n[t]}))}(a);i("a4c0");var s,r=i("f0c5"),f=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);o["default"]=f.exports},"773e":function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i("5019"),n={name:"goodList",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{tempArr:[],mbConfig:this.dataConfig.mbConfig.val,numConfig:this.dataConfig.numConfig.val,themeColor:this.dataConfig.themeColor.color[0].item,itemStyle:this.dataConfig.itemStyle.type,sortType:this.dataConfig.goodsSort.type,type:this.dataConfig.tabConfig.tabVal||0,selectId:this.dataConfig.selectConfig.activeValue,productIds:this.dataConfig.goodsList.ids||[],opriceShow:this.dataConfig.opriceShow.val,priceShow:this.dataConfig.priceShow.val,titleShow:this.dataConfig.titleShow.val,couponShow:this.dataConfig.couponShow.val,prConfig:this.dataConfig.prConfig.val,bgStyle:this.dataConfig.bgStyle.type,conStyle:this.dataConfig.conStyle.type,fontColor:this.dataConfig.fontColor.color[0].item,labelColor:this.dataConfig.labelColor.color[0].item}},created:function(){},mounted:function(){this.productslist()},methods:{productslist:function(){var t=this,o=(this.$config.LIMIT,{});o=1==this.type?{ids:this.productIds.join(",")}:{priceOrder:2==this.sortType?"desc":"",salesOrder:1==this.sortType?"desc":"",selectId:this.selectId[this.selectId.length-1]||0,limit:this.numConfig},(0,e.getProductslist)(o).then((function(o){t.tempArr=o.data}))},goDetail:function(t){this.$emit("detail",t)}}};o.default=n},a4c0:function(t,o,i){"use strict";var e=i("a7ff"),n=i.n(e);n.a},a7ff:function(t,o,i){},f1da:function(t,o,i){"use strict";i.r(o);var e=i("773e"),n=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(o,t,(function(){return e[t]}))}(a);o["default"]=n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/goodList-create-component',
    {
        'pages/index/diy/components/goodList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("752d"))
        })
    },
    [['pages/index/diy/components/goodList-create-component']]
]);