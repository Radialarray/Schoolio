<template>
<div class="content">
  <h1 class="uk-margin-large">Hilfe</h1>

  <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>

    <div class="uk-width-expand uk-overflow-auto">
      <div class="uk-grid" uk-grid>
        <div class="uk-width-1-1 uk-flex uk-flex-left  uk-flex-middle margin-bottom">
          <img class="menu-icon uk-margin-right" src="../assets/help/Einloggen.svg">
          <p class="uk-height-1-1">Einfaches Einloggen: Tag auf Reader legen.</p>
        </div>
        <div class="uk-width-1-1 uk-flex uk-flex-left  uk-flex-middle">
          <img class="menu-icon uk-margin-right" style="width:25px;height:auto" src="../assets/help/USB.svg">
          <p class="uk-height-1-1">In den Computer einstecken und los gehts.</p>
        </div>
        <div class="uk-width-1-1 uk-flex uk-flex-left  uk-flex-middle">
          <img class="menu-icon uk-margin-right" src="../assets/help/Kommunikation.svg">
          <p class="uk-height-1-1">Kommunikation im Unterricht</p>
        </div>
        <div class="uk-width-1-1 uk-flex uk-flex-left  uk-flex-middle">
          <img class="menu-icon uk-margin-right" src="../assets/help/Home.svg">
          <p class="uk-height-1-1">Verwaltung des Homeverzeichnis</p>
        </div>
        <div class="uk-width-1-1 uk-flex uk-flex-left  uk-flex-middle">
          <img class="menu-icon uk-margin-right" src="../assets/help/Datentausch.svg">
          <p class="uk-height-1-1">Schneller Datentausch</p>
        </div>

        <img class="uk-width-1-1" src="../assets/help/stift.svg">
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

.menu-icon {
  width: auto;
  height: 30px;
}

.margin-bottom {
  margin-bottom: 15px;
}
</style>
