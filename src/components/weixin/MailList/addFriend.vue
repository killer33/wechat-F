<template>
  <div class="all">
    <input type="text" placeholder="微信名/手机号/账号" v-model="Fname" class="searchFriend">
    <mt-button size="large" class="searchButton" @click="search">查找</mt-button>
    <div style="clear:both"></div>
    <div class="friendContent" v-show="friend">
      <div class="friend">
        <div>
          <img :src="friendContent.uImg" alt>
          <p>{{friendContent.uname}}</p>
        </div>

        <mt-button size="normal" class="Fadd" @click="onadd">添加</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Fname: "",
      friend: false,
      Cname: "",
      friendContent: {
        uid: "",
        uname: "",
        uImg: ""
      }
    };
  },
  methods: {
    search() {
      console.log(this.Fname);
      if (/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this.Fname) == true) {
        this.Cname = "phone";
      } else if (/[0-9]{6,10}/.test(this.Fname) == true) {
        this.Cname = "email";
      } else if (/[A-Za-z0-9]{6,10}/.test(this.Fname) == true) {
        this.Cname = "uname";

      }else {
        this.$messagebox("", "请输入正确格式");
        return;
      }
      // 手机号11位数组正则表达式
      // 用户名包含字母数字
      // 账号11位数字正则表达式
      this.axios
        .get(`loginchazhao?${this.Cname}=${this.Fname}`)
        .then(result => {
          if (result.data.code != -1) {
            this.friendContent.uid = result.data.data[0].uid;
            this.friendContent.uname = result.data.data[0].uname;
            this.friendContent.uImg = result.data.data[0].img;
            this.friend = true;
          } else {
            this.$messagebox("", "查无此人");
          }
        });
    },
    onadd() {
      this.axios.get("logintianjia").then(result => {
        if (result.data.code == 1) {
          this.$messagebox("", result.data.msg);
          this.friend = false;
          this.Fname = "";
        } else {
          this.$messagebox("", result.data.msg);
        }
      });
    }
  }
};
</script>
<style>
.all {
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
}
.searchFriend {
  margin-top: 30px;
  width: 75% !important;
  float: left;
  margin-left: 3%;
}
.searchButton {
  margin-top: 30px;
  margin-left: 1%;
  width: 20% !important;
  background-color: #09bb07 !important;
  color: white !important;
  font-size: 20px !important;
  float: left;
}
.friendContent {
  width: 100%;
  margin-top: 50px;
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
}
.friend {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.friend div {
  width: 100px;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
}
.friend img {
  height: 40px;
}
.friend p {
  color: #000;
  font-size: 15px;
}
.friend .Fadd {
  outline: none;
}
</style>

