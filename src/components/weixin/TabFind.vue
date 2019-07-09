<template>
  <div>
    <div class="tabfind-header">
      <div @click="open(1)">
        <img src="http://127.0.0.1:3000/wechat/tabfind1.png" alt>
        <span>朋友圈</span>
      </div>
      <div @click="open(2)">
        <img src="http://127.0.0.1:3000/wechat/tabfind2.png" alt>
        <span>扫一扫</span>
      </div>
      <div @click="open(3)">
        <img src="http://127.0.0.1:3000/wechat/tabfind3.png" alt>
        <span>摇一摇</span>
      </div>
      <div @click="open(4)">
        <img src="http://127.0.0.1:3000/wechat/tabfind4.png" alt>
        <span>游戏</span>
      </div>
      <div @click="open(5)">
        <img src="http://127.0.0.1:3000/wechat/tabfind5.png" alt>
        <span>购物</span>
      </div>
      <div @click="open(6)">
        <img src="http://127.0.0.1:3000/wechat/tabfind6.png" alt>
        <span>小程序</span>
      </div>
    </div>
    <!-- 内容弹出框 -->
    <mt-popup v-model="popupVisible[0].popupVisible" position class="foot-popup">
      <backheader title="朋友圈" :back="ofset"></backheader>
      <circles :circles="circles" :myarr="arr"></circles>
    </mt-popup>
    <mt-popup v-model="popupVisible[1].popupVisible" position class="foot-popup">
      <backheader title="二维码/条码" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[2].popupVisible" position class="foot-popup">
      <backheader title="摇一摇" :back="ofset"></backheader>
      <yaoyiyao></yaoyiyao>
    </mt-popup>
    <mt-popup v-model="popupVisible[3].popupVisible" position class="foot-popup">
      <backheader title="游戏" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[4].popupVisible" position class="foot-popup">
      <backheader title="购物" :back="ofset"></backheader>
    </mt-popup>
    <mt-popup v-model="popupVisible[5].popupVisible" position class="foot-popup">
      <backheader title="小程序" :back="ofset"></backheader>
    </mt-popup>
  </div>
</template>

<script>
// 引入返回头组件
import backheader from "./weixinhead/backheader.vue";
//朋友圈组件w
import circlecircle from "./TabFind/Circle";
//摇一摇
import yaoyiyao from "./TabFind/yaoyiyao";
export default {
  data() {
    return {
      popupVisible: [
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false },
        { popupVisible: false }
      ],
      //   传入图片和自己姓名，自己头像进入朋友圈
      circles: {
        Bgimg: "http://172.242.19.42:3000/wechat/circlebg.png",
        // 朋友圈自己姓名
        name: "",
        // 朋友圈个人头像
        nameImg: "http://172.242.19.42:3000/wechat/tabfind4.png"
      },
      arr: []
    };
  },
  props: {},
  methods: {
    open(n) {
      switch (n) {
        case 1:
          this.popupVisible[0].popupVisible = true;
          this.pengyouquan();
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
        default:
          for (var p of this.popupVisible) p.popupVisible = false;
      }
    },
    ofset() {
      for (var p of this.popupVisible) {
        p.popupVisible = false;
      }
    },
    pengyouquan() {
      this.axios.get("pengyouquan").then(result => {
        var result = result.data.data;
        this.arr = result.arr;
        var myresult = result.myresult[0];
        var circles = this.circles;
        if (myresult.wx_myfriendship_bgimg !== "")
          circles.Bgimg = myresult.wx_myfriendship_bgimg;
        if (myresult.wx_myfriendship_img !== "")
          circles.nameImg = myresult.wx_myfriendship_img;
        if (myresult.wx_myfriendship_name !== "")
          circles.name = myresult.wx_myfriendship_name;
        console.log(this.arr);
      });
    }
  },
  components: {
    backheader: backheader,
    circles: circlecircle,
    yaoyiyao
  }
};
</script>

<style scoped>
.tabfind-header > div {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 10px;
  vertical-align: baseline;
  background-color: #fff;
}
.tabfind-header > div:first-child {
  margin-top: 5px;
}
.tabfind-header > div + div {
  margin-top: 8px;
}
.tabfind-header > div img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.mint-popup {
  width: 100%;
  height: 100%;
}
</style>
