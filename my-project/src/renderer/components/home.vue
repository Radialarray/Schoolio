<template>
<div>
  <vue-nav></vue-nav>

  <div class="content">
    <transition name="fade">
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
