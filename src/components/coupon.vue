<template>
  <div id="container">
    <div id="coupon-for-kol">
      <div class="coupon-wrapper">
        <div class="empty-coupon">
          <img src="https://s1.ricebook.com/feck/web-order/e5caab8be55da57bce39c2a10264f419.png">
          <p>没有购物券哦</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
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
#coupon-for-kol {
  padding-top: 40px;
}
#coupon-for-kol .coupon-wrapper .empty-coupon {
  padding-top: 240px;
}
#coupon-for-kol .coupon-wrapper .empty-coupon img {
  display: block;
  margin: 0 auto 60px;
}
#coupon-for-kol .coupon-wrapper .empty-coupon p {
  font-size: 36px;
  line-height: 1;
  text-align: center;
  color: #92969c;
}
</style>
