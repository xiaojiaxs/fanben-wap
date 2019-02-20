<template>
  <div id="container">
    <div id="order-list">
      <!-- nav -->
      <div class="tab-wrapper">
        <div class="tab clearfix">
          <div @click="dealSelected(1)" :class="{sel:navIndex==1}" class="nav">全部</div>
          <div @click="dealSelected(2)" :class="{sel:navIndex==2}" class="nav">待发货</div>
          <div @click="dealSelected(3)" :class="{sel:navIndex==3}" class="nav">待收货</div>
        </div>
      </div>
      <!-- 列表 -->
      <!-- 全部 -->
      <div class="order-list" v-if="navIndex==1">
        <div class="no-store-list">
          <div class="icon">
            <img src="https://s1.ricebook.com/feck/web-order/d82c7d915279988e25e6334337136083.png">
          </div>
          <p style>暂无订单，移步首页去逛逛吧~</p>
          <router-link to="/index" class="back-btn" style>去首页</router-link>
        </div>
      </div>
      <!-- 待发货 -->
      <div class="order-list" v-if="navIndex==2">
        <div class="no-store-list">
          <div class="icon">
            <img src="https://s1.ricebook.com/feck/web-order/d82c7d915279988e25e6334337136083.png">
          </div>
          <p style>没有待发货的订单</p>
        </div>
      </div>
      <!-- 待收货 -->
      <div class="order-list" v-if="navIndex==3">
        <div class="no-store-list">
          <div class="icon">
            <img src="https://s1.ricebook.com/feck/web-order/d82c7d915279988e25e6334337136083.png">
          </div>
          <p style>没有待收货的订单</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      navIndex: 1
    };
  },

  created() {},
  mounted() {},
  methods: {
    dealSelected(index) {
      this.navIndex = index;
    }
  },
  computed: {},
  watch: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#order-list {
  min-height: 100vh;
}
/* nav */
#order-list .tab-wrapper {
  height: 102px;
  background: #fff;
  font-family: PingFangSC-Medium;
  border-bottom: 1px solid #d8d8d8;
  overflow: hidden;
}
#order-list .tab-wrapper .tab {
  float: left;
  white-space: nowrap;
  position: relative;
  transition: transform 0.3s;
}

.clearfix {
  overflow: auto;
}
#order-list .tab-wrapper .tab .nav.sel {
  color: #2c3038;
  border-bottom: 4px solid #2c3038;
}

#order-list .tab-wrapper .tab .nav {
  display: inline-block;
  width: 102px;
  overflow: hidden;
  text-align: center;
  font-size: 28px;
  color: #8c8c8c;
  margin: 0 24px;
  padding: 28px 0 24px 0;
}

/* 列表 */
#order-list .order-list {
  width: 100%;
}
#order-list .no-store-list {
  width: 690px;
  margin: 270px auto 0;
  padding: 40px 0;
  text-align: center;
  font-size: 28px;
  color: #8c8c8c;
  background-color: white;
}
#order-list .no-store-list .icon {
  width: 120px;
  height: 120px;
  margin: 0 auto;
}
#order-list .no-store-list p {
  margin: 30px auto;
  width: 490px;
  font-size: 30px;
}
#order-list .no-store-list .back-btn {
  font-size: 30px;
  width: 240px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #1a1a1a;
  margin: 0 auto;
  display: block;
  color: #8c8c8c;
}

</style>
