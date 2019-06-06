<template>
  <div>
    <message
      class="item"
      v-for="(item,index) in lists"
      :key="index"
      :lid="item.lid"
      :area="item.area"
      :common="item.common"
      :imgurl="item.img"
      :region="item.region"
      :remarks="item.remarks"
      :sex="item.sex"
      :time="item.source"
      :title="item.title"
      :uname="item.uname"
      :source="item.source"
      :clickroom="clickroom"
      :cUser="cUser"
    ></message>
    <mt-popup position="right" v-model="chatroom" class="chat">
      <chatroom :clickroom="clickroom" :userid="userid" :uname="uname" :cUser="cUser"></chatroom>
    </mt-popup>
    <mt-popup position="right" v-model="chatUser" class="chat">
      <chatUser :cUser="cUser" :uname="uname" :img="imgurl"></chatUser>
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
  props: { lists: { default: () => [] } },
  data() {
    return {
      // datas:json,
      chatroom: false,
      chatUser: false,
      userid: "",
      uname: "",
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
        this.userid = id;
        this.uname = name;
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
  }
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
