webpackJsonp([6],{FjK4:function(t,e){},c2pg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Gu7T"),s=a.n(n),i=a("Xxa5"),c=a.n(i),o=a("exGp"),r=a.n(o),l=a("Foau"),u=(a("Ya8g"),a("mtWM"),a("mw3O")),h=a.n(u),d={data:function(){return{activeName:"分类一",checkList:[],tabList:[],boxList:[],isnoSetting:[]}},methods:{handleClick:function(){},initData:function(){var t=this;return r()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.e)().then(function(e){t.tabList=e.data.data.content,console.log(t.tabList)});case 2:t.tabList.forEach(function(e){console.log("jojo"),Object(l.c)(e.typeCode).then(function(e){console.log(e.data.data),t.boxList.push(e.data.data),0==e.data.data.length?t.isnoSetting.push(!0):(t.isnoSetting.push(!1),t.checkList.push([]))})});case 3:case"end":return e.stop()}},e,t)}))()},submit:function(){var t=this;if(this.checkList.every(function(t){return 0!==t.length})){for(var e=[],a=0;a<this.tabList.length;a++){var n={};n.categoryId=this.tabList[a].typeCode,n.attrCode=[],n.attrCode=[].concat(s()(this.checkList[a])),e.push(n)}e=h.a.stringify(e),console.log(e),Object(l.h)(e).then(function(e){console.log(e),e?t.$message({type:"success",message:"提交成功"}):t.$message({type:"warning",message:"网络错误"})})}else this.$message({type:"warning",message:"各类公房的地图配置不能为空，请核对"})}},beforeMount:function(){this.initData()}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{position:"relative"}},[a("h1",[t._v("地图显示的房间配置信息字段")]),t._v(" "),a("p",[t._v("选中的信息字段会在地图上直接显示，所选字段不超过三个")]),t._v(" "),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1),t._v(" "),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabList,function(e,n){return a("el-tab-pane",{key:e.orderId,attrs:{label:e.typeName,name:e.typeName}},[t.isnoSetting[n]?a("p",[t._v("该公房分类下还没有配置信息字段，请在'公房分类管理'中配置后，设置地图显示字段")]):t._e(),t._v(" "),a("el-checkbox-group",{staticStyle:{display:"flex  flex-wrap:wrap"},attrs:{max:3},model:{value:t.checkList[n],callback:function(e){t.$set(t.checkList,n,e)},expression:"checkList[index]"}},t._l(t.boxList[n],function(e,n){return a("el-checkbox",{key:n,staticClass:"el-checkbox",staticStyle:{width:"220px"},attrs:{label:e.attrcode}},[t._v(t._s(e.attrname))])}),1)],1)}),1)],1)},staticRenderFns:[]};var f=a("VU/8")(d,p,!1,function(t){a("FjK4")},"data-v-0d53d72f",null);e.default=f.exports}});
//# sourceMappingURL=6.26025b527d89bb9ebcdd.js.map