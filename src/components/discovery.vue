<template>
  <div class="main-app">
    <navbar></navbar>
    <!-- 预加载 -->
    <div class="scroll-loading" v-if="isLoading">
      <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
    </div>
    <!-- 内容 -->
    <div v-if="!isLoading">
      <div class="discovery" v-if="list.length>0">
        <!-- 今日推荐 -->
        <div>
          <div class="selected-recommend">
            <div class="caption">
              <p class="title">{{recommend.data.group_section.title}}</p>
              <p class="sub-title">{{recommend.data.group_section.desc}}</p>
              <div class="queue">
                <span>{{activeIndex+1}}</span>
                /{{recommend.data.tabs.length}}
              </div>
            </div>
            <!--今日推荐-轮播图-->
            <div class="swiper-container recommend-swiper-container">
              <div class="swiper-wrapper">
                <div v-for="(item,index) in recommend.data.tabs" :key="index" class="swiper-slide">
                  <a href="javascript:;">
                    <img :src="item.url">
                    <p class="tips">{{item.tag}}</p>
                    <p class="title">{{item.title}}</p>
                    <p class="sub-title">{{item.desc}}</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="component-gap"></div>
          </div>
        </div>
        <!-- 日本料理 -->
        <div>
          <div class="side-slip-column">
            <!-- 日本料理-轮播图 -->
            <div class="swiper-container cuisine">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in cuisine.data.tabs" :key="index">
                  <router-link to="/discoveryList">
                    <img :src="item.url">
                    <div class="cover"></div>
                    <p class="title">{{item.title}}</p>
                    <p class="sub-title">{{item.desc}}</p>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="component-gap"></div>
          </div>
        </div>
        <!-- 活动区域 -->
        <div>
          <div class="activity-ad">
            <!-- 活动区域-轮播图 -->
            <div class="swiper-container activity">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in activity.data.tabs" :key="index">
                  <router-link to="/topicpage">
                    <img :src="item.url">
                    <p class="title">{{item.title}}</p>
                  </router-link>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="component-gap"></div>
          </div>
        </div>
        <!-- 优选美酒 -->
        <div>
          <div class="sku-shelf">
            <h3>{{wine.data.group_section.title}}</h3>
            <div class="desc">{{wine.data.group_section.desc}}</div>
            <router-link class="more" to="/discoveryList">{{wine.data.group_section.enjoy_url_text}}</router-link>
            <ul>
              <li v-for="(item,index) in wine.data.tabs" :key="index">
                <router-link to="/product">
                  <img :src="item.url" style="width: 210px; height: 210px;">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 好味食品 -->
        <div>
          <div class="sku-shelf">
            <h3>{{food.data.group_section.title}}</h3>
            <div class="desc">{{food.data.group_section.desc}}</div>
            <router-link class="more" to="/discoveryList">{{food.data.group_section.enjoy_url_text}}</router-link>
            <ul>
              <li v-for="(item,index) in food.data.tabs" :key="index">
                <router-link to="/product">
                  <img :src="item.url" style="width: 210px; height: 210px;">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 良品好物 -->
        <div>
          <div class="sku-shelf">
            <h3>{{goods.data.group_section.title}}</h3>
            <div class="desc">{{goods.data.group_section.desc}}</div>
            <router-link
              class="more"
              to="/discoveryList"
            >{{goods.data.group_section.enjoy_url_text}}</router-link>
            <ul>
              <li v-for="(item,index) in goods.data.tabs" :key="index">
                <router-link to="/product">
                  <img :src="item.url" style="width: 210px; height: 210px;">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "discovery",
  data() {
    return {
      isLoading: true,
      activeIndex: 0, //今日推荐-轮播图序号
      list: [],
      recommend: {}, //今日推荐数据
      cuisine: {}, //日本料理数据
      activity: {}, //活动数据
      wine: {}, //优选美酒
      food: {}, //好味食品
      goods: {} //良品好物
    };
  },

  created() {
    var self = this;
    //下载发现数据
    this.request.getExploreList({}, data => {
      //console.log(data)
      this.list = data;

      this.isLoading = false;
      //今日推荐
      this.recommend = data[0];
      //今日推荐-轮播图初始化
      this.$nextTick(function() {
        var swiper = new Swiper(".recommend-swiper-container", {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 0,
          slideToClickedSlide: true,
          on: {
            slideChange: function() {
              //console.log(this.activeIndex)
              self.activeIndex = this.activeIndex;
            }
          }
        });
      });
      //日本料理
      this.cuisine = data[1];
      //日本料理-轮播图初始化
      this.$nextTick(function() {
        var swiper = new Swiper(".cuisine", {
          slidesPerView: 2.2
        });
      });
      //活动区域
      this.activity = data[2];
      //活动区域-轮播图初始化
      this.$nextTick(function() {
        var swiper = new Swiper(".activity", {
          loop: true,
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 0,
          slideToClickedSlide: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
      //优选美酒
      this.wine = data[3];
      //好味食品
      this.food = data[4];
      //良品好物
      this.goods = data[5];
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
.discovery {
  padding-bottom: 140px;
  margin: 0 auto;
  width: 750px;
}
/* 今日推荐 */
.selected-recommend {
  width: 750px;
  background-color: #fff;
  overflow: hidden;
}
.selected-recommend .caption {
  position: relative;
  padding: 60px 40px 40px;
}
.selected-recommend .caption .title {
  font-size: 42px;
  font-weight: 600;
  color: #191919;
}
.selected-recommend .caption .sub-title {
  font-size: 22px;
  color: #92969c;
}
.selected-recommend .caption .queue {
  position: absolute;
  top: 58px;
  right: 40px;
  font-size: 22px;
  line-height: 1.6;
  color: #9b9b9b;
}
.selected-recommend .caption .queue span {
  font-size: 42px;
  color: #1a1a1a;
}
/* 今日推荐-轮播图 */
.selected-recommend .recommend-swiper-container {
  width: 750px;
  font-size: 0;
}
.recommend-swiper-container .swiper-wrapper {
  margin-left: 40px;
}
.recommend-swiper-container .swiper-slide {
  margin-right: 10px;
}
.recommend-swiper-container .swiper-slide:last-child {
  margin-right: 0;
}
.recommend-swiper-container .swiper-slide-prev {
  right: -10%;
}
.recommend-swiper-container .swiper-slide-next {
  left: -10%;
}
.selected-recommend .recommend-swiper-container .swiper-slide a {
  display: block;
  width: 670px;
  padding-bottom: 40px;
}
.selected-recommend .recommend-swiper-container .swiper-slide a img {
  width: 670px;
  height: 378px;
  margin-bottom: 32px;
  vertical-align: top;
}
.selected-recommend .recommend-swiper-container .swiper-slide a p {
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
}
.selected-recommend .recommend-swiper-container .swiper-slide a .tips {
  font-size: 22px;
  color: #ff3939;
  margin-bottom: 10px;
}
.selected-recommend .recommend-swiper-container .swiper-slide a .title {
  font-size: 32px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
}
.selected-recommend .recommend-swiper-container .swiper-slide a .sub-title {
  font-size: 22px;
  color: #9b9b9b;
}
.component-gap {
  margin: 0 auto;
  width: 670px;
  height: 1px;
  background-color: #d8d8d8;
}
/* 日本料理 */
.side-slip-column {
  width: 750px;
  background-color: #fff;
  overflow: hidden;
  padding-top: 40px;
}
.cuisine .swiper-wrapper {
  margin-left: 40px;
}
.side-slip-column .swiper-container a {
  position: relative;
  display: block;
  width: 325px;
  padding-bottom: 40px;
  height: 182px;
}
.side-slip-column .swiper-container a .cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 325px;
  height: 182px;
  background-color: rgba(26, 26, 26, 0.4);
}
.side-slip-column .swiper-container a p {
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  position: absolute;
  width: 100%;
  text-align: center;
  color: #fff;
}
.side-slip-column .swiper-container a .title {
  top: 60px;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
}
.side-slip-column .swiper-container a .sub-title {
  top: 105px;
  font-size: 22px;
}
/* 活动区域 */
.activity-ad {
  width: 750px;
  background-color: #fff;
  overflow: hidden;
}
.activity-ad .activity {
  width: 750px;
  margin: 40px 0;
  font-size: 0;
}
.activity .swiper-wrapper {
  margin-left: 40px;
}
.activity .swiper-slide {
  margin-right: 10px;
}
.activity .swiper-slide:last-child {
  margin-right: 0;
}
.activity .swiper-slide-prev {
  right: -10%;
}
.activity .swiper-slide-next {
  left: -10%;
}
.activity .swiper-slide a {
  display: block;
  width: 670px;
  padding-bottom: 40px;
}
.activity .swiper-slide a img {
  width: 670px;
  height: 378px;
  margin-bottom: 32px;
  vertical-align: top;
}
.activity-ad .swiper-container a .title {
  font-size: 28px;
  letter-spacing: 2px;
  text-align: center;
  color: rgba(69, 69, 69, 0.99);
}
.activity-ad .swiper-container a p {
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
}
/* 优选美酒-好味食品-良品好物 */
.sku-shelf {
  padding: 60px 0 40px;
  margin: 0 40px;
  position: relative;
  line-height: 1;
  border-bottom: 1px solid #e0e0e0;
}
.sku-shelf h3 {
  font-size: 42px;
  font-weight: bolder;
  color: #2c3038;
}
.sku-shelf .desc {
  color: #92969c;
  font-size: 22px;
  margin-top: 10px;
}
.sku-shelf .more {
  position: absolute;
  top: 70px;
  right: 0;
  color: #ff3939;
  font-size: 28px;
}
.sku-shelf ul {
  padding-top: 40px;
}
.sku-shelf ul li {
  display: inline-block;
  margin-right: 20px;
}
.sku-shelf ul li:last-child {
  margin-right: 0;
}
</style>
<style>
/* 活动区域-轮播图-分页器 */
.activity-ad .swiper-container .swiper-pagination {
  text-align: center;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0;
}
.swiper-pagination-bullet {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  background: #fff;
  border: 1.5px solid #1a1a1a;
  opacity: 1;
}
</style>

