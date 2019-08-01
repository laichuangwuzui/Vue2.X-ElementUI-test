<template>
  <div class="hello">
  <div class="eld">
    <el-card class="card">
      <h3>智能宿舍管理</h3>
<el-form :label-position="'right'" label-width="80px" :model="profile">
  <el-form-item label="用户名">
    <el-input type="text" v-model="profile.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="profile.password"></el-input>
  </el-form-item>
  <el-form-item>
<el-button class="expand" type="primary" @click="de()">登录</el-button>
  </el-form-item>
</el-form>

    </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
       profile: {
          name: '',
          password: '',
        }
    }
  },
  methods:{
    de(){
      const _name = this.profile.name.trim();
      const _password =this.profile.password.trim();
      if(_name==='admin'&&_password==='123456'){
          console.log(_name,_password);
          // 进行路由跳转
          this.$router.push({path: './Menue',params: {}});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.hello{
  display: flex;
  justify-content: center;
  align-items: center;
}
.eld{
  margin-top: 5rem;
  width: 25rem;
  height: 8rem;
  background: inear-gradient(to bottom right, rgb(53, 53, 241) , blue); /* 标准的语法 */
}
.expand{
  width: 100%;
}
.card{
 padding-right: 1.5rem;
 
}
.card h3{
  text-align: center;
  margin-bottom: 10px;
}
</style>
