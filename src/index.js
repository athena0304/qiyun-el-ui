import qeModal from './packages/qe-modal'

const components = [
  qeModal
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  qeModal
}

module.exports.default = module.exports;