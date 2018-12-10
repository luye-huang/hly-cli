const routes = [
    {
        path: '/menu'
    },
    {
        path: '/bigMenu'
    },
    {
        path: '/card'
    },
    {
        path: '/richTextArea'
    },
    {
        path: '/table'
    },
    {
        path: '/select'
    },
    {
        path: '/radio'
    },
    {
        path: '/checkbox'
    },
    {
        path: '/jsonFormGenerator'
    },
    {
        path: '/loading'
    },
    {
        path: '/modal'
    },
    {
        path: '/tip'
    },
    {
        path: '/tree'
    },
    {
        path: '/tab'
    },
    {
        path: '/slider'
    },
    {
        path: '/transfer'
    },
    {
        path: '/pagination'
    },
    {
        path: '/backToTop'
    },
    {
        path: '/upload'
    },
    {
        path: '/dateTime'
    },
    {
        path: '/input'
    }
];

const CONTEXT = 'izy-examples';

/**
 * 左侧组件导航菜单配置
 * @returns {Array}
 *
 * 默认label是 path去掉'/'
 */
export const getNavItems = () => {
    let navs = [
        { path: '/quickStart', label: 'QuickStart' }
    ],
    componentNavs = routes.map((item) => {
        return {
            path: `/${CONTEXT}${item.path}`,
            label: item.label || item.path.substring(1)
        }
    });
    navs = navs.concat(componentNavs);
    return navs;
};

/**
 * 路由配置
 * @returns {Array}
 * 默认component name是path去掉'/'
 */
export const getRoutes = () => {

    let _routes = [
        // { path: '/', component: () => import('@/components/layout/HelloWorld.vue') },
        { path: `/${CONTEXT}/quickStart`, component: () => import('@/components/quickStart.vue') }
    ],
    componentRoutes = routes.map((item) => {
        return {
            component: () => import(`@/components/${item.name || item.path.substring(1)}.vue`),
            path: `/${CONTEXT}${item.path}`,
        }
    })
    _routes = _routes.concat(componentRoutes);
    _routes.push({
        path: '',
        redirect: `/${CONTEXT}/quickStart`
    })
    _routes.push({
        path: '*',
        redirect: '/'
    })
    return _routes;
};

