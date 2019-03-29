<template>
  <span class="drop-down">
    <div
      v-if="isMenu"
      class="background"
      @click="$emit('close')"
    ></div>
    <slot></slot>
    <div
      class="dropdown-menu"
      v-if="isMenu"
      :class="[menuPos]"
    >
      <div
        class="menu-item"
        v-for="(item, index) in menuData"
        :key="index"
        @click="selectItme(item, index)"
      >
        <i v-if="isIcon" class="icon" :class="item.icon"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </span>
</template>
<script>
export default {
  name: 'DropDown',
  data() {
    return {}
  },
  props: {
    menuData: Array,
    menuPos: String,
    isIcon: {
      type: Boolean,
      default: false
    },
    isMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectItme(item, index) {
      this.$emit('select-item', item, index);
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">
.drop-down{
  position: relative;
  .background{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .dropdown-menu{
    top: 139%;
    right: -20%;
    position: absolute;
    width: 100px;
    height: auto;
    background: #fff;
    padding: 10px 0;
    box-shadow: 0px 0px 6px rgba(136,136,136, 0.39);
    .menu-item{
      width: 100%;
      height: 32px;
      font-size: 12px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 15px;
      &:hover{
        background: #EFEFEF;
      }
      i{
        margin-right: 10px;
      }
    }
  }
}
</style>
