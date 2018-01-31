<template>
<div class="content">
  <vue-statusbar></vue-statusbar>

  <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>

    <div class="uk-width-expand uk-overflow-auto">
      <transition>
      <vue-drag></vue-drag>
      </transition>
    </div>

  </div>



</div>

</template>

<script>
export default {
  name: 'vue-dashboard',
  data() {
    return {
      fill: {
        gradient: ['red', 'green', 'blue']
      },
      valueDeterminate: parseInt(Math.random() * (60/200) * 200)
    }
  },
  components: {},
  methods: {

  }
}
</script>

<style lang="scss">
@import "../assets/css/styles.scss";

.vue-progress-path path {
    stroke-width: 12;
}

.vue-progress-path .progress {
    stroke: red;
}

.vue-progress-path .background {
    stroke: #edd;
}

.progress-linear {
    height: 1.188rem !important;
}

.progress-linear__background {
    background: $subaccent;
}

.progress-linear__bar__determinate {
    background: $accent;
}

.color-accent {
    background: $accent;
}

.progress-linear__background,
.progress-linear__bar,
.progress-linear__bar__determinate {
    $round: 8px;
    -webkit-border-radius: $round;
    -moz-border-radius: $round;
    border-radius: $round;
}

.text-black {
    color: black;
}


.progress-linear__bar .description {
  color: #9B9B9B;
  font-size: 1rem;
  line-height: 1rem;
  text-align: right;
  width: 95%;
  position:absolute;

}
</style>
