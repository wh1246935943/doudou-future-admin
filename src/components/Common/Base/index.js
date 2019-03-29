import Alert from './alert';
import Toast from './toast';
import Modal from './modal';
import DropDown from './DropDown'

const baseUi = {
  Modal,
  DropDown
};

baseUi.install = (Vue) => {
  for (const componentName in baseUi) {
    const component = baseUi[componentName];

    if (component && componentName !== 'install') {
      Vue.component(component.name, component);
    }
  }

  Vue.prototype.$alert = Alert;
  Vue.prototype.$toast = Toast
};

export default baseUi
