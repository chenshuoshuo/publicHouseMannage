<template>
  <div>
    <el-pagination :background="background" 
    :total="total"
    :page-size="pageSize"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange" 
    ></el-pagination>
  </div>
</template>
<script>

export default {
  props: {
    total: {
      type: Number,
    
    },
    pageSize:{
      type: Number,
    //   default: 1
    },
    // pageCount:{
    //     type:Number
    // }
    // limit: {
    //   type: Number,
    //   default: 10
    // },
    // pageSizes:{
    //   type: Array,
    //   default() {
    //     return [1, 20, 30, 50];
    //   }
    // }
  },
  computed:{
       currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }

  },
  data() {
    return {
      background: true
    };
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
      
  }
};
</script>
<style  scoped>
</style>

