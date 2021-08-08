import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../views/Main.vue';
const pagesRouter: Array<RouteConfig> = [];

Vue.use(VueRouter);

/** vite */
const modulesPage = import.meta.glob('/src/packages/**/doc.vue');
for (const path in modulesPage) {
  let name = path.split("/").reverse()[1]
  console.log(name)
  pagesRouter.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:pagesRouter
  },
];

const router = new VueRouter({
  routes,
});

export default router;
