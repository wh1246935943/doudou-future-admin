import TestAlert from './Alert';
import TestToast from './Toast';
import Modal from './modal';
import TestDropdown from './DropDown';
import TestButton from './Button';

const baseUi = {
  Modal,
  TestDropdown,
  TestButton
};

baseUi.install = (Vue) => {
  for (const componentName in baseUi) {
    const component = baseUi[componentName];

    if (component && componentName !== 'install') {
      Vue.component(component.name, component);
    }
  }

  Vue.prototype.$alert = TestAlert;
  Vue.prototype.$toast = TestToast
};

export default baseUi
