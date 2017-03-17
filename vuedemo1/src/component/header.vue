<template id="header">
	<div>
		<h1>这是一个头部组件</h1>
		<p>{{str}}</p>
		<button @click="tap()">事件执行</button>
	</div>
	
</template>

<script type="text/javascript">
	
	var header={
		template:'#header',
		data:function(){
			return{
				str:'初次接触cli  vuejs项目'
			}
		},
		methods:{
			tap:function(){
				alert('你好')
			}
		}
	}
	
	module.exports=header
	
	
</script>