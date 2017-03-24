<template>
  <div class="wrap">
  	<div>
  	  <input type="text" v-model="message" v-on:keyup.enter="add">
  	</div>
  	<ul>
  		<li v-for="item in items">
        <span>{{ item.text }}</span>
        <i class="icon-del" v-on:click="del(item['.key'])">&times;</i>
      </li>
  	</ul>
  </div>

</template>

<script>
import wilddog from 'wilddog';

var config = {
  syncURL: 'https://kylin.wilddogio.com',
};
wilddog.initializeApp(config);
var itemsRef = wilddog.sync().ref('vuelist');

export default {
	name: 'todo-list',
	data () {
  	return {
      url: this.$store.getters.baseURI,
      message: '',
    };
	},
  wilddog: {
    items: itemsRef.limitToLast(25)
  },
  methods: {
    add() {
      if(this.message) {
        itemsRef.push({
          text: this.message
        });
        this.message = '';
      }
    },
    del(key) {
      itemsRef.child(key).remove();
    }
  }
}
</script>

<style scoped>
.wrap {
	box-shadow: 0 0 0 #888;
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
  position: relative;
  top: 5px;
}
</style>
