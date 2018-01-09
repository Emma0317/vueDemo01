<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/user">用户</router-link>
    <h3>翻译软件</h3>
    <router-view></router-view>
    <translateForm v-on:formSubmitSet="textTranslateSet"></translateForm>
    <translateOutput></translateOutput>
  </div>
</template>

<script>
  import TranslateOutput from './components/TranslateOutput.vue'
  import TranslateForm from './components/TranslateForm.vue'

  export default {
    name: 'app',
    data () {
      return {
        title:"app"
      }
    },
    components:{TranslateOutput,TranslateForm},
    methods:{
      textTranslateSet:function (msg) {//传值实现
          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?' +
          'key=trnsl.1.1.20180105T125702Z.f561d4cf5a117baa.17b468b687c217b14385bc06ee45516a2568795f&' +
          'lang=en&text='+msg
        ).then((response)=>{
              console.log(response.body.text[0]);
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
