<template>
  	<p><small>{{ msg }}</small></p>
</template>

<script>
export default {
  	name: 'my-footer',
  	data () {
    	return {
      		msg: 'this is my todolist made of vue.js'
    	}
  	}
}
</script>

<style scoped>
p {
	border-top: 1px solid #ccc;
  	text-align: center;
  	color: #ccc;
    padding-top: 12px;
}
</style>
