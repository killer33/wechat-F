
<template>
  <div>
    <span>{{mydatetime|sexFilter}}</span>
  </div>
</template>

<script>
import { setInterval } from "timers";
import { hasMagic } from "glob";
export default {
  props: { mydatetime: { default: "" } },
  data() {
    return {};
  },
  filters: {
    sexFilter: oldValue => {
      var date = Math.abs(new Date().valueOf() - oldValue); //计算毫秒差
      //计算年
      var run = Math.floor(date / (365 * 24 * 3600 * 1000));
      var datanian = date - Math.floor(run / 4) * 366;
      //年
      var nian = Math.floor(datanian / (365 * 24 * 3600 * 1000));
      //月
      var yue = Math.floor(date / (30 * 24 * 3600 * 1000));
      var days = Math.floor(date / (24 * 3600 * 1000));
      //计算出小时数
      var leave1 = date % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000));
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000));
      //计算相差秒数
      var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000); //秒
      if (nian >= 1) {
        return nian + "年前";
      } else if (yue >= 1) {
        return yue + "月前";
      } else if (days >= 1) {
        return days + "天前";
      } else if (hours >= 1) {
        return hours + "小时前";
      } else if (minutes >= 1) {
        return minutes + "分钟前";
      } else {
        return seconds + "秒前";
      }
      //   return days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
    }
  }
};
</script>