<template>
  <li class="a-menu-item"><slot></slot></li>
</template>
<script>
export default {
  name: 'AMenuItem'
}
</script>
<style lang="less">
.a-menu-item{
  background-color:darkkhaki;
  height: 25px;
  line-height: 25px;
}
</style>


