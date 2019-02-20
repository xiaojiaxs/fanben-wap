<template>
  <div class="main-app">
    <navbar></navbar>
    <!-- 预加载 -->
    <div class="scroll-loading" v-if="isLoading">
      <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
    </div>
    <!-- 内容 -->
    <div id="discovery-list" v-if="!isLoading">
      <!-- banner部分 -->
      <div class="banner">
        <img
          src="https://image.ricebook.com/business/20149528823712?imageView2/1/w/750/h/240"
          style="width: 750px; height: 240px;"
        >
        <div class="text" v-if="boutique.group_section">
          <h2>{{boutique.group_section.title}}</h2>
          <span>
            {{boutique.group_section.desc}}
            <span></span>
          </span>
        </div>
      </div>
      <!-- nav部分 -->
      <div class="nav">
        <a @click="dealSelected(1)" :class="{on:navIndex==1}" class="nav-item">精品店</a>
        <a @click="dealSelected(2)" :class="{on:navIndex==2}" class="nav-item">新品店</a>
      </div>
      <!-- 列表 -->
      <!-- 精品店 -->
      <div class="list" v-if="navIndex==1">
        <div class="sku" v-for="(item,index) in boutique.list" :key="index">
          <router-link to="/product">
            <div class="detail">
              <div class="title single-line-ellipsis">{{item.data.title}}</div>
              <div class="desc single-line-ellipsis">{{item.data.desc}}</div>
              <div class="products-price">
                <div class="price">
                  <span class="num">{{item.data.price}}</span>元/位
                </div>
                <div class="origin-price">{{item.data.original_price}}</div>
              </div>
            </div>
            <img :src="item.data.url" style="width: 220px; height: 146px;">
          </router-link>
        </div>
      </div>
      <!-- 新品店 -->
      <div class="list" v-if="navIndex==2">
        <div class="sku" v-for="(item,index) in newStore.list" :key="index">
          <router-link to="/product">
            <div class="detail">
              <div class="title single-line-ellipsis">{{item.data.title}}</div>
              <div class="desc single-line-ellipsis">{{item.data.desc}}</div>
              <div class="products-price">
                <div class="price">
                  <span class="num">{{item.data.price}}</span>元/位
                </div>
                <div class="origin-price">{{item.data.original_price}}</div>
              </div>
            </div>
            <img :src="item.data.url" style="width: 220px; height: 146px;">
          </router-link>
        </div>
      </div>
      <!-- footer -->
      <div class="page-img-footer" _v-b28d0f24>
        <img
          src="data:image/png;base64,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"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "discoveryList",
  data() {
    return {
      isLoading: true,
      navIndex: 1, //nav
      boutique: {}, //精品店数据
      newStore: {} //新品店数据
    };
  },

  created() {
    //下载日本料理-精品店数据
    this.request.getDiscoveryList1({}, data => {
      //console.log(data)
      this.boutique = data;
    });
    //下载日本料理-新品店数据
    this.request.getDiscoveryList2({}, data => {
      //console.log(data)
      this.newStore = data;
      this.isLoading = false;
    });
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
#discovery-list {
  background-color: #f6f6f6;
  width: 750px;
  margin: 0 auto;
}
/* banner部分 */
.banner {
  position: relative;
}

.banner {
  width: 750px;
  background-color: #fff;
  overflow: hidden;
}
.banner .text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  font-size: 40px;
  text-align: center;
  padding-bottom: 53px;
  background-color: rgba(44, 48, 56, 0.8);
}
.banner .text h2 {
  margin-top: 75px;
  font-size: 40px;
}
.banner .text span {
  margin-top: 20px;
  font-size: 28px;
}
/* nav部分 */
.nav {
  height: 80px;
  padding-left: 60px;
  border-bottom: 1px solid #e6e6e6;
}
.nav .nav-item.on {
  color: #2c3038;
  border-bottom: 4px solid #1a1a1a;
}
.nav .nav-item {
  display: inline-block;
  font-size: 28px;
  color: #838383;
  margin: 10px 80px 10px 0;
  padding-bottom: 10px;
}
/* 列表 */
.sku {
  padding: 30px;
  background-color: #fff;
  margin-bottom: 18px;
}
.sku .detail {
  width: 420px;
  margin-right: 30px;
  display: inline-block;
  vertical-align: top;
}
.sku .detail .title {
  font-size: 30px;
  color: #2c3038;
  margin-bottom: 16px;
}
.sku .detail .desc {
  margin-bottom: 20px;
  font-size: 26px;
  color: #92969c;
}
.products-price {
  font-size: 26px;
  color: #92969c;
}
.products-price .price {
  font-size: 24px;
  line-height: 0.7;
  color: #ff3939;
  display: inline-block;
}
.products-price .price .num {
  font-size: 36px;
}
.products-price .origin-price {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: line-through;
  color: #92969c;
}

.single-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sku img {
  vertical-align: top;
  display: inline-block;
}
/* footer */
.page-img-footer {
  padding: 90px 0;
  text-align: center;
}
.page-img-footer img {
  margin: 0 auto;
}
</style>
