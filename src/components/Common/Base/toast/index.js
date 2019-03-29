import Vue from 'vue'
import Toast from './toast.vue'

function open(propsData) {
  const ToastComponent = Vue.extend(Toast);
  return new ToastComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  tip(params) {
    const defaultParam = {
      type: 'toast-tip'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },
  loading(params) {
    const defaultParam = {
      type: 'toast-loading'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },
  closeLoading() {
    // ...
  }
}
