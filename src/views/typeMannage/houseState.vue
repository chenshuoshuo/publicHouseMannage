 <template >
  <div>
    <div class="inputContain">
      <label for>状态名称:</label>
      <el-input v-model="typeName" style="width:200px" class="input"></el-input>
      <el-button type="primary" icon="el-icon-search" class="button" @click="search">搜索</el-button>
    </div>
    <el-table
      :data='tableData'
      v-loading="listLoading"
      element-loading-text="疯狂加载中"
      border
      fit
      highlight-current-row
      style="width: 100%"
      class="table"
    >
     <el-table-column type="selection" width="100" align="center"></el-table-column>
      <el-table-column prop="orderId" label="序号" width="220" align="center"></el-table-column>
      <el-table-column prop="statusName" label="状态名称" width="220" align="center"></el-table-column>
       <el-table-column prop="color" label="颜色" width="220" align="center">
          <template slot-scope="scope">
           <el-color-picker v-model="scope.row.color"></el-color-picker>
          </template>
       </el-table-column>
         <el-table-column label="操作" class="ol">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑颜色</el-button>
      </template>
    </el-table-column>

    </el-table>
    <!-- 编辑颜色弹窗 -->
    <!-- 分页 -->
    <div style="text-align:center">
    <el-pagination
    :total='total'
    :background="background"
    :page-size='pageSize'
    :current-page='currentPage'
    @current-change="handleCurrentChange"
    
    >
      
    </el-pagination>
    </div>
    
    <el-dialog
     title="编辑颜色" :visible.sync="dialogFormVisible"
     class="colordialog"
    >
     <el-color-picker  v-model="currentColor" class="colorpicker"></el-color-picker>
     <div style="text-align:right">
     <el-button type="primary" @click="submmit">提交</el-button>
     </div>
      
    </el-dialog>
  </div>
</template>
 <script>
 
  import {getAllState,editColor,searchStatus} from '@/api/data'
import { constants } from 'fs';
import qs from 'qs'
export default {
 
  data() {
    return {
      // scope.row.color
      typeName: "",
      listLoading:false,
      color:'#409EFF',
      total:0,
      pageSize:5,
      background:true,
      currentPage:0,
      kk:'#C4EE1D',
      tableData:[
      //   {
      //   number:'02',
      //   stateName:'预留',
      //   stateColor:'#409EFF'
      // },{  number:'03',
      //   stateName:'借用',
      //    stateColor:'#409EFF'}
         ],
         newtableData:[],
        dialogFormVisible:false,
        currentColor:'',
        index:''

    };
  },
 
  methods:{
    //编辑颜色
    handleEdit(index,row){
      this.currentColor=row.color;
      this.index=index;
      this.dialogFormVisible=true;
      // console.log(row);
    
    },
    //提交
    submmit(){
      this.tableData[this.index].color=this.currentColor;
      let params={
        color:this.tableData[this.index].color,
        statusCode:this.tableData[this.index].statusCode
      };
      console.log({
        color:this.tableData[this.index].color,
        name:this.tableData[this.index].statusName
        
        
      })
      
      //对参数进行处理
       params=qs.stringify(params);
       console.log(params)
      editColor(params).then((res)=>{
                if(res.status){
                  this.$message({
                    type:'success',
                    message:'编辑成功'
                  })
                }
      })
      this.dialogFormVisible=false;
    },
    //初始化数据
    initData(){
       let params={
        page:this.currentPage,
        pageSize:this.pageSize
       }
       console.log('分页',params);
        params=qs.stringify(params);
      getAllState(params).then((res)=>{
        console.log(res);
        this.tableData=res.data.data.content;
        this.total=this.tableData.length
        // this.newtableData=this.tableData.slice((this.pageSize)*(this.currentPage-1),(this.pageSize)*(this.currentPage))
        // console.log(window.atob('SDE28DTHCNHN47KNFCBCET4M 3FAVYW3YT9 H 7YYFRK5FHT58'));
      })

    },
    //上一页
    pre(){
      this.currentPage--;
      this.newtableData=this.tableData.slice((this.pageSize)*(this.currentPage-1),(this.pageSize)*(this.currentPage))
    },
    next(){
      this.currentPage++
      this.newtableData=this.tableData.slice((this.pageSize)*(this.currentPage-1),(this.pageSize)*(this.currentPage))
    },
    //搜索
    search(){
      let params={text:this.typeName};
        params=qs.stringify(params);
        searchStatus(params).then((res)=>{
           this.tableData=res.data.data.content;
           this.total=this.tableData.length
        })
        
        
      
    },
    //分页
    handleCurrentChange(val){
      this.currentPage=val;
      this.initData()
      
    },
  
   
  },
  beforeMount(){
    this.initData()
    
  }
};
</script>
 <style scoped>
.inputContain {
  display: flex;
  align-items: center;
}
.input {
  margin: 0 20px;
}
.ol{
  text-align: center;
}
.table{
  margin-top: 20px;
}
.colorpicker{

 margin-left:50%;
} 

</style>
 