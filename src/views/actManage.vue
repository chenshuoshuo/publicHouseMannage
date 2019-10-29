<template>
  <div class="app-container">
    <!-- 执行表单 -->
    <div class="filter-container">
      <label class="filter-title" for>活动主题:</label>
      <el-input
        class="filter-item filter-input"
        placeholder="活动主题"
        v-model="formData.actTitle"
        style="width:120px"
      ></el-input>
      <label class="filter-title" for>活动分类:</label>
      <el-select v-model="formData.actType" placeholder="选择分类" style="width:110px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        ></el-option>
      </el-select>
      <label class="filter-title" for>所属校区:</label>
      <el-select v-model="formData.campus" placeholder="选择校区" style="width:110px">
        <el-option v-for="item in campus" :key="item.value" :label="item.label" :value="item.label"></el-option>
      </el-select>
      <label class="filter-title" for>活动日期:</label>
      <!-- <el-date-picker
      style="width:220px"
      v-model="formData.actDate"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
      </el-date-picker>-->
      <el-date-picker
        style="width:180px"
        v-model="formData.actDate"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
         value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-button type="primary" icon="el-icon-search" class="button">搜索</el-button>
      <el-button type="success" icon="el-icon-edit" class="button" @click="add">添加</el-button>
      <el-button type="danger" icon="el-icon-delete" class="button">删除</el-button>
    </div>
    <!-- 导出下载批量 -->
    <div class="loadoperate" style="display:flex">
      <el-button type="warning" icon="el-icon-upload2">导出EXCELL</el-button>
      <el-button style="background:#44BEEB " icon="el-icon-upload" class="white">下载导入模板</el-button>
      <el-button style="background:#51D4D2 " icon="el-icon-download" class="white">批量导入</el-button>
    </div>
    <!-- 表格部分 -->
    <el-table
      :data="dataList"
      v-loading="listLoading"
      element-loading-text="疯狂加载中"
      border
      fit
      highlight-current-row
      style="width: 100%"
      class="table"
    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="actTitle" label="活动主题" width="120" align="center"></el-table-column>
      <el-table-column prop="actType" label="分类" width="120" align="center"></el-table-column>
       <el-table-column prop="actDate" label="活动日期" width="120" align="center"></el-table-column>
        <el-table-column prop="actPlace" label="活动地点" width="120" align="center"></el-table-column>
        <el-table-column prop="campus" label="所属校区" width="120" align="center"></el-table-column>
         <!-- <el-table-column prop="campus" label="发布时间" width="120" align="center">
           <template slot-scope="scope">{{ scope.row.posttime|time }}</template>
         </el-table-column> -->
           <el-table-column prop="campus" label="操作"  align="center" width="150">
            <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
           </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page-container">
      <el-pagination></el-pagination>
    </div>
    <!-- 添加弹框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm">
    <el-form-item label="活动主题" label-width='70px'>
      <el-input v-model="dialogForm.actTitle" autocomplete="off" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="活动地点" label-width='70px'>
      <el-input v-model="dialogForm.actPlace" autocomplete="off" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="活动分类" >
      <el-select v-model="dialogForm.actType" placeholder="请选择活动分类">
        <el-option  v-for='item in options' :label="item.label" :value="item.value" :key="item.value"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="所属校区" >
      <el-select v-model="dialogForm.campus" placeholder="请选择校区">
        <el-option  v-for='item in campus' :label="item.label" :value="item.value" :key="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
       <el-date-picker
        
        v-model="dialogForm.actDate"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>

    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirmAdd">确 定</el-button>
  </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
 
  data() {
    return {
      formData: {
        actTitle: "",
        actType: "",
        campus: "",
        actDate: "",
        actPlace:''
      },
      dialogTitle:'',
       actPlace:'',
       dialogForm:{
        actTitle: "",
        actType: "",
        campus: "",
        actDate: "",
        actPlace:''

       },
      listLoading: false,
      //活动分类列表
      options: [
        {
          value: "选项1",
          label: "晚会"
        },
        {
          value: "选项2",
          label: "座谈会"
        },
        {
          value: "选项3",
          label: "欢迎会"
        }
      ],
      //校区列表
      campus: [
        {
          value: "选项1",
          label: "南校区"
        },
        {
          value: "选项2",
          label: "北校区"
        }
      ],
      dataList: [
        { actTitle: "校庆晚会", actType: "晚会",campus: "南校区", actDate: "2019-8-12",actPlace:'五教'},
        {
          actTitle: "学校运动会",
          actType: "运动会",
          campus: "南校区",
          actDate: "2019-8-12",
          actPlace:'五教'
          
        }
      ],
      dialogFormVisible: false //弹框显示
    };
  },
  methods:{
  // 去掉空格
     noSpace(value){
      value=value.replace(/\s*/g,'');
      return value
     },
     //添加活动
    add(){
      this.dialogTitle="添加活动";
      this.dialogForm=this.formData;
      this.dialogFormVisible=true
    },
    //活动提交
    confirmAdd(){
       let value=this.noSpace(this.formData.actTitle);
       let  sumbmitObj={...this.formData};
      this.dataList.push(sumbmitObj);
      this.$set(this.formData,"actTitle",value);
      this.dialogFormVisible = false;
      
    },
    //编辑
    handleEdit(index, row){
      this.dialogForm=row;
      this.dialogTitle="编辑活动";
       this.dialogFormVisible=true;
       console.log(index,row);
       
    },
    handleDelete(){

    }
  }
};
</script>
<style scoped>
.app-container {
  padding-left: 20px;
}
.white {
  color: white;
}
.table {
  margin-top: 20px;
}
</style>