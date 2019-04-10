<template>
  <div>
    <CYZinput @input="handleInput"/>
    <!-- <p>{{ inputValue }}</p> -->
    <CYZshow :content="inputValue"/>
  </div>
</template>
<script>
import CYZinput from '_c/CYZinput.vue'
import CYZshow from '_c/CYZshow.vue'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    CYZinput,
    CYZshow
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

