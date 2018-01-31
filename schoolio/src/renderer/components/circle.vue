<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class='gauge-chart'>
      <g fill="none" fill-rule="evenodd" stroke-width="6">
        <circle cx="16" cy="16" r='12' stroke="red"/>
        <circle cx="16" cy="16" r='12' stroke="blue" stroke-dasharray='75' :stroke-dashoffset='offset' :class='{"hide": !value}'/>
      </g>
    </svg>
</template>

<script>
export default {
  name: 'circle',
  props: {
    value: {
      type: Number
    }
  },
  data () {
    return {
      radius: 12
    }
  },
  computed: {
    circumference () {
      return this.radius * 2 * Math.PI
    },
    offset () {
      return (this.circumference / 100) * (100 - this.value)
    }
  }
}
</script>
