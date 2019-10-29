import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Noauth from '@/views/Noauth'
import store from '../store'


Vue.use(Router)

export const constantRouterMap = [
  {
    path:'/',
    component:Layout,
    redirect:'/typeMannage',

  },
  {path:'/403',
  component:Noauth,

  },
  // {
  //   path: '/typeMannage',
  //   component: Layout,
  //   redirect: '/typeMannage/houseType',
  //   name:'typeMannage',
  //   meta:{
  //     title:'typeMannage',
  //     icon:'example'
  //   },
  //   children: [
  //     { path: 'houseType', name: 'houseType',component:()=>import ('@/views/typeMannage/houseType'), meta: { title: 'houseType',icon: 'table'}},
  //     { path: 'houseState', name: 'houseState',component:()=>import ('@/views/typeMannage/houseState'), meta: { title: 'houseState',icon: 'table'}},
      
  //   ]
  // },
  // {
  //   path:'/systemSetting',
  //   component:Layout,
  //   name:'systemSetting',
  //   redirect:'/systemSetting/mapSetting',
  //   meta:{
  //     title:'systemSetting',
  //     icon:'example'
  //   },
  //   children:[
  //     {path:'mapSetting',name:'mapSetting',component:()=>import ('@/views/systemSetting/mapSetting'), meta: { title: 'mapSetting',icon: 'table'}}
  //   ]
    
    
  // }
  
  
]
export function getConstantRouterMap(){
    return store.getters.permission_routes;
}
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // routes: store.getters.permission_routes
     routes:constantRouterMap
})

