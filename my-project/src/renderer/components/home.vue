<template>
<div>
  <vue-nav></vue-nav>

  <div class="content">
    <transition
      name="custom-classes-transition"
      enter-active-class="slideInRight"
      leave-active-class="slideOutLeft"
    >    <router-view ></router-view>
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
