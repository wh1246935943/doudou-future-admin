<template>
  <div class="tab-list">
    <div class="close-bg" @click="closeTabList"></div>
    <div class="tab-container">
      <ul class="tabs">
        <li
          class="item"
          v-for="(item, index) in tabs"
          :key="index"
          :class="{'active-style':index === activeIndex}"
          @click="selectItem(item.path, index)"
        >
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <History></History>
  </div>
</template>
<script>
import History from './History.vue'
export default {
  components: {History},
  data() {
    return {
      activeIndex: 1,
      tabs: [
        {name: 'DASHBOARD', icon: 'icon-dashboard', path: '/DashBoard'},
        {name: 'AGENT', icon: 'icon-sitemap', path: '/Agent'},
        {name: 'MY CRUISE', icon: 'icon-boat', path: '/MyCruise'},
        {name: 'HELP', icon: 'icon-life-bouy', path: '/Help'}
      ]
    }
  },
  methods: {
    selectItem(path, index) {
      this.activeIndex = index;
      this.$router.push({path});
      this.closeTabList();
    },
    closeTabList() {
      let el = document.querySelector('.tab-list');
      el.style.display = '';
      window.onresize = null
    }
  }
}
</script>
<style lang="scss">
.tab-list{
  width: 270px;
  height: 100%;
  background: #2D4054;
  color: #fff;
  font-size: 14px;
  top: 0;
  z-index: 999;
  .close-bg{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3)
  }
  .tab-container{
    position: absolute;
    width: 100%;
    height: 100%;
    .tabs{
      padding-top: 15px;
      .item{
        width: 100%;
        height: 40px;
        padding-left: 32px;
        display: flex;
        align-items: center;
        cursor:default;
        user-select: none;
        i{
          font-size: 20px;
        }
        span{
          margin-left: 17px;
        }
        &:hover{
          color: #00B4CF;
          background: #435466;
        }
      }
      .active-style{
        color: #00B4CF;
        background: #435466;
      }
    }
  }
}
</style>
