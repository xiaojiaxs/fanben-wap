<template>
  <div class="tabbar">
    <router-link to="/index">
      <span class="index" id="index"></span>
    </router-link>
    <router-link to="/discovery">
      <span class="discovery" id="discovery"></span>
    </router-link>
    <router-link :to="this.$store.getters.getIsLogin?'/invite':'/login'">
      <span class="invite" id="invite"></span>
    </router-link>
    <router-link :to="this.$store.getters.getIsLogin?'/mine':'/login'">
      <span class="mine" id="mine"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar {
  width: 750px;
  height: 98px;
  background-color: #fff;
  border-top: 1px solid #d8d8d8;

  position: fixed;
  left: 50%;
  margin-left:-375px;
  bottom: 0;
  z-index: 10;

  display: flex;
  justify-content: space-around;
  align-items: center; /*垂直居中*/
}
.tabbar a {
  display: block;
}
#index,
#discovery,
#invite,
#mine {
  display: block;
  width: 40px;
  height: 40px;
  background-size: 40px 40px;
}
.index {
  background: url(../../assets/img/index.png);
}
.discovery {
  background: url(../../assets/img/discovery.png);
}
.invite {
  background: url(../../assets/img/invite.png);
}
.mine {
  background: url(../../assets/img/mine.png);
}
.router-link-active .index {
  background: url(../../assets/img/index_on.png);
}
.router-link-active .discovery {
  background: url(../../assets/img/discovery_on.png);
}
.router-link-active .invite {
  background: url(../../assets/img/invite_on.png);
}
.router-link-active .mine {
  background: url(../../assets/img/mine_on.png);
}
</style>
