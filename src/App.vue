<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="dialogVisible = true">el-button</el-button>
      <qe-modal 
        title="编辑"
        :dialogVisible="dialogVisible"
        :beforeSendDisable="beforeSendDisable"
        v-on:update:dialogVisible="dialogVisible = $event"
        v-on:confirm="this.confirm"
      >
        <template slot="modal-body">
          内容
        </template>
      </qe-modal>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import qeModal from './packages/qe-modal/src/qe-modal.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    qeModal
  },
  data () {
    return {
      dialogVisible: false,
      beforeSendDisable: false,
    }
  },
  methods: {
    handleClose() {
    },
    confirm () {
      this.dialogVisible = false
    }
  }
}
</script>
