# qiyun-el-ui
based on element-ui
奇云业务基于element-ui组件抽取

including:
- qe-modal

## Install
```shell
npm install qiyun-el-ui -S
```
## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import QiyunElUI from 'qiyun-el-ui'

Vue.use(Element)
Vue.use(QiyunElUI)

// or
import {
  QeModal
} from 'qiyun-el-ui'

Vue.component(QeModal.name, QeModal)
```

## Browser Support
Modern browsers and Internet Explorer 10+.

## LICENSE
[MIT](LICENSE)