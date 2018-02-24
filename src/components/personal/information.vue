<template>
  <div class="main">
    <img class="card" src= "../../assets/registerBG.jpg" />
    <img class="arrow" @click="back" src= "../../assets/arrow2.png" />
    <div class="logoDiv">
      <icon type="waiting" is-msg></icon>
    </div><div class="logoFontDiv">
      <h1>点点到</h1>
    </div>
    <div class="infoLogoDiv">
      <p style="font-size: 16px">信息</p>
    </div>
    <div class="bottomDiv">
      <p>李白</p>
      <p>计算机学院</p>
      <p>软件工程</p>
      <p>1班</p>
      <p>2014级</p>
    </div>
      <div class="buttonDiv">
        <div class="pwdBtnDiv">
          <button type = "button" class="pwdBtn" style="background-color: #c92c49;" @click="changePassword">
            <span class="BtnFont">修改密码</span></button>
        </div>
        <div class="infoBtnDiv">
          <button type = "button" class="infoBtn" style="background-color: #03b3ff;" @click="changeInfo">
            <span class="BtnFont">修改信息</span></button>
        </div>
        <div class="quitBtnDiv">
          <button type = "button" class="quitBtn" style="background-color: #ffa53b;" @click="quitUser">
            <span class="BtnFont">注销</span></button>
        </div>
      </div>
  </div>
</template>

<script>
  import { Icon } from 'vux'

export default {
    name: 'information',
    components: { Icon },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      back () {
        this.$router.push({name: 'homePage'})
      },
      changePassword () {
        this.$router.push({name: 'modifyPassword'})
      },
      changeInfo () {
        this.$router.push({name: 'modifyInfo'})
      },
      quitUser () {
        this.$router.push({name: 'firstPage'})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weui-icon-waiting{
    color: white;
  }
  .main{
    position: relative;
  }
  .card{
    width: 100vw;
  }
  .arrow{
    position: absolute;
    top: 10px;
    background-size: 100%;
    width: 25px;
    height: 25px;
    margin: 10px;
  }
  .bottomDiv{
    position: absolute;
    top: 46%;
    left: 20%;
    width: 62vw;
    height: 190px;
    border-radius:15px;
    background-color:rgba(255, 255, 255, 0.5);
  }
  .bottomDiv p{
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-family: 幼圆;
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
  .infoLogoDiv{
    position: absolute;
    font-family: 微软雅黑;
    color: white;
    top:40%;
    left:47%;
  }
  .logoFontDiv h1{
    font-size: 32px;
  }
  .pwdBtnDiv{
    position: absolute;
    bottom: 0;
    left:0%;
  }
  .infoBtnDiv{
    position: absolute;
    bottom: 0;
    left:33.3%;
  }
  .quitBtnDiv{
    position: absolute;
    bottom: 0;
    right:0%;
  }
  .buttonDiv button{
    height: 45px;
    width: 33.3vw;
    opacity: 0.7;
    border: none;
  }
  .BtnFont{
    font-size: 12px;
    text-align: center;
    color: white;
    font-family: 幼圆;
  }

</style>
