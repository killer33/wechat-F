<template>
  <div>
    <div class="myilListHeades" @click="openadd()  ">
      <img :src="image" alt>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: { default: "" },
    image: { default: "" },
    openadd:{type:Function},

  },
  methods:{

  }
};
</script>

<style scoped>
.myilListHeades {
  display: flex;
  left: 0px;
  border-bottom: 1px solid hsla(0, 0%, 60%, 0.4);
  padding: 10px 10px;
  align-items: center;
}
.myilListHeades img:first-child {
  margin-right: 25px;
  height: 20px;
  width: 20px;
  vertical-align: middle;
}
.myilListHeades span:first-child {
  box-sizing: border-box;
  outline: none;
  font-size: 17px;
  line-height: 21px;
  color: #888;
}
</style>