<template>
  <div>
    <p>CYZshow:{{ content }}</p>
  </div>
</template>
<script>
export default {
  props:{
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

