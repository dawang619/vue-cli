<template>
  <div id="app">
    	
    	<router-link to="/index">首页</router-link>
    	<router-link to="/about">关于</router-link>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

