<template>
  <div class="main">
    <router-view></router-view>
    <img v-if="!uType" class="card" src= "../../assets/searching.jpg" />
    <img v-if="uType" class="card" src= "../../assets/searched.jpg"/>
    <img class="arrow" @click="back" src= "../../assets/arrow2.png" />
      <div class="spinner" v-if="!uType">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    <div class="infoDiv">
      <p v-if="!uType">正在搜索信号，请稍候...</p>
      <p v-else>已获取信号，请签到！</p>
    </div>
    <div class="bottomDiv">
      <div class="signBtnDiv">
        <button type = "button" class="signBtn" :class="{'signBtnType': uType }" @click="userSign">
          <p class="BtnFont" :class="{'signFontType': uType }">签到</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      uType: false
    }
  },
  methods: {
    back () {
      this.$router.push({name: 'homePage'})
    },
    userSign () {
      this.$router.push({name: 'searchSuccess'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .bottomDiv button{
    width: 110px;
    height: 110px;
    border-radius:50%;
    border: none;
  }
  .signBtn{
    background-color: white;
    opacity: 0.5;
  }
  .signBtnDiv{
    position: absolute;
    bottom:8%;
    left: 35vw;
    opacity: 0.9;
  }
  .signBtnType{
    background-color: #03b3ff;
    opacity: 1;
  }
  .signFontType{
    color: white !important;
  }
  .timeDiv h1{
    margin: 5px 0px;
  }
  .timeDiv span{
    font-size: 25px;
  }
  .timeDiv p{
    margin: 10px 0px;
    font-size: 1px;
  }
  .infoDiv{
    position: absolute;
    top: 65%;
    left: 20%;
    width: 56vw;
    height: auto;
    padding: 0px 10px;
    border-radius:25px;
    background-color:rgba(255, 255, 255, 0.4);
  }
  .infoDiv p{
    color: white;
    font-family: 幼圆;
    text-align: center;
  }
  .BtnFont{
    font-size: 22px;
    text-align: center;
    vertical-align: middle;
    margin: 10px 0px;
    color: #8C8C8C;
    font-weight: bold;
    font-family: 隶书;
  }
  /*加载动画*/
  .spinner {
    position: absolute;
    top: 5%;
    left: 42%;
    margin: 100px auto;
    width: 60px;
    height: 60px;
    text-align: center;
    font-size: 10px;
  }
  .spinner > div {
    background-color: white;
    height: 100%;
    width: 6px;
    display: inline-block;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
         transform: scaleY(1.0);
         -webkit-transform: scaleY(1.0);
       }
  }
</style>
