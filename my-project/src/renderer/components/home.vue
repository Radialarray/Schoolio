<template>
<div class="uk-grid-collapse full-height" uk-grid>
  <transition name="fade">
  <!-- <div v-if="lockscreen === true" class="lockscreen">
    <img class="icon" src="../assets/icons/locked.svg">
    <p>
      Bitte lege den korrekten Tag auf das Lesegerät!
    </p>
  </div> -->
  </transition>
  <div class="uk-height-1-1 fg-z" style="width:30%">
  </div>
  <div class="uk-background-muted uk-height-1-1 nav turquoise uk-position-fixed fg-z" style="width:30%">
    <vue-nav></vue-nav>
  </div>
  <div class="uk-padding uk-height-1-1 uk-width-expand bg-z">
    <transition name="custom-classes-transition" enter-active-class="slideInRight" leave-active-class="slideOutLeft">
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>
import store from '../store'
import _ from 'lodash'
import {
  uid
} from '../serialReadRenderer'
console.log(store)
export default {
  name: 'home',
  data() {
    return {
      lockscreen: true,
      current_ID: store.state.changeState.current_id,
      logged_ID: store.state.changeState.current_id,
      locked: ''
    }
  },
  store: store,
  computed: {
    current_id() {
      this.current_ID = store.state.changeState.current_id
      return this.current_ID
    },
    user_name() {
      let obj = _.find(store.state.changeState.users, {
        'logged_in': true
      })
      this.name = obj.user_name + 'changed'
      if (store.state.changeState.current_id.localeCompare(obj.user_id) !== 0 ) {
        this.lockscreen = true
        this.locked = 'Ungleich!'
      } else {
        this.lockscreen = false
        this.locked = 'Gleich!'
      }

      return this.locked
    }
  },
  watch: {
      current_id: function (val) {},
      user_name: function(val) {}
    },
  mounted() {
    let obj = _.find(store.state.changeState.users, {
      'logged_in': true
    })
    if (store.state.changeState.current_id.localeCompare(obj.user_id) !== 0 ) {
      this.lockscreen = true
      this.locked = 'Ungleich!'
    } else {
      this.lockscreen = false
      this.locked = 'Gleich!'
    }
    //do something after mounting vue instance
//     store.commit('ADD_USER', {
//       user_name: this.name,
//       user_password: this.password,
//       user_id: this.uid,
//       loggedIn: true
//     })
//     store.commit('SET_CURRENTID', {
//   current_id: 'kjajgkejgjk'
// })
  },
  methods: {
    checkUID() {
      let obj = _.find(store.state.users, {
        'logged_in': true
      })
      return this.logged_ID = obj.user_name
    },
    changeID() {
      this.logged_ID = this.store.state.users[0].user_name.toString()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/styles.scss";
.full-height {
    height: 100vh;
}



.lockscreen {
  z-index: 100000;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url('../assets/img/eric-rothermel-23788sw.jpg');
  background-position: center;
  background-size: cover;
}

.lockscreen .icon {
  z-index: 1000001;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
  height: 200px;
}

.lockscreen p {
  z-index: 1000001;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.lockscreen::after {
  content: "";
  z-index: 100000;
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(250, 179, 1, 0.74);
}

</style>
