<template>
  <div
    :class="['test-alert', className]"
    v-if="isTestAlert"
    @click.self="isTestAlert = false"
  >
    <div class="warp">
      <header class="test-alert-head">
        <p>{{title}}</p>
        <i class="icon-close" @click="isTestAlert=false"></i>
      </header>
      <section class="test-alert-section">
        <div v-if="type==='prompt'" class="input">
          <input
            type="text"
            v-model="inputValue"
            v-bind="inputAttrs"
            @keyup.enter="confirm"
          >
        </div>
        <div v-else-if="type==='confirm'" class="info">{{confirmText}}</div>
      </section>
      <footer class="test-alert-footer">
        <test-button primary @click="confirm">{{buttonConfirmTxt}}</test-button>
        <test-button cancel @click="cancel">{{buttonCancelTxt}}</test-button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestAlert',
  data() {
    return {
      isTestAlert: false,
      inputValue: ''
    }
  },
  props: {
    title: {
      type: String,
      default: 'Tip'
    },
    inputAttrs: {
      type: Object,
      default: () => {}
    },
    confirmText: {
      type: String,
      default: ''
    },
    buttonConfirmTxt: {
      type: String,
      default: 'Confirm'
    },
    buttonCancelTxt: {
      type: String,
      default: 'Cancel'
    },
    className: {
      type: String,
      default: ''
    },
    type: String,
    onConfirm: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    isProper() {
      if (this.type === 'prompt') {
        return !this.inputValue.match(/^\s*$/g)
      } else {
        return true
      }
    }
  },
  methods: {
    close() {
      this.isTestAlert = false;
    },
    cancel() {
      this.close();
    },
    confirm() {
      this.onConfirm(this.inputValue.replace(/\s/g, ''));
      this.close();
    }
  },
  beforeMount() {
    document.body.appendChild(this.$el);
  },
  mounted() {
    this.isTestAlert = true;
  }
}
</script>
<style lang="scss">
.test-alert{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  .warp{
    display: flex;
    flex-direction: column;
    min-width: 270px;
    border: 1px solid #00B4CF;
    background: #fff;
    overflow: hidden;
    .test-alert-head{
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
    .test-alert-section{
      .input{
        padding: 10px 0;
        display: flex;
        justify-content: center;
        input{
          width: calc(100% - 10px);
          height: 35px;
          outline: none;
          border: none;
          color: #424e67;
          border-bottom: 1px solid #1296db;
        }
      }
      .info{
        padding: 20px 10px;
      }
    }
    .test-alert-footer{
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
