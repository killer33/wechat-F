<template>
    <div class="mess" @click="clickroom(id)">
        <div class="leftmess">
            <img class="leftImg" :src="imgurl" alt="">
            <div class="rightName">
                <span class="F_name">{{title}}</span>
                <span class="subtitle">{{subtitle}}</span>
            </div>
        </div>
        <span class="sendtime">
            {{time}}
        </span>
    </div>
</template>
<script>

export default {
    data(){
        return{}
    },
    // 接收父元素数据
    props:{
        id:{default:""},
        imgurl:{default:""},
        title:{type:String,default:""},
        subtitle:{type:String,default:""},
        time:{type:String,default:""},
        clickroom:{type:Function}
    },
    components:{

    }
}
</script>
<style>
    /*消息整体样式布局*/
    .mess{
        height: 60px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    /* 图片消息div样式 */
    .leftmess{
        display: flex;
        align-items: center;
    }
    /* 头像图片样式 */
    .leftImg{
        width: 40px;
        height: 40px;
        margin-left:10px; 
    }
    /* 名字 与消息样式 */
    .rightName{
        height: 40px;
        margin-left:20px; 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    /* 名字 */
    .rightName .F_name{
        font-size:14px;
        font-weight: 700;
    }
    /* 消息 */
    .rightName .subtitle{
        font-size: 14px;
        color: #adadad;
        font-style: italic;
    }
    /* 发送时间样式 */
    .sendtime{
        position:absolute;
        top:10px;
        right: 10px;
        font-size: 12px;
        color: #adadad;
    }
</style>
