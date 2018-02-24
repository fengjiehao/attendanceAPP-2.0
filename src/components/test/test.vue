<template>
  <div class="main">
    <p>12345646596</p>
    <div >
      <group>
      <popup-picker title=" " :data="colleges" v-model="college" @on-change="" placeholder="学院"></popup-picker>

      <datetime v-model="grade" format="YYYY" @on-change="" placeholder="年级"></datetime>
      </group>
    </div>
    <p>世界点卡了简单介绍看来飞机开绿灯看v从 放大看撒地方恐怕死</p>
  </div>
</template>

<script>
  import {  PopupPicker,Datetime, Group  } from 'vux'
  export default {
    name: 'test',
    components: {
      Group,
      PopupPicker,
      Datetime},
    data () {
      return {
        college: [],
        colleges: [['计算机学院', '会计与金融学院', '外语学院', '机械与能源学院', '航空学院', '其他']],
        grade: ''
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
