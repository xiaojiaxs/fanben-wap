<template>
  <div class="topicpage">
    <!-- 预加载 -->
    <div class="scroll-loading" v-if="isLoading">
      <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
    </div>
    <!-- 内容 -->
    <div v-if="!isLoading">
      <!-- 头部背景图 -->
      <div class="m-head relative">
        <img :src="list[0]?list[0].body.web_img:''" class="lazy myimg wap-img">
      </div>
      <!-- 国家地区 -->
      <div id="fixedparent">
        <div class="nav-swiper-container">
          <div class="swiper-wrapper">
            <div
              class="nav swiper-slide"
              v-for="(item,index) in list"
              :key="index"
              v-if="item.type==13"
            >{{item.body.tab}}</div>
          </div>
        </div>
      </div>
      <!-- 专区 -->
      <div v-for="(item,index) in list" :key="index">
        <div class="sku-title module" v-if="item.type==8">
          <p>{{item.body.title}}</p>
          <div class="line"></div>
        </div>
        <pre class="m-text module" v-if="item.type==2">{{item.body.text}}</pre>
        <div class="m-product single-product" v-if="item.type==5">
          <ul>
            <li v-for="(tab,tabIndex) in item.body.product_list" :key="tabIndex">
              <router-link to="/product">
                <div class="product-image">
                  <img class="lazy" :src="tab.image_url">
                  <div class="flash-tag">限时闪购</div>
                  <div class="flash-info">
                    <div class="flash-price">
                      <div class="unit">¥</div>
                      <div class="money">{{tab.price}}</div>
                      <div class="triangle-topright" v-if="tab.discount_info"></div>
                      <div class="discount-info" v-if="tab.discount_info">{{tab.discount_info}}</div>
                    </div>
                    <div class="amount">
                      限量
                      <em>{{tab.amount}}</em> 份
                    </div>
                  </div>
                </div>
                <div class="info">
                  <p class="title">{{tab.title}}</p>
                  <p class="desc ellipsis">{{tab.short_description}}</p>
                  <pre class="description"></pre>
                  <div class="flash-btn">立即购买</div>
                </div>
              </router-link>
              <div class="border-line"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topicpage",
  data() {
    return {
      list: [],
      isLoading: true
    };
  },

  created() {
    //下载全球数据
    this.request.getTopicnew({}, data => {
      //console.log(data);
      this.list = data.list;
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
.topicpage {
  width: 750px;
  margin: 0 auto;
}
/* 头部背景图 */
.relative {
  position: relative;
}

.m-head {
  font-size: 0;
}
.lazy {
  width: 100%;
}
/* 国家地区 */
#fixedparent {
  margin: 40px 0;
}
.nav-swiper-container {
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  overflow: hidden;
  background-color: #fff;
  height: 88px;
  line-height: 88px;
  width: 750px;
}
.nav-swiper-container .swiper-wrapper {
  width: 750px;
  overflow-x: scroll;
}
.nav-swiper-container .nav {
  height: 28px;
  line-height: 1;
  font-size: 28px;
  text-align: center;
  color: #8c8c8c;
  padding: 28px 24px;
}

.nav-swiper-container .swiper-slide {
  display: inline-block;
  width: auto;
  flex-shrink: 0;
  position: relative;
}
/* 专区 */
.module {
  width: 670px;
  margin: 30px 40px;
}
.sku-title p {
  font-size: 42px;
  font-weight: 500;
  line-height: 1;
  margin: 0 auto 20px;
  text-align: center;
  color: #2c3038;
}
.sku-title .line {
  width: 60px;
  height: 4px;
  margin: 0 auto;
  background-image: linear-gradient(
    to right,
    #ff4e00,
    rgba(255, 102, 0, 0.97) 52%,
    #ffcc00
  );
}
.m-text {
  font-size: 32px;
  line-height: 1.75;
  text-align: justify;
  color: #545556;
  font-family: PingFangSC;
  white-space: pre-wrap;
}
.m-product {
  background-color: #fff;
  padding: 30px 40px;
  margin-top: -1px;
}
.single-product .product-image {
  position: relative;
  height: 447px;
  width: 670px;
}
.single-product .product-image img {
  width: 100%;
  height: 100%;
}
.single-product .flash-tag {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 142px;
  height: 44px;
  line-height: 44px;
  background-color: #ffe401;
  font-family: PingFangSC;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  color: #000000;
}
.single-product .flash-info {
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.8);
}
.single-product .flash-info .flash-price {
  margin-left: 30px;
  display: flex;
}
.single-product .flash-info .flash-price .unit {
  height: 40px;
}
.single-product .flash-info .flash-price .money {
  height: 60px;
  font-size: 59.4px;
  margin-left: 10px;
}

.single-product .flash-info .flash-price .unit,
.single-product .flash-info .flash-price .money {
  font-family: SFUIText;
  font-size: 39.6px;
  font-weight: 600;
  line-height: 1;
  text-align: left;
  color: #ffffff;
}
.single-product .flash-info .flash-price .triangle-topright {
  margin-left: 10px;
  margin-top: 8px;
  width: 0;
  height: 0;
  border-top: 8px solid #ffe401;
  border-left: 8px solid transparent;
}
.single-product .flash-info .flash-price .discount-info {
  height: 36px;
  background-color: #ffe401;
  font-size: 24px;
  line-height: 36px;
  padding: 0 10px;
  margin-top: 8px;
  text-align: left;
  color: #000000;
  border-radius: 0px 2px 2px 2px;
  margin-left: -1px;
}
.single-product .amount {
  font-size: 24px;
  height: 24px;
  line-height: 1;
  text-align: center;
  color: #ffffff;
  border-left: 1px solid #fff;
  margin-right: 30px;
  padding-left: 30px;
}
.single-product .amount em {
  font-family: SFUIText;
  font-style: normal;
}
.single-product .info:last-child {
  margin-bottom: 30px;
}

.single-product .info {
  text-align: center;
  font-size: 24px;
}
.single-product .title {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  color: #1a1a1a;
  margin-top: 24px;
  margin-bottom: 12px;
}
.single-product .desc {
  line-height: 1.33;
  color: #9b9a9b;
  margin-bottom: 12px;
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.single-product .description {
  font-size: 32px;
  line-height: 1.5;
  text-align: justify;
  color: #545556;
  font-family: PingFangSC;
  width: 670px;
}

pre {
  white-space: pre-wrap;
}
.single-product .flash-btn {
  width: 218px;
  height: 60px;
  line-height: 60px;
  border-radius: 8px;
  background-color: #ff3939;
  color: #fff;
  font-size: 24px;
  text-align: center;
  margin: 26px auto 0;
}
.single-product .border-line {
  margin-bottom: 30px;
}
.border-line {
  margin: 0 auto;
  height: 1px;
  width: 670px;
  background-color: #e0e0e0;
}
</style>
