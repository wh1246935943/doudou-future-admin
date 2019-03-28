<template>
  <header class="header">
    <div class="container">
      <div class="tabList-caret">
        <i @click="$emit('open-tabList')" class="icon-navicon"></i>
      </div>
      <div class="logo"></div>
      <div class="user-entrance">
        <div class="avatar"></div>
        <i class="icon-angle-down"></i>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.header{
  height: 70px;
  background: #fff;
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
      background: url('./../../assets/logo/logo.svg') no-repeat center / 99px 33px;
    }
    .user-entrance{
      display: flex;
      // justify-items: center;
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        background: url('./../../assets/logo/avatar.jpg') no-repeat center / 40px 40px;
      }
      i{
        align-self: center;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
