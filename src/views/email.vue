<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on_click', 'hello')
    }
  },
  mounted () {
    console.log(this.$bus)
  }
}
</script>
<style>
.email{
  border: 1px solid #333333;
}
</style>
