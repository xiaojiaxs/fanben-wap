<template>
  <div class="main-app">
    <navbar></navbar>
    <div class="index-entrance">
      <!-- 预加载 -->
      <div class="scroll-loading" v-if="isLoading">
        <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
      </div>
      <!-- 列表 -->
      <div class="list" v-if="!isLoading">
        <div class="index-list" v-for="(item,index) in list" :key="index">
          <h3>{{item.group_section.title}}</h3>
          <div class="date">{{item.group_section.desc}}</div>
          <ul class="sku-list" v-for="(tab,tabIndex) in item.tabs" :key="tabIndex">
            <li class="sku-item">
              <router-link to="/product">
                <img :src="tab.url" style="width: 670px; height: 446px;">
                <div class="title single-line-ellipsis">{{tab.title}}</div>
                <div class="desc single-line-ellipsis">{{tab.desc}}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [],
      isLoading:true
    };
  },

  created() {
    //下载首页数据
    this.request.getWeekChoiceList({}, data => {
      //console.log(data)
      this.list = data;
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
/* 列表 */
.index-entrance {
  padding-bottom: 140px;
}
.index-entrance .list {
  margin: 0 40px;
}
.index-list {
  width: 670px;
  padding-top: 60px;
  line-height: 1;
  margin: 0 auto;
}
.index-list h3 {
  font-size: 42px;
  font-weight: bolder;
  color: #2c3038;
}
.index-list .date {
  font-size: 24px;
  color: #ff3939;
  margin-top: 10px;
}
.index-list .sku-item {
  padding: 40px 0;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}
.index-list .sku-item .title {
  margin-top: 30px;
  font-size: 32px;
  color: #2c3038;
}
.index-list .sku-item .desc {
  margin-top: 16px;
  font-size: 22px;
  color: #92969c;
}
.single-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
