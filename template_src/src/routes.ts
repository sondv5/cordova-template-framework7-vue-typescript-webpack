import MainPage from './assets/vue/pages/MainPage.vue';
import AboutPage from './assets/vue/pages/AboutPage.vue';
import DynamicRoutePage from './assets/vue/pages/DynamicRoutePage.vue';
import FormPage from './assets/vue/pages/FormPage.vue';
import VuexPage from './assets/vue/pages/VuexPage.vue';
import ColorThemePage from './assets/vue/pages/ColorThemePage.vue';

const routes: object = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/aboutPage/',
    component: AboutPage
  },
  {
    path: '/dynamicRoutePage/blog/:url/:path/:hash',
    component: DynamicRoutePage
  },
  {
    path: '/formPage/',
    component: FormPage
  },
  {
    path: '/vuex/',
    component: VuexPage
  },
  {
    path: '/colorThemePage/',
    component: ColorThemePage
  }
]

export default routes;
