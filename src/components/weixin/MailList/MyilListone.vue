<template>
  <div class="pagesss">
    <div>
      <span>来源:</span>
      <span>{{source}}</span>
    </div>
    <div>
      <span>个人签名:</span>
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
    source: { default: "" }
  }
};
</script>

<style scoped>
.pagesss {
  position: fixed;
  top: 50px;
  left: 0px;
  width: 100%;
}
.pagesss > div:first-child {
  background-color: #fff;
  height: 40px;
  margin-top: 20px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  border: 1px solid #000;
}
.pagesss > div:last-child {
  background-color: #fff;
  height: 40px;
  margin-top: 20px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  border: 1px solid #000;
}
.pagesss div span:first-child {
  display: block;
  font-size: 18px;
  font-family: "Microsoft" "yahei";
  justify-content: space-between;
}
.pagesss div {
  display: flex;
  justify-content: space-between;
}
</style>