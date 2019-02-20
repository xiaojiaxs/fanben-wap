<template>
  <div class="navbar">
    <div class="navbar-top">
      <!-- 左侧 -->
      <div class="left navbar-item">
        <a v-if="$route.path=='/index'" @click="$router.push('/category')">分类</a>
        <a v-if="$route.path!='/index'" @click="$router.push('/index')">首页</a>
      </div>
      <!-- 中间 -->
      <div class="middle navbar-item">
        <img id="logo" src="../../assets/img/logo.png" alt="ENJOY">
        <span id="city" @click="isShowCitys=!isShowCitys">{{$store.getters.getSelectCity.nm}}</span>
      </div>
      <!-- 右侧 -->
      <div class="right navbar-item">
        <a
          class="item-search"
          @click="$router.push('/login')"
          v-if="this.$store.getters.getIsLogin!=1"
        >登录</a>
        <a
          class="iconfont item-user"
          v-if="this.$store.getters.getIsLogin==1"
          @click="dealShowPanel(1)"
        ></a>
        <a class="iconfont item-search" @click="dealShowPanel(2)"></a>
      </div>
      <!-- 搜索区域 -->
      <div class="search-panel" v-if="isShowPanel==2">
        <input type="text" placeholder="搜索本地精选 / 快递到家" v-model="keyword">
        <button @click="dealSearch">搜索</button>
      </div>
      <!-- 城市选择 -->
      <div class="citys" v-show="isShowCitys">
        <p class="title">本地服务开通城市</p>
        <div class="city-wrapper clearfix">
          <a @click="dealSelectCity($event)" data-nm="上海">上海</a>
          <a @click="dealSelectCity($event)" data-nm="北京">北京</a>
          <a @click="dealSelectCity($event)" data-nm="南京">南京</a>
          <a @click="dealSelectCity($event)" data-nm="天津">天津</a>
          <a @click="dealSelectCity($event)" data-nm="广州">广州</a>
          <a @click="dealSelectCity($event)" data-nm="成都">成都</a>
          <a @click="dealSelectCity($event)" data-nm="杭州">杭州</a>
          <a @click="dealSelectCity($event)" data-nm="深圳">深圳</a>
          <a @click="dealSelectCity($event)" data-nm="苏州">苏州</a>
          <a @click="dealSelectCity($event)" data-nm="西安">西安</a>
          <a @click="dealSelectCity($event)" data-nm="重庆">重庆</a>
          <a @click="dealSelectCity($event)" data-nm="长沙">长沙</a>
        </div>
      </div>
      <!-- 登录成功区域 -->
      <div class="logined-panel" v-if="isShowPanel==1">
        <router-link to="/order">我的订单</router-link>
        <router-link to="/account">我的礼券</router-link>
        <a @click="dealLogout">登出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {
      isShowCitys: false, //是否显示城市选择
      isShowPanel: 0, //0默认不显示，1登录状态显示，2搜索框显示
      keyword: ""
    };
  },
  methods: {
    //搜索
    dealSearch() {
      if (this.$route.path != "/search") {
        this.$router.push("/search/"+this.keyword);
      } else {
        location.reload();
      }
    },
    dealShowPanel(index) {
      if (this.isShowPanel == index) {
        this.isShowPanel = 0;
      } else {
        this.isShowPanel = index;
      }
    },
    //城市选择
    dealSelectCity(event) {
      var nm = event.target.dataset.nm;

      //console.log(nm)
      var city = {
        nm: nm
      };

      //设置选择的城市
      this.$store.commit("setSelectCity", city);

      //存储到localStore
      var saveData = {
        expire_data: Date.now().toString(),
        data: city
      };
      localStorage.fanben_cityConfirm = JSON.stringify(saveData);

      //返回进入之前的界面
      this.isShowCitys = false;
    },
    //真正退出
    dealLogout() {
      this.isShowPanel = 0;
      //服务器退出
      var user = JSON.parse(localStorage.fanben_user);
      this.request.postUserLogoutUrl(
        {
          userId: user.id,
          token: user.token
        },
        data => {
          if (data.status == 0) {
            //console.log(1)
          }
        }
      );

      //本地退出，清除localStorage
      localStorage.removeItem("fanben_isLogin");
      localStorage.removeItem("fanben_user");

      //设置store.js中的登录状态
      this.$store.commit("setIsLogin", false);
      this.isShowLoginedPanel = false;
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 100%;
  height: 88px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.navbar-top {
  width: 750px;
  height: 88px;
  background-color: #000;
  color: #fff;
  margin: 0 auto;
}
.navbar-top a {
  color: #fff;
}
.navbar-item {
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 250px;
  height: 88px;
  float: left;
}
.left {
  line-height: 88px;
  padding-left: 35px;
  font-size: 30px;
}
.middle {
  line-height: 88px;
  padding-top: 17px;
  position: relative;
  width: 250px;
  padding-left: 45px;
}
#city {
  font-family: STHeitiSC-Light;
  font-size: 20px;
  position: absolute;
  height: 88px;
  top: 7px;
  left: 185px;
  display: block;
}
#city::after {
  content: "";
  border: 12px solid #fff;
  border-bottom: 12px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  width: 0;
  height: 0;
  display: block;
  position: absolute;
  right: -15px;
  top: 40px;
}
.right {
  float: right;
  text-align: right;
  width: 230px;
}
.right .item-search {
  padding-left: 20px;
  font-size: 32px;
}
.header-top .right .item-user {
  padding-right: 20px;
}
.iconfont {
  font-family: iconfont !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
}

.right a {
  height: 88px;
  font-size: 30px;
  display: inline-block;
  text-align: center;
  line-height: 88px;
  padding: 0 30px;
}
/* 搜索区域 */
.search-panel {
  position: absolute;
  top: 88px;
  width: 690px;
  height: 80px;
  background-color: #fff;
  font-size: 0;
  padding: 15px 30px;
  margin: 0 auto;
  z-index: 99;
}
.search-panel::after {
  content: "";
  position: absolute;
  border: 20px solid #fff;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  right: 26px;
  top: -38px;
}
input[type="text"] {
  font-size: 28px;
  padding: 20px 30px;
  background-color: #f2f3f4;
  width: 540px;
  border: none;
  border-radius: 0;
}
button {
  font-size: 30px;
  border: none;
  background-color: #fff;
  width: 90px;
  height: 80px;
  text-align: right;
}
/* 城市选择 */
.citys {
  position: fixed;
  top: 88px;
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  z-index: 50;
}
.citys .title {
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #1a1a1a;
  margin-top: 60px;
}
.clearfix {
  overflow: auto;
}
.citys .city-wrapper a {
  float: left;
  width: 210px;
  font-size: 26px;
  padding: 10px 0;
  border: 1px solid #1a1a1a;
  text-align: center;
  color: #1a1a1a;
  margin: 30px 30px 0 0;
}
/* 登录成功区域 */
.logined-panel {
  position: absolute;
  top: 88px;
  width: 224px;
  right: 0;
  text-align: center;
  background-color: #fff;
  z-index: 99;
}
.logined-panel a {
  float: left;
  width: 162px;
  height: 98px;
  line-height: 98px;
  margin: 0 35px;
  color: #2e2e2e;
  border-bottom: 2px solid #e6e6e6;
}
.logined-panel:after {
  content: "";
  position: absolute;
  border: 20px solid #fff;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  right: 108px;
  top: -38px;
  overflow: hidden;
}
</style>