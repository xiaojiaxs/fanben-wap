<template>
  <div data-v-6a7adca6 id="app">
    <div data-v-553b1b3e data-v-6a7adca6 id="unTab">
      <div data-v-553b1b3e class="open">
        <img src="https://image.ricebook.com/business/23538303223315" alt>
        <img src="https://image.ricebook.com/business/23538303223316" alt>
        <img src="https://image.ricebook.com/business/23587899423171" alt>
        <img src="https://image.ricebook.com/business/23587899423170" alt>
        <img src="https://image.ricebook.com/business/23538306423340" alt>
        <button class="open-btn">
          <a>开通会员，享受会员权益</a>
        </button>
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
#app {
  height: 100%;
}
#unTab[data-v-553b1b3e] {
  height: 100%;
}
.open {
  background: #f6f6f6;
  padding-bottom: 100px;
  min-height: 100%;
  box-sizing: border-box;
}
.open img {
  display: block;
}
.open .open-btn {
  position: fixed;
  bottom: 30px;
  left: 50%;
  margin-left: -355px;
  width: 710px;
  height: 88px;
  line-height: 88px;
  border: none;
  outline: none;
  border-radius: 44px;
  background-color: #2b2f38;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.6);
  font-size: 32px;
}
.open .open-btn a {
  color: #f6c948;
}
</style>
