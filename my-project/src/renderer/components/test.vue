<template>
<div>
  <nav class="uk-navbar-container uk-box-shadow-small" uk-navbar>
    <div class="uk-navbar-left uk-margin-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <a class="uk-border-circle nav-circle color-accent" href="#">Home</a>
        </li>
        <li>
          <a class="uk-border-circle nav-circle color-accent" href="#">Parent</a>
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
      <router-link to="/">
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


              <img class="uk-border-circle" style="height: 50px;" src="../assets/img/fabian-moller-401639.jpg" />
              <!-- <vue-circle :progress="50" :size="100" :reverse="false" line-cap="round" :fill="fill" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="10" :show-percent="true" @vue-circle-progress="progress"
                @vue-circle-end="progress_end">
                <p>Slot!</p>
              </vue-circle> -->

              <svg class="progress" width="120" height="120" viewBox="0 0 120 120">
  		<circle class="progress__meter" cx="60" cy="60" r="54" stroke-width="12" />
  		<circle class="progress__value" cx="60" cy="60" r="54" stroke-width="12" />
  	</svg>
              <input id="control" type="range" value="60" />
            </div>

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

var control = document.getElementById('control');
var progressValue = document.querySelector('.progress__value');

var RADIUS = 54;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(value) {
	var progress = value / 100;
	var dashoffset = CIRCUMFERENCE * (1 - progress);

	console.log('progress:', value + '%', '|', 'offset:', dashoffset)

	progressValue.style.strokeDashoffset = dashoffset;
}

control.addEventListener('input', function(event) {
	progress(event.target.valueAsNumber);
});

progressValue.style.strokeDasharray = CIRCUMFERENCE;
progress(60);


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
