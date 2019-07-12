<template>
  <div class="container-money">
    <!-- 钱包列表 -->
    <div class="money-list">
      <div class="sfk" @click="test()">
        <img src="http://zidan.applinzi.com/wechat/money1.png" alt>
        <span>收付款</span>
      </div>
      <div class="lq" @click="test()">
        <img src="http://zidan.applinzi.com/wechat/money2.png" alt>
        <span>零钱</span>
      </div>
      <div class="yhk" @click="test()">
        <img src="http://zidan.applinzi.com/wechat/money3.png" alt>
        <span>银行卡</span>
      </div>
    </div>
    <!-- 腾讯服务 -->
    <div class="content-body">
      <h2>腾讯服务</h2>
      <div class="f1">
        <div>
          <p>银行卡还款</p>
          <p>手机充值</p>
          <p>理财通</p>
        </div>
        <div>
          <p>生活缴费</p>
          <p>城市服务</p>
          <p>腾讯公益</p>
        </div>
      </div>
      <h2>第三方服务</h2>
      <div class="f2">
        <div>
          <p>火车票机票</p>
          <p>美团外卖</p>
          <p>酒店预订</p>
        </div>
        <div>
          <p>滴滴出行</p>
          <p>电影赛事演出</p>
          <p>蘑菇街</p>
        </div>
        <div>
          <p>京东优选</p>
          <p>吃喝玩乐</p>
          <p>58到家</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import titlebar from "../weixinhead/backheader";
export default {
  data() {
    return {};
  },
  components: {
    titlebar: titlebar
  },
  methods: {
    test() {
      this.$messagebox({
        title: "抱歉！该功能尚未开通"
      });
    }
  }
};
</script>
<style scoped>
.container-money{
  height: 100%;
  width: 100%;
  overflow:scroll;
}
/* 钱包列表 */
.money-list {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #666f76;
}
.money-list div {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.money-list img {
  width: 40px;
  height: 40px;
}
.money-list span {
  margin-top: 15px;
  color: #fff;
}
/* 腾讯服务 第三方服务标题 */
.content-body h2 {
  width: 100%;
  height: 56px;
  padding: 20px 0px 10px 20px;
  font-size: 16px;
}
/* f1 f2服务内容 */
.f1,
.f2 {
  display: flex;
  justify-content: space-between;
}
.f1 div {
  width: 50%;
}
.f1 div p,
.f2 div p {
  width: 100%;
  height: 90px;
  line-height: 90px !important;
  color: black !important;
  background: #fff;
  margin: 0;
  border: 1px solid hsla(0, 0%, 60%, 0.4);
  text-align: center;
}
.f2 div {
  width: 33.333333%;
}
</style>