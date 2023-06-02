const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/pages/Login/index.vue'), //路由懒加载
  },
];

export default routes;
