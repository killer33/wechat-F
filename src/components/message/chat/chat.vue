<template>
  <div class="chatroom">
    <div class="back">
      <span class="leftback">
        <img src="http://zidan.applinzi.com/wechat/ic_back.png" alt @click="clickroom()">
        <p>{{uname}}</p>
      </span>

      <span class="rightuser" @click="cUser(lid,uname)">
        <img src="http://zidan.applinzi.com/wechat/backMyilList.png" alt>
      </span>
    </div>
    <div class="content">
      <div class="content-wapper" id="scrolldiv">
        <div class="content-top">
          <p>————现在可以和我聊天了————</p>
        </div>
        <div class="content-body">
          <ul v-for="(item,index) in Content" :key="index">
            <li class="ask" :id="index" v-show="item.askContent">
              <img :src="item.askImg" alt>
              <p>{{item.askContent}}</p>
            </li>
            <li class="reply" v-show="item.replyContent">
              <img :src="item.replyImg" alt>
              <p>{{item.replyContent}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="send">
        <input type="text" placeholder="请输入聊天内容" v-model="chatContent">
        <mt-button size="normal" class="sendbutton" @click="addContent">发送</mt-button>
      </div>
    </div>
    <!-- <mt-popup position="right" v-model="chatUser" class="chat">
            <chatUser :cUser="cUser"></chatUser>
    </mt-popup>-->
  </div>
</template>
<script>
import chatUser from "./chat-user";
export default {
  data() {
    return {
      chatContent: "",
      Content: [],
      display: "display:none",
      randomReply: [
        "你好!",
        "好的",
        "OK",
        "没问题",
        "别这样",
        "再见",
        "早上好",
        "晚上好",
        "中午好",
        "你刚才说什么，我没看清楚，请再说一遍!",
        "为什么？为什么我在线，你就不在线，你在线，我就不在线呢？",
        "您所呼叫的用户尚在厕所中，稍后请拿厕纸给他！",
        "香蕉，你的大西瓜，再叫我咬你！咔咔咔咔咔咔…",
        "广告之后，马上回来！",
        "唉呀——你可真调皮！你看，我话还没说完你又来了！",
        "你发的什么啊？我看着怎么是乱码！",
        "真的要跟我聊天?想好了?不后悔了?真的不后悔了?",
        "走开一下，如果3分钟之内还没回请不要发飙，因为我正在对着设相头摆POSE！",
        "对不起，由于服务器的原因，您刚才发的信息丢失，请重发一面。",
        "她说她在游戏，有事请大声的叫她，大声点，再大声点。"
      ],
      neirong1: "",
      chatUser: false,
      // details: [],
      // thisdetails: []
    };
  },
  methods: {
    addContent() {
      if (!this.chatContent == "") {
        this.Content.push({
          askImg: "a_7.png",
          askContent: this.chatContent
        }),
          this.chatContent = "";
        setTimeout(() => {
          this.Content.push({
            replyImg: "a_7.png",
            replyContent: this.randomReply[Math.floor(Math.random() * 20)]
          });
        }, 1000);
      }
    },
    scroll() {
      var now = new Date();
      var div = document.getElementById("scrolldiv");
      div.scrollTop = div.scrollHeight + 50;
      setTimeout(() => {
        div.scrollTop += 55;
      }, 1);
    },
    senddetails() {
      this.axios.get("details", { params: { lid: this.lid } }).then(result => {
        var result = result.data.data;
        // var arr = [];
        // for (var p of result[0].wx_details.split(",")) {
        //   arr.push(p.split(" "));
        // }
        // for (var i = 0, ii = 0; i < arr.length; i++) {
        //   var reg = arr[i][0].search(this.lid);
        //    if (arr[i][0].search(this.lid) == "1") {
        //      this.details[ii] = arr[i]
        //        .join(",")
        //        .split(",")[1]
        //        .replace(/\[/g, "")
        //        .replace(/\]/g, "");
        //      ii++;
        //    } else {
        //      this.thisdetails = arr[i]
        //        .join(",")
        //        .split(",")[1]
        //        .replace(/\[/g, "")
        //        .replace(/\]/g, "");
        //    }

        //}
        // console.log(result);
        var arr=[];
        for(var p of result[0].wx_details.split(",")){
            arr.push(p.split(" "));
        }
        // console.log(arr);
        for(var i=0;i<arr.length;i++){
            var mylid=arr[i][0].replace(/\[/g, "").replace(/\]/g, "");
            // console.log(mylid);
            var con=arr[i][1].replace(/\[/g, "").replace(/\]/g, "");
            // console.log(con);
            if(mylid==result[0].wx_myid_lid){
              this.Content.push({
                askImg: "a_7.png",
                askContent: con
              })
            }else if(mylid==result[0].wx_thid_lid){
              this.Content.push({
                replyImg: "a_7.png",
                replyContent: con
              })
            }
        }
        
      });
    }
  },
  props: {
    clickroom: { type: Function },
    lid: { default: "" },
    cUser: { type: Function },
    uname: { default: "" },
    img: { default: "" },
  },
  watch: {
    Content() {
      this.scroll();
      
    },
    lid(){
      this.senddetails();
      console.log(this.Content);
    },
  },
  components: {
    chatUser: chatUser
  }
};
</script>
<style>
.chatroom {
  z-index: 200;
  position: relative;
}
/* 头部样式 */
.back {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: #1e2b39;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.leftback {
  display: flex;
}
.leftback img {
  height: 16px;
  margin-left: 15px;
  margin-top: 2px;
}
.leftback p {
  color: white;
  font-size: 20px;
  margin-left: 15px;
  padding-left: 10px;
  border-left: 1px solid #000;
  margin-bottom: 0;
}
.rightuser img {
  margin-right: 15px;
  margin-top: 2px;
  width: 28px;
}

/* 聊天内容样式 */
.content {
  position: fixed;
  top: 50px;
  bottom: 50px;
  background-color: #ebebeb;
  width: 100%;
}
.content .content-wapper {
  height: 100%;
  overflow: auto;
}
.content-top {
  margin-top: 5px;
  font-size: 14px;
  color: #adadad;
  text-align: center;
}

.content-body {
  padding: 20px 10px;
}
.content-body ul {
  list-style: none;
  display: block;
  padding: 0;
}
/* 发送消息样式 */
ul li.ask {
  text-align: right;
  line-height: 28px;
  margin-bottom: 15px;
}
.content-body ul li::after {
  display: table;
  content: "";
  clear: both;
}
.content-body ul li > img {
  width: 30px;
  height: 30px;
}
li.ask > img {
  float: right;
  margin-left: 15px;
}
.content-body ul li > p {
  line-height: 30px;
  padding: 3px 10px;
  max-width: 190px;

  border-radius: 3px;
}
li.ask > p {
  float: right;
  background-color: #09bb07;
  color: #fff;
}
/* 回复消息样式 */
ul li.reply {
  text-align: left;
  line-height: 28px;
  margin-bottom: 15px;
}
li.reply > img {
  float: left;
  margin-right: 15px;
}
li.reply > p {
  float: left;
  background-color: #fff;
  color: #000;
}

/* 底部样式 */
.bottom {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
}
.send {
  height: 50px;
}
.send input {
  height: 30px !important;
  width: 70% !important;
  border: none !important;
  margin: 10px !important;
  font-size: 15px !important;
  border-bottom: 1px solid #adadad !important;
  padding-left: 8px !important;
}
.send button {
  margin-top: 10px;
  background-color: #09bb07;
  color: white;
  height: 28px;
  width: 20%;
}
</style>
