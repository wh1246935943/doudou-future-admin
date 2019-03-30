<template>
  <header class="header">
    <div class="container">
      <div class="tabList-caret">
        <i @click="$emit('open-tabList')" class="icon-navicon"></i>
      </div>
      <div class="logo"></div>
      <test-dropdown
        isIcon
        :isMenu="isMenu"
        :menuData="menuData"
        @close="isMenu = false"
        @select-item="selectItem"
      >
        <div
          class="user-entrance"
          @click="openDropdown"
        >
          <div class="avatar"></div>
          <i :class="isMenu?'icon-angle-up':'icon-angle-down'"></i>
        </div>
      </test-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMenu: false,
      menuData: [
        {name: 'Profile', icon: 'icon-id-card'},
        {name: 'Sign Out', icon: 'icon-sign-in'}
      ]
    }
  },
  methods: {
    openDropdown() {
      this.isMenu = !this.isMenu
    },
    selectItem(item, index) {
      console.log('item:::index:::', item, index);
    }
  }
}
</script>
<style lang="scss">
.header{
  height: 70px;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2);
  .container{
    height: 100%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tabList-caret .icon-navicon{
      cursor: pointer;
    }
    .logo{
      width: 99px;
      height: 33px;
      background: url('./../../assets/imgs/logo/logo.svg') no-repeat center / 99px 33px;
    }
    .user-entrance{
      display: flex;
      // justify-items: center;
      position: relative;
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        background: url('./../../assets/imgs/logo/avatar.jpg') no-repeat center / 40px 40px;
      }
      i{
        align-self: center;
        margin-left: 10px;
        cursor: pointer;
      }
      .menu-position{
        position: absolute;
        top: 56px;
        left: -25px;
      }
    }
  }
}
</style>
