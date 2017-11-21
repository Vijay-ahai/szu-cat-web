import Vue from 'vue'
import Router from 'vue-router'
import HelloCat from '@/components/HelloCat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloCat',
      component: HelloCat
    }
  ]
})
