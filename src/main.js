// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vue from "vue/dist/vue.common.js";
import App from './App'
import router from './router'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import Element from 'element-ui'
import Cookies from 'js-cookie';
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import i18n from './lang' // Internationalization
import './icons' // icon
import store from './store'
import './permission.js'

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
