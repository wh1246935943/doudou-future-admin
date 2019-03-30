<template>
  <span :class="['drop-down', className]">
    <div
      v-if="isMenu||isInputPromp"
      class="background"
      @click="close"
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
    <div
      class="dropdown-inputpromp"
      v-if="isInputPromp"
    >
      <header class="dropdown-inputpromp-head">
        <p>{{title}}</p>
        <i class="icon-close" @click="close"></i>
      </header>
      <section class="dropdown-inputpromp-section">
        <input
          :class="{'is-warning':isWarning}"
          type="text"
          :autofocus="true"
          v-model="inputValue"
          :placeholder="placeholder"
          @keyup.enter="confirm"
          @keyup.esc="close"
          @click.stop="[tipMsgDisplay='',isWarning&&(isWarning=false)]"
          @input="[tipMsgDisplay='',isWarning&&(isWarning=false)]"
        >
        <div v-if="tipMsgDisplay" class="tip-message">*{{tipMsgDisplay}}</div>
      </section>
      <footer class="dropdown-inputpromp-footer">
        <test-button primary @click="confirm">{{buttonConfirmTxt}}</test-button>
        <test-button cancel @click="close">{{buttonCancelTxt}}</test-button>
      </footer>
    </div>
  </span>
</template>
<script>
export default {
  name: 'TestDropdown',
  data() {
    return {
      inputValue: '',
      isWarning: false,
      tipMsgDisplay: ''
    }
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
    },
    isInputPromp: {
      type: Boolean,
      default: false
    },
    title: String,
    placeholder: String,
    className: String,
    buttonConfirmTxt: {
      type: String,
      default: 'Confirm'
    },
    buttonCancelTxt: {
      type: String,
      default: 'Cancel'
    },
    tipMsg: {
      type: String,
      default: ''
    }
  },
  watch: {
    tipMsg(val) {
      this.tipMsgDisplay = val;
    }
  },
  methods: {
    selectItme(item, index) {
      this.$emit('select-item', item, index);
      this.$emit('close');
    },
    confirm() {
      if (!this.inputValue) {
        this.isWarning = true;
        return
      }
      let str = this.inputValue.replace(/^\s*|\s*$/g, '');
      console.log('-----------', str);
      let reg = /[\s]/;
      if (reg.test(str)) {
        this.isWarning = true;
        this.tipMsgDisplay = 'Does not contain special characters';
        return
      }
      this.$emit('dorpdown-inputpromp', str);
      this.inputValue = '';
    },
    close() {
      this.inputValue = '';
      this.isWarning = false;
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">
.drop-down{
  position: relative;
  user-select: none;
  .background{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
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
    z-index: 999;
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
  .dropdown-inputpromp{
    width: 570px;
    position: absolute;
    top: 35px;
    left: -10px;
    border: 1px solid #00B4CF;
    display: flex;
    flex-direction: column;
    background: #fff;
    z-index: 999;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    &::before{
      content: "";
      position: absolute;
      top: -10px;
      left: 8px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #00B4CF;
    }
    &::after{
      content: "";
      position: absolute;
      top: -9px;
      left: 8px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
    }
    .dropdown-inputpromp-head{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      p{
        margin: 0;
      }
      i{
        cursor: pointer;
      }
    }
    .dropdown-inputpromp-section{
      padding: 20px 10px;
      input{
        width: 100%;
        height: 35px;
        outline: none;
        border: none;
        color: #424e67;
        border: 1px solid #c8c9cc;
        border-radius: 2px;
        box-shadow: 0 1px 2px #c8c9cc inset;
        padding-left: 10px;
      }
      .is-warning{
        border: 1px solid #f56c6c;
        box-shadow: 0 1px 2px #f56c6c inset;
      }
      .tip-message{
        color: #f56c6c;
        font-size: 12px;
      }
    }
    .dropdown-inputpromp-footer{
      padding: 0 0 15px 0;
      display: flex;
      justify-content: flex-start;
      .button{
        margin-left: 10px;
      }
    }
  }
}
</style>
