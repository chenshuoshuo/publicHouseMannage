import router from './router/index'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css'// progress bar style
import store from './store'
import { getToken, getRefresh, getExpirationDate, autoGetToken, setToken, removeRefresh, removeToken } from './auth' // getToken from cookie
import {getNav} from '@/api/user'
import { refreshToken, casBind } from './mylogin'
import { getUserInfo } from '@/api/user'
import { Message } from 'element-ui'
import axios from 'axios'

// NProgress.configure({ showSpinner: false })// NProgress Configuration

const whiteList = ['/mylogin', '/myregister' ]// no redirect whitelist
// const whiteList = []

router.beforeEach(async (to, from, next) => {
  // NProgress.start() // start progress bar

  if (getToken()) { // determine if there has token
    // getNav().then((res)=>{
    //   console.log('路由',res);
    // });
    // getUserInfo(btoa('*')).then((res)=>{
    //     console.log("用户信息",res);
    // })

    /* has token */
    // if (store.getters.addRouters.length > 0)
    if (store.getters.permission_routes && store.getters.permission_routes.length > 0) {
      next()
    } else {
      // getUserInfo(btoa('*')).then(res => {
      //   if (res.data.code === 0) {
      //     if (!res.data.data.admin) {

      //       next('/40111111')
      //     } else {
      //       const roles = res.data.data.authorities.filter(item => item.type === 'm7722_menu');
      //       console.log(roles);

      //       window.cmccr_userId = res.data.data.userId
      //       // store.dispatch('GenerateRoutes', roles).then(() => { // 根据roles权限生成可访问的路由表
      //       //   store.dispatch('SaveUser', res.data.data)
      //       //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
      //       //   next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      //       // })
      //     }
      //   } else {

      //     next('/401111')
      //   }
      // }).catch(() => {
      //   console.log(4011111);
      //   next('/40111111111')
      // }).finally(() => {
      //   router.addRoutes([{ path: '*', redirect: '/404', hidden: true }])
      // })
      // ........
      const accessRoutes = await store.dispatch('getInfo') // ('user/getinfo');
      console.log('accessroute', accessRoutes)
      router.addRoutes(accessRoutes)
      next({ ...to, replace: true })
      // 保存路由
      // store.dispatch('SaveRoutes',accessRoutes);
      console.log('完整', store.getters.permission_routes)
    }
    if (to.path === '/mylogin') {
      console.log('jotaru')
      next({ path: '/' })
      // NProgress.done()
    } else {
      console.log('notoken')
      next()
    }
  } else {
    if (getRefresh()) { // 如果有更新token
      refreshToken(getRefresh()).then(res => {
        setToken(res.data.access_token, res.data.expires_in)
        autoGetToken(getRefresh())
        next({ ...to, replace: true })
      }).catch(() => {
        removeRefresh()
        removeToken()
        next({ ...to, replace: true })
      })
    } else {
      console.log('zzz')
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        console.log('tppath', to.path)
        next()
      } else {
        if (window.g.CAS_URL) { // 如果有单点登录路径
          console.log('单点登录')
          var service = window.location.origin + window.location.pathname
          if (window.g.CAS_URL && !window.location.search) {
            window.location.href = window.g.CAS_URL + '/login?service=' + service
          } else {
            axios.get(`${window.g.CAS_URL}/proxyValidate?ticket=${window.location.search.split('=')[1]}&service=${service}`).then(res => {
              var parser = new DOMParser()
              var xmlDoc = parser.parseFromString(res.data, 'text/xml')
              const username = xmlDoc.getElementsByTagName('cas:user')[0]
                ? xmlDoc.getElementsByTagName('cas:user')[0].innerHTML
                : null
              if (username) {
                casBind(window.location.search.split('=')[1], username).then(res => {
                  if (res.data.code === 0) {
                    axios.get(`${window.g.BASE_CCR}/oauth/token?client_id=cmccr-h5&client_secret=cmccr-h5&grant_type=password&username=${username}&password=${window.location.search.split('=')[1]}`).then(response => {
                      setToken(response.data.access_token, res.data.expires_in)
                      // setRefreshToken(response.data.refresh_token)
                      autoGetToken(response.data.refresh_token)
                      window.location.search = ''
                      next('/')
                    }).catch(() => {
                      Message({
                        type: 'error',
                        message: '登录失败'
                      })
                      window.location.href = window.g.CAS_URL + '?service=' + service
                    })
                  }
                }).catch(() => {
                  next()
                })
              } else {
                Message({
                  type: 'error',
                  message: '登录超时'
                })
                window.location.href = window.g.CAS_URL + '?service=' + service
              }
            }).catch(err => {
              console.log(err)
            })
          }
        } else {
          console.log('jojo')
          if (to.path == '/403') {
            next()
          } else {
            next('/403')
          }
        }
        // NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
      }
    }
  }
})

router.afterEach(() => {
  // NProgress.done() // finish progress bar
})
// 页面刷新时重新设置定时器自动更新token
window.onload = function () {
  if (getExpirationDate() && getRefresh()) {
    autoGetToken(getRefresh())
  }
}
