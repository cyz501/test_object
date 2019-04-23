<template>
  <div>
    <slot name="left"></slot><span ref="num" :class="countClass" :id="eleId"></span><slot name="right"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'
import './count-to.less'
import { setTimeout } from 'timers';
export default {
  name: 'CountTo',
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      return `count_up_${this.uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  props: {
    startVal:{
      type: Number,
      default: 0
    },
    endVal:{
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separartor: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCount () {
      return this.$refs.num.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on_animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this. endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separartor: this.separartor,
        decimals: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  }
}
</script>

