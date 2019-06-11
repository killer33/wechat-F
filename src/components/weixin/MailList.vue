<template>
  <div class="page">
    <div class="page-90">
      <div>
        <!-- 上部分内容 -->
        <div>
          <MailListHeader></MailListHeader>
        </div>
        <!-- 好友列表 -->
        <div>
          <ul>
            <li>
              <div v-for="(p,i) of arr" :key="i" @click="open(p.lid)" class="page-div">
                <img :src="p.img" alt>
                <span>{{p.uname}}</span>
              </div>
              <mt-popup v-model="istrues">
                <!-- 详细信息返回头 -->
                <backheader :title="title" :back="open"></backheader>
                <!-- 详细信息列表 -->
                <MailListBody
                  :titlesend="titlesend"
                  :backi="open"
                  :Judgement="Judgement"
                  :lid="lid"
                  :opensss="opensss"
                  :openssss="openssss"
                  :opensends="opensends"
                ></MailListBody>
              </mt-popup>
              <mt-popup v-model="popupVisible" class="img-img">
                <img :src="p_img" @click="opensss" alt>
              </mt-popup>
              <mt-popup v-model="popupVisibles" class="popup-div">
                <backheader :back="openssss" :title="titlelist"></backheader>
                <MyilListone :title="one_title" :source="one_source"></MyilListone>
              </mt-popup>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="page-10">24</div> -->
    <div></div>
  </div>
</template>

<script>
import MailListHeader from "./MailListHeader";
import backheader from "./weixinhead/backheader.vue";
import MailListBody from "./MailList/MyilListBody.vue";
import MyilListone from "./MailList/MyilListone";
export default {
  data() {
    return {
      one_title: "",
      one_source: "",
      title: "详细信息",
      list: [],
      arr: [],
      titlesend: "发消息",
      istrues: false,
      lid: "",
      popupVisible: false,
      p_img: "",
      popupVisibles: false,
      titlelist: "微信"
    };
  },
  props: { Judgement: { type: Function }, opensends: { type: Function } },
  methods: {
    loadMore() {
      this.axios
        .get("weixin")
        .then(result => {
          this.list = result.data.data;
        })
        .then(() => {
          this.arr = [];
          for (var i = 0; i < this.list.length; i++) {
            var obj = {};
            obj = this.list[i][0];
            this.arr.push(obj);
          }
        });
    },
    open(n) {
      if (!this.istrues) {
        this.istrues = true;
        this.lid = n;
      } else {
        this.istrues = false;
      }
    },
    opensss(n) {
      if (this.popupVisible == false) {
        this.popupVisible = true;
        this.p_img = n;
      } else {
        this.popupVisible = false;
        // document.querySelector(".v-modal").remove();
      }
    },
    openssss(n, i) {
      if (!this.popupVisibles) {
        this.popupVisibles = true;
        this.one_title = i;
        this.one_source = n;
      } else {
        this.popupVisibles = false;
      }
    }
  },
  created() {
    this.loadMore();
  },
  components: {
    MailListHeader,
    backheader,
    MailListBody,
    MyilListone
  }
};
</script>

<style scoped>
.page {
  display: flex;
}
.page-90 {
  box-sizing: border-box;
  width: 95%;
  padding: 0px;
  margin: 0px;
}
.page-10 {
  display: flex;
  justify-items: center;
  box-sizing: border-box;
  width: 5%;
  border: 1px solid #fff;
  background-color: #fff;
  padding: 0px;
  margin: 0px;
  align-items: center;
}
.page-div {
  border-bottom: 5px solid transparent;
}
ul {
  padding-left: 0px;
}
ul > li {
  list-style: none;
  background-color: #fff;
}
li img {
  width: 40px;
  height: 40px;
  margin: 8px;
}
.mint-popup {
  width: 100%;
  height: 100%;
  background: #fff;
  top: 50%;
  left: 50%;
}
.disiplaynone {
  display: none;
}
.img-img img {
  width: 100%;
  height: 50%;
}
</style>
