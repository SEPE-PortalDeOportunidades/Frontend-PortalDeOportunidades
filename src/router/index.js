import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/Login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
      
    }

    //{
    //  path: '/<nome do rota>',
    //  name: '<nome da >',
    //  component: () => import(caminho para a view)
    //}
  ],
})

export default router

