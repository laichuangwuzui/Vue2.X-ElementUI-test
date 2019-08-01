<template>
<!-- 面包屑组件 -->
<div>
<el-breadcrumb separator="/">
  <!-- <el-breadcrumb-item :to="{ path: '/' }">{{parentName}}</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">{{childName}}</a></el-breadcrumb-item> -->
   <el-breadcrumb-item >{{parentName}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{childName}}</el-breadcrumb-item>
 
</el-breadcrumb>
</div>
</template>

<script>

export default {
  name: 'Breadcrumb',
  data () {
    return {
       bread: {
          parendName: '',
          childName: '',
        }
    }
  },
  methods:{
   
  },
  props:['parentName','childName']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">

</style>
