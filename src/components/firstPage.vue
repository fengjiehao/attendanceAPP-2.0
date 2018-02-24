<template>
  <div class="main">
    <img class="card" src= "../assets/index.jpg" />
    <div class="logoDiv">
      <icon type="waiting" is-msg></icon>
    </div>
    <div class="logoFontDiv">
      <h1>点点到</h1>
    </div>
    <div class="bottomDiv">
      <div class="loginBtnDiv">
        <button type = "button" class="loginBtn" @click="login()"><p class="BtnFont">登录</p></button>
      </div>
      <div class="registerBtnDiv">
        <button type = "button" class="registerBtn" @click="register()"><p class="BtnFont">注册</p></button>
    </div>
  </div>
  </div>
</template>

<script>
  import { Icon } from 'vux'
  export default {
    name: 'firstPage',
    components: { Icon },
    data () {
      return {
      }
    },
    methods: {
      login () {
        this.$router.push({name: 'login'})
      },
      register () {
        this.$router.push({name: 'register'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weui-icon-waiting{
    color: rgba(0, 20, 10, 0.3);
  }
  .main{
    position: relative;
  }
  .card{
    width: 100vw;
  }
  .bottomDiv{
  }
  .logoDiv{
    position: absolute;
    font-family: 隶书;
    color: white;
    top:15%;
    left:25%;
  }
  .logoFontDiv{
    position: absolute;
    font-family: 方正舒体;
    color: rgba(0, 20, 10, 0.3);
    top:20%;
    left:48%;
  }
  .loginBtnDiv{
    position: absolute;
    bottom:15%;
    left:10%;
    opacity: 0.9;
  }
  .loginBtn{
    width: 120px;
    height: 45px;
    border-radius:8px;
    background-color: #03b3ff;
    border: none;
  }
  .BtnFont{
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    margin: 10px;
    color: white;
    font-weight: bold;
  }
  .registerBtnDiv{
    position: absolute;
    bottom:15%;
    right:10%;
    opacity: 0.9;
  }
  .registerBtn{
    width: 120px;
    height: 45px;
    border-radius:8px;
    background-color: #c92c49;
    border: none;
  }

</style>
