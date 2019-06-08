<template>
  <div>
    <message
      class="item"
      :lid="lid"
      :area="area"
      :common="common"
      :img="img"
      :region="region"
      :remarks="remarks"
      :sex="sex"
      :source="source"
      :title="title"
      :uname="uname"
      :clickroom="clickroom"
      :cUser="cUser"
    ></message>

    <mt-popup position="right" v-model="chatroom" class="chat">
      <chatroom :clickroom="clickroom" :lid="lids" :uname="unames" :cUser="cUser" :img="img"></chatroom>
    </mt-popup>
    <mt-popup position="right" v-model="chatUser" class="chat">
      <chatUser :cUser="cUser" :uname="unames" :img="img"></chatUser>
    </mt-popup>
  </div>
</template>
<script>
//引入Message子组件
import message from "./message";
//聊天室子组件
import chatroom from "./chat/chat";
//引入模拟数据库的json文件
// import json from "../json/message.json"
// 聊天信息子组件
import chatUser from "./chat/chat-user";
export default {
  props: {
    lid: { default: "" },
    area: { default: "" },
    common: { default: "" },
    img: { default: "" },
    region: { default: "" },
    remarks: { default: "" },
    sex: { default: "" },
    source: { default: "" },
    title: { default: "" },
    uname: { default: "" }
  },
  data() {
    return {
      // datas:json,
      chatroom: false,
      chatUser: false,
      lids: "",
      unames: "",
      imgurl: ""
    };
  },
  components: {
    message: message,
    chatroom: chatroom,
    chatUser: chatUser
  },
  methods: {
    clickroom(id, name, img) {
      if (!this.chatroom) {
        this.chatroom = true;
        this.lids = id;
        this.unames = name;
        this.imgurl = img;
      } else {
        this.chatroom = false;
      }
      // document.getElementsByClassName("mint-popup")[0].style("transition","1s");
    },
    cUser() {
      if (!this.chatUser) {
        // this.clickroom();
        this.chatUser = true;
        // this.userid = id;
      } else {
        // this.clickroom();
        this.chatUser = false;
      }
    }
  },
  watch: {},
  created() {}
};
</script>
<style>
.item {
  border-bottom: 1px solid #d6d6d6;
}
.chat {
  height: 100%;
  width: 100%;
}
</style>
