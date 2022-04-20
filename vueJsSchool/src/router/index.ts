import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import isLog, { isDirector, isTeacher, isStudent } from '@/components/plugins/loginCheck';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/school/LoginView.vue')
    },
    {
      path: '/director',
      name: 'director',
      component: () => import('../views/school/DirectorView.vue')
    },
    {
      path: '/eleve',
      name: 'eleve',
      component: () => import('../views/school/EleveView.vue')
    },
    {
      path: '/prof',
      name: 'prof',
      component: () => import('../views/school/ProfView.vue')
    },
    {
      path: '/itsno',
      name: 'itsno',
      component: () => import('../components/school/ItsNo.vue')
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: () => import('../components/school/addUser.vue')
    },
    {
      path: '/deleteUser',
      name: 'deleteUser',
      component: () => import('../components/school/deleteUser.vue')
    },
    {
      path: '/addEleve',
      name: 'addEleve',
      component: () => import('../components/school/addEleve.vue')
    },
    {
      path: '/deleteEleve',
      name: 'deleteEleve',
      component: () => import('../components/school/deleteEleve.vue')
    },
    {
      path: '/showEleveByBoss',
      name: 'showEleveByBoss',
      component: () => import('../components/school/showEleveByBoss.vue')
    },
    {
      path: '/addNote',
      name: 'addNote',
      component: () => import('../components/school/addNote.vue')
    },
    {
      path: '/patchEleve',
      name: 'patchEleve',
      component: () => import('../components/school/patchEleve.vue')
    },
    {
      path: '/showMyClass',
      name: 'showMyClass',
      component: () => import('../components/school/showMyClass.vue')
    },
  ]
})

let arrayTeacherRoute = ['prof', 'addNote', 'showMyClass'];
let arrayDirectorRoute = ['director', 'addUser', 'deleteUser', 'addEleve', 'deleteEleve', 'showEleveByBoss', 'patchEleve'];
let arrayStudentRoute = ['eleve']
router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isLog()) {
    next({ name: "login" });
  }
  switch (true) {
    case arrayTeacherRoute.includes(String(to.name)) && !isTeacher():
      next({ name: "itsno" });
      break;
    case arrayDirectorRoute.includes(String(to.name)) && !isDirector():
      next({ name: "itsno" });
      break;
    case arrayStudentRoute.includes(String(to.name)) && !isStudent():
      next({ name: "itsno" });
      break;
    default:
      break;
  }
  next()
})

export default router
