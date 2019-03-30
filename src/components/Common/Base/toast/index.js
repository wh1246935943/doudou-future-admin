import Vue from 'vue'
import TestToast from './TestToast.vue'

function open(propsData) {
  const ToastComponent = Vue.extend(TestToast);
  return new ToastComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  tip(params) {
    const defaultParam = {};
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  }
}
