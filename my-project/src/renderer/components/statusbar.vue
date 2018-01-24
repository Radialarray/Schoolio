<template>

  <div class="uk-flex">
    <div>
        <img class="uk-border-circle profile-pic uk-margin-right" src="../assets/img/fabian-moller-401639.jpg" />
    </div>
    <div class="uk-width-expand@m uk-margin-bottom">
      <div class="uk-width-1-1 text-black uk-flex uk-margin-bottom">
        <div class="uk-margin-right">Klasse: <span class="uk-text-bold">1B</span></div>
        <div>Fach: <span class="uk-text-bold">Deutsch</span></div>
      </div>
      <div class="uk-width-1-1">
        <div class="">
          <span class="label no-bg uk-align-left uk-margin-small-bottom uk-padding-remove">Unterrichtsbeginn</span>
          <span class="label no-bg uk-align-right uk-margin-small-bottom uk-padding-remove">Unterrichtsende</span>

          <div class="rounded-corner">

            <v-progress-linear v-model="valueDeterminate" :title="valueDeterminate +' Minuten sind vergangen'" uk-tooltip>
            </v-progress-linear>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'vue-statusbar',
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
