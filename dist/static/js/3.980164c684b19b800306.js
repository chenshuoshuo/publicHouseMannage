webpackJsonp([3],{"0LQj":function(t,e){},aKNt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Foau"),n=(a("Ya8g"),a("mw3O")),s=a.n(n),l={data:function(){return{listLoading:!1,tableData:[],newtableData:[],dialogFormVisible:!1,imageUrl:"",index:"",typeName:"",total:0,pageSize:6,background:!0,currentPage:0}},methods:{handleEdit:function(t,e){this.imageUrl=e.icon,this.index=t,this.dialogFormVisible=!0},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},submmit:function(){var t=this;this.tableData[this.index].icon=this.imageUrl;var e={categoryId:this.tableData[this.index].typeCode,icon:this.tableData[this.index].icon};e=s.a.stringify(e),console.log(e),Object(i.b)(e).then(function(e){e.status&&t.$message({type:"success",message:"编辑成功"})}),this.dialogFormVisible=!1},beforeAvatarUpload:function(){},initData:function(){var t=this,e={page:this.currentPage,pageSize:this.pageSize};e=s.a.stringify(e),Object(i.e)(e).then(function(e){console.log(e),t.tableData=e.data.data.content,t.total=t.tableData.length})},pre:function(){this.currentPage--,this.newtableData=this.tableData.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage)},next:function(){this.currentPage++,this.newtableData=this.tableData.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage)},search:function(){var t=this,e={text:this.typeName};e=s.a.stringify(e),Object(i.g)(e).then(function(e){console.log(e),t.tableData=e.data.data.content,t.total=t.tableData.length})},handleCurrentChange:function(t){this.currentPage=t,this.initData()}},beforeMount:function(){this.initData()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"inputContain"},[a("label",{attrs:{for:""}},[t._v("分类名称:")]),t._v(" "),a("el-input",{staticClass:"input",staticStyle:{width:"200px"},model:{value:t.typeName,callback:function(e){t.typeName=e},expression:"typeName"}}),t._v(" "),a("el-button",{staticClass:"button",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData,"element-loading-text":"疯狂加载中",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"orderId",label:"序号",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"typeName",label:"分类名称",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"icon",label:"图标",width:"220",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{size:"small",src:t.row.icon}})]}}])}),t._v(" "),a("el-table-column",{staticClass:"ol",attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑图标")])]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{attrs:{total:t.total,background:t.background,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑图标",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://cmdown.parkbobo.com/cmips1-server/asset/category/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),t._v(" "),a("p",[t._v("只支持jpg.png格式，大小不超过100k")])]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submmit}},[t._v("确定")])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(t){a("0LQj")},"data-v-6f6087ae",null);e.default=o.exports}});
//# sourceMappingURL=3.980164c684b19b800306.js.map