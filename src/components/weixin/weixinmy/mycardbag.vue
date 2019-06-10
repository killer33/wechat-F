<template>
    <div class="container-cardbag">
        <div class="bag-head">
            <h4>我的卡包列表</h4>
        </div>
        <h2>银行卡</h2>
        <p>建设银行</p>
        <p>农业银行</p>
        <h2>会员卡</h2>
        <p>大润发</p>
        <p>屈臣氏</p>
        <p>丹尼斯</p>
    </div>
</template>
<script>
// import backheader from '../weixinhead/backheader' 
export default {
    data(){
        return{}
    },
}
</script>
<style scoped>
    .bag-head{
        width:100%;height:50px;
        background-color: #666f76;
    }
    .bag-head h4{
        line-height: 50px;
        text-align: center;
        margin: 0;
        font-size: 16px;
        color: #fff;
    }
    h2{
        width: 100%;height:46px;
        padding: 20px 0 10px 20px;
        font-size: 16px;
        color:#000;
        margin: 0;
    }
    p{
        width: 100%;height: 90px;
        padding-left: 20px;
        line-height: 90px;
        font-size: 14px;
        color: #000;
        background: #fff;
        margin: 0;
        border: 1px solid rgba(0,0,0,0.1);
    }
</style>
