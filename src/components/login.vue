<template>
  <div>
    <!-- 登录组件 -->
    <div class="container">
      <div class="bgImg">
        <!-- wx -- logo -->
        <div class="imgDiv">
          <img :src="yztimg" alt>
        </div>
        <!-- 登录操作区域 -->
        <div class="loginInput" v-if="show">
          <!-- 用户名 -->
          <mt-field placeholder="请输入用户名" class="bg" @change="anxia" @click="shuru" v-model="uname"></mt-field>
          <!-- 已有登录密码 -->
          <mt-field placeholder="请输入密码" type="password" class="bg" @click="shuru" v-model="upass"></mt-field>
          <p class="regfont" @click="xin">新用户注册</p>
          <!-- 登录 -->
          <div class="login">
            <mt-button @click="loadMore">登录</mt-button>
          </div>
        </div>
        <!-- 注册操作区域 -->
        <div class="regInput" v-else="show">
          <!-- 注册用户名 -->
          <mt-field placeholder="注册用户名" class="bg"   @change="xinname" v-model="uname"></mt-field>
          <span id="fontname" class="font"></span>
          <!-- 注册密码 -->
          <mt-field placeholder="注册密码" class="bg" type="password"  @change="xinpass" v-model="upass" ></mt-field>
          <span id="fontpass" class="font"></span>
          <p class="loginfont" @click="login">老用户登录</p>
          <div class="reg">
            <mt-button @click="reg">注册</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  
import { setInterval, clearInterval, setTimeout } from "timers";
export default {
  data() {
    return {
      show:true,
      name:"",
      pass:"",
      uname: "",
      upass: "",
      yztimg: "http://172.242.19.42:3000/wechat/My_selected.png"
    };
  },
  methods: {
    xinname(){
      var fontname=document.getElementById("fontname");
      if(/^[A-Za-z0-9]{5,16}$/.test(this.uname)==true){
        fontname.innerHTML="用户名格式正确";
      }else{
        fontname.innerHTML="5-16为数字、字母_";
      }
    },
    xinpass(){
      var fontpass=document.getElementById("fontpass");
      if(/^[A-Za-z1-9]{6,12}$/.test(this.upass)==true){
        fontpass.innerHTML="密码格式正确";
      }else{
        fontpass.innerHTML="6-12位数字、字母";
      }
    },
    shuru(){
      namefont="请输入用户名"
    },
    xin(){
      this.show=!this.show
    },
    login(){
      this.show=true;
    },
    // 新用户注册
    reg(){
      this.axios.get("reg",{params:{uname:this.uname,upass:this.upass}}).then(result=>{
        
      })
      
    },
    loadMore() {
      this.axios
        .get("login", { params: { uname: this.uname, upass: this.upass } })
        .then(result => {
          var results = result.data.data[0];
          var results1 = results.img;
          var results2 = results.phone;
          var results3 = results.uid;
          var results4 = results.uname;
          var resultss = { results1, results2, results3, results4 };
          this.$toast(result.data.msg, 1000);
          if (result.data.msg == "登录成功") {
            this.$router.push({
              path: "/weixin",
              name: "weixin",
              params: {
                loginresult: { resultss }
              }
            });
          } else {
            this.uname = "";
            this.upass = "";
            this.yztimg = "http://172.242.19.42:3000/wechat/My_selected.png";
          }
        });
    },

    yanzheng() {
      if (/^[A-Za-z1-9]{6,12}$/.test(this.uname) != false) {
        this.axios
          .get("loginuname", { params: { uname: this.uname } })
          .then(result => {
            if (result.data.code == 1) {
              this.yztimg = result.data.data[0].img;
            }
            //账号不存在提示已隐藏
            //   else {
            //     this.$toast(result.data.msg, 2000);
            //   }
          });
      }
    },
    anxia(e) {
      if (/^[A-Za-z1-9]{6,12}$/.test(this.uname) != false) {
        var getActed = false;
        var ev = e || event;
        if (ev.keyCode != false) {
          getActed = true;
        }
        var t = setInterval(() => {
          if (!getActed) {
          } else {
            getActed = false;
            this.yanzheng();
          }
        }, 1000);
        setTimeout(() => {
          clearInterval(t);
        }, 3000);
      }
    }
  },
  created() {},
  watch: {
    upass() {
      if (!/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"/.test(this.upass)) {
        onkeydown = e => {
          if (event.keyCode == 13) this.loadMore();
          e.stopPropagation();
        };
      }
    }
  }
};
</script>

<style scoped>
.app-container {
  padding: 0;
}
/* 登录页面背景 */
.bgImg {
  height: 800px;
  background: url("http://172.242.19.42:3000/wechat/loginbg.jpg") repeat;
}
/* logo */
.imgDiv {
  padding-top: 150px;
  display: flex;
  justify-content: space-around;
}
.imgDiv img {
  width: 80px;
  height: 80px;
}
/* 用户名--密码 */
.loginInput,.regInput{
  margin-top: 70px;
}
.bg {
  background-color: transparent !important;
}
/* 登录 */
.login,.reg{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
/* .mint-button--normal {
  padding: 0px 20px 0px 20px;
  align-items: center;
} */
/* 注册文字 */
.regfont,.loginfont{
  text-align:right;
  color:blue;
  font-size: 22px;
  margin-right: 10px;
}
.font{
  color: blue;
}
</style>