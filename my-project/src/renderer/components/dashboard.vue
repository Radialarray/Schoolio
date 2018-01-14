<template>
<div>

    <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
      <div class="uk-width-auto@m">
        <div class="uk-card uk-card-default uk-card-body">Auto</div>
      </div>
      <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default uk-card-body">
          <span class="uk-label uk-align-left">Beginn</span>
          <span class="uk-label uk-align-right">Ende</span>

          <div class="rounded-corner">
            <v-progress-linear v-model="valueDeterminate" :title="valueDeterminate +' Minuten sind vergangen'" uk-tooltip></v-progress-linear>

          </div>
        </div>
      </div>
    </div>

    <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
      <div class="uk-width-auto@m">
        <div class="uk-card uk-card-default uk-card-body">Auto</div>
      </div>

      <div class="uk-width-1-2@m">
        <vue-drag></vue-drag>
    </div>

    <div class="uk-width-expand@m uk-height-1-1">
      <div class="uk-child-width-1-2@s uk-flex-left uk-text-center" uk-grid>
        <div>
          <div class="uk-card uk-card-default uk-card-body box">
            <div class="box-content">
              <p>Aufgaben erstellen</p>
              <img class="uk-width-1-2" src="../assets/icons/noun_1409605_cc.svg">
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body box">
            <div class="box-content">
              <p>Aktuelle Aufgaben</p>
              <img class="uk-width-1-2" src="../assets/icons/noun_317197_cc.svg">
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body box">
            <div class="box-content">
              <p>Klassen</p>
              <img class="uk-width-1-2" src="../assets/icons/noun_353698_cc.svg">
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body box">
            <div class="box-content">
              <p>Aufgaben verteilen</p>
              <img class="uk-width-1-2" src="../assets/icons/noun_830088_cc.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-width-auto@m">
      <a class="uk-card uk-card-default uk-card-body uk-position-fixed uk-position-small uk-position-bottom-right" href="" >?</a>
    </div>

</div>



</div>

</div>
</template>

<script>
export default {
  name: 'vue-dashboard',
  data () {
    return {
      fill: {
        gradient: ['red', 'green', 'blue']
      },
      valueDeterminate: 20
    }
  },
  components: {},
  methods: {

  }
}
</script>
