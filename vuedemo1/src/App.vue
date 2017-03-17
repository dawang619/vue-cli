<template>
  <div id="app">
    <h1>{{msg}}</h1>
    
    	<v-header></v-header>
    	
    	<v-footer></v-footer>
    
  </div>
</template>

<script>
	
import header from './component/header.vue';
import footer from './component/footer.vue';
	
	
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	'v-header':header,
  	'v-footer':footer
  }
}
</script>

<style>

</style>
