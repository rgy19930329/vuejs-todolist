<template>
  <div class="wrap">
  	<div>
	  <input type="text" v-model="message" v-on:keyup.enter="add">
	</div>
	<ul>
		<li v-for="(item, index) in list">
      <span>{{ item }}</span>
      <i class="icon-del" v-on:click="del(index)">x</i>
    </li>
	</ul>
  </div>

</template>

<script>
import $ from 'jquery';
$.ajax({
    url: 'http://127.0.0.1:3000/api/books',
    type: 'get',
    dataType: 'json',
    success: function(res) {
        data.list = res.list.map(function(item) {
            return item.name;
        });
    },
    error: function(e) {
        console.log(e);
    }
});

var data = {
  message: '',
	list: ['111', '222', '333']
};
export default {
	name: 'todo-list',
	data () {
  	return data;
	},
  methods: {
    add: function() {
      data.list.unshift(data.message);
      data.message = '';
    },
    del: function(index) {
      data.list.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.wrap {
	box-shadow: 0 0 0 #888;
}
input {
	box-sizing: border-box;
    font-size: 18px;
	padding: 3px;
	font-family: "Microsoft yahei";
	display: block;
	width: 100%;
}
ul {
    padding-top: 10px;
    padding-bottom: 10px;
}
li {
    line-height: 32px;
    overflow: hidden;
    box-sizing: border-box;
    transition: all 300ms;
}
li:hover {
    background: #eee;
    padding-left: 3px;
    padding-right: 3px;
}
li:hover .icon-del {
    color: #666;
    border: 1px solid #666;
}
li span {
    display: block;
    float: left;
    width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.icon-del {
    display: block;
    float: right;
    font-style: normal;
    width: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #ccc;
    color: #aaa;
    margin-top: 6px;
}
</style>
