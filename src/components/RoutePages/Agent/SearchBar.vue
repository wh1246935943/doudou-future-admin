<template>
  <div class="search-bar row">
    <!-- 选择当前列表展示数据类型 -->
    <div class="switch-type col-sm-5 col-xs-12">
      <div
        class="type"
        v-for="(item, index) in typeList"
        :key="index"
        :class="{'active-border':activeIndex === index}"
        @click="switchType(index)"
      >{{item}}</div>
    </div>
    <div class="search-padding col-sm-7 col-xs-12">
      <!-- 搜索 -->
      <div class="search-box">
        <div class="search-input">
          <i class="icon-search"></i>
          <input type="text">
        </div>
        <!-- 切换列表视图样式按钮 -->
        <div class="switch-view">
          <i class="icon-th-card"></i>
          <i class="icon-th-list"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      typeList: ['ALL', 'PHYSICAL', 'VIRTUAL']
    }
  },
  methods: {
    switchType(index) {
      this.activeIndex = index;
    }
  }
}
</script>
<style lang="scss">
.search-bar{
  margin-bottom: 10px;
  .switch-type{
    height: 50px;
    display: flex;
    .type{
      width: 33.33%;
      height: 100%;
      text-align: center;
      line-height: 40px;
      font-size: 12px;
      background: #fff;
      cursor: default;
      margin-right: 1px;
      &:hover{
        border-bottom: 3px solid #00B4CF;
        color: #00B4CF
      }
    }
    .active-border{
      border-bottom: 3px solid #00B4CF;
      color: #00B4CF
    }
  }
  .search-padding{
    height: 50px;
  }
  .search-box{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    .search-input{
      height: 30px;
      position: relative;
      margin-left: 30px;
      i{
        font-size: 20px;
        color: rgba(153,153,153,.66);
        position: absolute;
        top: 5px;
        left: 5px;
      }
      input{
        width: inherit;
        height: inherit;
        border: none;
        padding-left: 27px;
        border-top: 1px solid #e1e4e6;
        border-left: 1px solid #e1e4e6;
        background: #f3f3f3;
        outline: none;
      }
    }
    .switch-view{
      i{
        margin-left: 10px;
        font-size: 20px;
        cursor: pointer;
        &:last-child{
          color: #00B4CF;
        }
      }
    }
  }
}
</style>
