webpackJsonp([2],{"+aWK":function(t,a){},v4Us:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("Dd8w"),i=e.n(l),o={data:function(){return{formData:{actTitle:"",actType:"",campus:"",actDate:"",actPlace:""},dialogTitle:"",actPlace:"",dialogForm:{actTitle:"",actType:"",campus:"",actDate:"",actPlace:""},listLoading:!1,options:[{value:"选项1",label:"晚会"},{value:"选项2",label:"座谈会"},{value:"选项3",label:"欢迎会"}],campus:[{value:"选项1",label:"南校区"},{value:"选项2",label:"北校区"}],dataList:[{actTitle:"校庆晚会",actType:"晚会",campus:"南校区",actDate:"2019-8-12",actPlace:"五教"},{actTitle:"学校运动会",actType:"运动会",campus:"南校区",actDate:"2019-8-12",actPlace:"五教"}],dialogFormVisible:!1}},methods:{noSpace:function(t){return t=t.replace(/\s*/g,"")},add:function(){this.dialogTitle="添加活动",this.dialogForm=this.formData,this.dialogFormVisible=!0},confirmAdd:function(){var t=this.noSpace(this.formData.actTitle),a=i()({},this.formData);this.dataList.push(a),this.$set(this.formData,"actTitle",t),this.dialogFormVisible=!1},handleEdit:function(t,a){this.dialogForm=a,this.dialogTitle="编辑活动",this.dialogFormVisible=!0,console.log(t,a)},handleDelete:function(){}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"filter-container"},[e("label",{staticClass:"filter-title",attrs:{for:""}},[t._v("活动主题:")]),t._v(" "),e("el-input",{staticClass:"filter-item filter-input",staticStyle:{width:"120px"},attrs:{placeholder:"活动主题"},model:{value:t.formData.actTitle,callback:function(a){t.$set(t.formData,"actTitle",a)},expression:"formData.actTitle"}}),t._v(" "),e("label",{staticClass:"filter-title",attrs:{for:""}},[t._v("活动分类:")]),t._v(" "),e("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"选择分类"},model:{value:t.formData.actType,callback:function(a){t.$set(t.formData,"actType",a)},expression:"formData.actType"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.label}})}),1),t._v(" "),e("label",{staticClass:"filter-title",attrs:{for:""}},[t._v("所属校区:")]),t._v(" "),e("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"选择校区"},model:{value:t.formData.campus,callback:function(a){t.$set(t.formData,"campus",a)},expression:"formData.campus"}},t._l(t.campus,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.label}})}),1),t._v(" "),e("label",{staticClass:"filter-title",attrs:{for:""}},[t._v("活动日期:")]),t._v(" "),e("el-date-picker",{staticStyle:{width:"180px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.formData.actDate,callback:function(a){t.$set(t.formData,"actDate",a)},expression:"formData.actDate"}}),t._v(" "),e("el-button",{staticClass:"button",attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")]),t._v(" "),e("el-button",{staticClass:"button",attrs:{type:"success",icon:"el-icon-edit"},on:{click:t.add}},[t._v("添加")]),t._v(" "),e("el-button",{staticClass:"button",attrs:{type:"danger",icon:"el-icon-delete"}},[t._v("删除")])],1),t._v(" "),e("div",{staticClass:"loadoperate",staticStyle:{display:"flex"}},[e("el-button",{attrs:{type:"warning",icon:"el-icon-upload2"}},[t._v("导出EXCELL")]),t._v(" "),e("el-button",{staticClass:"white",staticStyle:{background:"#44BEEB"},attrs:{icon:"el-icon-upload"}},[t._v("下载导入模板")]),t._v(" "),e("el-button",{staticClass:"white",staticStyle:{background:"#51D4D2"},attrs:{icon:"el-icon-download"}},[t._v("批量导入")])],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.dataList,"element-loading-text":"疯狂加载中",border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"actTitle",label:"活动主题",width:"120",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"actType",label:"分类",width:"120",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"actDate",label:"活动日期",width:"120",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"actPlace",label:"活动地点",width:"120",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"campus",label:"所属校区",width:"120",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"campus",label:"操作",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleEdit(a.$index,a.row)}}},[t._v("编辑")]),t._v(" "),e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(a.$index,a.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),e("div",{staticClass:"page-container"},[e("el-pagination")],1),t._v(" "),e("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(a){t.dialogFormVisible=a}}},[e("el-form",{attrs:{model:t.dialogForm}},[e("el-form-item",{attrs:{label:"活动主题","label-width":"70px"}},[e("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off"},model:{value:t.dialogForm.actTitle,callback:function(a){t.$set(t.dialogForm,"actTitle",a)},expression:"dialogForm.actTitle"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"活动地点","label-width":"70px"}},[e("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off"},model:{value:t.dialogForm.actPlace,callback:function(a){t.$set(t.dialogForm,"actPlace",a)},expression:"dialogForm.actPlace"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"活动分类"}},[e("el-select",{attrs:{placeholder:"请选择活动分类"},model:{value:t.dialogForm.actType,callback:function(a){t.$set(t.dialogForm,"actType",a)},expression:"dialogForm.actType"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),e("el-form-item",{attrs:{label:"所属校区"}},[e("el-select",{attrs:{placeholder:"请选择校区"},model:{value:t.dialogForm.campus,callback:function(a){t.$set(t.dialogForm,"campus",a)},expression:"dialogForm.campus"}},t._l(t.campus,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),e("el-form-item",{attrs:{label:"活动时间"}},[e("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dialogForm.actDate,callback:function(a){t.$set(t.dialogForm,"actDate",a)},expression:"dialogForm.actDate"}})],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.confirmAdd}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var s=e("VU/8")(o,c,!1,function(t){e("+aWK")},"data-v-98910716",null);a.default=s.exports}});
//# sourceMappingURL=2.259c5bdf47827e51eacb.js.map