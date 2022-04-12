import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegiSter from '../views/Register-Ebook.vue'
import LogIn from '../views/Login-Ebook.vue'
import Profile_user from '../views/Profile_user.vue'
import DetailsBook from '../views/DetailsBook.vue'
import Cart_Book from '../views/Cart_Book.vue'
import DetailPromotion from '../views/DetailPromotion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegiSter
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/Profile_user',
    name: 'Profile_user',
    component: Profile_user
  },
  {
    path: '/DetailsBook',
    name: 'DetailsBook',
    component: DetailsBook
  },
  {
    path: '/Cart_Book',
    name: 'Cart_Book',
    component: Cart_Book
  },
  {
    path: '/DetailPromotion',
    name: 'DetailPromotion',
    component: DetailPromotion
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
