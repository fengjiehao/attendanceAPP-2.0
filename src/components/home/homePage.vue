<template>
  <div class="main">
    <img class="card" src= "../../assets/homePage.jpg" />
    <div class="timeDiv">
      <h1>Wednesday</h1>
      <span>October</span>&nbsp;&nbsp;<span>18</span><sup style="font-size: 12px;">th</sup>
      <p>10月18日&nbsp;&nbsp;星期三</p>
    </div>
    <div class="bottomDiv">
      <div class="infoBtnDiv">
        <div class="infoBtn" @click="personal">
          <!--<img src="../../assets/user.png"/>-->
          <p class="BtnFont">个人信息</p>
        </div>
      </div>
      <div class="signBtnDiv">
        <div class="infoBtn" @click="signPage">
          <!--<img src="../../assets/sign.png"/>-->
          <p class="BtnFont">前往签到</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'homePage',
    data () {
      return {
      }
    },
    created() {
  },
    methods: {
      // 个人信息
      personal () {
        this.$router.push({name: 'personal'})
      },
      // 签到页面
      signPage () {
        this.$router.push({name: 'search'})
      },
    },
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
  .bottomDiv .infoBtn{
    width: 110px;
    height: 110px;
    border-radius:50%;
    background-color:rgba(255, 255, 255, 0.2);
    border: none;
  }
  .timeDiv{
    position: absolute;
    color: white;
    top:30px;
    left:50px;
    font-family: cursive;
  }
  .timeDiv h1{
    margin: 5px 0px;
    font-size: 42px;
  }
  .timeDiv span{
    font-size: 32px;
  }
  .timeDiv p{
    margin: 10px 0px;
    font-size: 14px;
  }
  .infoBtnDiv{
    position: absolute;
    bottom:15%;
    left:13%;
    opacity: 0.9;
  }
  .BtnFont{
    font-size: 22px;
    text-align: center;
    vertical-align: middle;
    padding: 40px 0px;
    color: white;
    font-weight: bold;
    font-family: 隶书;
  }
  .signBtnDiv{
    position: absolute;
    bottom:15%;
    right:13%;
    opacity: 0.9;
  }

</style>
