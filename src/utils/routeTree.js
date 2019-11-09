/**
 * Created by j_bleach on 2019/5/21 0021.
 */
import Layout from '@/views/layout/Layout.vue'

const transform = (data) => {
  return data.map(v => {
    // if (v.parentId) {
    //   console.log('route', `../views${v.route}`, v.content)
    //   return {
    //     authorityId: v.authorityId,
    //     parentId: v.parentId,
    //     path: v.content,

    //     component: () => import(`@/views${v.route}`),
    //     component:Layout ,
    //     name: v.content,
    //     meta: { title: v.name }
    //   }
    // } else {
    //   return {
    //     authorityId: v.authorityId,
    //     parentId: v.parentId,
    //     path: v.route,
    //     component: Layout,
    //     redirect: 'noRedirect',
    //     name: v.content,
    //     meta: {
    //       title: v.name,
    //       icon: 'component'
    //     }
    //   }
    // }
    if (v.route.split('/').length == 2) {
      return {
        authorityId: v.authorityId,
        parentId: v.parentId,
        path: v.route,
        component: Layout,
        redirect: 'noRedirect',
        name: v.content,
        meta: {
          title: v.name,
          icon: 'component'
        }

      }
    } else {
      return {
        authorityId: v.authorityId,
        parentId: v.parentId,
        path: v.content,
        component: () => import(`@/views${v.route}`),
        name: v.content,
        meta: { title: v.content, icon: 'component' }
        
      }
    }
  })
}

const treeData = (list) => {
  const temp = list
  // 以id为键，当前对象为值，存入一个新的对象中
  const tempObj = {}
  for (const i in temp) {
    tempObj[temp[i].authorityId] = temp[i]
  }
  return temp.filter(father => {
    // 把当前节点的所有子节点找到
    const childArr = temp.filter(child => father.authorityId === child.parentId)
    childArr.length > 0 ? father.children = childArr : '';
    if(childArr.length > 0){
      father.redirect=`${father.path}/${childArr[0].path}`
    }
    // 只返回第一级数据；如果当前节点的fatherId不为空，但是在父节点不存在，也为一级数据
    return father.parentId === null || !tempObj[father.parentId]
  })
}

const handleTree = (data) => {
  const result = transform(data)
  console.log('result', result)
  const transTree = treeData(result)
  console.log('transTree', transTree)
  return transTree
}

export default handleTree
