webpackJsonp([1],{SZpN:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("oDqC"),a={name:"icons",data:function(){return{iconsMap:[]}},mounted:function(){var t=s.default.state.iconsMap.map(function(t){return t.default.id.split("-")[1]});this.iconsMap=t},methods:{generateIconCode:function(t){return'<svg-icon icon-class="'+t+'" />'}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"icons-container"},[t._m(0),t._v(" "),e("div",{staticClass:"icons-wrapper"},t._l(t.iconsMap,function(n){return e("div",{key:n,on:{click:function(e){t.handleClipboard(t.generateIconCode(n),e)}}},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n          "+t._s(t.generateIconCode(n))+"\n        ")]),t._v(" "),e("div",{staticClass:"icon-item"},[e("svg-icon",{attrs:{"class-name":"disabled","icon-class":n}}),t._v(" "),e("span",[t._v(t._s(n))])],1)])],1)}),0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"warn-content"},[n("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/#/icon",target:"_blank"}},[this._v("Add and use\n    ")])])}]};var o=e("VU/8")(a,i,!1,function(t){e("r+os")},"data-v-207f0e1e",null);n.default=o.exports},"r+os":function(t,n){}});
//# sourceMappingURL=1.cbc3f721f28280b70327.js.map