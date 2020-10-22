import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Login from '@/components/Login'
import addevidence from '@/components/AddEvidence'
import editpost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Posts',
      name: 'Evidences',
      component: Posts
    },
    {
      path: '/posts/add',
      component: addevidence,
      name: 'addevidence'
    },
    {
      path: '/posts/:id/edit',
      component: editpost,
      name: 'editpost'
    },
    {
      path: '/',
      component: editpost,
      name: 'editpost'
    }
  ]
})
