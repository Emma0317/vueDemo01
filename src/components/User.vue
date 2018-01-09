<template>
  <div class="user">
    <h3>添加用户</h3>
    <input v-model="newUser.name" placeholder="请输入新用户名">
    <input v-model="newUser.position" placeholder="请输入新用职位">
    <input type="button" value="提交" v-on:click="addUser()">
    <h3>已有用户</h3>
    <ul>
        <li v-for="user in users">
          <input type="checkbox" v-model="user.show">
          <span :class="{contacted:user.show}">{{user.name}}-{{user.position}}</span><button @click="deleteUser(user)">删除用户</button>
        </li>
    </ul>
    <!--demo1实现父组件和子组件之间交互-->
    <demo1 @child-say="listenToMyBoy" :parentSay="users"></demo1>
    <p>{{childWord}}</p>
    <!--demo1实现父组件和子组件之间交互 end-->
  </div>
</template>

<script>
  import Demo1 from "./Demo1.vue"
  export default {//使外部可以访问组件
    name: 'user',//组件使用的名字
    components:{Demo1},
    data () {
      return {
        childWord:'',
        newUser:{},
        users:[
          {name:"小马",position:"web前端开发",show:false},
          {name:"小kai",position:"android前端开发",show:false},
          {name:"小tao",position:"前端开发1",show:false},
          {name:"小cola",position:"前端开发2",show:false}
        ]
      }
    },
    methods:{
      addUser:function () {//向数组中添加元素
          this.users.push({name:this.newUser.name,position:this.newUser.position,show:false});
          console.log(this.newUser);
      },
      deleteUser:function (user) {//删除数组中元素
          console.log(user);//获取当前点击项
          console.log(this.users.indexOf(user));//获取当前点击项索引
          this.users.splice(this.users.indexOf(user),1);//去除当前点击项
      },
      //获取子元素传过来的参数
      listenToMyBoy(childMsg){
        this.childWord=childMsg;
      }
    }
    /*created:function () {//在页面展示前先获取网络接口数据
      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data)=>{
          console.log(data);
          this.users=data.body;
      })
    }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contacted{text-decoration:line-through;}
</style>
