<template id="footer">
	<div>
		<h1 class="foot">这是底部组件</h1>
		
		<v-child></v-child>
	</div>
</template>

<script type="text/javascript">
	
	
	import child from './child.vue'
	
	
	var footer={
		template:'#footer'
	}
export default {
  components:{
  	'v-child':child
  }
}
//	module.exports=footer
</script>

<style type="text/css">
.foot{
	color:blue;
}
</style>

