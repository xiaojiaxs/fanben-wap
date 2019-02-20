<template>
  <div id="un-head">
    <!-- 福利中心 -->
    <div class="benefit">
      <span class="benefits_left">
        <i></i>
        <strong>福利中心</strong>
      </span>
      <a class="benefits_right" href="javascript:;">
        天天领券，优惠不停
        <span></span>
      </a>
    </div>
    <!-- 优惠券 -->
    <div id="coupon">
      <div class="current">
        <div class="current-fetcher clearfix">
          <input type="text" placeholder="请输入礼券卡号">
          <a>兑换</a>
        </div>
        <div class="current-tips clearfix">
          <span class="tips-left">
            <span class="current-num">2</span>
            <span>张可用礼券</span>
          </span>
          <a class="tips-right">
            <span class="iconfont"></span>使用说明
          </a>
        </div>
        <ul class="current-list">
          <li>
            <div class="coupon-cell" city-id="140">
              <div class="item-wrapper clearfix">
                <div class="item-detail">
                  <p class="title">ENJOY NOW!</p>
                  <p class="condition">满 100 元可用，超值、部分商品不可用</p>
                  <p class="expired-time">有效期 2019-01-29 至 2019-02-04</p>
                </div>
                <div class="item-price">
                  <span>25</span>元
                </div>
                <a class="use-tip">立即使用</a>
              </div>
              <span class="chosen-tip">已选择</span>
              <img
                class="expired-tip"
                src="data:image/png;base64,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"
              >
            </div>
          </li>
          <li>
            <div class="coupon-cell" city-id="140">
              <div class="item-wrapper clearfix">
                <div class="item-detail">
                  <p class="title">ENJOY NOW!</p>
                  <p class="condition">满 85 元可用，超值、部分商品不可用，仅限快递类商品使用</p>
                  <p class="expired-time">有效期 2019-01-29 至 2019-02-04</p>
                </div>
                <div class="item-price">
                  <span>25</span>元
                </div>
                <a class="use-tip">立即使用</a>
              </div>
              <span class="chosen-tip">已选择</span>
              <img
                class="expired-tip"
                src="data:image/png;base64,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"
              >
            </div>
          </li>
        </ul>
        <p class="tips">能用的礼券就这些了~</p>
        <div class="gap"></div>
        <a class="go-expired" href="javascript:;">查看过期礼券
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 福利中心 */
#un-head {
  font-size: 28px;
  color: #2c3038;
  height: 100%;
}
.benefit {
  height: 110px;
  border: 1px solid #e0e0e0;
  border-left: none;
  border-right: none;
  background: #fff;
  padding: 0 40px;
  line-height: 110px;
  font-size: 30px;
  margin-top: 40px;
}
.benefit .benefits_left {
  float: left;
  color: #2c3038;
}
.benefit i {
  width: 50px;
  height: 50px;
  display: inline-block;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxLjEgKDM1Mzc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19naWZ0X2NvdXBvbnBhZ2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0zIiB4PSIzIiB5PSI4IiB3aWR0aD0iMjYiIGhlaWdodD0iMjMiIHJ4PSIyIj48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cmVjdCBpZD0icGF0aC01IiB4PSIwIiB5PSI2IiB3aWR0aD0iMzIiIGhlaWdodD0iOCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8bWFzayBpZD0ibWFzay02IiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjgiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtNyIgcG9pbnRzPSIxMSA2IDIxIDYgMjEgMjUgMTYgMjIgMTEgMjUiPjwvcG9seWdvbj4KICAgICAgICA8bWFzayBpZD0ibWFzay04IiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjE5IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtNyI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxwYXRoIGQ9Ik0xMy4zOTk0NzM3LDggQzEwLjE2ODk5MzYsOCA3LjUyNDQxOTkxLDYuODAxMjE1OTYgNi4xMzM4OTE1Myw1LjM3MzYwNTY1IEM1LjEwNzY5ODcxLDQuMzE5ODgxMTIgNC43NTU5MjY0NCwzLjEzMzg2NjQxIDUuMTY5MzczMDcsMi4xMTg5NjA2MiBDNS40NzM3NDc0NiwxLjM2OTY1Njc1IDYuMzA5MjA2NiwwLjQwOTQwMzY2IDguNTYwODkxNzksMC4wOTE3MDI5MDQ1IEMxMC40NTUwOTQxLC0wLjE4MDUzOTA2MSAxMi4xMjgyOTY2LDAuMTU0NTI3OTczIDEzLjUxNzY4MjksMS4wODE1ODA4MiBDMTYuMjc0NzU1MiwyLjkxODMyMDIzIDE2LjgzNDM5MjksNi40NTAzMTQ5NyAxNi44NTcyMzUzLDYuNTk5NDYwNjYgTDE3LDcuNTUzNTg0NDcgTDE1Ljk0NzUzODUsNy43NTQ4MjkgQzE1LjA2NzUzNjcsNy45MjI4NzMyOSAxNC4yMTU1MTY5LDggMTMuMzk5NDczNyw4IFoiIGlkPSJwYXRoLTkiPjwvcGF0aD4KICAgICAgICA8bWFzayBpZD0ibWFzay0xMCIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtOSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxwYXRoIGQ9Ik0yMy4zOTk0NzM3LDggQzIwLjE2ODk5MzYsOCAxNy41MjQ0MTk5LDYuODAxMjE1OTYgMTYuMTMzODkxNSw1LjM3MzYwNTY1IEMxNS4xMDc2OTg3LDQuMzE5ODgxMTIgMTQuNzU1OTI2NCwzLjEzMzg2NjQxIDE1LjE2OTM3MzEsMi4xMTg5NjA2MiBDMTUuNDczNzQ3NSwxLjM2OTY1Njc1IDE2LjMwOTIwNjYsMC40MDk0MDM2NiAxOC41NjA4OTE4LDAuMDkxNzAyOTA0NSBDMjAuNDU1MDk0MSwtMC4xODA1MzkwNjEgMjIuMTI4Mjk2NiwwLjE1NDUyNzk3MyAyMy41MTc2ODI5LDEuMDgxNTgwODIgQzI2LjI3NDc1NTIsMi45MTgzMjAyMyAyNi44MzQzOTI5LDYuNDUwMzE0OTcgMjYuODU3MjM1Myw2LjU5OTQ2MDY2IEwyNyw3LjU1MzU4NDQ3IEwyNS45NDc1Mzg1LDcuNzU0ODI5IEMyNS4wNjc1MzY3LDcuOTIyODczMjkgMjQuMjE1NTE2OSw4IDIzLjM5OTQ3MzcsOCBaIiBpZD0icGF0aC0xMSI+PC9wYXRoPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTEyIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjgiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQuMDAwMDAwLCAtNzYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJFTkpPWeeyvumAiWljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0LjAwMDAwMCwgNzYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTctQ29weSIgZmlsbD0iI0ZGMzkzOSIgb3BhY2l0eT0iMC41IiB4PSI0IiB5PSI0IiB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSJSZWN0YW5nbGUtNy1Db3B5IiBzdHJva2U9IiMxQTFBMUEiIG1hc2s9InVybCgjbWFzay0yKSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSIjRkZGRkZGIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNy4wMDAwMDApIiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iUmVjdGFuZ2xlLTYiIG1hc2s9InVybCgjbWFzay00KSIgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iUmVjdGFuZ2xlIiBtYXNrPSJ1cmwoI21hc2stNikiIHhsaW5rOmhyZWY9IiNwYXRoLTUiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9IlJlY3RhbmdsZS0yIiBtYXNrPSJ1cmwoI21hc2stOCkiIHhsaW5rOmhyZWY9IiNwYXRoLTciPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9IlBhdGgiIG1hc2s9InVybCgjbWFzay0xMCkiIHhsaW5rOmhyZWY9IiNwYXRoLTkiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9IlBhdGgtQ29weSIgbWFzaz0idXJsKCNtYXNrLTEyKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDAwMDAwLCA0LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMjEuMDAwMDAwLCAtNC4wMDAwMDApICIgeGxpbms6aHJlZj0iI3BhdGgtMTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)
    no-repeat 50%;
  background-size: contain;
  vertical-align: middle;
  margin-right: 30px;
}
.benefit .benefits_right {
  float: right;
  color: #92969c;
  font-size: 28px;
  opacity: 0.85;
}
/* 优惠券 */
#coupon {
  padding: 40px 40px 100px;
  background-color: #f9f9f9;
}
#coupon .current .current-fetcher {
  margin-bottom: 50px;
}
.clearfix {
  overflow: auto;
}
#coupon .current .current-fetcher input {
  float: left;
  width: 446px;
  height: 76px;
  line-height: 76px;
  padding: 0 15px;
  font-size: 30px;
  color: #bdc0c5;
  background-color: #fff;
  border: 2px solid #e0e0e0;
}
#coupon .current .current-fetcher a {
  float: right;
  width: 170px;
  height: 80px;
  line-height: 80px;
  background-color: #ff3939;
  font-size: 30px;
  text-align: center;
  color: #fff;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
