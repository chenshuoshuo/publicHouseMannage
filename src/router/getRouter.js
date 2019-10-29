const routerList = require('./mockTree.json')

export const formatRoutes = (aMenu) => {
  const aRouter = []
  aMenu.forEach(oMenu => {
    const {
      path,
      content,
      children
    } = oMenu
    const oRouter = {
      path: path,
      content(resolve) {
        let componentPath = ''
        if (content === 'Layout') {
          require(['../views/Layout'], resolve)
          return
        } else {
          componentPath = component
          require([`../components/${componentPath}.vue`], resolve)
        }
      },
      children: children ? formatRoutes(children) : []
    }
    aRouter.push(oRouter)
  })
  return aRouter
}