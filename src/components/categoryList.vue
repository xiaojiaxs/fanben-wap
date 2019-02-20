<template>
  <div class="main-app">
    <navbar></navbar>
    <!-- 预加载 -->
    <div class="scroll-loading" v-if="isLoading">
      <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
    </div>
    <!-- 内容 -->
    <div id="category" v-if="!isLoading">
      <!-- 列表过滤 -->
      <div class="category-header">
        <div class="category-wrapper">
          <a class="category-tab">全部</a>
          <a class="sort-tab" @click="dealShowCategoryPanel">
            {{showConfirmName?showConfirmName:'智能排序'}}
            <span
              class="dir"
              :class="{show:isShowCategoryPanel!=false}"
            ></span>
          </a>
        </div>
        <div class="category-panel" v-if="isShowCategoryPanel">
          <a
            v-for="(item,index) in subList"
            :key="index"
            @click="dealConfirm(item.sort_name,item.sort_id)"
            :class="{on:item.sort_id==showConfirmId}"
          >{{item.sort_name}}</a>
        </div>
      </div>
      <!-- 列表 -->
      <ul class="category-list">
        <li class="clearfix" v-for="(item,index) in list" :key="index">
          <router-link to="/product">
            <img :src="item.product_image">
            <div class="desc">
              <p class="sub-title">{{item.name}}</p>
              <p class="price">
                <span>{{item.price | deleteZero}}元/{{item.show_entity_name}}</span>
                <span class="o-price">¥{{item.original_price | deleteZero}}</span>
              </p>
              <p class="location clearfix"></p>
            </div>
          </router-link>
        </li>
      </ul>
      <!-- 加载更多 -->
      <!-- <div class="scroll-loading">
        <img src="../assets/img/loading.gif">
      </div>-->
      <!-- 底部区域 -->
      <div class="page-footer">
        <p>© 2016 ENJOY</p>
        <p>京ICP备12040847</p>
        <p>京公网安备11010502025574 京ICP证150031号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryList",
  data() {
    return {
      isLoading: true,
      list: [],
      subList: [],
      isShowCategoryPanel: false, //是否显示列表过滤
      showConfirmName: "", //保存确认的排序方式
      showConfirmId: 1 //保存确认的排序方式Id,默认位1，智能排序
    };
  },

  created() {
    //下载分类列表数据
    this.request.getCategoryProductList({}, data => {
      //console.log(data)
      this.list = data;
    });
    //下载分类列表过滤数据
    this.request.getSubCategory({}, data => {
      //console.log(data)
      this.subList = data.sort;
      this.isLoading = false;
    });
  },
  mounted() {},
  methods: {
    //排序方式是否显示
    dealShowCategoryPanel() {
      this.isShowCategoryPanel = !this.isShowCategoryPanel;
    },
    //选择排序方式
    dealConfirm(name, id) {
      this.showConfirmName = name;
      this.showConfirmId = id;
      this.isShowCategoryPanel = false;
    }
  },
  computed: {},
  watch: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#category {
  background-color: #fff;
  width: 750px;
  margin: 0 auto;
}
/* 列表过滤 */
#category .category-header {
  position: relative;
  font-size: 26px;
  color: #2c3038;
  border-bottom: 1px solid #e6e6e6;
}
#category .category-header .category-wrapper {
  padding: 22px 0;
}
#category .category-header .category-tab {
  float: left;
  width: 374px;
  border-right: 1px solid #bdc0c5;
}
#category .category-header .sort-tab {
  width: 100%;
}
#category .category-header a {
  color: #2c3038;
  text-align: center;
  display: block;
}
#category .category-header .category-wrapper .dir {
  width: 0;
  height: 0;
  font-size: 0;
  vertical-align: 2px;
  display: inline-block;
  margin-left: 10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #000;
  border-bottom: none;
}
#category .category-header .category-wrapper .dir.show {
  border-top: none;
  border-bottom: 10px solid #000;
}
#category .category-header .category-panel {
  position: absolute;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  top: 81px;
  text-align: center;
}
#category .category-header .category-panel .on {
  color: #ff3939;
  background-color: #fafafa;
}
#category .category-header .category-panel a {
  display: block;
  width: 100%;
  padding: 22px 0;
  border-top: 1px solid #e6e6e6;
}
/* 列表 */
#category .category-list li {
  padding: 30px;
  border-bottom: 1px solid #e6e6e6;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
#category .category-list li img {
  float: left;
  width: 345px;
  height: 230px;
  vertical-align: top;
  margin-right: 20px;
}
#category .category-list li .desc {
  position: relative;
  float: left;
  width: 320px;
  height: 230px;
  overflow: hidden;
}
#category .category-list li .desc .sub-title {
  font-family: PingFangSC-Medium;
  height: 120px;
  line-height: 1.3;
  font-size: 30px;
  color: #2c3038;
  margin-bottom: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
}
#category .category-list li .desc .price {
  font-size: 30px;
  color: #ff3939;
}
#category .category-list li .desc .price .o-price {
  margin-left: 12px;
  text-decoration: line-through;
  color: #92969c;
}
#category .category-list li .desc .location {
  position: absolute;
  width: 100%;
  bottom: 0;
  font-size: 24px;
  color: #92969c;
}
/* 加载更多 */
/* .scroll-loading {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 30px auto;
} */
/* 底部 */
.page-footer {
  position: relative;
  font-size: 22px;
  font-weight: 300;
  color: #92969c;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #f6f6f6;
  padding: 60px 0 120px;
}
</style>
