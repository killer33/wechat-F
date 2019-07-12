<template>
    <div class="container-collect">
        <div class="collect-info">
            <div>
                <img :src="nameImg" alt="头像" class="name-img">
            </div>
            <div class="contain">
                <div class="info-name">
                    <h2 class="name">{{name}}</h2>
                    <p class="info-contain">{{info}}</p>
                </div>
                <div class="info-img">
                    <img :src="nameImg" alt="相册">
                    <img :src="nameImg" alt="相册">
                </div>
                <span class="time">{{time}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nameImg:"http://zidan.applinzi.com/wechat/tabfind4.png",
            name:"曹操",
            info:"宁我负人，毋人负我！",
            time:"31分钟前"
        }
    }
}
</script>
<style scoped>
    .container-collect{
        height: 100%;
        overflow: auto;
    }
    .collect-info{
        width: 100%;min-height: 180px;
        padding: 20px 10px;
        display: flex;
        border-bottom: 1px solid #cccccc;
        overflow: auto;
    }
    .name-img{
        width: 50px;height:50px;
    }
    .contain{
        margin-left: 10px;
        width: 100%;
    }
    .info-contain{
        font-size: 16px;
        color: #000000;
    }
    .info-img img{
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }
    .name{
        font-size: 16px;
        color:#27408B;
    }
    .time{
        display: block;
        margin-top: 20px;
        font-size: 14px;
    }
</style>