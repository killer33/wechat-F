<template>
  <div class="wx-head">
    <span class="title">{{header.title}}</span>
    <div class="right-head">
      <div class="search">
        <img :src="header.Imgsearch" alt>
      </div>
      <div class="plus" @click="add">
        <img :src="header.Imgadd" alt>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="right" class="header-popup">
      <div>
        <img src="http://172.242.19.42:3000/wechat/ic_add1.png" alt>
        <span>发起群聊</span>
      </div>
      <div>
        <img src="http://172.242.19.42:3000/wechat/ic_add2.png" alt>
        <span>添加朋友</span>
      </div>
      <div>
        <img src="http://172.242.19.42:3000/wechat/ic_add3.png" alt>
        <span>扫一扫</span>
      </div>
      <div>
        <img src="http://172.242.19.42:3000/wechat/ic_add4.png" alt>
        <span>收付款</span>
      </div>
      <div>
        <img src="http://172.242.19.42:3000/wechat/ic_add5.png" alt>
        <span>帮助与反馈</span>
      </div>
    </mt-popup>
  </div>
</template>
<script>

export default {
  data() {
    return {
      popupVisible: false
    };
  },
  props: {
    header: {
      title: { default: "" },
      Imgsearch: { default: "" },
      Imgadd: { default: "" }
    }
  },
  methods: {
    add() {
      if (this.popupVisible == false) {
        this.popupVisible = true;
      } else {
        this.popupVisible = false;
      }
    }
  },
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
/* 弹出框内容样式修改 */
.header-popup {
  width: 50%;
  background-color: #000;
  color: #fff;
}
/* 弹出框div */
.header-popup > div {
  align-items: center;
  padding: 10px;
}
/* 弹出框内的img修改 */
.header-popup div img {
  width: 26px;
  height: 26px;
  margin-right: 10px;
}
/* add弹出框位置修改 */
.mint-popup-right {
  top: 23%;
  right: 3%;
}
</style>