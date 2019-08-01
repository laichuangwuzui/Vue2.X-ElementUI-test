<template>

  <div style="height:100%;width:100%;">
 <el-container >
      <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting"  style="margin-right: 15px; color: white"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="color: white">王小虎</span>
    </el-header>
<el-container>
<el-row>
 <el-col :span="24" >
    <el-menu
      class="menue"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
     router
       >
         <!-- :default-active="defaultActive"  可有可无-->
        <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>宿舍管理</template>
        <el-menu-item  index="smartDor">智能宿舍</el-menu-item>
        <el-menu-item index="dormitory">宿舍查询</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>学生管理</template>
          <el-menu-item index="2">选项1</el-menu-item>
          <el-menu-item  index="3">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>智能水表</template>
          <el-menu-item index="1">选项3</el-menu-item>
      </el-submenu>
       <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>说明</template>
          <el-menu-item index="About">关于我们</el-menu-item>
      </el-submenu>
    
    </el-menu>
  </el-col>
  </el-row>

 <el-main id="main" style="height: 100%; overflow: auto;padding: 0px">
   <keep-alive>
       <router-view/>
   </keep-alive>
  
 </el-main>
 
 </el-container>
 
</el-container>
  </div>
</template>

<script>
export default {
  name: 'Menue',
  data () {
     const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
    return {
         tableData: Array(20).fill(item),
         screenHeight: '',
    }
  },
  methods:{
   // 获取显示其高度
    getHeight(){
      // console.log(screen.height)
      const heigh =window.innerHeight;
      document.querySelector(".menue").style.height=heigh-60+"px";// 用来计算屏幕的显示大小
      console.log("===",heigh);
    },
    handleOpen(){

    },
    handleClose(){

    }

  },
  computed:{
    defaultActive(){
      return this.$route.path.replace('','');
    }
  },
  mounted() {
    this.getHeight();
  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
 .el-header {
    background-color:#212735;
    color: #333;
    line-height: 60px;
  }
  .menue{
    width:230px;
    min-height: 100%;
  }

  
</style>
