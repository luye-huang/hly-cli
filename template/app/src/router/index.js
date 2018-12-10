import Vue from 'vue'
import Router from 'vue-router'
import { getRoutes } from './util';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: getRoutes(),
    linkActiveClass: 'actived',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    mode: 'history'
})
