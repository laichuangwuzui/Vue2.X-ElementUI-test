
<template>
<div>
    <div style="margin:1rem">
 <Breadcrumb :parentName="parentName" :childName="childName"></Breadcrumb>
    </div>
   <!-- 天气信息 -->
   <div style="margin:1rem">
      <Weather> </Weather>
   </div>
  <el-carousel style="margin:1rem" indicator-position="outside">
    <el-carousel-item v-for="item in pics" :key="item.id">
     <img :src="item">
    </el-carousel-item>
  </el-carousel>
 
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import Weather from '@/components/Weather';

export default {
  name: 'Login',
  data () {
    return {
      parentName: '宿舍管理',
      childName:'智能宿舍',
      weatherInfo: '',
      pics: ['http://img.netbian.com/file/20131019/64e6275f98e05e73861c878e35eeea94.jpg','http://img.netbian.com/file/20131019/64e6275f98e05e73861c878e35eeea94.jpg',
            'http://img.netbian.com/file/20131019/64e6275f98e05e73861c878e35eeea94.jpg']
    }
  },
  methods:{
   
  },
  components: {
      Breadcrumb,
      Weather
  },
  mounted() {
     
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


</style>
