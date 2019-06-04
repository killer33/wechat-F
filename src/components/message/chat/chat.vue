<template>
    <div class="chatroom">
        <div class="back">
            <span class="leftback">
                <img src="back.png" alt="" @click="clickroom('this')">
                <p>朋友名字</p>
            </span>
            
            <span class="rightuser">
                <img src="F_user.png" alt="">
            </span>
        </div>
        <div class="content">
            <div class="content-wapper">
                <div class="content-top">
                    <p>————现在可以和我聊天了————</p>
                </div>
                <div class="content-body">
                    <ul v-for="(item,index) in Arr" :key="index">
                        <li class="ask" :id="index">
                            <img src="a_7.png" alt="">
                            <p>{{item}}</p>
                        </li>
                        <!-- <li class="reply" style="display:none">
                            <img src="" alt="">
                            <p></p>
                        </li> -->
                    </ul>   
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="send">
                <input type="text" placeholder="请输入聊天内容" v-model="chatContent">
                <mt-button size="normal" class="sendbutton" @click="addContent">发送</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{        
            chatContent:"",
            Arr:[],
            display:"display:none",
        }
    },
    methods:{
        addContent(){
            if(!this.chatContent==""){
                this.Arr.push(this.chatContent);
                this.chatContent="";

            }
            var id=this.Arr.length;
            console.log(id-1);
            var change=document.getElementById(id-1);
            console.log(change);
            // change.className="reply";
            
        },
        
    },
    props:{
        clickroom:{type:Function},
    }
}
</script>
<style>
    .chatroom{
        z-index: 200;
        position: relative;
    }
    /* 头部样式 */
    .back{
        position: fixed;
        top:0;
        height: 50px;
        width: 100%;
        background-color: #1e2b39;
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
    .leftback{
        display: flex;
    }
    .leftback img{
        height: 16px;
        margin-left:15px;
        margin-top:2px;  
    }
    .leftback p{
        color:white;
        font-size: 20px;
        margin-left:15px;
        padding-left: 10px;
        border-left: 1px solid #000;
    }
    .rightuser img{
        margin-right:15px; 
        margin-top:2px;  
        width: 28px;
    }

    /* 聊天内容样式 */
    .content{
        position: fixed;
        top: 50px;
        bottom: 50px;
        background-color:#ebebeb;
        width: 100%; 
    }
    .content .content-wapper{
        height: 100%;
        overflow: auto;
    }
    .content-top{
        margin-top:5px; 
        font-size:14px;
        color:#adadad;
        text-align: center;  
    }
    
    .content-body{
        padding: 20px 10px;
    }
    .content-body ul{
        list-style: none;
        display: block;
    }
    /* 发送消息样式 */
    ul li.ask{
        text-align: right;
        line-height: 28px;
        margin-bottom:15px;
    }
    .content-body ul li::after{
        display: table;
        content:"";
        clear: both;
    }
    .content-body ul li>img{
        width: 30px;
        height: 30px;
        
    }
    li.ask>img{
        
        float:right;
        margin-left:15px;
        
    }
    .content-body ul li>p{
        line-height: 30px;
        padding: 3px 10px;
        max-width: 190px;
        background-color: #09bb07;
        color: #fff;
        border-radius:3px; 
    }
    li.ask>p{
        float:right;
    }
    /* 回复消息样式 */
    ul li.reply{
        text-align: left;
        line-height: 28px;
        margin-bottom:15px;
    }
    li.reply>img{
        float: left;
        margin-right:15px; 
    }
    li.reply>p{
        float: left;
    }

    /* 底部样式 */
    .bottom{
        position: fixed;
        bottom: 0;
        height: 50px;
        width: 100%;
        background-color:#fff; 
    }
    .send{
        height: 50px;
    }
    .send input{
        height: 30px;
        width: 70%;
        border: none;
        margin: 10px;
        font-size: 15px;
        border-bottom: 1px solid #adadad;
        padding-left: 8px;
    }
    .send button{
        background-color: #09bb07;
        color: white;
        height: 28px;
        width: 20%;
    }
</style>
