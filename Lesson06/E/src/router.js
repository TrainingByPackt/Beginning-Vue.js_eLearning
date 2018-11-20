import Vue from 'vue'
import Router from 'vue-router'
import User from './components/User'
import Soldiers from './components/Soldiers'
import Gold from './components/Gold'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/user/:id',
            component: User,
            children: [
                {
                    path: 'soldiers',
                    component: Soldiers
                },
                {
                    path: 'gold',
                    component: Gold
                }
            ]
        }
    ]
})