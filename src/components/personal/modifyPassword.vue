<template>
  <div class="main">
    <img class="card" src= "../../assets/login.jpg" />
    <img class="arrow" @click="back" src= "../../assets/arrow2.png" />
    <div class="logoDiv">
      <icon type="waiting" is-msg></icon>
    </div>
    <div class="logoFontDiv">
      <h1>点点到</h1>
    </div>
    <div class="bottomDiv">
      <div class="oldPassword">
        <input type="password" placeholder="旧密码">
      </div>
      <div class="newPassword">
        <input type="password" placeholder="新密码">
      </div>
      <div class="newPassword2">
        <input type="password" placeholder="确定新密码">
      </div>
      <div class="confirmBtnDiv">
        <button type = "button" class="confirmBtn" @click=""><p class="BtnFont">确定</p></button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from 'vux'
export default {
    name: 'modifyPassword',
    components: { Icon },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      back () {
        this.$router.push({name: 'personal'})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weui-icon-waiting{
    color: white;
  }
  .arrow{
    position: absolute;
    top: 10px;
    background-size: 100%;
    width: 25px;
    height: 25px;
    margin: 10px;
  }
  .main{
    position: relative;
  }
  .card{
    width: 100vw;
  }
  .bottomDiv{
    text-align: center;
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
    color: white;
    top:20%;
    left:48%;
  }
  .logoFontDiv h1{
    font-size: 32px;
  }
  .confirmBtnDiv{
    position: absolute;
    top:80%;
    left:20%;
  }
  .confirmBtnDiv button{
    height: 41px;
    width: 62vw;
    border-radius:20px;
    background-color: #03b3ff;
    border: none;
  }
  .BtnFont{
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    margin: 10px;
    color: white;
    font-weight: bold;
  }
  .oldPassword{
    position: absolute;
    top: 50%;
    left: 20%;
  }
  .newPassword{
    position: absolute;
    top: 60%;
    left: 20%;
  }
  .newPassword2{
    position: absolute;
    top: 70%;
    left: 20%;
  }
  .bottomDiv input{
    border: 1px solid #ccc;
    padding: 7px 0px;
    border-radius: 20px;
    padding-left:10px;
    padding-right: 10px;
    height: 25px;
    width: 56vw;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    font-size: 14px;
    font-family: 微软雅黑;
    text-align: center;
  }
  .bottomDiv input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
  .bottomDiv input:-ms-input-placeholder{
    text-align: center;
  }
  .bottomDiv input::-webkit-input-placeholder{
    text-align: center;
  }
</style>
