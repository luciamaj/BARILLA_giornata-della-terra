import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home.vue'
import Piramide from './../components/Piramide/Piramide.vue'
import PiramideHomepage from './../components/Piramide/PiramideHomepage.vue'
import PiramideBase from './../components/Piramide/PiramideBase.vue'
import NewPir from './../components/Piramide/New.vue'
import Cultura from './../components/Cultura.vue'
import Carosello from './../components/Piramide/Carosello.vue'
import Clone from './../components/Piramide/Clone.vue'
import Piatto from './../components/PiattoVirtuale.vue'
import PiattoClone from './../components/Piattoclone.vue'
import CiboCitta from './../components/CiboCitta/CiboCitta.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/piramide',
      name: 'piramide',
      component: Piramide
    },
    {
      path: '/piramide-homepage',
      name: 'piramide-homepage',
      component: PiramideHomepage
    },
    {
      path: '/piramide-base',
      name: 'piramide-base',
      component: PiramideBase
    },
    {
      path: '/cultura',
      name: 'cultura',
      component: Cultura
    },
    {
      path: '/piatto_virtuale',
      name: 'piattoVirtuale',
      component: Piatto
    },
    {
      path: '/piattoclone',
      name: 'piattoclone',
      component: PiattoClone
    },
    {
      path: '/cibocitta',
      name: 'cibocitta',
      component: CiboCitta
    },
    {
      path: '/carosello',
      name: 'carosello',
      component: Carosello
    },
    {
      path: '/new',
      name: 'new',
      component: NewPir
    },
    {
      path: '/clone',
      name: 'clone',
      component: Clone
    }
  ]
})

export default router;