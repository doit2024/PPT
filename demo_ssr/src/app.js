import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('./components/A.vue') },
      { path: '/b', component: () => import('./components/B.vue') },
      { path: '/c', component: () => import('./components/C.vue') },
    ]
  })
}

export function createApp () {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
