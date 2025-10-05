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

    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import('../views/FogertPassword.vue')

    },
    {
      path: '/verify-code',
      name: 'VerifyCode',
      component: () => import('../views/VerifyCode.vue')
    },
    {
      path: '/reset-password',
      name: 'Password',
      component: () => import('../views/ResetPassword.vue')
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import('/src/teste.vue')
    },
    {
      path: '/OpportunityRegistration',
      name: 'Opportunity',
      component: () => import('../views/OpportunityRegistration.vue')
    }, {
      path: '/ApplyOpportunity',
      name: 'ApplyOpportunity',
      component: () => import('../views/ApplyOpportunity.vue')
    }



    //{
    //  path: '/<nome do rota>',
    //  name: '<nome da >',
    //  component: () => import(caminho para a view)
    //}
  ],
})

export default router

