<template>
  <div>
    <div style="position:relative">
      <h1>地图显示的房间配置信息字段</h1>
      <p>选中的信息字段会在地图上直接显示，所选字段不超过三个</p>
      <el-button type="primary" class="button" @click="submit">提交</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item,index) in tabList"
        :label="item.typeName"
        :name="item.typeName"
        :key="item.orderId"
      >
        <p v-if="isnoSetting[index]">该公房分类下还没有配置信息字段，请在'公房分类管理'中配置后，设置地图显示字段</p>
        <el-checkbox-group v-model="checkList[index]" style="display:flex  flex-wrap:wrap" :max="3">
          <el-checkbox
            :label="i.attr_code"
            style="width:220px"
            class="el-checkbox"
            v-for="(i,k) of boxList[index]"
            :key="k"
          >{{i.attr_name}}</el-checkbox>
        </el-checkbox-group>
        <!-- <el-checkbox-group v-model="checkList[index]">
          <el-checkbox :label="item.typeName"></el-checkbox>
          
        </el-checkbox-group>-->
      </el-tab-pane>
      <!-- <el-tab-pane label="公房分类二" name="second">公房分类二</el-tab-pane>
    <el-tab-pane label="公房分类三" name="third">公房分类三</el-tab-pane>
      <el-tab-pane label="公房分类四" name="fourth">公房分类四</el-tab-pane>-->
    </el-tabs>
  </div>
</template>
<script>
import { getAllMapSetting, getAllType, submitSetting } from "@/api/data";
import { constants } from "fs";
import axios from "axios";
import qs from "qs";
// :label="i.attrname" style="width:220px" class="el-checkbox" v-for="(i,k) of boxList[index]" :key='k'
export default {
  data() {
    return {
      activeName: "",
      checkList: [],
      tabList: [], //公房列表
      boxList: [],
      isnoSetting: []
    };
  },
  methods: {
    handleClick() {},
    //初始化数据
    async initData() {
      console.log(location.host);
      await getAllType().then(res => {
        this.tabList = res.data.data.content;
        this.activeName = this.tabList[0].typeName;
        console.log(this.tabList);
      });

      // this.tabList.forEach((item)=>{
      //   console.log('jojo');
      //   getAllMapSetting(item.typeCode).then((res)=>{
      //     console.log(res.data.data);
      //     // this.boxList.push(res.data.data);
      //     if(res.data.data.length==0){
      //       this.isnoSetting.push(true)
      //     }else{
      //       this.isnoSetting.push(false);
      //       this.checkList.push([]);
      //      for(let i=0;i<res.data.data.length;i++){
      //          if(res.data.data[i].display){
      //            this.checkList
      //          }
      //      }
      //       // console.log(this.checkList.length);
      //     }
      //      this.boxList.push(res.data.data);
      //   })

      // });
      for (let k = 0; k < this.tabList.length; k++) {
        getAllMapSetting(this.tabList[k].typeCode).then(res => {
          console.log(res.data.data);
          // this.boxList.push(res.data.data);
          if (res.data.data.length == 0) {
            this.isnoSetting.push(true);
          } else {
            this.isnoSetting.push(false);
            this.checkList.push([]);
            for (let i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].display) {
                this.checkList[k].push(res.data.data[i].attr_code);

              }
            }
            // console.log(this.checkList.length);
          }
          this.boxList.push(res.data.data);
        });
      }
    },
    //提交地图配置(需要携带token)
    submit() {
      console.log("checklist", this.checkList);
      if (
        this.checkList.some(item => {
          return item.length !== 0;
        })
      ) {
        let params = [];
        for (let i = 0; i < this.tabList.length; i++) {
          if (this.checkList[i].length > 0) {
            let obj = {};
            obj.categoryId = this.tabList[i].typeCode;
            obj.attrCode = [];
            obj.attrCode = [...this.checkList[i]];
            params.push(obj);
          }
        }
        // let obj={
        //         categoryId:"1020601",
        //         attrCode:"type_code"
        // };
        //  params=qs.stringify(params);
        // params=JSON.stringify(params);
        console.log("地图显示配置参数", params);

        submitSetting(params).then(res => {
          console.log(res);
          if (res.data.status) {
            this.$message({
              type: "success",
              message: "提交成功"
            });
          } else {
            this.$message({
              type: "warning",
              message: "网络错误"
            });
          }
        });
      } else {
        this.$message({
          type: "warning",
          message: "各类公房的地图配置不能为空，请核对"
        });
      }
    }
  },
  beforeMount() {
    this.initData();
  }
};
</script>
<style lang="" scoped>
.el-checkbox {
  margin-bottom: 20px;
}
.button {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>