import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Noauth from '@/views/Noauth'
import store from '../store'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/typeMannage'

  },
  {path: '/403',
    component: Noauth

  },
  {
    path: '/typeMannage',
    component: Layout,
    redirect: '/typeMannage/houseType',
    name: 'typeMannage',
    meta: {
      title: 'typeMannage',
      icon: 'example'
    },
    children: [
      { path: 'houseType', name: 'houseType', component: () => import('@/views/typeMannage/houseType'), meta: { title: 'houseType', icon: 'component'}},
      { path: 'houseState', name: 'houseState', component: () => import('@/views/typeMannage/houseState'), meta: { title: 'houseState', icon: 'component'}}

    ]
  },
  {
    path: '/systemSetting',
    component: Layout,
    name: 'systemSetting',
    alwaysShow: true,
    redirect: '/systemSetting/mapSetting',
    meta: {
      title: 'systemSetting',
      icon: 'example'
    },
    children: [
      {path: 'mapSetting', name: 'mapSetting', component: () => import('@/views/systemSetting/mapSetting'), meta: { title: 'mapSetting', icon: 'component'}}
    ]

  }

]

export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export function getConstantRouterMap () {
  return constantRouterMap
  // return constantRouterMap
}
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // routes: store.getters.permission_routes
  routes: constantRouterMap
})
