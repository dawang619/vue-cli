import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import index from './component/index.vue';
import about from './component/about.vue';


var router=[
	{path:'/index',component:index},
	{path:'/about',component:about},
	{path:'*',redirect:'/index'}
]

var routers=new VueRouter({
	routes:router
})


new Vue({
  el: '#app',
  router:routers,
  render: h => h(App)
})
