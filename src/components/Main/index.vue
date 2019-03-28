<template>
  <main class="main-page">
    <!-- 顶部导航 -->
    <Header></Header>
    <!-- 内容/路由 -->
    <div class="main-container">
      <!-- 左侧面板 -->
      <dash-board></dash-board>
      <router-view></router-view>
    </div>
    <!-- 页面底部 -->
    <Footer></Footer>
  </main>
</template>

<script>
import Header from './../Section/header.vue';
import DashBoard from './../DashBoard/index.vue';
import Footer from './../Section/footer.vue';
export default {
  name: 'app',
  components: {
    Header,
    DashBoard,
    Footer
  }
}
</script>

<style lang="scss">
.main-page {
  height: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main-container{
    flex: 1;
    margin: 0 auto;
    max-width: 1200px;
  }
}
</style>
