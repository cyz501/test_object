<template>
  <input type="" @input="handleInput" :value="value" >
</template>
<script>
export default {
  name: 'CYZinput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input', value)

    }
  }
}
</script>
