<template>
  <div>
    <div class="mess" @click="clickroom(lid,uname,img)">
      <div class="leftmess">
        <!-- 头像 -->
        <img class="leftImg" :src="img" alt>
        <div class="rightName">
          <!-- 姓名 -->
          <span class="F_name">{{uname}}</span>
          <!-- 最后一条聊天内容-->
          <span class="subtitle">{{detailsneirong}}</span>
        </div>
      </div>
      <!-- 时间 -->
      <span class="sendtime">
        <mydatatime :mydatetime="detailstime"></mydatatime>
      </span>
    </div>
  </div>
</template>
<script>
import mydatatime from "../weixin/datetime/date";
export default {
  data() {
    return {
      // mydata: "1559906681702",
      details: [],
      thisdetails: []
    };
  },
  // 接收父元素数据
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
    uname: { default: "" },
    clickroom: { type: Function },
    detailstime: { default: "" },
    detailsneirong: { default: "" }
  },
  components: {
    mydatatime
  },
  methods: {}
};
</script>
<style>
/*消息整体样式布局*/
.mess {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
/* 图片消息div样式 */
.leftmess {
  display: flex;
  align-items: center;
}
/* 头像图片样式 */
.leftImg {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
/* 名字 与消息样式 */
.rightName {
  height: 40px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 名字 */
.rightName .F_name {
  font-size: 14px;
  font-weight: 700;
}
/* 消息 */
.rightName .subtitle {
  font-size: 14px;
  color: #adadad;
  font-style: italic;
}
/* 发送时间样式 */
.sendtime {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  color: #adadad;
}
</style>
