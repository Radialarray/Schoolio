<template>
<div>
  <vue-nav></vue-nav>

  <div class="content">

    <router-view></router-view>

<vue-dashboard></vue-dashboard>

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
