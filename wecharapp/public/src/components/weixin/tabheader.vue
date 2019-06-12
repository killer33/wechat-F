<template>
  <div class="wx-head">
    <span class="title">{{header.title}}</span>
    <div class="right-head">
      <div class="search">
        <img :src="header.Imgsearch" alt>
      </div>
      <div class="plus">
        <img :src="header.Imgadd" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    header: {
      title: { default: "" },
      Imgsearch: { default: "" },
      Imgadd: { default: "" }
    }
  }
};
</script>
<style scoped>
.wx-head {
  height: 50px;
  width: 100%;
  z-index: 999;
  background-color: #1e2b39;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
}
.title {
  padding-left: 14px;
}
.right-head {
  display: flex;
  justify-content: space-between;
}
.right-head img {
  width: 20px;
  height: 20px;
  margin-right: 30px;
}
</style>