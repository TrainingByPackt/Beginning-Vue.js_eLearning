import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Bar from './pages/Bar'
import Menu from './pages/Menu'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home 
        },
        {
            path: '/bar',
            component: Bar
        },
        {
            path: '/menu',
            component: Menu
        }
    ]
})