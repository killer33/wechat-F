<template>
    <div class="container-aldum">
        <div class="myInfo-bgimg" :style="`backgroundImage:url(${myInfo.Bgimg})`">
            <div>
                <span>{{myInfo.name}}</span>
                <img :src="myInfo.nameImg" alt="头像">
            </div>
        </div>
        <div class="aldum">
            <div>
                <img :src="myInfo.nameImg" alt="头像" class="name-img">
            </div>
            <div class="contain">
                <div class="info-name">
                    <h2>{{myInfo.name}}</h2>
                    <p class="info-contain"></p>
                </div>
                <div class="info-img">
                    <img :src="myInfo.nameImg" alt="相册">
                    <img :src="myInfo.nameImg" alt="相册">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        myInfo:{
            Bgimg:{ default:"" },
            name:{ default:"" },
            nameImg:{ default:""},
        }
    }
}
</script>
<style scoped>
    /* 最外层div背景图 */
.myInfo-bgimg {
  min-width: 100%;
  height: 260px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.container-aldum{
    overflow:auto;
    height: 100%;
}
.myInfo-bgimg > div {
  /* position: relative; */
  position: absolute;
  color: #fff;
  bottom: 15px;
  right: 15px;
}
.myInfo-bgimg div span {
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
}
.myInfo-bgimg div img {
  margin-bottom: -40px;
  width: 84px;
  height: 84px;
}
.aldum{
    width: 100%;min-height: 180px;
    padding: 20px 10px;
    display: flex;
    border-bottom: 1px solid #cccccc;
}
.name-img{
    width: 50px;height:50px;
}
.contain{
    margin-left: 20px;
    width: 100%;
}
.info-name h2{
    margin-bottom: 20px;
}
.info-contain{
    font-size: 16px;
    color: #000000;
}
.info-img{
    margin-bottom:15px;
}
.info-img img{
    width: 100px;
    height: 100px;
    margin-right: 10px;
}
</style>
