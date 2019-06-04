<template>
  <div>
    <div class="img-span">
      <img :src="`${isIMG?WeChat.imgtrue:WeChat.imgfalse}`" alt class="imgstyle">
      <span class="position-absolute">{{WeChat.title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  props: {
    WeChat: {
      title: { default: "" },
      imgtrue: { default: "" },
      imgfalse: { default: "" }
    },
    isIMG: { default: "" }
  },
};
</script>

<style>
.img-span {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
.imgstyle {
  width: 30px;
  height: 30px;
  margin-bottom: 15px;
}
.position-absolute {
  position: absolute;
  padding: 30px 35px 35px 35px;
  z-index: 999;
}
.position-absolute::before,
.position-absolute::after {
  content: "";
  display: block;
  clear: both;
}
</style>
