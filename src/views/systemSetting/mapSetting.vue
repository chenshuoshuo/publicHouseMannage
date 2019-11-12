<template>
  <div>
    <div style="position:relative">
      <h1>地图显示的房间配置信息字段</h1>
      <p>选中的信息字段会在地图上直接显示，所选字段不超过三个</p>
      <el-button type="primary" class="button" @click="submit">提交</el-button>
    </div>
    <el-tabs v-model="activeTypeCode" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabList"
        :label="item.typeName"
        :name="item.typeCode"
        :key="item.typeCode"
      >
        <p v-if="isnoSetting">该公房分类下还没有配置信息字段，请在'公房分类管理'中配置后，设置地图显示字段</p>
        <el-checkbox-group v-model="pubItemObj[activeTypeCode].checkList" style="display:flex  flex-wrap:wrap" :max="3">
          <el-checkbox
            style="width:220px"
            class="el-checkbox"
            v-for="(item, i) in pubItemObj[activeTypeCode].boxList"
            :label="item.attr_code"
            :key="i"
            @change="checkPub"
          >
            {{item.attr_name}}
          </el-checkbox>
        </el-checkbox-group>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getAllMapSetting, getAllType, submitSetting } from '@/api/data';
import { constants } from 'fs';
import axios from 'axios';
import qs from 'qs';
// :label="i.attrname" style="width:220px" class="el-checkbox" v-for="(i,k) of boxList[index]" :key='k'
export default {
  data () {
    return {
      activeTypeCode: null,
      tabList: [], // 公房列表
      pubItemObj: {},
      isnoSetting: false
    }
  },
  created () {
    this.getAllType().then(() => {
      this.getAllMapSetting()
    })
  },
  methods: {
    async getAllType () {
      const res = await getAllType()
      this.tabList = res.data.data.content
      this.activeTypeCode = this.tabList[0].typeCode
      // console.log('this.tabList', this.tabList)
    },
    async getAllMapSetting () {
      const res = await getAllMapSetting(this.activeTypeCode)
      const pubList = res.data.data
      // 默认选中
      const checkedItem = pubList.filter(item => item.display).map(item => item.attr_code)
      const innerObj = {}
      this.$set(innerObj, 'boxList', pubList)
      this.$set(innerObj, 'checkList', checkedItem)
      this.$set(this.pubItemObj, this.activeTypeCode, innerObj)
      this.isnoSetting = this.pubItemObj.length === 0
      // console.log('pubItemObj', this.pubItemObj);
    },
    handleClick () {
      this.getAllMapSetting()
    },
    checkPub (val) {
      // console.log('val', this.pubItemObj[this.activeTypeCode].checkList)
    },
    // 提交地图配置(需要携带token)
    submit () {
      if (
        this.pubItemObj[this.activeTypeCode].checkList.some(item => {
          return item.length !== 0
        })
      ) {
        let params = []
        Object.keys(this.pubItemObj).forEach(item => {
          let obj = {}
          obj.categoryId = item
          obj.attrCode = this.pubItemObj[item].checkList
          params.push(obj)
        })
        submitSetting(params).then(res => {
          // console.log(res);
          if (res.data.status) {
            this.$message({
              type: 'success',
              message: '提交成功'
            })
          } else {
            this.$message({
              type: 'warning',
              message: '网络错误'
            })
          }
        })
      } else {
        this.$message({
          type: 'warning',
          message: '各类公房的地图配置不能为空，请核对'
        })
      }
    }
  }
}
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
