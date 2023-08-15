import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Pretest from '../views/Pretest.vue'
import Success from "@/views/Success";
import Scenario from "@/views/Scenario";
import Assistant from "@/views/Assistant";
import List from "@/views/List";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/assistant',
        name: 'assistant',
        component: Assistant
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/scenario',
        name: 'scenario',
        component: Scenario
    },
    {
        path: '/prestudy',
        name: 'PreStudy',
        component: Pretest
    },
    {
        path: '/success',
        name: 'Thanks',
        component: Success
    },
    {
        path: '/beforetable',
        name: 'BeforeTable',
        component: () => import('../views/BeforeTable.vue')
    },
    {
        path: '/game',
        name: 'Game',
        component: () => import('../views/Game.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        }
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
