<template>
    <div class="all">
        <input type="text" placeholder="微信号/手机号" v-model="Fname" class="searchFriend">
        <mt-button size="large" class="searchButton" @click="search">查找</mt-button>
        <div style="clear:both"></div>
        <div class="friendContent">
            <div v-show="friend" class="friend">
                <div>
                    <img src="a_7.png" alt=""> 
                    <p>名字</p>
                </div>
                
                <mt-button size="normal" class="Fadd" @click="onadd">添加</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Fname:"",
            friend:true,
        }
    },
    methods:{
        search(){
            this.axios.get().then(result=>{

            })
        },
        onadd(){
            
        }
    }
}
</script>
<style>
    .all{
        width: 100%;
        height: 100%;
        background-color:#ebebeb; 
    }
    .searchFriend{
        margin-top:30px; 
        width: 75% !important;
        float: left;
        margin-left: 3%;
    }
    .searchButton{
        margin-top:30px; 
        margin-left: 1%;
        width: 20% !important;
        background-color: #09bb07 !important;
        color: white !important;
        font-size: 20px !important;
        float: left;
    }
    .friendContent{
        width: 100%;
        margin-top:50px;
        background-color:white; 
        height: 50px;
        display: flex;
        align-items: center;
    }
    .friend{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .friend div{
        width: 100px;
        display: flex;
        justify-content: space-around;
        margin-left: 10px;
    }
    .friend img{
        height: 40px;
    }
    .friend p{
        color: #000;
        font-size: 15px;
    }
    .friend .Fadd{
        outline: none;
    }
</style>

