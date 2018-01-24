<template>
<div class="uk-grid-collapse full-height" uk-grid>
  <div class="uk-background-muted uk-height-1-1 nav turquoise uk-position-fixed" style="width:33.3%">
    <vue-nav></vue-nav>
  </div>
  <div class="uk-height-1-1" style="width:33.3%">
  </div>
  <div class="uk-padding uk-light uk-height-1-1 uk-width-expand">
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
