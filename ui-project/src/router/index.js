import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Projects from '@/components/Projects'
import CreateProject from '@/components/CreateProject'
import CreatorProfile from '@/components/CreatorProfile'
import UserProfile from '@/components/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/create',
      name: 'projects-create',
      component: CreateProject
    },
    {
      path: '/projects/:userEmail',
      name: 'UserProfile',
      component: CreatorProfile
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile
    }
  ]
})
