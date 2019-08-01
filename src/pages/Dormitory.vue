<template>
  <div class="Dormitory">
      <div style="margin:1rem">
           <Breadcrumb v-bind:parentName="parentName" v-bind:childName = "childName"></Breadcrumb>
      </div>
     <div style="margin:1rem">
   <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="宿舍编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="班级"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
     </div>

   
  <div class="block" style="margin: 1rem">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
</div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Login',
  data () {
    return {
        parentName: '宿舍管理',
        childName: '宿舍查询',
        currentPage4: 1000,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
         {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        ]
    }
  },
  methods:{
   handleSizeChange(){

   },
   handleCurrentChange(){

   },


  },
  components: {
      Breadcrumb,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">

</style>
