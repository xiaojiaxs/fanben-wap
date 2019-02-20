<template>
  <div class="main-app">
    <navbar></navbar>
    <!-- 预加载 -->
    <div class="scroll-loading" v-if="isLoading">
      <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
    </div>
    <!-- 列表 -->
    <div id="cate-list" v-if="!isLoading">
      <div class="cate-section" v-for="(item,index) in list" :key="index">
        <div class="caption">{{item.name}}</div>
        <div class="group">
          <div class="item" v-for="(tab,tabIndex) in item.sub_category_list" :key="tabIndex">
            <router-link to="/categoryList">{{tab.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      list: [],
      isLoading: true
    };
  },

  created() {
    //下载分类数据
    this.request.getClassifyList({}, data => {
      //console.log(data);
      this.list = data;
      this.isLoading = false;
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
#cate-list {
  width: 750px;
  margin: 0 auto;
}
#cate-list .caption {
  background-color: #f6f6f6;
  padding: 18px 40px;
  font-size: 30px;
  color: #1b1b20;
  text-align: left;
}
.group {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 33%;
  font-size: 28px;
  text-align: center;
  color: #2c3038;
  border: 1px solid #e4e5e7;
  box-sizing: border-box;
}
#cate-list .item a {
  display: table-cell;
  width: 1%;
  padding: 30px 0;
  color: #2c3038;
}
</style>
