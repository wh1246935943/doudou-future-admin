<template>
  <div class="test-toast" v-if="isTestToast">
    <div class="test-toast-tip" v-html="message"></div>
  </div>
</template>
<script>
export default {
  name: 'TestToast',
  data () {
    return {
      isTestToast: true
    }
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'toast-tip'
    }
  },
  beforeMount() {
    document.body.appendChild(this.$el);
  },
  mounted() {
    console.log('show tip');
    setTimeout(() => {
      this.isTestToast = false;
    }, 2000)
  }
}
</script>

<style lang="scss">
.test-toast{
  z-index: 1000;
  position: fixed;
  user-select: none;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  border: 1px solid #00B4CF;
  box-shadow: 0 3px 5px rgba(0,0,0,.3);
  background-color: #fff;
}
.test-toast-tip{
  padding: 10px 30px;
}
</style>