#coupon .current .current-tips {
  font-size: 28px;
  color: #92969c;
  margin-bottom: 20px;
}
#coupon .current .current-tips .tips-left {
  float: left;
}
#coupon .current .current-tips .current-num {
  color: #ff3939;
  margin-right: 10px;
}
#coupon .current .current-tips .tips-right {
  float: right;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
.coupon-cell {
  position: relative;
  border: 2px solid #1a1a1a;
  overflow: hidden;
  margin-bottom: 30px;
}
.coupon-cell .item-wrapper {
  height: 200px;
  margin: 6px;
  border: 1px solid #1a1a1a;
  overflow: hidden;
}
.coupon-cell .item-wrapper .item-detail {
  float: left;
  padding: 22px 0 22px 24px;
}
.coupon-cell .item-wrapper .item-detail .title {
  height: 42px;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #2c3038;
  margin-bottom: 12px;
}
.coupon-cell .item-wrapper .item-detail .condition {
  width: 424px;
  font-size: 24px;
  color: #92969c;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
.coupon-cell .item-wrapper .item-detail .expired-time {
  height: 33px;
  font-size: 24px;
  color: #92969c;
}

.coupon-cell .item-wrapper .item-detail p {
  width: 430px;
  overflow: hidden;
}
.coupon-cell .item-wrapper .item-price {
  float: right;
  font-size: 26px;
  color: #2c3038;
  padding: 16px 14px 0 0;
}
.coupon-cell .item-wrapper .item-price span {
  height: 86px;
  font-family: PingFangSC-Light;
  font-size: 86px;
  color: #ff3939;
  margin-right: 20px;
}
.coupon-cell .item-wrapper .use-tip {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 140px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #ff3939;
  text-align: center;
  color: #ff3939;
  font-size: 24px;
  background: none;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
.coupon-cell .chosen-tip,
.coupon-cell .expired-tip {
  display: none;
}
#coupon .current .tips {
  margin: 54px 0 26px;
  font-size: 28px;
  text-align: center;
  color: #bdc0c5;
}
#coupon .current .gap {
  width: 100px;
  font-size: 28px;
  margin: 0 auto;
  height: 2px;
  background-color: #d8d8d8;
}
#coupon .go-current,
#coupon .go-expired {
  display: block;
  margin-top: 26px;
  font-size: 28px;
  text-align: center;
  color: #92969c;
}
#coupon .go-current span,
#coupon .go-expired span {
  margin-left: 10px;
  position: relative;
  width: 0;
  height: 0;
  display: inline-block;
  border: 9px solid transparent;
  border-left: 9px solid #92969c;
}
#coupon .go-current span:after,
#coupon .go-expired span:after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  position: absolute;
  border: 9px solid transparent;
  border-left: 9px solid #fff;
  top: -9px;
  left: -12px;
}
.benefit .benefits_right span {
  margin-left: 10px;
  position: relative;
  width: 0;
  height: 0;
  display: inline-block;
  border: 9px solid transparent;
  border-left: 9px solid #92969c;
}
.benefit .benefits_right span:after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  position: absolute;
  border: 9px solid transparent;
  border-left: 9px solid #fff;
  top: -9px;
  left: -12px;
}
</style>
