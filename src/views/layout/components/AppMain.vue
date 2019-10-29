<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade-transform" mode="out-in">
      <keep-alive >
        <router-view ></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    // key() {
    //   return this.$route.fullPath
    // }
  }
}
</script>
<style  scoped>
.app-main{
  margin-left: 20px;
  margin-top: 20px;
}

</style>
