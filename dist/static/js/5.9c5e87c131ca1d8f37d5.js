webpackJsonp([5],{wkh7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{total:{type:Number},pageSize:{type:Number}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},data:function(){return{background:!0}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&scrollTo(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&scrollTo(0,800)}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-pagination",{attrs:{background:this.background,total:this.total,"page-size":this.pageSize},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)},staticRenderFns:[]};var r=i("VU/8")(n,a,!1,function(t){i("wvvU")},"data-v-44547372",null);e.default=r.exports},wvvU:function(t,e){}});
//# sourceMappingURL=5.9c5e87c131ca1d8f37d5.js.map