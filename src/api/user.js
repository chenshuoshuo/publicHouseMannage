import request from '@/utils/request'
import { ZK } from '@/utils/req'
//获取导航栏（需要token）
export function getNav(){
    return ZK({
        url:'/center/user/name/Kg==',
        method:'get'
    })
    
}
//获取用户信息
export function getUserInfo(username) {
    return ZK({
      url: `/center/user/name/${username}`,
      method: 'get'
    })
  }