<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.main-app {
  font-size: 32px;
  padding-top: 88px;
}
/* 预加载 */
.scroll-loading {
    position: absolute;
    width: 100%;
    height: 100%;
}
.scroll-loading img{
  position: absolute;
  left:50%;
  top:50%;
  margin-left:-30px;
  margin-top:-30px;
}
</style>
