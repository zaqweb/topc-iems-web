import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },

  {
    path: '/real-estate',
    component: Layout,
    redirect: '/real-estate/building',
    name: 'realEstatetMgr',
    meta: { title: '物业管理', icon: 'example' },
    children: [
      {
        path: 'bulding',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/index'),
        meta: { title: '楼宇管理', icon: 'table' }
      },
      {
        path: 'addBuilding',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/add'),
        meta: { title: '添加楼宇', icon: 'table' },
        hidden: true
      },
      {
        path: 'floor',
        name: 'floorMgr',
        component: () => import('@/views/real-estate/floor/index'),
        meta: { title: '楼层管理', icon: 'tree' }
      },
      {
        path: 'room',
        name: 'roomMgr',
        component: () => import('@/views/real-estate/room/index'),
        meta: { title: '房源管理', icon: 'tree' }
      },
      {
        path: 'contract',
        name: 'contractMgr',
        component: () => import('@/views/real-estate/contract/index'),
        meta: { title: '合同管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/asset',
    component: Layout,
    redirect: '/eal-estate/pc',
    name: 'assetMgr',
    meta: { title: '资产管理', icon: 'example' },
    children: [
      {
        path: 'pc',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/index'),
        meta: { title: '电脑设备', icon: 'table' }
      },
      {
        path: 'pc',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/index'),
        meta: { title: '建筑设备', icon: 'table' }
      }
    ]
  },
  {
    path: '/financial',
    component: Layout,
    redirect: '/eal-estate/pc',
    name: 'assetMgr',
    meta: { title: '财务管理', icon: 'example' },
    children: [
      {
        path: 'pc',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/index'),
        meta: { title: '电脑设备', icon: 'table' }
      },
      {
        path: 'pc',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/index'),
        meta: { title: '建筑设备', icon: 'table' }
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    redirect: '/eal-estate/pc',
    name: 'assetMgr',
    meta: { title: '智能报表', icon: 'example' },
    children: [
      {
        path: 'pc',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/index'),
        meta: { title: '电脑设备', icon: 'table' }
      },
      {
        path: 'pc',
        name: 'buildingMgr',
        component: () => import('@/views/real-estate/building/index'),
        meta: { title: '建筑设备', icon: 'table' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/eal-estate/pc',
    name: 'assetMgr',
    meta: { title: '系统设置', icon: 'example' },
    children: [
      {
        path: 'account',
        name: 'accountMgr',
        component: () => import('@/views/settings/account/index'),
        meta: { title: '账号管理', icon: 'table' }
      },
      {
        path: 'role',
        name: 'roleMgr',
        component: () => import('@/views/settings/role/index'),
        meta: { title: '角色管理', icon: 'table' }
      },
      {
        path: 'permission',
        name: 'permissionMgr',
        component: () => import('@/views/settings/permission/index'),
        meta: { title: '权限管理', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
