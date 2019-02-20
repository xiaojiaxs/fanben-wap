<template>
  <div class>
    <!-- 预加载 -->
      <div class="scroll-loading" v-if="isLoading">
        <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
      </div>
    <!-- 内容 -->
    <div class="invite" v-if="!isLoading">
      <img :src="invite.banner_image" style="width: 750px; height: 246px;">
      <div class="desc">{{invite.description}}</div>
      <button class="invite-btn">即刻邀请</button>
      <div class="result">
        已成功邀请
        <span>0</span>位好友 | 获得
        <span>0</span>元礼券
      </div>
      <div class="progress">
        <div class="bar-box">
          <div class="bar" style="width: 0px;"></div>
        </div>
        <span class="spot" style="left: 42px;">1</span>
        <span class="spot" style="left: 98px;">5</span>
        <span class="spot" style="left: 168px;">10</span>
        <span class="spot" style="left: 350px;">25</span>
        <span class="spot" style="left: 700px;">50</span>
      </div>
      <ul class="invite-rules clearfix">
        <li>
          5人
          <span>
            额外奖励
            <em>100元</em>
          </span>
        </li>
        <li>
          10人
          <span>
            额外奖励
            <em>100元</em>
          </span>
        </li>
        <li>
          25人
          <span>
            额外奖励
            <em>750元</em>
          </span>
        </li>
        <li>
          50人
          <span>
            额外奖励
            <em>2000元</em>
          </span>
        </li>
      </ul>
      <div class="rewards">
        <div class="title">奖励明细</div>
        <ul></ul>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "invite",
  data() {
    return {
      invite: {},
      isLoading:true
    };
  },

  created() {
    //下载邀请数据
    this.request.getInvite({}, data => {
      //console.log(data);
      this.invite = data.result;
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
.invite {
  width: 750px;
  margin: 0 auto;
  padding-bottom: 60px;
}
.desc {
  width: 670px;
  margin: 60px 40px;
  font-size: 28px;
  line-height: 1.29;
  color: #63666b;
}
.invite-btn {
  margin: 0 auto;
  display: block;
  padding: 20px 60px;
  border-radius: 8px;
  background-color: #ff3939;
  font-size: 30px;
  text-align: center;
  color: #fff;
}
.result {
  margin: 80px auto 40px;
  color: #2c3038;
  font-size: 28px;
  text-align: center;
}
.result span {
  color: #ff3939;
  display: inline-block;
  padding: 0 5px;
}
.progress {
  position: relative;
  height: 150px;
}
.progress .bar-box {
  margin: 0 20px;
  width: 710px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  padding: 5px;
}
.progress .bar-box .bar {
  max-width: 700px;
  height: 30px;
  border-radius: 4px;
  background-color: #ff3939;
  transition: width 0.5s;
}
.progress .spot {
  display: block;
  position: absolute;
  top: 50px;
  color: #92969c;
  font-size: 26px;
}
.progress .spot:before {
  content: "";
  display: block;
  width: 0;
  height: 30px;
  border-right: 1px dotted #92969c;
  margin: 10px auto;
}
.invite-rules {
  margin: 0 40px;
  color: #92969c;
  font-size: 24px;
}
.clearfix {
  overflow: auto;
}
.invite-rules li {
  width: 100%;
  margin-top: 15px;
}
.invite-rules li span {
  display: block;
  float: right;
}
.invite-rules li span em {
  display: inline-block;
  width: 100px;
  font-style: normal;
  text-align: right;
}
.rewards {
  border-top: 1px solid #e0e0e0;
  position: relative;
  margin: 60px 40px;
  display: block;
}
.rewards .title {
  width: 165px;
  text-align: center;
  font-size: 26px;
  color: #92969c;
  position: absolute;
  top: -19px;
  left: 50%;
  margin-left: -84px;
  background-color: #fff;
}
</style>
