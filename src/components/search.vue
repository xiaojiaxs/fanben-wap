<template>
  <div class>
    <navbar></navbar>
    <div class="main-app">
      <!-- 预加载 -->
      <div class="scroll-loading" v-if="isLoading">
        <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
      </div>
      <!-- 内容 -->
      <div id="search" v-if="!isLoading">
        <!-- 头部nav -->
        <div class="bento-tab none-bg">
          <div @click="dealSelected(1)" :class="{active:navIndex==1}" class="tab-item local">本地服务</div>
          <div @click="dealSelected(2)" :class="{active:navIndex==2}" class="tab-item express">全国送</div>
        </div>
        <!-- 搜索关键字 -->
        <div class="search-hint">
          <span>
            根据您的关键词
            <span>{{keyword}}</span> 为您推荐以下商品
          </span>
        </div>
        <!-- 列表 -->
        <!-- 本地服务 -->
        <div class="search-list" v-if="navIndex==1">
          <div
            @click="$router.push('/product')"
            class="search-cell"
            v-for="(item,index) in local.products"
            :key="index"
          >
            <img class="lazy" :src="item.product_image" style="width: 345px; height: 230px;">
            <div class="products-info">
              <div class="product-title">{{item.name}}</div>
              <div class="products-price">
                <div class="price">
                  <span class="num">{{item.price | deleteZero}}</span>
                  元/{{item.entity_name}}
                </div>
                <div
                  class="origin-price"
                  v-if="item.original_price"
                >￥{{item.original_price | deleteZero}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 全国送 -->
        <div class="search-list" v-if="navIndex==2">
          <div
            @click="$router.push('/product')"
            class="search-cell"
            v-for="(item,index) in express.products"
            :key="index"
          >
            <img class="lazy" :src="item.product_image" style="width: 345px; height: 230px;">
            <div class="products-info">
              <div class="product-title">{{item.name}}</div>
              <div class="products-price">
                <div class="price">
                  <span class="num">{{item.price | deleteZero}}</span>
                  元/{{item.entity_name}}
                </div>
                <div
                  v-if="item.original_price"
                  class="origin-price"
                >￥{{item.original_price | deleteZero}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      isLoading: true,
      navIndex: 1, //nav下标
      local: {}, //本地服务
      express: {}, //全国送
      keyword: this.$route.params.keyword
    };
  },

  created() {
    //下载本地服务数据
    var keyword = this.$route.params.keyword;
    this.request.getSearchList1(
      {
        keyword: keyword
      },
      data => {
        //console.log(data)
        this.local = data;
      }
    );
    //下载全国送数据
    this.request.getSearchList2(
      {
        keyword: keyword
      },
      data => {
        //console.log(data)
        this.express = data;
        this.isLoading = false;
      }
    );
  },
  mounted() {},
  methods: {
    //nav选择
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
#search {
  width: 750px;
  margin: 0 auto;
}
/* 头部nav */
#search .bento-tab.none-bg {
  border: 1px solid #e5e7e9;
}
#search .bento-tab {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
}
#search .bento-tab .tab-item {
  width: 374px;
  height: 80px;
  line-height: 80px;
  padding-left: 44px;
  box-sizing: border-box;
  float: left;
  text-align: center;
  font-size: 32px;
  font-family: PingFangSC-Medium;
  color: #969696;
  cursor: pointer;
}
#search .bento-tab .tab-item.active {
  color: #2e2e2e;
  position: relative;
  transition: color 0.5s;
}
#search .bento-tab .tab-item.active:after {
  content: "";
  width: 375px;
  height: 6px;
  background-color: #000;
  position: absolute;
  bottom: 0;
  left: 0;
}
/* 搜索关键字 */
#search .search-hint {
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #92969c;
  text-align: center;
  padding-top: 30px;
}
/* 列表 */
#search .search-cell {
  width: 690px;
  margin: 0 auto;
  border-bottom: 1px solid #e6e6e6;
  padding: 30px 0;
  font-size: 0;
  position: relative;
}
#search .search-cell img {
  display: inline-block;
}
#search .search-cell .products-info {
  display: inline-block;
  padding-left: 20px;
  width: 325px;
  vertical-align: top;
}
#search .search-cell .products-info .product-title {
  font-size: 30px;
  line-height: 1.3;
  color: #2c3038;
  margin-bottom: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
}
.products-price {
  font-size: 26px;
  color: #92969c;
}
.products-price .price {
  line-height: 0.7;
  color: #ff3939;
  display: inline-block;
}
#search .search-cell .products-info .num,
#search .search-cell .products-info .price {
  font-size: 28px;
}
.products-price .origin-price {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: line-through;
  color: #92969c;
}
</style>
