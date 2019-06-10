<template>
    <div class="container-set">
        <div style="margin-top:10px;">
            <h4>勿扰模式</h4>
            <span>
                <mt-switch v-model="v1"></mt-switch>
            </span>
        </div>
        <div>
            <h4>通知栏显示消息详情</h4>
            <span>
                <mt-switch></mt-switch>
            </span>
        </div>
        <div>
            <h4>声音</h4>
            <span>
                <mt-switch v-model="v2"></mt-switch>
            </span>
        </div>
        <div>
            <h4>新消息提示音</h4>
            <span class="font">
                默认
            </span>
        </div>
        <div>
            <h4>振动</h4>
            <span>
                <mt-switch v-model="v3" ></mt-switch>
            </span>
        </div>
        <div>
            <h4>自动下载微信安装包</h4>
            <span class="font">
                从不
            </span>
        </div>
        <div>
            <h4>语言选择</h4>
            <span class="font">
                跟随系统
            </span>
        </div>
        <div>
            <h4>清理微信存储空间</h4>
        </div>
    </div>
</template>
<script>
import titlebar from "../weixinhead/backheader";
export default {
    data(){
        return{
            v1:true,
            v2:true,
            v3:true,
        }
    }
}
</script>
<style scoped>
    .container-set div{
        width: 100%;height: 40px;
        padding: 0 10px;
        margin-top:10px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #ccc;
    } 
    .container-set div h4{
        font-size: 16px;
        
    }
    .container-set div span{
        margin-top: 10px;
    }
     .font{
         font-size: 14px;
         color: #c3c3c3;
     }
</style>