<template>
  <div>
    <div class="backheader">
      <img src="http://zidan.applinzi.com/wechat/ic_back.png" alt @click="back">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: { default: "" },
    back: { type: Function }
  }
};
</script>

<style scoped>
.backheader {
  background-color: #000;
  color: #fff;
  height: 50px;
  width: 100%;
  z-index: 99;
}
.backheader img {
  margin-top: 17px;
}
.backheader span {
  position: relative;
  top: 11px;
  font-size: 20px;
  left: 15px;
  border-left: 1px solid #000;
}
</style>