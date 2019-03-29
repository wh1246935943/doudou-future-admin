<template>
  <div class="alert" v-if="showAlert">
    <div class="warp">
      <header class="head">
        <p>{{title}}</p>
        <i class="iconfont icon-guanbi" @click="showAlert=false"></i>
      </header>
      <section class="section">
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
      <footer class="footer">
        <button @click="cancel">取消</button>
        <button
          :disabled="!isProper"
          class="confirm"
          @click="confirm"
          :class="{'disabled':!isProper}"
        >确认</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAlert: false,
      inputValue: ''
    }
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    inputAttrs: {
      type: Object,
      default: () => {}
    },
    confirmText: {
      type: String,
      default: '确认删除'
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
      this.showAlert = false;
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
    this.showAlert = true;
  }
}
</script>
<style lang="scss" scoped>
.alert{
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
    border-radius: 6px;
    background: #fff;
    overflow: hidden;
    .head{
      display: flex;
      justify-content: space-between;
      height: 30px;
      background: #1296db;
      color: #fff;
      line-height: 30px;
      padding: 0 10px;
      p{
        margin: 0;
      }
      i{
        cursor: pointer;
      }
    }
    .section{
      .input{
        padding: 10px 0;
        display: flex;
        justify-content: center;
        input{
          width: 86%;
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
    .footer{
      padding: 0 0 15px 0;
      display: flex;
      justify-content: flex-end;
      button{
        width: 70px;
        height: 25px;
        border: none;
        outline: none;
        color: #424e67;
        border-radius: 4px;
        margin-right: 20px;
        cursor: pointer;
        color: #fff;
      }
      .confirm{
        background: #1296db;
      }
    }
  }
}
</style>
