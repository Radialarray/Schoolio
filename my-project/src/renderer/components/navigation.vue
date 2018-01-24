<template>
<div class="uk-width-1-1 uk-height-1-1 uk-position-relative uk-flex uk-flex-between uk-flex-column nav-padding">
  <div>
    <div class="uk-width-1-1 bottom-margin">
      <ul class="top-nav  uk-flex uk-flex-between uk-flex-top uk-flex-wrap">
        <li class="button">
          <router-link to="/">
            <img class="icon" src="../assets/icons/home.svg">
          </router-link>
        </li>
        <li class="button toggles">
          <router-link to="/">
            <img class="icon" src="../assets/icons/spiegeln.svg">
          </router-link>
          </li>
          <li class="button toggles">
            <router-link to="/">
              <img class="icon" style="height:38px;width:38px;" src="../assets/icons/lock.svg">
            </router-link>
          </li>
      </ul>
    </div>

    <div class="uk-width-1-1 bottom-margin uk-flex uk-flex-center uk-flex-middle">
      <div class="uk-border-circle status-circle"></div>
      <p>{{breadcrumb}}</p>
    </div>

    <div class="square-container">
      <router-link to="create-task" class="square">
        <div class="square-content">
          <!-- <p>Aufgabe erstellen</p> -->
          <img class="icon" src="../assets/icons/plus.svg">
        </div>
    </router-link>
      <div class="square">
        <div class="square-content">
          <!-- <p>Aktuelle Aufgaben</p> -->
          <img class="icon" src="../assets/icons/aufgabenliste.svg">
        </div>
      </div>
      <div class="square">
        <div class="square-content">
          <!-- <p>Klassen</p> -->
          <img class="icon" src="../assets/icons/klassen.svg">
        </div>
      </div>
      <div class="square">
        <div class="square-content">
          <!-- <p>Aufgaben verteilen</p> -->
          <img class="icon" src="../assets/icons/verteilen.svg">
        </div>
      </div>
    </div>
  </div>
  <div class="uk-width-1-1 uk-flex uk-flex-middle uk-flex-between uk-margin-remove">
    <p class="uk-margin-remove logo">
      School by School<span class="bold">Systems</span>
    </p>
    <div class="uk-margin-remove">
      <div class="uk-align-right uk-margin-remove circle help-circle">?</div>
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
      breadcrumb: 'Home'
    }
  },
  mounted: function () {
    let str = this.$route.name
    str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    this.breadcrumb = str
  },
  watch: {
    '$route' (to, from) {
      let str = this.$route.name
      str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
      this.breadcrumb = str    }
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

.main-menu-button {
    background: rgba(255,255,255,0.15) !important;
    border: 1px solid rgba(#ffffff, 0.6) !important;
    border-radius: 9px;
    width: 50%;
    height: 50%;
}

.top-nav {
    padding: 0;
    margin: 0;
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
        // box-shadow: 0 5px 13px rgba(0, 0, 0, 0.25), inset 0px,5px,13px,rgba(0, 0, 0, 0);
        box-shadow: 0 5px 13px rgba(0, 0, 0, 0.25);
        // @include box-shadow(0px,5px,13px,rgba(0, 0, 0, 0),true);
        // box-shadow: 0px,5px,13px,rgba(0, 0, 0, 0.25),false);

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
            // @include box-shadow(0px,5px,13px,rgba(0, 0, 0, 0),false);
            // @include box-shadow(0px,5px,13px,rgba(0, 0, 0, 0.25),true);
            // box-shadow: 0 5px 13px rgba(0, 0, 0, 0), inset 0px,5px,13px,rgba(0, 0, 0, 0.25);
        }

        @media only screen and (min-width: 1750px) {
            width: 116px;
            height: 116px;
            line-height: 116px;
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

    .button {

    }
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
    align-content: flex-end;
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
    // top: 50%;
    // left: 25%;
    // transform: translate(-50%,-50%);
    display: flex;
 align-items: center;
 justify-content: center;
}

.icon {
    width: 58px;
    height: 58px;
}

.logo {
  color: rgba(#F8FBFB, 0.5);
  font-family: 'Dosis', sans-serif;
}

.logo > .bold {
  font-weight: bold;
}

</style>
