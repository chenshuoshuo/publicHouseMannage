import {ZK} from '@/utils/req'

export function logout(userId) {
  return ZK({
    url: `/center/user/loginout/${userId}`,
    method: 'post'
  })
}

export function myloginByUsername(username, password) {
  const data = new FormData()
  data.set('username', username)
  data.set('password', password)
  return ZK({
    url: `/oauth/token?client_id=cmccr-h5&client_secret=cmccr-h5&grant_type=password`,
    method: 'POST',
    data: data
  })
}
export function refreshToken(refreshToken) {
  return ZK({
    url: `/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}&client_id=cmccr-h5&client_secret=cmccr-h5`,
    method: 'POST'
  })
}

// 单点登录
export function casBind(ticket, username) {
  return ZK({
    url: `/center/cas/bind?ticket=${ticket}&username=${username}`,
    method: 'get'
  })
}

