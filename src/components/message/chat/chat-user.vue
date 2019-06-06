<template>
    <div class="chat-user">
        <div class="back">
            <span class="leftback">
                <img src="back.png" alt="" @click="cUser()">
                <p>聊天信息</p>
            </span>
        </div>
        <div class="user">
            <img src="a_7.png" alt="">
            <p>朋友名字</p>
        </div>
        <div class="set">
            <div>
                <p>置顶消息</p>
                <span class="switch">
                    <mt-switch class="s" ></mt-switch>
                </span>
            </div>
            <div>
                <p>消息免打扰</p>
                <span class="switch">
                    <mt-switch class="s" v-model="isOpen"></mt-switch>
                </span>
            </div> 
            <div><p>清空聊天记录</p></div> 
            <div><p>投诉</p></div> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isOpen:true
        }
    },
    props:{
        cUser:{type:Function},
    }
}
</script>
<style>
    .chat-user{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #ebebeb;
        z-index: 300;
        
    }
    .content{
        bottom: 0;
    }
    /* 用户信息 */
    .user{
        margin-top:50px;
        background-color:#fff;
        padding: 10px 20px;  
    }
    .user img{
        width: 60px ;
        height: 60px;
    }
    .user p{
        width: 60px;
        text-align: center;
        font-size: 14px;
        color: #000;
        padding-top: 5px;
        margin-bottom:0; 
    }
    /* 设置 */
    .set{
        margin-top: 20px;
        width: 100%;
    }
    .set div{
        position: relative;
        background-color: #fff;
        margin: 10px 0;
        height: 40px;
        
        line-height: 40px;
        padding-left: 20px;
    }
    .set div p{
        font-size: 16px;
        color: #000;
    }
    .set div span.switch{
        position:absolute;
        top:0px;
        right: 5px;
    }
    .set div span.switch .s{
        height: 40px;
    }
</style>
