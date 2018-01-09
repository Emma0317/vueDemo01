<!--2018.1.8-->
<template>
  <div id="demo1">
    <button @click="onClickMe">你好啊！</button>
    <p>父组件传递过来的数据：{{parentSay}}</p>
  </div>
</template>

<script>
  export default {
    name: 'demo1',
    data () {
      return {
          childMsg:"我是demo1子组件传过来的数据！"
      }
    },
    methods:{
      onClickMe() {//子组件向父组件传递数据
        this.$emit('child-say',this.childMsg);
      }
    },
    props:['parentSay']//子组件接受父组件传值
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
