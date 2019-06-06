<template>
    <div>
        <message class="item"
            v-for="(item,index) in datas.data"
            :key="index"
            :id="item.id"
            :title="item.title"
            :subtitle="item.subtitle"
            :sendtime="item.sendtime"
            :imgurl="item.img"
            :time="item.time"
            :clickroom="clickroom"
        ></message>
        <mt-popup position="right" v-model="chatroom" class="chat">
            <chatroom :clickroom="clickroom" :userid="userid"></chatroom> 
        </mt-popup>
    </div> 
</template>
<script>
//引入Message子组件
import message from "./message"
//聊天室子组件
import chatroom from "./chat/chat"
//引入模拟数据库的json文件
import json from "../json/message.json"
export default {
    data(){
        return{
            datas:json,
            chatroom:false,
            userid:"",
        }
    },
    components:{
        "message":message,
        "chatroom":chatroom
    },
    methods:{
        clickroom(id){
            if(!this.chatroom){
                this.chatroom=true;    
            }else{
                this.chatroom=false;  
            }
            // document.getElementsByClassName("mint-popup")[0].style("transition","1s");
            // console.log(id);
            this.userid=id;
        },

    }
}

</script>
<style>
    .item{
        border-bottom: 1px solid #d6d6d6; 
    }
    .chat{
        height: 100%;
        width: 100%;
    }
</style>
