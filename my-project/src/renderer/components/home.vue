<template>
<div class="uk-grid-collapse full-height" uk-grid>
  <div class="uk-height-1-1 fg-z" style="width:30%">
  </div>
  <div class="uk-background-muted uk-height-1-1 nav turquoise uk-position-fixed fg-z" style="width:30%">
    <vue-nav></vue-nav>
  </div>
  <div class="uk-padding uk-height-1-1 uk-width-expand bg-z">
    <transition name="custom-classes-transition" enter-active-class="slideInRight" leave-active-class="slideOutLeft">
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
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
