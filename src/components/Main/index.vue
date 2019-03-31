<template>
  <main class="main-page">
    <!-- 顶部导航 -->
    <Header @open-tabList="openTabList"></Header>
    <!-- 正文内容/路由 -->
    <div class="main-container">
      <!-- 左侧选项面板 -->
      <tab-list></tab-list>
      <div class="router-view-area">
        <router-view></router-view>
      </div>
    </div>
    <!-- 页面底部 -->
    <Footer></Footer>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './../Section/Header.vue';
import TabList from './../Section/TabList.vue';
import Footer from './../Section/Footer.vue';
export default {
  components: {
    Header,
    TabList,
    Footer
  },
  data() {
    return {
      isTabList: false
    }
  },
  computed: {
    ...mapGetters(['agents_list'])
  },
  created() {
    this.$router.push({path: '/Agent'});
    this.getAgents();
  },
  methods: {
    openTabList() {
      let el = document.querySelector('.tab-list');
      el.style.display = 'block';
      /**
       * 当处于pad/phone屏幕尺寸时，左侧tab列表打开后添加窗口大小变化监听事件
       * 避免用户此时调整浏览器大小为桌面尺寸，这时左侧tab列表为固定显示状态，
       * 再次调整回pad/phone屏幕尺寸时，因样式权重，导致左侧列表依然显示的问题。
       */
      window.onresize = () => {
        el.style.display = '';
        window.onresize = null
      } 
    },
    getAgents() {
      this.$Service.getAgents(this._getAgentsHandler)
    },
    _getAgentsHandler(resp) {
      console.log('getAgents callback:::', resp);
      if (resp.status !== 200) return;
      let agentsObg = {};
      resp.data.forEach(element => {
        this.$set(agentsObg, element.id, element);
      });
      this.$store.commit('SET_AGENTS', agentsObg)
    }
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
    display: flex;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    .router-view-area{
      height: 100%;
      flex: 1;
      overflow: hidden;
      overflow-y: auto;
    }
  }
}
</style>
