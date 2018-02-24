<template>
  <div class="main">
    <img class="card" src= "../../assets/registerBG.jpg" />
    <img class="arrow" @click="back" src= "../../assets/arrow2.png" />
    <div class="bottomDiv register">
      <div class="logoDiv">
        <icon type="waiting" is-msg></icon>
      </div>
      <div class="logoFontDiv">
        <h1>点点到</h1>
      </div>
      <div class="infoLogoDiv">
        <p style="font-size: 16px">信息</p>
      </div>
      <div style="position: absolute;top: 46%;left: 20%;">
        <input type="text" placeholder="姓名">
      </div>
      <div style="position: absolute;top: 53%;left: 20%;">
        <!--<input type="text" placeholder="学院">-->
        <popup-picker title=" " :data="colleges" v-model="college" @on-change="" placeholder="学院"></popup-picker>
      </div>
      <div style="position: absolute;top: 60%;left: 20%;">
        <!--<input type="text" placeholder="专业">-->
        <popup-picker title=" " :data="majors" v-model="major" @on-change="" placeholder="专业"></popup-picker>
      </div>
      <div style="position: absolute;top: 67%;left: 20%;">
        <!--<input type="text" placeholder="班级">-->
        <popup-picker title=" " :data="classes" v-model="class1" @on-change="" placeholder="班级"></popup-picker>
      </div>
      <div style="position: absolute;top: 74%;left: 20%;">
        <!--<input type="text" placeholder="年级">-->
        <datetime v-model="grade" format="YYYY" @on-change="" placeholder="年级"></datetime>
      </div>

      <div class="registerBtnDiv">
        <button type = "button" class="loginBtn" @click=""><span class="BtnFont">确定</span></button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon, PopupPicker, Datetime, Group } from 'vux'
export default {
    name: 'modifyInfo',
    components: {
      Icon,
      PopupPicker,
      Datetime,
      Group
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        college: [],
        colleges: [['计算机学院', '会计与金融学院', '外语学院', '机械与能源学院', '航空学院', '其他']],
        major: [],
        majors: [['软件工程', '网络工程', '数字媒体', '其他']],
        class1: [],
        classes: [['1班', '2班', '3班', '国际班']],
        grade: ''
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
  .infoLogoDiv{
    position: absolute;
    font-family: 微软雅黑;
    color: white;
    top:40%;
    left:46%;
  }
  .registerBtnDiv{
    position: absolute;
    top:86%;
    left:20%;
  }
  .registerBtnDiv button{
    height: 38px;
    width: 62vw;
    background-color: #c92c49;
    opacity: 0.6;
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
  .bottomDiv input{
    border: 1px solid #ccc;
    padding: 7px 0px;
    padding-left:10px;
    padding-right: 10px;
    height: 22px;
    width: 56vw;
    opacity: 0.4;
    background-color: white;
    font-size: 16px;
    font-family: 微软雅黑;
    text-align: center;
    color: #777777;
  }
  .bottomDiv input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
  .bottomDiv input::-webkit-input-placeholder{
    text-align: center;
    font-size: 16px;
  }
</style>
<style>
  .register .vux-cell-primary{
    border: 1px solid #ccc;
    padding: 7px 0px;
    padding-left: 10px;
    padding-right: 10px;
    height: 36px;
    width: 56vw;
    opacity: 0.4;
    background-color: white;
    font-size: 16px !important;
    font-family: 微软雅黑;
    text-align: center;
    padding: 0px 10px;
  }
  .register .vux-popup-picker-select{
    text-align: center !important;
    font-size: 16px;
  }
  .register .vux-cell-box:before{
    border: none;
  }
  .register .vux-popup-picker-placeholder {
    font-family: 微软雅黑;
    color: black;
  }
  .register .vux-cell-placeholder{
    text-decoration:none !important;
    opacity: 0.8;
    vertical-align: sub;
  }
  .register .vux-datetime{
    text-decoration:none !important;
    cursor: none !important;
    font-size: 16px;
    color: #777777;
  }
  .register .weui-cell__ft:after{
    opacity: 0 !important;
  }
  .register .weui-cell{
    padding: 0px;
  }
  .register .vux-popup-picker-value{
    vertical-align: sub;
  }
  .register .vux-cell-value{
    vertical-align: sub;
  }
</style>
