<template>
  <div class="split-pane-con">
    <split-pane :value.sync="offset">
      <div slot="left">左</div>
      <div slot="right">右</div>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from '_c/split-pane'

export default {
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.8
    }
  }
}
</script>
<style lang="less">
  .split-pane-con{
    width: 500px;
    height: 200px;
    background-color: darkcyan;
  }
</style>



