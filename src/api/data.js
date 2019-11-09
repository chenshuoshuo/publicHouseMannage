import request from '@/utils/request'
import uploadIcon from '@/utils/uploadreq'
// 获取所有公房状态
export function getAllState (data) {
  return request({
    url: `/asset/status?${data}`,
    method: 'get'
  })
}
// 获取所有公房分类
export function getAllType (data) {
  return request({
    url: `/asset/category?${data}`,
    method: 'get'
  })
}
// 编辑图标
export function editIcon  (query) {
  return request({
    url: `/asset/category/?${query}`,
    method: 'put',
  })
}
// 上传图标
export function uploadicon (data) {
  return uploadIcon({
    url: `/asset/category/upload `,
    method: 'post',
    data
  })
}

// 编辑颜色
export function editColor (query) {
  return request({
    // url:'/cmips1-server/asset/status/${query}',
    url: `/asset/status/?${query}`,
    method: 'put',

  })
}
// 获取所有公房地图配置
export function getAllMapSetting (id) {
  return request({
    url: `/asset/attr/list/${id}`,
    method: 'get'
  })
}
// 提交地图配置(需要携带token)
export function submitSetting (data) {
  return request({
    url: `/asset/attr/edit`,
    method: 'put',
    data
  })
}
// 搜索公房分类
export function searchType (name) {
  return request({
    url: `/asset/category?${name}`,
    method: 'get'
  })
}
// 搜索公房状态
export function searchStatus (status) {
  return request({
    url: `/asset/status?${status}`,
    method: 'get'
  })
}
