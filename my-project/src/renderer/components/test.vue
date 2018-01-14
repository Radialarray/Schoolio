<template>
<div>
  <nav class="uk-navbar-container uk-box-shadow-small" uk-navbar>
    <div class="uk-navbar-left uk-margin-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <router-link to="/" class="uk-border-circle nav-circle color-accent" href="#">Home</router-link>
        </li>
        <li>
          <router-link to="/circle" class="uk-border-circle nav-circle color-accent">Parent</router-link>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active"><a href="#">Home</a></li>
              <li><a href="#">Item</a></li>
              <li><a href="#">Item</a></li>
            </ul>
          </div>
        </li>
        <li><a class="uk-border-circle nav-circle color-accent" href="#">Item</a></li>
      </ul>
    </div>

    <div class="uk-navbar-center">
      <div class="uk-margin-right">Klasse: <span class="uk-text-bold">1B</span></div>
      <div>Fach: <span class="uk-text-bold">Deutsch</span></div>
    </div>
    <div class="spacer"></div>

    <div class="uk-navbar-right uk-margin-right">
      <router-link to="/circle">
        <img class="uk-border-circle" style="height: 50px;" src="../assets/img/fabian-moller-401639.jpg" />
      </router-link>
    </div>

  </nav>

  <div class="content">
    <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
      <div class="uk-width-auto@m">
        <div class="uk-card uk-card-default uk-card-body">Auto</div>
      </div>
      <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default uk-card-body">
          <span class="uk-label uk-align-left">Beginn</span>
          <span class="uk-label uk-align-right">Ende</span>

          <div class="rounded-corner">
            <v-progress-linear v-model="valueDeterminate"></v-progress-linear>

          </div>
        </div>
      </div>
    </div>

    <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
      <div class="uk-width-auto@m">
        <div class="uk-card uk-card-default uk-card-body">Auto</div>
      </div>
      <div class="uk-width-1-2@m">
        <div class="uk-grid-collapse uk-child-width-1-5@s uk-flex-left uk-text-center" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
            <p>Marc Bel</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-secondary uk-card-body">Item 2</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 3</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 4</div>
        </div>
        <div>
          <div class="uk-card uk-card-primary uk-card-body">Item 5</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 6</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 7</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 8</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 9</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 3</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 4</div>
        </div>
        <div>
          <div class="uk-card uk-card-primary uk-card-body">Item 5</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 6</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 7</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 8</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item 9</div>
        </div>
      </div>
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
  </div>
</div>



</div>

</div>
</template>

<script>


export default {
  name: 'landing-page',
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
