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
              <div v-for="(p,i) of arr" :key="i" @click="open(i)" class="page-div">
                <img :src="p.img" alt>
                <span>{{p.uname}}</span>
                <mt-popup class="mt-popups">
                  <backheader :title="title" :back="back"></backheader>
                  <MailListBody
                    :area="p.area"
                    :img="p.img"
                    :lid="p.lid"
                    :region="p.region"
                    :release_content_id="p.release_content_id"
                    :remarks="p.remarks"
                    :sex="p.sex"
                    :source="p.source"
                    :title="p.title"
                    :uname="p.uname"
                  ></MailListBody>
                </mt-popup>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page-10">24</div>
    <div></div>
  </div>
</template>

<script>
import MailListHeader from "./MailListHeader";
import backheader from "./weixinhead/backheader.vue";
import MailListBody from "./MailList/MyilListBody.vue";
export default {
  data() {
    return {
      title: "详细信息",
      list: [],
      arr: []
    };
  },
  props: {},
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
      var all = document.querySelectorAll(".mt-popups");
      for (var i of all) {
        i.style.display = "none";
      }
      all[n].style.display = "block";
    },
    back(e) {
      var all = document.querySelectorAll(".mt-popups");
      for (var i of all) {
        i.style.display = "none";
      }
      e.stopPropagation();
    }
  },
  created() {
    this.loadMore();
  },
  components: {
    MailListHeader,
    backheader,
    MailListBody
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
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
}
.disiplaynone {
  display: none;
}
</style>