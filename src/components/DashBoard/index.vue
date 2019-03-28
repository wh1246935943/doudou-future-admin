<template>
  <div class="dash-board">
    <ul class="tabs">
      <li
        class="item"
        v-for="(item, index) in tabs"
        :key="index"
        :class="{'active-style':index === activeIndex}"
        @click="selectItem(item, index)"
      >
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 1,
      tabs: [
        {name: 'DASHBOARD', icon: 'icon-dashboard', path: ''},
        {name: 'AGENT', icon: 'icon-sitemap', path: ''},
        {name: 'MY CRUISE', icon: 'icon-boat', path: ''},
        {name: 'HELP', icon: 'icon-life-bouy', path: ''}
      ]
    }
  },
  methods: {
    selectItem(item, index) {
      this.activeIndex = index;
    }
  }
}
</script>
<style lang="scss">
.dash-board{
  width: 270px;
  height: 100%;
  background: #2D4054;
  color: #fff;
  font-size: 14px;
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
</style>
