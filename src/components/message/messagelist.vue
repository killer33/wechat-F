<template>
    <div>
        <message class="item"
            v-for="(item,index) in lists"
            :key="index"
            :id="item.id"
            :title="item.title"
            :subtitle="item.subtitle"
            :sendtime="item.sendtime"
            :imgurl="item.img"
            :time="item.time"
            :clickroom="clickroom"
            :cUser="cUser"
        ></message>
        <mt-popup position="right" v-model="chatroom" class="chat">
            <chatroom :clickroom="clickroom" :userid="userid" :cUser="cUser"></chatroom> 
        </mt-popup>
        <mt-popup position="right" v-model="chatUser" class="chat">
            <chatUser :cUser="cUser"></chatUser>
        </mt-popup>
 
    </div> 
</template>
<script>
//引入Message子组件
import message from "./message"
//聊天室子组件
import chatroom from "./chat/chat"
//引入模拟数据库的json文件
// import json from "../json/message.json"
// 聊天信息子组件
import chatUser from "./chat/chat-user"
export default {
    data(){
        return{
            // datas:json,
            chatroom:false,
            chatUser:false,
            userid:"",
            lists:[]
            
        }
    },
    components:{
        "message":message,
        "chatroom":chatroom,
        "chatUser":chatUser,
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
        cUser(id){
            if(!this.chatUser){
                // this.clickroom();
                this.chatUser=true;
                
            }else{
                // this.clickroom();
                this.chatUser=false;
                
            }
            this.userid=id;
            console.log(id);
        },
        wload(){
            this.axios.get("wload").then(result => {
                console.log(result);
             for (var i = 0; i < result.data.length; i++) {
                this.lists[i] = result.data[i][0];
             }
             });
            for (var p of this.lists) {
                console.log(p);
            
             }
            console.log(111)
        }

    },
    created(){
         this.wload();
    
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
