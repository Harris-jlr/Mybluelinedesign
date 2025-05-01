import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import merch from '../global/merch.vue'
import OurServices from '../contents/OurServices.vue'
import StrategicPartner from '../views/StrategicPartner.vue'
import aboutbld from '../views/aboutbld.vue'
import mycodepen from '../views/mycodepen.vue'
import Investorcta from '../components/investorcta.vue'
import InvestorDetail from '../views/InvestorDetail.vue'
import pricing from '../views/pricing.vue'
import ConsultationPlans from '../contents/ConsultationPlans.vue'
import BookingsAdmin from '../Protected/views/bookingsAdmin.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/about', name: 'about', component: about },
  { path: '/merch', name: 'merch', component: merch },
  { path: '/pricing', name: 'pricing', component: pricing },
  { path: '/aboutbld', name: 'aboutbld', component: aboutbld },
  { path: '/mycodepen', name: 'mycodepen', component: mycodepen },
  { path: '/StrategicPartner', name: 'StrategicPartner', component: StrategicPartner },
  { path: '/OurServices', name: 'OurServices', component: OurServices },
  { path: '/investors', name: 'investors', component: Investorcta },
  { path: '/investors/:slug', name: 'InvestorDetail', component: InvestorDetail },
  { path: '/consultation', name: 'ConsultationPlans', component: ConsultationPlans },
  { path: '/login', name: 'Login', component: Login },
  { path: '/admin/bookings', name: 'BookingsAdmin', component: BookingsAdmin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
