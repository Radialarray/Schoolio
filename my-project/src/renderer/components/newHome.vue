<template>
  <div class="uk-grid-collapse full-height" uk-grid>
    <div class="uk-background-muted uk-padding uk-height-1-1 uk-width-expand nav turquoise">
    <vue-nav></vue-nav>
</div>
<div class="uk-padding uk-light uk-height-1-1 uk-width-3-4">
    <transition
      name="custom-classes-transition"
      enter-active-class="slideInRight"
      leave-active-class="slideOutLeft"
    >
       <router-view ></router-view>
    </transition>
</div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {},
  methods: {

  }
}
</script>

<style>

.full-height {
  height: 100vh;
}
</style>
