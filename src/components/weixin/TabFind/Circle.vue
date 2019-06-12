<template>
  <div class="divwidth">
    <!-- <h2>这是朋友圈</h2> -->
    <!-- 最上层背景图 -->
    <div class="circle-bgimg" :style="`backgroundImage:url(${circles.Bgimg})`">
      `
      <!-- <img :src="circles.Bgimg" alt> -->
      <div>
        <span>{{circles.name}}</span>
        <img :src="circles.nameImg" alt>
      </div>
    </div>
    <!-- for循环获得当前用户朋友圈列表 -->
    <!-- 当前写死 -->
    <div class="for-div" v-for="(p,i) of myarr" :key="i">
      <!--头像 -->
      <img :src="circles.nameImg" alt>
      <!-- 弹性布局 -->
      <div class="for-div-circle">
        <p>{{p[0].wx_release_content_name}}</p>
        <!-- 内容 -->
        <span class="span-width">{{p[0].wx_release_content_details}}</span>
        <!-- 时间 -->
        <span style="font-size:13px">
          <mydatatime :mydatetime="p[0].wx_release_content_data_time"></mydatatime>
        </span>
      </div>
      <div class="for-div-span">
        <img
          :src="img"
          alt
          @click="dianzan(p[0].wx_release_content_fabulous)"
          style="width:40px;height:40px;padding:10px;"
        >
        <span>{{p[0].wx_release_content_fabulous}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mydatatime from "../datetime/date";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      img: "http://172.242.19.42:3000/wechat/Circledianzan.png",
      Fabulous: 45,
      i: 0
    };
  },
  props: {
    // 朋友圈顶部图片
    circles: {
      Bgimg: { default: "" },
      // 朋友圈自己姓名
      name: { default: "" },
      // 朋友圈个人头像
      nameImg: { default: "" }
    },
    myarr: { type: Array }
  },
  methods: {
    dianzan(n) {
      console.log(n);
      var str = [
        "http://172.242.19.42:3000/wechat/Circledianzan.png",
        "http://172.242.19.42:3000/wechat/Circledianzan5.png"
      ];
      var i = 0;
      if (this.i == i) {
        this.img = str[1];
        n += 1;
        this.i = 2;
        return n;
      } else {
        this.img = "http://172.242.19.42:3000/wechat/Circledianzan.png";
        this.n -= 1;
        this.i = 0;
        return;
      }
    },
    add() {
      console.log(this.myarr);
    }
  },
  components: {
    mydatatime
  }
};
</script>

<style scoped>
.divwidth {
  width: 100%;
  height: 90%;
  overflow-y: auto;
}
/* 最外层div背景图 */
.circle-bgimg {
  min-width: 100%;
  height: 260px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 15px;
}
.circle-bgimg > div {
  position: absolute;
  color: #fff;
  bottom: -5px;
  right: 15px;
}
.circle-bgimg div span {
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
}
.circle-bgimg div img {
  width: 84px;
  height: 84px;
}
.for-div {
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
}
.for-div > img {
  width: 50px;
  height: 50px;
  padding: 4px;
  margin-left: 15px;
  margin-right: 15px;
}
.for-div-circle {
  display: flex;
  width: 80%;
  flex-direction: column;
}
.for-div-circle p:first-child {
  margin-top: 21px;
  margin-bottom: 3px;
}
.for-div-span {
  text-align: center;
  align-items: center;
  position: relative;
  bottom: -15px;
  right: 15px;
}
.span-width {
  width: 90%;
}
</style>

