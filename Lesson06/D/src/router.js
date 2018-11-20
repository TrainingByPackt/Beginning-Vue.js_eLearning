import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Bar from './pages/Bar'
import Menu from './pages/Menu'
import About from './pages/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home 
        },
        {
            path: '/bar/:drink',
            component: Bar
        },
        {
            path: '/menu/:id',
            name: 'menu',
            component: Menu
        },
        {
            path: '/about',
            component: About
        }
    ]
})