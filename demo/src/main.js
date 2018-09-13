import Vue from 'vue'
import App from './App'
import router from './router'



const requireComponent = require.context('@/components/css', true, /\.vue$/)
requireComponent.keys().forEach(key => {
  const componentName = /^\S+\/(\w+).vue$/.exec(key)[1]
  const component = requireComponent(key).default
  Vue.component(componentName, component)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
