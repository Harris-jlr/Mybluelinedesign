import { createRouter , createWebHistory } from 'vue-router'
import home from '/src/views/home.vue'
import about from '/src/views/about.vue'
import schedule from '/src/views/schedule.vue'
import contact from '/src/views/contact.vue'
import container from '/src/views/container.vue'
import header from '/src/views/header.vue'
import demo from '/src/views/demo.vue'
import documentation from '/src/views/documentation.vue'
import mycodepen from '/src/views/mycodepen.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
     },
     {
        path: '/about',
        name: 'about',
        component: about,
     },
     {
        path: '/schedule',
        name: 'schedule',
        component: schedule,
     },
     {
        path: '/contact',
        name: 'contact',
        component: contact,
     },
     {
      path: '/container',
      name: 'container',
      component: container,
   },
   {
      path: '/header',
      name: 'header',
      component: header,
   },
   {
      path: '/demo',
      name: 'demo',
      component: demo,
   },
   {
      path: '/documentation',
      name: 'documentation',
      component: documentation,
   },
   {
      path: '/mycodepen',
      name: 'mycodepen',
      component: mycodepen,
   },
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router