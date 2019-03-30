<template>
  <div
    :class="['button', classNames]"
    @click.stop="click"
  >
    <i
      v-if="icon"
      :class="['icon', icon]"
      @click="iconClick"
    ></i>
    <span v-if="icon" class="icon-margin"></span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TestButton',
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconAfter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      return {
        'is-primary' : this.primary,
        'is-cancel' : this.cancel,
        'is-disabled': this.disabled,
        'is-square': this.square,
        'icon-after': this.iconAfter,
        'is-info': this.info
      }
    }
  },
  methods: {
    click() {
      if (this.disabled) return; 
      this.$emit('click')
    },
    iconClick() {
      if (this.disabled) return; 
      this.$emit('icon-click')
    }
  }
}
</script>
<style lang="scss">
.button{
  user-select: none;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 10px;
  position: relative;
  .icon-margin{
    display: inline-block;
    width: 5px;
  }
}
.is-primary{
  background-color: #00B4CF;
  &:hover{
    background-color: #01869a;
  }
}
.is-info{
  background-color: #EfEfEf;
}
.is-cancel{
  background-color: #435466;
  &:hover{
    background-color: #2D4054;
  }
}
.is-square{
  padding: 6px;
}
.icon-after{
  flex-direction: row-reverse;
}
.is-disabled{
  background-color: #c8c9cc;
  cursor: not-allowed;
}
</style>

