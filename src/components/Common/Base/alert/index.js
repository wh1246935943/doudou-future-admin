import Vue from 'vue'
import Alert from './alert.vue'

function open(propsData) {
  const AlertComponent = Vue.extend(Alert);
  return new AlertComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  confirm(params) {
    const defaultParam = {
      type: 'confirm'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },
  prompt(params) {
    const defaultParam = {
      type: 'prompt'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  }
}

// Alert.install = (Vue, options = {}) => {
//   Vue.prototype.$alert = Alert
// }
