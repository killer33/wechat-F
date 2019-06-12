<template>
  <div>
    <!-- 头 -->
    <div>
      <Tabheader :header="TabHeader"></Tabheader>
    </div>
    <div>
      <!-- 切换面板 -->
      <mt-tab-container v-model="select">
        <mt-tab-container-item id="WeChat">微信微信微信</mt-tab-container-item>
        <mt-tab-container-item id="MailList">通讯录通讯录通讯录</mt-tab-container-item>
        <mt-tab-container-item id="find">发现发现发现</mt-tab-container-item>
        <mt-tab-container-item id="My">我我我</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 底部导航栏tabbar -->
    <div>
      <!-- fixed固定在底部 -->
      <mt-tabbar fixed v-model="select" @click.native="Judgement">
        <mt-tab-item id="WeChat">
          <Tabbar :WeChat="Wechat" :isIMG="isImgTF[0].isselect"></Tabbar>
        </mt-tab-item>
        <mt-tab-item id="MailList">
          <Tabbar :WeChat="MailList" :isIMG="isImgTF[1].isselect"></Tabbar>
        </mt-tab-item>
        <mt-tab-item id="find">
          <Tabbar :WeChat="find" :isIMG="isImgTF[2].isselect"></Tabbar>
        </mt-tab-item>
        <mt-tab-item id="My">
          <Tabbar :WeChat="My" :isIMG="isImgTF[3].isselect"></Tabbar>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "./weixin/Tabbar";
import Tabheader from "./weixin/tabheader";
export default {
  data() {
    return {
      select: "WeChat",
      TabHeader: {
        title: "微信",
        Imgsearch: "http://172.242.19.42:3000/wechat/search.png",
        Imgadd: "http://172.242.19.42:3000/wechat/ic_add.png"
      },
      isImgTF: [
        { isselect: true },
        { isselect: false },
        { isselect: false },
        { isselect: false }
      ],
      Wechat: {
        title: "微信",
        imgfalse: "http://172.242.19.42:3000/wechat/Wechat.png",
        imgtrue: "http://172.242.19.42:3000/wechat/Wechat_selected.png"
      },
      MailList: {
        title: "通讯录",
        imgfalse: "http://172.242.19.42:3000/wechat/MailList.png",
        imgtrue: "http://172.242.19.42:3000/wechat/MailList_selected.png"
      },
      find: {
        title: "发现",
        imgfalse: "http://172.242.19.42:3000/wechat/find.png",
        imgtrue: "http://172.242.19.42:3000/wechat/find_selected.png"
      },
      My: {
        title: "我",
        imgfalse: "http://172.242.19.42:3000/wechat/My.png",
        imgtrue: "http://172.242.19.42:3000/wechat/My_selected.png"
      }
    };
  },
  components: {
    Tabbar,
    Tabheader
  },
  methods: {
    Judgement(e) {
      var current = e.target.innerHTML;
      //   当前点击tabbar内容进行判断
      switch (current) {
        case "微信":
          for (var p of this.isImgTF) {
            p.isselect = false;
          }
          this.isImgTF[0].isselect = true;
          break;
        case "通讯录":
          for (var p of this.isImgTF) {
            p.isselect = false;
          }
          this.isImgTF[1].isselect = true;
          break;
        case "发现":
          for (var p of this.isImgTF) {
            p.isselect = false;
          }
          this.isImgTF[2].isselect = true;
          break;
        default:
          for (var p of this.isImgTF) {
            p.isselect = false;
          }
          this.isImgTF[3].isselect = true;
          break;
      }
    }
  }
};
</script>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  color: #45c014;
  background-color: transparent;
}
</style>

