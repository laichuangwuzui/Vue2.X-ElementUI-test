<template>
<div >
     <Breadcrumb  style="margin:1rem" v-bind:parentName="parentName" v-bind:childName = "childName"></Breadcrumb>
  <div class="about">
     <div></div>
      <div></div>
       <div></div>
  </div>
  <div class="height">
      <div class="div1">
自由管理的交流平台，欢迎相互分享。<br>
您可以自定义相关的设计，各种天马行空的构想，纷呈多彩的样式选择，您可以自由进行发挥<br>
<br>
©ALIMAMA MUX, powered by alimama THX.法律声明<br>
转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及纸媒请先联系：1277244739@guozhixang.com<br>

      </div>
    <div class="div2">
        <div><img class="img1" src="../assets/img/waterwelon.png" style="width: 100px"></div>
          <div></div>
    </div>
  </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'About',
  data () {
    return {
      parentName: '说明',
      childName: '关于我们'
    }
  },
  methods:{
  
  },
  components: {
    Breadcrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.about{
    display: flex;
    flex-direction: row;
    justify-content: center ;
 margin: 0px;
 padding: 0px;

}
.about> div{
    width: 200px;
    height: 250px;
    background-color: antiquewhite;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px;
    margin-left: 5rem;
    margin-right: 5rem;
}
.height{
    margin-top: 1.5rem;
    padding: 0px;
    height: 20rem;
    background-color: #717983;
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.div1{
    margin-top: 5rem;
    font-size:12px;
    margin-right: 5rem;
}
.div2{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.div2> div:nth-of-type(1){
    margin-top: 3rem;
    margin-left: 2rem;
}

.img1:hover{
      transform:rotate(90deg) scale(1.5);
        transition:  800ms ease all;  
     
}
</style>
