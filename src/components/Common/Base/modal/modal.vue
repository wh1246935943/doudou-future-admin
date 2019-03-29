<template>
  <div class="modal" v-if="isShowModal">
    <div class="modal-background" @click="$emit('close')">
    </div>
    <div class="modal-card" :class="cardSize">
      <div class="modal-title" v-if="isTitle">
        <span>{{title}}</span>
        <!-- <i class="iconfont icon-guanbi" @click="$emit('close')"></i> -->
      </div>
      <slot></slot>
    </div>
    <div v-if="isCloseBtn" class="close" @click="$emit('close')">
      <i class="iconfont icon-guanbi1"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wModal',
  data() {
    return {

    }
  },
  props: {
    isShowModal: {
      type: Boolean,
      default: false
    },
    cardSize: String,
    title: String,
    isTitle: Boolean,
    isCloseBtn: Boolean
  }
}
</script>
<style lang="scss">
.modal{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-background{
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .modal-card{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    .modal-title{
      background: #565656;
      padding: 5px 10px;
      display: flex;
      color: #fff;
      justify-content: space-between;
      i{
        cursor: pointer;
      }
    }
  }
  .close{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 30px;
    .icon-guanbi1{
      color: #fff;
    }
    &:hover{
      background: red;
      cursor: pointer;
    }
  }
}
</style>
