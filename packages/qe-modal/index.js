// import Alert from './src/main';

// Alert.install = function(Vue) {
//   Vue.component(Alert.name, Alert);
// };

// export default Alert;

import qeModal from './src/qe-modal'

qeModal.install = function(Vue) {
  Vue.component(qeModal.name, qeModal)
}

export default qeModal