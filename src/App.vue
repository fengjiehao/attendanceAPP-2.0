<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
img {
  width: 100vw;
}
html, body {
  overflow-x: hidden;
  margin: 0px;
  background-color: black;
}
</style>
