<template>
  <div id="translateForm">
      <form v-on:submit="formSubmit">
        <input v-model="textTranslate" type="text" placeholder="请输入需要翻译的内容">
        <select>
          <option value="en">Engish</option>
        </select>
        <input type="submit" value="翻译">
      </form>
  </div>
</template>

<script>
  export default {
    name: 'translateForm',
    data () {
      return {
          textTranslate:""
      }
    },
    methods:{
      formSubmit:function (e) {
        /*alert(this.textTranslate);*/
        this.$emit("formSubmitSet",this.textTranslate);//注册事件 跟组件调用
        e.preventDefault();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
