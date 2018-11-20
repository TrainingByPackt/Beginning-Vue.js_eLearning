import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Clothes from './pages/Clothes'
import Sales from './pages/Sales'
import NotFound from './pages/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { 
            path: '/',
            component: Home,
        },
        { 
            path: '/clothes',
            name: 'listing',
            component: Clothes
        },

        { 
            path: '/last-year-sales',
            component: Sales
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'

        }
        
    ],

    scrollBehavior(to, from, savedPostion) {
        if (savedPostion) {
            return savedPostion
        } else {
            return { x: 0, y: 0 }
        }
    }
})