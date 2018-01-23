<template>
<div class="content">

  <div class="uk-flex">
    <div>
      <div>
        <img class="uk-border-circle profile-pic" src="../assets/img/fabian-moller-401639.jpg" />
      </div>
    </div>
    <div class="uk-width-expand@m">
      <div class="uk-width-1-1 text-black uk-flex uk-margin-bottom">
        <div class="uk-margin-right">Klasse: <span class="uk-text-bold">1B</span></div>
        <div>Fach: <span class="uk-text-bold">Deutsch</span></div>
      </div>
      <div class="uk-width-1-1">
        <div class="">
          <span class="uk-label uk-align-left uk-margin-small-bottom uk-padding-remove">Unterrichtsbeginn</span>
          <span class="uk-label uk-align-right uk-margin-small-bottom uk-padding-remove">Unterrichtsende</span>

          <div class="rounded-corner">
            <v-progress-linear v-model="valueDeterminate" :title="valueDeterminate +' Minuten sind vergangen'" uk-tooltip></v-progress-linear>

          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>

    <div class="uk-width-expand uk-overflow-auto">
      <vue-drag></vue-drag>
    </div>

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
      valueDeterminate: parseInt(Math.random() * (60 / 100) * 100)
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
</style>
