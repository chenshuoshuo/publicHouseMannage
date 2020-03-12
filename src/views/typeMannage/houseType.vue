<template >
  <div>
    <div class="inputContain">
      <label for>分类名称:</label>
      <el-input v-model="typeName" style="width:200px" class="input"></el-input>
      <el-button type="primary" icon="el-icon-search" class="button" @click="search">搜索</el-button>
    </div>
    <el-table
      :data="tableData"
      v-loading="listLoading"
      element-loading-text="疯狂加载中"
      border
      fit
      highlight-current-row
      style="width: 100%"
      class="table"
    >
      <el-table-column type="selection" width="100" align="center"></el-table-column>
      <el-table-column prop="typeCode" label="序号" width="220" align="center"></el-table-column>
      <el-table-column prop="typeName" label="分类名称" width="220" align="center"></el-table-column>
      <el-table-column prop="icon" label="图标" width="220" align="center">
        <template slot-scope="scope">
          <el-avatar size="small" :src="scope.row.icon"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="操作" class="ol" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑图标</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div style="text-align:right">
      <el-pagination
        :total="total"
        :background="background"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
    <!-- 编辑图标弹框 -->
    <el-dialog title="编辑图标" :visible.sync="dialogFormVisible">
      <el-upload
        class="avatar-uploader iconupload"
        :action="url"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :headers="{Authorization: 'Bearer ' + token}"
       >
        <div class="dialogdiv">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
           <p>建议尺寸:100X100px</p>
          <p>只支持jpg.png格式，大小不超过100k</p>
        </div>

      </el-upload>
      <div style="text-align:right"><el-button type="primary" @click="submmit">确定</el-button></div>

    </el-dialog>
  </div>
</template>
<script>
import { getAllType, editIcon, searchType, uploadicon } from '@/api/data'
import { getToken } from '@/utils/auth'
import { constants } from 'fs'
import qs from 'qs'
export default {
  data () {
    return {
      token: getToken(),
      url: 'https://jsonplaceholder.typicode.com/posts/',
      listLoading: false,
      tableData: [
        // {
        //   number: "02",
        //   typeName: "学生用房",
        //   imgSrc:  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        // },
        // {
        //   number: "03",
        //   typeName: "教室用房",
        //   imgSrc:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        // }
      ],
      newtableData: [],
      dialogFormVisible: false,
      imageUrl: '',
      index: '',
      typeName: '',
      total: 0,
      pageSize: 6,
      background: true,
      currentPage: 0,
      file: ''
    }
  },
  methods: {
    // handleIcon (params) {
    //   var reader = new FileReader()
    //   reader.readAsDataURL(params.file)
    //   reader.onload = (e) => {
    //     this.tableData[this.index].icon = e.target.result
    //   }
    //   return true
    // },
    // 编辑图标
    handleEdit (index, row) {
      this.imageUrl = row.icon
      this.index = index
      this.dialogFormVisible = true
    },
    // loading(file){
    //   console.log('file',file);

    // },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      let fd = new FormData()
      fd.append('file', file.raw)
      uploadicon(fd).then(res => {
        if (res.data.status) {
          this.tableData[this.index].icon = window.g.BASE_IPS + res.data.data
        }
      })
    },
    // 确认图标
    submmit () {
      let params = {
        categoryId: this.tableData[this.index].typeCode,
        icon: this.tableData[this.index].icon
      }
      // 处理参数
      params = qs.stringify(params)

      editIcon(params).then(res => {
        if (res.data.status) {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.initData()
        }
      })
      this.dialogFormVisible = false
    },
    beforeAvatarUpload (e, file) {
      //   console.log('e',e)
      //   this.file=e;
      // let fd =new FormData();
      // fd.append('file',file);
      // console.log(fd.get("file"));
    },
    // 初始化数据
    initData () {
      let params = {
        page: this.currentPage,
        pageSize: this.pageSize
      }
      params = qs.stringify(params)
      getAllType(params).then(res => {
        this.tableData = res.data.data.content
        this.total = this.tableData.length
        // this.total=2;
        // this.newtableData=this.tableData.slice((this.pageSize)*(this.currentPage-1),(this.pageSize)*(this.currentPage))
      })
    },
    // 上一页
    pre () {
      this.currentPage--
      this.newtableData = this.tableData.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      )
    },
    next () {
      this.currentPage++
      this.newtableData = this.tableData.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      )
    },
    // 搜索
    search () {
      //  this.tableData=this.tableData.filter((item)=>{
      //      return item.typeName.includes(this.typeName)
      // })
      let params = { text: this.typeName }
      params = qs.stringify(params)
      searchType(params).then(res => {
        console.log(res)
        this.tableData = res.data.data.content
        this.total = this.tableData.length
      })
    },
    // 分页
    handleCurrentChange (val) {
      this.currentPage = val
      this.initData()
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>
 <style scoped>
.inputContain {
  display: flex;
  align-items: center;
}
.input {
  margin: 0 20px;
}
.ol {
  text-align: center;
}
.table {
  margin-top: 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  padding: 10px;
  border: 1px dashed gray
}
.dialogdiv{
  text-align: center
}
.iconupload{
  text-align: center;
}
</style>
