<template>
  <div class="menu-wrapper">
    <h1 style="text-align:center;margin-top:20px">可视化公房管理</h1>
    <template v-for="item in routes" v-if='item.children'>
      <!-- v-if="!item.hidden&&item.children" -->
      <router-link
        v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow"
        :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name"
      >
        <el-menu-item
          :index="item.path+'/'+item.children[0].path"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <svg-icon
            v-if="item.children[0].meta&&item.children[0].meta.icon"
            :icon-class="item.children[0].meta.icon"
          ></svg-icon>
          <span
            v-if="item.children[0].meta&&item.children[0].meta.title"
            slot="title"
          >{{generateTitle(item.children[0].meta.title)}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title" slot="title">{{generateTitle(item.meta.title)}}</span>
        </template>

        <template v-for="child in item.children">
          <!-- v-if="!child.hidden" -->
          <sidebar-item
            :is-nest="true"
            class="nest-menu"
            v-if="child.children&&child.children.length>0"
            :routes="[child]"
            :key="child.path"
          ></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span
                v-if="child.meta&&child.meta.title"
                slot="title"
              >{{generateTitle(child.meta.title)}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
    <div class="support">
      <!-- <span>版本：&nbsp;V{{version}}</span> -->
    </div>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import {saveVerManager} from '@/api/user'
const packgeJson = require('../../../../../package.json')

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      version: packgeJson.version
    }
  },
  mounted () {
    this.saveVerManager()
  },
  methods: {
    saveVerManager () {
      this.version = this.version.split('.')[0] + '.' + this.version.split('.')[1] + '.' + this.version.split('.')[2].split('').join('.')
      saveVerManager({
        systemName: '可视化公房',
        moduleName: 'Web后台管理系统',
        version: this.version
      }).then().catch(e => console.log(e))
    },
    hasOneShowingChildren (children) {
      if (children) {
        const showingChildren = children.filter(item => {
          return !item.hidden
        })
        if (showingChildren.length === 1) {
          return true
        }
        return false
      } else {
        return false
      }
    },
    generateTitle
  }
}
</script>

<style scoped>
.support {
  position: absolute;
  color: #bfcbd9;
  font-size: 14px;
  bottom: 25px;
  left: 25px;
}
</style>
