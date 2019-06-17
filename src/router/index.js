import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import AddEdit from '../components/AddEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'main',
      path: '/',
      props: true,
      component: Main
    },
    {
      name: 'add',
      path: '/add',
      props: true,
      component: AddEdit
    },
    {
      name: 'edit',
      path: '/edit',
      props: true,
      component: AddEdit
    }
  ]
})
