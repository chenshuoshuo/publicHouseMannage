webpackJsonp([3],{OsYQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Foau"),n=(a("Ya8g"),a("mw3O")),l=a.n(n),o={data:function(){return{typeName:"",listLoading:!1,color:"#409EFF",total:0,pageSize:5,background:!0,currentPage:0,kk:"#C4EE1D",tableData:[],newtableData:[],dialogFormVisible:!1,currentColor:"",index:""}},methods:{handleEdit:function(t,e){this.currentColor=e.color,this.index=t,this.dialogFormVisible=!0},submmit:function(){var t=this;this.tableData[this.index].color=this.currentColor;var e={color:this.tableData[this.index].color,statusCode:this.tableData[this.index].statusCode};console.log({color:this.tableData[this.index].color,name:this.tableData[this.index].statusName}),e=l.a.stringify(e),console.log(e),Object(i.a)(e).then(function(e){e.status&&t.$message({type:"success",message:"编辑成功"})}),this.dialogFormVisible=!1},initData:function(){var t=this,e={page:this.currentPage,pageSize:this.pageSize};console.log("分页",e),e=l.a.stringify(e),Object(i.d)(e).then(function(e){console.log(e),t.tableData=e.data.data.content,t.total=t.tableData.length})},pre:function(){this.currentPage--,this.newtableData=this.tableData.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage)},next:function(){this.currentPage++,this.newtableData=this.tableData.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage)},search:function(){var t=this,e={text:this.typeName};e=l.a.stringify(e),Object(i.f)(e).then(function(e){t.tableData=e.data.data.content,t.total=t.tableData.length})},handleCurrentChange:function(t){this.currentPage=t,this.initData()}},beforeMount:function(){this.initData()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"inputContain"},[a("label",{attrs:{for:""}},[t._v("状态名称:")]),t._v(" "),a("el-input",{staticClass:"input",staticStyle:{width:"200px"},model:{value:t.typeName,callback:function(e){t.typeName=e},expression:"typeName"}}),t._v(" "),a("el-button",{staticClass:"button",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData,"element-loading-text":"疯狂加载中",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"orderId",label:"序号",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"statusName",label:"状态名称",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"color",label:"颜色",width:"220",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-color-picker",{model:{value:e.row.color,callback:function(a){t.$set(e.row,"color",a)},expression:"scope.row.color"}})]}}])}),t._v(" "),a("el-table-column",{staticClass:"ol",attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑颜色")])]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{attrs:{total:t.total,background:t.background,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{staticClass:"colordialog",attrs:{title:"编辑颜色",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-color-picker",{staticClass:"colorpicker",model:{value:t.currentColor,callback:function(e){t.currentColor=e},expression:"currentColor"}}),t._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.submmit}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,r,!1,function(t){a("u0oI")},"data-v-e95587c4",null);e.default=s.exports},u0oI:function(t,e){}});
//# sourceMappingURL=3.39776fde79e90214b1ff.js.map