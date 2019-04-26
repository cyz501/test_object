<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: offsetLeftPercent}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMouseDown" :style="{left: triggerLeft, width: `${triggerWidth}px`}"></div>
    <div class="pane pane-right" :style="{left: offsetLeftPercent, paddingLeft: `${this.triggerWidth / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SplitPane',
  props: {
    triggerWidth: {
      type: Number,
      default: 15
    },
    value: {
      type: Number,
      default: 0.5
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return{
      // offsetLeft: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    offsetLeftPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    offsetChange () {
      this.offsetLeft -= 0.01
    },
    handleMouseDown (event) {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseMove (event) {
      if(!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth/2 - outerRect.left) / outerRect.width
      if(offsetPercent < this.min) offsetPercent = min
      if(offsetPercent > this.max) offsetPercent = max
      this.$emit('update:value', offsetPercent)
    },
    handleMouseUp () {
      this.canMove = false
    }
  }
}
</script>
<style lang="less">
  .split-pane-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    .pane{
      position: absolute;
      top: 0;
      height: 100%;
      &-left{
        width: 30%;
        background-color: rosybrown;
      }
      &-right{
        right: 0;
        bottom: 0;
        left: 30%;
        background-color: mediumpurple;
      }
      &-trigger-con{
        height: 100%;
        background-color: red;
        position: absolute;
        top: 0;
        user-select: none;
        cursor: col-resize;
        z-index: 10;
      }
    }
  }
</style>


