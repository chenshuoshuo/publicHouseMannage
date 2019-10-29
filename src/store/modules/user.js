import { login, register, logout, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '../../auth'
import filterTree from '@/utils/routeTree'
import  {  constantRouterMap } from '@/router'
import Cookies from 'js-cookie'
const user={
 state:{
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  routes: [],
  menus: []
},

 mutations:{
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
    Cookies.set('userName', name)
  },
  SET_REFRESH: (state, refreshToken) => {
    state.refreshToken = refreshToken
    Cookies.set('refreshToken', refreshToken)
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRouterMap.concat(routes)
    
  },
  SET_USERINFO: (state, userId) => {
    state.userId = userId
  },
  SAVE_ROUTES:(state, routes)=>{
    

  }
},

 actions:{
  // user login
  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password: password, grant_type: 'password' }).then(response => {
  //       if (response.access_token) {
  //         const { access_token, refresh_token } = response
  //         commit('SET_NAME', username)
  //         commit('SET_TOKEN', access_token)
  //         commit('SET_REFRESH', refresh_token)
  //         setToken(access_token)
  //         resolve()
  //       } else {
  //         reject()
  //       }
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // user login
  // register({ commit }, userInfo) {
  //   return new Promise((resolve, reject) => {
  //     register(userInfo).then(response => {
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  SaveRoutes({commit,routes}){
    commit('SAVE_ROUTES',routes)
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(btoa('*')).then(response => {
        // const { data } = response
        const roles = response.data.data.authorities.filter(item => item.type === 'm7722_menu');
        console.log('开始的role',roles);
        const routes = filterTree(roles)


        // if (!data) {
        //   reject('Verification failed, please Login again.')
        // }
        //
        // const { roles, name, avatar, introduction } = data
        //
        // // roles must be a non-empty array
        // if (!roles || roles.length <= 0) {
        //   reject('getInfo: roles must be a non-null array!')
        // }
        //

        commit('SET_ROUTES', routes)
        commit('SET_USERINFO', response.data.data.userId)
        // commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        // commit('SET_INTRODUCTION', introduction)
        resolve(routes)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     commit('SET_TOKEN', '')
  //     commit('SET_ROLES', [])
  //     removeToken()
  //     resetRouter()
  //     resolve()
  //   })
  // },

  // remove token
  // resetToken({ commit }) {
  //   return new Promise(resolve => {
  //     commit('SET_TOKEN', '')
  //     commit('SET_ROLES', [])
  //     removeToken()
  //     resolve()
  //   })
  // }

  // dynamically modify permissions
  // changeRoles({ commit, dispatch }, role) {
  //   return new Promise(async resolve => {
  //     const token = role + '-token'
  //
  //     commit('SET_TOKEN', token)
  //     setToken(token)
  //
  //     const { roles } = await dispatch('getInfo')
  //
  //     resetRouter()
  //
  //     // generate accessible routes map based on roles
  //     const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
  //
  //     // dynamically add accessible routes
  //     router.addRoutes(accessRoutes)
  //
  //     resolve()
  //   })
  // }
}
}
export default user
// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }
