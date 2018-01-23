<template>
<div class="uk-width-1-1 uk-height-1-1 uk-position-relative uk-flex uk-flex-around uk-flex-column">
  <div class="uk-width-1-1">
    <ul class="top-nav uk-flex uk-flex-between uk-flex-top uk-flex-wrap">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li class="toggles">
        <a href="#">Sperren</a>
      </li>
      <li class="toggles">
        <a href="#">Spiegeln</a>
      </li>
    </ul>
  </div>

  <div class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
    <div class="uk-border-circle status-circle"></div>
    <p>Status</p>
  </div>

  <div class="uk-width-1-1">
    <div class="uk-grid-small	uk-child-width-1-2@s uk-flex-left uk-text-center" uk-grid>
      <div>
        <router-link to="create-task">
          <div class="uk-card uk-card-default uk-card-body box main-menu-button">
            <div class="box-content">
              <p>Aufgabe erstellen</p>
              <img class="uk-width-1-2" src="../assets/icons/noun_1409605_cc.svg">
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body box main-menu-button">
          <div class="box-content">
            <p>Aktuelle Aufgaben</p>
            <img class="uk-width-1-2" src="../assets/icons/noun_317197_cc.svg">
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body box main-menu-button">
          <div class="box-content">
            <p>Klassen</p>
            <img class="uk-width-1-2" src="../assets/icons/noun_353698_cc.svg">
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body box main-menu-button">
          <div class="box-content">
            <p>Aufgaben verteilen</p>
            <img class="uk-width-1-2" src="../assets/icons/noun_830088_cc.svg">
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="uk-width-1-1 uk-flex uk-flex-middle uk-flex-between	 to-bottom uk-position-absolute uk-margin-remove">
    <p class="uk-margin-remove">
      School by SchoolSystems
    </p>
    <div class="uk-margin-remove">
      <div class="uk-align-right uk-margin-remove circle help-circle"><a>?</a></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'vue-nav',
  components: {}
}
</script>

<style lang="scss">
@import "../assets/css/styles.scss";

.to-bottom {
    position: absolute;
    bottom: 0;
}

.main-menu-button {
    background: rgba(255,255,255,0.15) !important;
    border: 1px solid rgba(#ffffff, 0.6) !important;
    border-radius: 9px;
}

.top-nav {
    padding: 0;
    margin: 2em 0;
    list-style: none;

    @media only screen and (max-width: 1000px) {
      margin-top: 0;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    }

    li {
        // -webkit-transition: box-shadow 0.2s ease;
        // -moz-transition: box-shadow 0.2s ease;
        // transition: box-shadow 0.2s ease;
        // -webkit-backface-visibility: hidden;
        // backface-visibility: hidden;
        // border-radius: 50%;
        // color: #ffb600;
        // display: inline-block;
        font-size: 0.889em;
        // margin: 0 1em 1em;
        position: relative;
        text-align: center;
        text-transform: lowercase;
        width: 6rem;
        height: 6rem;
        line-height: 6rem;
        border: solid 1px #fff;
        border-radius: 50%;
        @include box-shadow(0px,5px,13px,rgba(0, 0, 0, 0.25),false);
        @include box-shadow(0px,5px,13px,rgba(0, 0, 0, 0),true);
        @include transition(all,0.3s, ease);

        a {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        &:hover {
            // box-shadow: 0 0 0 7px #fff;
            @include box-shadow(0px,5px,13px,rgba(0, 0, 0, 0),false);
            @include box-shadow(0px,5px,13px,rgba(0, 0, 0, 0.25),true);

        }
        @media only screen and (min-width: 1690px) {
          width: 7rem;
          height: 7rem;
          line-height: 7rem;
        }
        @media only screen and (max-width: 1500px) {
          width: 5rem;
          height: 5rem;
          line-height: 5rem;
        }
        @media only screen and (max-width: 1290px) {
          width: 4.5rem;
          height: 4.5rem;
          line-height: 4.5rem;
        }
        @media only screen and (max-width: 1000px) {
          margin-bottom: 1rem;
          width: 6rem;
          height: 6rem;
          line-height: 6rem;
        }
    }

    .toggles {
        background-color: #fff;
        border: solid 1px #FAB301;
    }
}


</style>
