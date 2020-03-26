import request from '@/utils/request'
import axios from 'axios'
import { ZK } from '@/utils/req'
// 获取导航栏（需要token）
export function getNav () {
  return ZK({
    url: '/center/user/name/Kg==',
    method: 'get'
  })
}
// 获取用户信息
export function getUserInfo (username) {
  return ZK({
    url: `/center/user/name/${username}`,
    method: 'get'
  })
}
// 保存版本接口
export function saveVerManager (data) {
  return ZK({
    url: `/center/ccrVersionSystem/v1/save`,
    method: 'put',
    params: data
  })
}
