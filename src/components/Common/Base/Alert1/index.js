import Vue from 'vue'
import TsetAlert from './Alert.vue'

function open(propsData) {
  const AlertComponent = Vue.extend(TsetAlert);
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
