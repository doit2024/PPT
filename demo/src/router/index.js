import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const requireComponent = require.context('@/components', true, /\.vue$/)
let routes = []
requireComponent.keys().forEach(key => {
  const componentName = /^\S+\/(\w+).vue$/.exec(key)[1]
  const component = requireComponent(key).default
  routes.push({
    path: '/' + componentName.toLowerCase(),
    component
  })
  Vue.component(componentName, component)
})

export default new Router({ routes })
