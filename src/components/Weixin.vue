<template>
  <div>
    <!-- 头 -->
    <div>
      <Tabheader :header="TabHeader"></Tabheader>
    </div>
    <div>
      <!-- 切换面板 -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="WeChat">
          <Messagelist
            v-for="(item,index) of list"
            :key="index"
            :lid="item.lid"
            :area="item.area"
            :common="item.common"
            :img="item.img"
            :region="item.region"
            :remarks="item.remarks"
            :sex="item.sex"
            :source="item.source"
            :title="item.title"
            :uname="item.uname"
            :detailstime="lists[index]"
            :detailsneirong="lists1[index]"
          ></Messagelist>
        </mt-tab-container-item>
        <!-- 好友列表 -->

        <mt-tab-container-item id="MailList">
          <MailList :Judgement="Judgement"></MailList>
        </mt-tab-container-item>
        <mt-tab-container-item id="find">
          <Tabfind></Tabfind>
        </mt-tab-container-item>
        <mt-tab-container-item id="My">
          <Myname></Myname>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 底部导航栏tabbar -->
    <div>
      <!-- fixed固定在底部 -->
      <mt-tabbar fixed v-model="selected" @click.native="Judgement">
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
import Tabbar from "./weixin/Tabbar.vue";
import Tabheader from "./weixin/tabheader.vue";
import Messagelist from "./message/messagelist";
import Tabfind from "./weixin/TabFind.vue";
import My from "./weixin/My.vue";
// 列表插件1

import MailList from "./weixin/MailList.vue";
export default {
  data() {
    return {
      selected: "WeChat",
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
      },
      list: [],
      lists: [],
      lists1: []
    };
  },
  components: {
    Tabbar,
    Tabheader,
    Tabfind,
    Myname: My,
    MailList,
    Messagelist
  },
  methods: {
    Judgement(e) {
      if (e != undefined) {
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
          case "我":
            for (var p of this.isImgTF) {
              p.isselect = false;
            }
            this.isImgTF[3].isselect = true;
            break;
          default:
            for (var p of this.isImgTF) {
              p.isselect = false;
            }
            this.isImgTF[0].isselect = true;
        }
      } else {
        this.Juindex();
      }
    },
    Mordload() {
      this.axios.get("sessiony").then(result => {
        if (result.data.code == -1) {
          this.$toast(result.data.msg, 1000);
          this.$router.push({ path: "/login" });
        } else {
          this.wload();
        }
      });
    },
    wload() {
      this.axios.get("wload").then(result => {
        if (result.data.code == 1) {
          for (var i = 0; i < result.data.data.length; i++) {
            this.list[i] = result.data.data[i][0];
          }
        } else {
          this.$toast(result.data.msg, 2000);
        }
        this.Juindex();
      });
    },
    Juindex() {
      for (var p of this.isImgTF) {
        p.isselect = false;
      }
      this.isImgTF[0].isselect = true;
      this.selected = "WeChat";
    },
    detailstime() {
      this.axios.get("detailstime").then(result => {
        var result = result.data;
        var arr = [],
          arr1 = [];
        for (var i = 0; i < result.data.length; i++) {
          if (result.data[i][0].wx_details_time != undefined) {
            arr.push(result.data[i][0].wx_details_time.split(",")[1]);
          }
          var err = result.data[i][0].wx_details.split(",");
          arr1.push(
            err[err.length - 1]
              .split(" ")[1]
              .replace(/\[/, "")
              .replace(/\]/, "")
          );
        }
        this.lists = arr;
        this.lists1 = arr1;
      });
    }
  },
  created() {
    this.Mordload();
    this.detailstime();
  },
  watch: {}
};
</script>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  color: #45c014;
  background-color: transparent;
}
</style>

