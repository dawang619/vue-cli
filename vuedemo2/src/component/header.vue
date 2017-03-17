<template id="header">
	
	<div>
		<h1>请求数据</h1>
		
		<input type="text" v-model="ipt"/>
		<button @click="tap()">获取百度接口数据</button>
		
		<ul>
			<li v-for="item in list">{{item}}</li>
		</ul>
	</div>
	
</template>

<script type="text/javascript">
	var header={
		template:"#header",
		data:function(){
			return{
				ipt:'',
				list:[]
			}
		},
		methods:{
			tap:function(){
				var that=this;
				var api='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.ipt;
	         this.$http.jsonp(api,{
	             jsonp:'cb'
	         }).then(function(data){
	         	console.log(data)
	            that.list=data.body.s;
	         },function(){
	         	
	         })
			}
		}
	}
	
	
	module.exports=header;
</script>