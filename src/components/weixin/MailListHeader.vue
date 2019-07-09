<template>
  <div>
    <!-- 头部新的朋友div -->
    <div style="margin-top:15px;"></div>
    <div>
      <MyilListHeaders
        title="新的朋友"
        :image="`http://127.0.0.1:3000/wechat/MyILlist/myillistheader1.png`"
        :openadd="openadd"
      ></MyilListHeaders>
      <div>
        <MyilListHeaders
          title="群聊"
          :image="`http://127.0.0.1:3000/wechat/MyILlist/myillistheader2.png`"
        ></MyilListHeaders>
      </div>
      <div>
        <MyilListHeaders
          title="标签"
          :image="`http://127.0.0.1:3000/wechat/MyILlist/myillistheader3.png`"
        ></MyilListHeaders>
      </div>
      <div>
        <MyilListHeaders
          title="公众号"
          :image="`http://127.0.0.1:3000/wechat/MyILlist/myillistheader4.png`"
        ></MyilListHeaders>
      </div>
    </div>
  </div>
</template>

<script>
import MyilListHeaders from "./MailList/MyilListHeads.vue";
export default {
  data() {
    return {};
  },
  props:{
    openadd:{type:Function}
  },
  methods: {
    
  },
  components: {
    MyilListHeaders
  },
  
};
</script>
