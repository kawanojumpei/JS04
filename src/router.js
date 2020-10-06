import Vue from 'vue';
import Router from 'vue-router';
import WeatherSapporo from './components/WeatherSapporo'
import WeatherHarajuku from './components/WeatherHarajuku'
import WeatherFukuoka from './components/WeatherFukuoka'


Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        {path:"/Sapporo",component:WeatherSapporo},
        {path:"/Harajuku",component:WeatherHarajuku},
        {path:"/Fukuoka",component:WeatherFukuoka}
    ]
})