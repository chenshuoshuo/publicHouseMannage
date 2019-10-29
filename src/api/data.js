import request from '@/utils/request'
//获取所有公房状态
export function getAllState(data){
    return request({
        url:`/cmips1-server/asset/status?${data}`,
        method:'get',
        
        
    })
}
//获取所有公房分类
export function getAllType(data){
    return request({
        url:`/cmips1-server/asset/category?${data}`,
        method:'get',
        
        
    })
}
//编辑图标
export function editIcon(query){
    return request({
        url:`/cmips1-server/asset/category/?${query}`,
        method:'put',
    })
}
//编辑颜色
export function editColor(query){
    return request({
        // url:'/cmips1-server/asset/status/${query}',
        url:`/cmips1-server/asset/status/?${query}`,
        method:'put',
        
    })
}
//获取所有公房地图配置
export function getAllMapSetting(id){
    return request({
        url:`/cmips1-server/asset/attr/${id}`,
        method:'get'
    })
}
//提交地图配置(需要携带token)
export function submitSetting(data){
    return request({
        url:`/cmips1-server/asset/attr?${data}`,
        method:'put',
        
        
    })
}
//搜索公房分类
export function searchType(name){
    return request({
        url:`/cmips1-server/asset/category?${name}`,
        method:'get',
        

    })
}
//搜索公房状态
export function searchStatus(status){
    return request({
        url:`/cmips1-server/asset/status?${status}`,
        method:'get',
        

    })
}

