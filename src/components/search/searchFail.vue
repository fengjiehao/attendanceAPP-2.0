<template>
  <div class="main">
    <img class="card" src= "../../assets/searchFail.jpg" />
    <img class="arrow" @click="back" src= "../../assets/arrow2.png" />
    <div class="failBtnDiv">
      <button type = "button"><p style="font-size: 46px;font-family: 隶书;" class="BtnFont">签到失败</p></button>
    </div>
    <div class="bottomDiv">
      <p>网络错误</p>
      <p>请重新签到！</p>
    </div>
    <div class="bottomBtnDiv">
      <button type = "button" @click="signAgain"><p class="BtnFont">重新签到</p></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchFail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    back () {
      this.$router.push({name: 'search'})
    },
    signAgain () {
      this.$router.push({name: 'search'})
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
    top: 36%;
    left: 20%;
    width: 62vw;
    height: 110px;
    border-radius:25px;
    background-color:rgba(255, 255, 255, 0.3);
  }
  .bottomDiv p{
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-family: 幼圆;
    text-align: center;
    margin: 22px 22px;
  }
  .bottomDiv h2{
    text-align: center;
    color: #ffa53b;
  }
  .buttonDiv button{
    height: 45px;
    width: 33.3vw;
    opacity: 0.7;
    border: none;
  }
  .BtnFont{
    font-size: 16px;
    text-align: center;
    vertical-align: middle;
    margin: 10px;
    color: white;
  }
  .bottomBtnDiv{
    position: absolute;
    top:85%;
    left:36%;
  }
  .bottomBtnDiv button{
    height: 41px;
    width: 30vw;
    border-radius:20px;
    background-color: #ffa53b;
    border: none;
  }
  .failBtnDiv{
    position: absolute;
    top:10%;
    left:20%;
  }
  .failBtnDiv button{
    height: 80px;
    width: 62vw;
    border-radius:20px;
    background-color: #d1193a;
    border: none;
  }
</style>
