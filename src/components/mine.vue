<template>
  <div class>
    <!-- 预加载 -->
      <div class="scroll-loading" v-if="isLoading">
        <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
      </div>
    <!-- 内容 -->
    <div class="mine" v-if="!isLoading">
      <!-- 个人信息 -->
      <div class="avatar">
        <img
          class="avatar-img"
          src="https://image.ricebook.com/avatar/1?imageView2/1/w/140/h/140"
          style="width: 140px; height: 140px;"
        >
        <h4>ENJOY_7mfwLFYY</h4>
        <p class="mem-level"></p>
      </div>
      <!-- 会员权益 -->
      <div class="nav-panel">
        <div class="hy" v-if="center.member">
          <h3>{{center.member.data.title}}</h3>
          <a href="javascript:;" class="hy-go">{{center.member.data.re_name}}</a>
          <p class="hy-intro">{{center.member.data.sub_title}}</p>
          <a href="javascript:;">
            <ul class="hy-icon">
              <li
                @click="$router.push('/member')"
                v-for="(item,index) in center.member.data.list"
                :key="index"
              >
                <img :src="item.img">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </a>
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="nav-panel">
        <div class="nav-item">
          <router-link to="/order">
            <span>我的订单</span>
          </router-link>
        </div>
      </div>
      <!-- 我的优惠券 -->
      <div class="nav-panel">
        <div class="nav-item">
          <router-link to="/coupon">
            <span>我的优惠券</span>
          </router-link>
        </div>
      </div>
      <!-- 地址管理 -->
      <div class="nav-panel">
        <div class="nav-item">
          <a href="javascript:;">
            <span>地址管理</span>
          </a>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      center: {},
      isLoading:true
    };
  },

  created() {
    //下载个人中心数据
    this.request.getCenterList({}, data => {
      //console.log(data);
      this.center = data;
      this.isLoading=false
    });
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine {
  background-color: #f6f6f6;
  padding-bottom: 200px;
  width: 750px;
  margin: 0 auto;
}
/* 个人信息 */
.avatar {
  width: 750px;
  height: 398px;
  background: url(https://passport.ricebook.com/9013f951f15c2f7cd0ad4f526adb0007.png)
    0 0 no-repeat;
  text-align: center;
  color: #fff;
  font-size: 32px;
  position: relative;
}
.avatar .avatar-img {
  border-radius: 50%;
  margin-top: 108px;
  margin-bottom: 20px;
}
.avatar h4 {
  line-height: 1;
}
.avatar .mem-level {
  font-size: 24px;
  margin-top: 20px;
}
/* 会员权益 */
.nav-panel {
  font-size: 0;
  margin-top: 18px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.hy {
  font-size: 24px;
  padding: 40px;
  position: relative;
  line-height: 1;
}
.hy h3 {
  font-size: 35px;
  font-weight: 400;
  color: #2c3038;
}
.hy .hy-go {
  color: #fba700;
  position: absolute;
  right: 40px;
  top: 52px;
}
.hy .hy-intro {
  color: #92969c;
  margin-top: 12px;
}
.hy .hy-icon {
  margin-top: 40px;
  overflow: hidden;
  zoom: 1;
}
.hy .hy-icon li {
  width: 25%;
  float: left;
  box-sizing: border-box;
  color: #2c3038;
  text-align: center;
}
.hy .hy-icon li img {
  width: 96px;
  height: 96px;
  display: block;
  margin: 0 auto;
}
.hy .hy-icon li span {
  margin-top: 12px;
  font-size: 24px;
  display: inline-block;
}
/* 我的订单-我的优惠券-地址管理 */
.nav-panel .nav-item:first-child {
  border-top: none;
}
.nav-panel .nav-item {
  margin: 0 40px;
  padding-right: 40px;
  margin-right: 0;
  font-size: 30px;
  border-top: 1px solid #e0e0e0;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDkxOTcxMDcxNjI0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzODkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5wYXRoe2ZpbGw6I2JkYzBjNTt9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0Mi4xNzQyNTMgNTA0LjU5NDE4QzY1MC4xNjQ0MzkgNTExLjgzNTI4NyA2NTAuMDcwODg2IDUyMi4xNzQyNTMgNjQxLjg0MDA5IDUyOS4zNzYxOThMMzMyLjYxODU2OSA3OTkuOTQ1MDNDMzIzLjc1MTY1NCA4MDcuNzAzNTgyIDMyMi44NTMxNDggODIxLjE4MTE4NCAzMzAuNjExNjk3IDgzMC4wNDgwOTggMzM4LjM3MDI0OSA4MzguOTE1MDEyIDM1MS44NDc4NTEgODM5LjgxMzUxOSAzNjAuNzE0NzY1IDgzMi4wNTQ5N0w2NjkuOTM2Mjg4IDU2MS40ODYxMzhDNjk3LjM2NDg2IDUzNy40ODYxMzggNjk3LjcyNzk1MyA0OTcuMzU4ODYxIDY3MC44MjU3NDcgNDcyLjk3ODczN0wzNjAuOTkyNDE0IDE5Mi4xOTIyNzhDMzUyLjI2MjA1IDE4NC4yODAzODYgMzM4Ljc3MDgzNyAxODQuOTQzODg5IDMzMC44NTg5NDQgMTkzLjY3NDI1MiAzMjIuOTQ3MDUzIDIwMi40MDQ2MTYgMzIzLjYxMDU1NiAyMTUuODk1ODI5IDMzMi4zNDA5MTkgMjIzLjgwNzcyM0w2NDIuMTc0MjUzIDUwNC41OTQxOFoiIHAtaWQ9IjIzOTAiPjwvcGF0aD48L3N2Zz4=)
    640px no-repeat;
  background-size: 40px;
  color: #2c3038;
}
.nav-panel .nav-item a {
  padding: 30px 0;
  color: #2c3038;
  display: block;
}
</style>
