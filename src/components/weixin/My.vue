<template>
  <div class="container">
    <div class="my-info">
      <div class="left-info">
        <img src="http://172.242.19.42:3000/wechat/tabfind4.png" alt="头像" class="left-img">
        <div class="info-name" @click="open(1)">
          <h3>minion</h3>
          <span>微信号：DespicableMe</span>
        </div>
      </div>
      <div class="right-img">
        <img src="http://172.242.19.42:3000/wechat/ic_my1.png" alt>
      </div>
    </div>
    <div class="info-list" @click="open(2)">
      <div>
        <img src="http://172.242.19.42:3000/wechat/ic_my1.png" alt>
        <span>钱包</span>
      </div>
      <div @click="open(3)">
        <img src="http://172.242.19.42:3000/wechat/ic_my2.png" alt>
        <span>收藏</span>
      </div>
      <div @click="open(4)">
        <img src="http://172.242.19.42:3000/wechat/ic_my3.png" alt>
        <span>相册</span>
      </div>
      <div @click="open(5)">
        <img src="http://172.242.19.42:3000/wechat/ic_my4.png" alt>
        <span>卡包</span>
      </div>
      <div @click="open(6)">
        <img src="http://172.242.19.42:3000/wechat/ic_my5.png" alt>
        <span>表情</span>
      </div>
      <div @click="open(7)">
        <img src="http://172.242.19.42:3000/wechat/ic_my6.png" alt>
        <span>设置</span>
      </div>
    </div>
    <mt-popup v-model="popupVisible[0].popupVisible" position class="foot-popup">
      <backheader title="个人信息" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[1].popupVisible" position class="foot-popup">
      <backheader title="我的钱包" :back="ofset"></backheader>
      <Money></Money>
    </mt-popup>
    <mt-popup v-model="popupVisible[2].popupVisible" position class="foot-popup">
      <backheader title="收藏" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[3].popupVisible" position class="foot-popup">
      <backheader title="相册" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[4].popupVisible" position class="foot-popup">
      <backheader title="卡包" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[5].popupVisible" position class="foot-popup">
      <backheader title="表情" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[6].popupVisible" position class="foot-popup">
      <backheader title="设置" :back="ofset"></backheader>
    </mt-popup>
  </div>
</template>

<script>
import backheader from "./weixinhead/backheader.vue";
import Money from "./weixinmy/money.vue";
export default {
  data() {
    return {
      popupVisible: [
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false }
      ]
    };
  },
  components: {
    backheader,
    Money
  },
  methods: {
    open(n) {
      switch (n) {
        case 1:
          this.popupVisible[0].popupVisible = true;
          break;
        case 2:
          this.popupVisible[1].popupVisible = true;
          break;
        case 3:
          this.popupVisible[2].popupVisible = true;
          break;
        case 4:
          this.popupVisible[3].popupVisible = true;
          break;
        case 5:
          this.popupVisible[4].popupVisible = true;
          break;
        case 6:
          this.popupVisible[5].popupVisible = true;
          break;
        case 7:
          this.popupVisible[6].popupVisible = true;
          break;
        default:
          break;
      }
    },
    ofset() {
      for (var p of this.popupVisible) {
        p.popupVisible = false;
      }
    }
  }
};
</script>
<style scoped>
/* 最外层div */
.container {
  padding: 0px;
}
.my-info {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  padding: 8px 10px;
  width: 100%;
  height: 76px;
  background: #ffffff;
}
.left-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
}
.info-name span {
  font-size: 12px;
  color: #000000;
}
.right-img {
  margin-top: 10px;
}
.right-img img {
  width: 45px;
  height: 45px;
}
.info-list div:first-child {
  margin-bottom: 20px;
  width: 100%;
  height: 36px;
  padding: 8px 10px;
  background-color: #ffffff;
}
.info-list div:not(:first-child) {
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid hsla(0, 0%, 60%, 0.4);
}
.info-list div:last-child {
  margin-top: 20px;
}
.info-list div img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.info-list div span {
  vertical-align: top;
}
.mint-popup {
  width: 100%;
  height: 100%;
  overflow:auto;
}
</style>

