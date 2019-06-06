<template>
  <div class="page-header">
    <div class="page">
      <div class="display-div div-div">
        <div @click="opensss(img)">
          <img :src="img" alt class="img-header">
        </div>
        <div class="display-div div-span">
          <span class="font-w">
            <!-- 姓名 -->
            {{results.uname}}
          </span>
          <span>微信号:{{results.remarks}}</span>
          <span>{{results.sex=="1"?"男":"女"}}</span>
        </div>
      </div>
      <div class="phonecls">
        <span class="font-w">电话号码:</span>
        <span>185543456</span>
      </div>
      <div class="phone">
        <div class="region">
          <span class="font-w">地区:</span>
          <span>
            {{results.region}}
            <!-- 地区 -->
          </span>
          <span>
            {{results.area}}
            <!-- 具体地区 -->
          </span>
        </div>
        <div class="display-div album">
          <span class="font-w">相册</span>
          <div>
            <img src="http://172.242.19.42:3000/wechat/tabfind6.png">
            <img src="http://172.242.19.42:3000/wechat/tabfind6.png">
            <img src="http://172.242.19.42:3000/wechat/tabfind6.png">
          </div>
        </div>
        <div class="More">
          <span class="font-w" @click="openssss(results.source,results.title)">更多</span>
        </div>
      </div>
    </div>
    <div class="div-button">
      <button class="large" @click="sends">{{titlesend}}</button>
    </div>
    <!-- <mt-popup v-model="popupVisible" class="img-img">
      <img :src="results.img" alt class="img-img" @click="opensss">
    </mt-popup>-->
    <!-- <mt-popup v-model="popupVisibles" class="popup-div">
      <backheader :back="openssss" :title="titlelist"></backheader>
      <MyilListone :title="results.title" :source="results.source"></MyilListone>
    </mt-popup>-->
  </div>
</template>

<script>
import backheader from "../weixinhead/backheader.vue";

export default {
  data() {
    return {
      results: "",
      img: "",
      list: []
    };
  },
  props: {
    lid: { default: "" },
    titlesend: { default: "" },
    Judgement: { type: Function },
    backi: { type: Function },
    opensss: { type: Function },
    openssss: { type: Function }
  },
  methods: {
    sends(n) {
      this.axios.get("sends", { params: { lid: this.lid } }).then(result => {
        this.list = result;
        this.backi();
        this.Judgement();
      });
    },
    chartonc() {
      this.axios.get("chartone", { params: { lid: this.lid } }).then(result => {
        this.results = result.data[0];
        this.img = result.data[0].img;
      });
    }
  },
  components: {
    backheader
  },
  created() {},
  watch: {
    lid() {
      this.chartonc();
    }
  }
};
</script>

<style scoped>
/* 最外层div */
.page-header {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
}
.page {
  width: 100%;
  background-color: #fff;
  font-size: 14px;
}
/* flex样式 */
.display-div {
  display: flex;
}
.div-div {
  margin-top: 5px;
  padding: 5px 10px;
  align-items: center;
  border-bottom: 8px solid rgba(0, 0, 0, 0.2);
}
.img-header {
  height: 60px;
  width: 60px;
  transition: all 0.5s;
}
.div-div img {
  margin-right: 15px;
}
.div-span {
  flex-direction: column;
  color: #000;
  margin-top: 8px;
}
/* 手机号码 */
.phonecls {
  display: block;
  border-bottom: 8px solid rgba(0, 0, 0, 0.2);
  padding-left: 15px;
}
.region {
  border-bottom: 1px solid #ccc;
  padding: 5px;
}
.region span:first-child {
  margin-left: 10px;
}
.font-w {
  font-weight: 600;
}
.album {
  padding-left: 15px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
}
.album img {
  margin-left: 20px;
}
.More {
  padding: 7px 0px 7px 15px;
}
.div-button {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  align-items: center;
}
.large {
  font-size: 19px;
  display: block;
  width: 90%;
  border: none;
  background-color: #1aad16;
  color: #fff;
  border-radius: 5px;
  margin: auto;
  margin-top: 20px;
  padding: 8px 0px;
}
/* 放大图 */
.img-img,
.popup-div {
  width: 100%;
  height: 100%;
}
.img-img img {
  width: 100%;
  height: 50%;
}
.popup-div {
  width: 100%;
  height: 100%;
}
</style>