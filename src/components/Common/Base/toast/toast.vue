<template>
  <div class="toast" v-if="isToast" :class="toastType">
    <div
      v-if="type === 'toast-tip'"
      class="tip"
      v-html="message"
    ></div>
    <div v-if="type === 'toast-loading'" class="loading">
      <i class="iconfont icon-jiazaizhong"></i>
      <div class="text">加载中...</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isToast: true
    }
  },
  props: {
    type: {
      type: String,
      default: 'toast-tip'
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    toastType() {
      return this.type
    }
  },
  beforeMount() {
    document.body.appendChild(this.$el);
  },
  mounted() {
    if (this.type === 'toast-tip') {
      setTimeout(() => {
        this.close()
      }, 3000)
    }
  },
  methods: {
    close() {
      this.isToast = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes loading{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.toast{
  z-index: 1000;
  color: #fff;
  position: fixed;
  user-select: none;
}
.toast-tip{
  height: auto;
  top: 50%;
  left: 50%;
  padding: 5px 5px;
  border-radius: 6px;
  background: #1296db;
  transform: translateY(-50%);
  transform: translateX(-50%);
}
.toast-loading{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  .loading{
    width: 75px;
    height: 65px;
    border-radius: 10px;
    text-align: center;
    background: #1296db;
    // background: url('./../../../assets/img/loading.gif') #1296db;
    // background-position: 10px 10px;
    // background-repeat: no-repeat;
    // background-size: 20px 20px;
    .icon-jiazaizhong{
      font-size: 35px;
      animation: loading 1s linear infinite;
      transform-origin: 12px 6px;
    }
  }
}
</style>
