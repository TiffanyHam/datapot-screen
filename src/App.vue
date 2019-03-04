<template>
  <div id="app" style="width: 100%;height: 100%;">
      <router-view></router-view>  <!--渲染容器，组件在这里实现切换-->
  </div>
</template>

<style>
html, body, .box{
  width:100%;
  height:100%;
}
.box{
  background:url(./assets/images/bg.png) no-repeat;
  background-size:100% 100%;
  overflow:hidden;
}
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
