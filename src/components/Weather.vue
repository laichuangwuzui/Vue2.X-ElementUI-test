<template>
  <div class="Weather">
    <i class="iconfont" id="position">&#xe624;</i>
    <el-collapse class="inde"  @change="handleChange">
      <el-collapse-item :title="title" name="1">
        <div v-for="item in fiveDay" :key="item.id">{{item.date}}&nbsp;&nbsp;{{item.type}} &nbsp;&nbsp;{{item.high}} &nbsp;&nbsp; {{item.low}} &nbsp;&nbsp; {{item.fengxiang}}&nbsp;&nbsp;  {{item.fengli}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import '../assets/css/iconfont.css'
import {HttpURL} from '../api/getData';
export default {
  
  name: "Weather",
  data() {
    return {
         title: '',
         fiveDay: '',
    };
  },
  methods: {
        handleChange(val) {
        console.log(val);
      },
         getWeather(){
          console.log('-------',HttpURL.SmartDor.getWeather);
    // 获取天气信息
    this.$axios.get(HttpURL.SmartDor.getWeather+'?'+'city=杭州',
    ).then((data)=>{
     
      const today=data.data.data.forecast[0];
      this.fiveDay =data.data.data.forecast;
     console.log('----------', this.fiveDay);
    
      this.title =  `${data.data.data.city}，当前温度:${data.data.data.wendu}℃ ${today.type} ${today.high} ${today.low} ${today.fengxiang} `
     
    })
      }
  },
  mounted() {
     this.getWeather();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.inde{
  text-indent: 2rem;
}
#position{
     position: absolute;
    top: 7rem;
    left: 15rem;
    color: #3259CE;
    font-size: 2rem;
}
</style>
