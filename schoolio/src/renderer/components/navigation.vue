<template>
<div class="uk-width-1-1 uk-height-1-1 uk-position-relative uk-flex uk-flex-between uk-flex-column nav-padding">
  <div>

    <div class="square-container uk-width-1-1">
      <router-link v-bind:class="{ active: home }"  v-on:click="home= !home" to="home" class="circle-button">
        <div class="square-content">
          <img class="icon" src="../assets/icons/home.svg">
        </div>
      </router-link>
      <button v-bind:class="{ active: spiegeln }"  v-on:click="spiegeln= !spiegeln" class="toggles circle-button">
        <div class="square-content">
          <img class="icon" src="../assets/icons/spiegeln.svg">
        </div>
      </button>
      <button v-bind:class="{ active: sperren }"  v-on:click="sperren = !sperren" class="toggles circle-button">
        <div class="square-content">
          <img class="icon" src="../assets/icons/lock.svg">
        </div>
      </button>
    </div>

    <div class="uk-width-1-1 bottom-margin top-margin uk-flex uk-flex-center uk-flex-middle">
      <div class="uk-border-circle status-circle"></div>
      <p>{{breadcrumb}}</p>
    </div>

    <div class="square-container uk-width-1-1">
      <router-link to="" class="square">
        <div class="square-content">
          <p>
            Aufgaben erstellen
          </p>
          <img class="icon" src="../assets/icons/plus.svg">
        </div>
      </router-link>
      <router-link to="aufgaben" class="square">
        <div class="square-content">
          <p>
            Aktuelle Aufgaben
          </p>
          <img class="icon" src="../assets/icons/aufgabenliste.svg">
        </div>
      </router-link>
      <div class="square">
        <div class="square-content">
          <p>
            Klassen
          </p>
          <img class="icon" src="../assets/icons/klassen.svg">
        </div>
      </div>
      <router-link to="task-verteilen" class="square">
        <div class="square-content">
          <p>
            Aufgaben verteilen
          </p>
          <img class="icon" src="../assets/icons/verteilen.svg">
        </div>
      </router-link>
    </div>
  </div>
  <div class="uk-width-1-1 uk-flex uk-flex-middle uk-flex-between uk-margin-remove">
    <p class="uk-margin-remove logo">
      School<span class="bold">io</span> by School<span class="bold">Systems</span>
    </p>
    <div class="uk-margin-remove">
      <router-link to="help" class="uk-align-right uk-margin-remove circle help-circle">?</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'vue-nav',
  components: {},
  data: function() {
    return {
      breadcrumb: 'Home',
      spiegeln: false,
      sperren: false,
      home: false,
    }
  },
  methods: {
    replaceSlash() {
      let str = this.$route.name
      if (typeof str != 'undefined') {
        str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
        this.breadcrumb = str
      }
    }
  },
  mounted: function() {
    // let str = this.$route.name
    // if (typeof str != 'undefined') {
    // str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    // this.breadcrumb = str
    // }
    this.replaceSlash()
  },
  watch: {
    '$route' (to, from) {
      this.replaceSlash()

    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/styles.scss";

.nav-padding {
    $pad: 73px;
    padding: $pad $pad $pad/2;
}

.to-bottom {
    position: absolute;
    bottom: 0;
}

.bottom-margin {
    margin-bottom: 2em;
}

.top-margin {
    margin-top: 2em;
}

.main-menu-button {
    background: rgba(255,255,255,0.15) !important;
    border: 1px solid rgba(#ffffff, 0.6) !important;
    border-radius: 9px;
    width: 50%;
    height: 50%;
}

.flex-center {
    align-self: flex-end;
}

.status-circle {
    height: 26px;
    width: 26px;
    background: #5B7C7E;
    margin-right: 0.5rem;
}

.square-container {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: space-between;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-content: flex-end;
    align-content: space-between;
}

.square {
    position: relative;
    width: 48%;
    margin-right: 2%;
    margin-bottom: 2%;
}

.square::after {
    content: "";
    display: block;
    padding-bottom: 100%;
    background: rgba(255,255,255,0.15) !important;
    border: 1px solid rgba(#ffffff, 0.6) !important;
    border-radius: 9px;
    @include transition(all, 0.2s, ease-in-out)
}

.square:hover::after {
    background: rgba(255,255,255,0.5) !important;
}

.square-content {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    line-height: 4px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
justify-content: center;

@media (max-width: 1040px) {
  p {
    display: none;
    }
}
@media (max-width: 1230px) {
  p {
    line-height: 10px !important;
    }
}
}



.circle-button {
    position: relative;
    width: 32%;
    margin-right: 1px !important;
    margin-bottom: 1px !important;
    @include transition(all,0.3s, ease);
}

.circle-button::after {
    content: "";
    display: block;
    padding-bottom: 100%;
    border: 1px solid rgba(#ffffff, 0.6) !important;
    border-radius: 50%;
    @include transition(all, 0.2s, ease-in-out)
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.25);
}

.circle-button:hover::after {
    background: rgba(255,255,255,0.5) !important;
    // box-shadow: inset 0 5px 13px rgba(0, 0, 0, 0.25);
}

.circle-button.active {
  box-shadow: inset 0 5px 13px rgba(0, 0, 0, 0);
  @include transition(all, 0.2s, ease-in-out)

}

.circle-button.active:after {
  background: #FAB301 !important;
  box-shadow: inset 0 5px 13px rgba(0, 0, 0, 0.25);

}


.toggles {
    position: relative;
    width: 32%;
    margin-right: 1px;
    margin-bottom: 1px;
    @include transition(all,0.3s, ease);
}

.toggles::after {
    content: "";
    display: block;
    padding-bottom: 100%;
    background-color: #fff;
    border: solid 1px #FAB301 !important;
    border-radius: 50%;
    @include transition(all, 0.2s, ease-in-out)
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.25);

}

.toggles:hover::after {
    background: #FAB301 !important;
    // box-shadow: 0 5px 13px rgba(0, 0, 0, 0);
}
.toggles.active {
  box-shadow: inset 0 5px 13px rgba(0, 0, 0, 0);
  @include transition(all, 0.2s, ease-in-out)

}

.toggles.active:after {
  background: #FAB301 !important;
  box-shadow: inset 0 5px 13px rgba(0, 0, 0, 0.25);

}

.icon {
    // width: 58px;
    // height: 58px;
    width: 50%;
    height: 50%;
}

.logo {
    color: rgba(#F8FBFB, 0.5);
    font-family: 'Dosis', sans-serif;
}

.logo > .bold {
    font-weight: bold;
}
</style>
