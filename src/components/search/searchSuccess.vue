<template>
  <div class="main">
    <img class="card" src= "../../assets/searchSuccess.jpg" />
    <img class="arrow" @click="back" src= "../../assets/arrow2.png" />
    <div class="successBtnDiv">
      <button type = "button"><p style="font-size: 46px;font-family: 隶书;" class="BtnFont">签到成功</p></button>
    </div>
    <div class="qqq">
      <div class="line animated"></div>
      <div class="line2 animated"></div>
    </div>
    <div class="bottomDiv">
        <p>姓名：李白</p>
        <p>学号：140202011010</p>
        <p>教师：杜甫</p>
        <p>课程：专业英语</p>
        <p>时间：12.11 15:45</p>
      <hr style="clear: both">
      <h2>正常出席</h2>
    </div>
    <div class="bottomBtnDiv">
      <button type = "button" @click="goHmoe"><p class="BtnFont">返回主页</p></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchSuccess',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    back () {
      this.$router.push({name: 'search'})
    },
    goHmoe () {
      this.$router.push({name: 'homePage'})
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
    left: 10%;
    width: 82vw;
    height: 280px;
    border-radius:25px;
    background-color:rgba(255, 255, 255, 0.3);
  }
  .bottomDiv p{
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-family: 幼圆;
    text-align: justify;
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
    margin: 0px;
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
  .successBtnDiv{
    position: absolute;
    top:10%;
    left:20%;
  }
  .successBtnDiv button{
    height: 80px;
    width: 62vw;
    border-radius:20px;
    background-color: #03b3ff;
    border: none;
  }
  .qqq{
    width:200px;
    height:200px;
    position:absolute;
    top: 20%;
  }
  .line{
    height:3px;
    width:200px;
    background:white;
    position:absolute;
    top:20px;
    left:52vw;
    -webkit-transform:rotate(36deg);
    animation:mymove 5s infinite;
    -webkit-animation:mymove 5s infinite; /* Safari 和 Chrome */
    -moz-transform-origin: 0% 0%;
    -webkit-transform-origin:0% 0%;
    -o-transform-origin:0% 0%;
    transform-origin:0% 0%;
  }
  .line2{
    height:3px;
    width:200px;
    background:white;
    position:absolute;
    top:20px;
    left:52vw;
    -webkit-transform:rotate(144deg);
    animation:mymove 5s infinite;
    -webkit-animation:mymove 5s infinite; /* Safari 和 Chrome */
    -moz-transform-origin: 0% 0%;
    -webkit-transform-origin:0% 0%;
    -o-transform-origin:0% 0%;
    transform-origin:0% 0%;
  }
  @keyframes mymove
  {
    from {width:0px;}
    to {width:90%}
  }
  @-webkit-keyframes mymove /*Safari and Chrome*/
  {
    from {width:0px;}
    to {width:140px;}
  }
</style>
