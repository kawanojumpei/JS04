import Vue from 'vue'
import App from './App.vue'
import WeatherSapporo from './components/WeatherSapporo'
import WeatherHarajuku from './components/WeatherHarajuku'
import WeatherFukuoka from './components/WeatherFukuoka'
import router from './router'

Vue.config.productionTip = false;
Vue.component('WeatherSapporo',WeatherSapporo);
Vue.component('WeatherHarajuku',WeatherHarajuku);
Vue.component('WeatherFukuoka',WeatherFukuoka);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
