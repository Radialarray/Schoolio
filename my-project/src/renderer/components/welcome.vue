<template>
<div class="uk-animation-fade uk-grid-collapse uk-child-width-expand@s" uk-grid>

  <div class="lockscreen">
  </div>

  <form @submit.prevent="onSubmit" class="uk-position-center uk-width-1-2">
    <fieldset class="uk-fieldset uk-height-1-1 uk-width-1-1">
      <div class="uk-width-1-1">
        <transition name="custom-classes-transition" enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
          <div v-if="onboardingPage === 1" class="uk-width-1-1 uk-flex uk-flex-between uk-flex-column uk-flex-middle uk-flex-center uk-width-1-1 uk-height-medium">
            <h1 class="dosis">Hallo!</h1>
            <input v-validate="'required'" class="uk-input input" name="name" type="text" placeholder="Name..." v-model="name">
            <div v-show="errors.any()">
              <div class="uk-alert alert" v-if="errors.has('name')">
                Bitte tragen Sie einen Namen ein!
              </div>
            </div>
            <input class="uk-input input" type="password" name="password" placeholder="Passwort..." v-validate="'required'" v-model="password">
            <div class="uk-position-relative confirm">
              <input class="uk-input input" type="password" name="confirmPassword" placeholder="Passwort wiederholen" v-validate="'required|confirmed:password'" v-model="confirmPassword">
              <button type="submit" class="button" :disabled="errors.any()">
                              <img class="icon" src="../assets/icons/next.svg">
                            </button>

            </div>
            <div v-show="errors.any()">
              <div class="uk-alert alert" v-if="errors.has('confirmPassword')">
                Die Angaben stimmen nicht überein!
              </div>
            </div>


          </div>
        </transition>

        <transition name="custom-classes-transition" enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
          <div v-if="onboardingPage === 2" class="uk-width-1-1">
            <legend class="uk-legend">Legen Sie den Tag auf den Reader</legend>
          </div>
        </transition>

        <transition name="custom-classes-transition" enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
          <div v-if="onboardingPage === 3" class="uk-width-1-1">
            <h1 class="dosis">Willkommen {{name}}!</h1>
          </div>
        </transition>


      </div>
      <button type="submit" class="uk-button uk-button-secondary uk-align-center" :disabled="errors.any()">Fertig</button>


    </fieldset>
  </form>



  <div class="uk-width-auto@m">
    <div class="uk-margin-remove">
      <div class="uk-position-bottom-right uk-margin-right circle help-circle">?</div>
    </div>
  </div>

</div>


</div>

</div>
</template>

<script>
import store from '../store'
import {
  stillConnected,
  uid
} from '../serialReadRenderer'

export default {
  name: 'vue-welcome',
  data() {
    return {
      password: '',
      confirmPassword: '',
      name: '',
      onboardingPage: 1,
      uid: '',
      store
    }
  },
  mounted() {
    this.getUID()
  },
  methods: {
    onSubmit() {
      this.onboardingPage++
        if (this.onboardingPage == 2) {
          console.log("Checking for NFC Tag")
          this.waitUID()
        }
    },
    getUID() {
      console.log(uid)
      this.uid = uid
      return this.uid
    },
    waitUID() {
      if (uid === null && this.onboardingPage < 3) {
        setTimeout(this.waitUID, 100);
        return
      }
      this.onboardingPage++
        this.getUID()
      store.commit('ADD_USER', {
        user_name: this.name,
        user_password: this.password,
        user_id: this.uid,
        logged_in: true
      })
      store.commit('SET_CURRENTID', {
        current_id: this.uid
      })
      var self = this
      setTimeout(function() {
        self.$router.push({
          path: '/dashboard'
        })
      }, 2000);
    }
  }
}
</script>



<style>
.error {
  border: solid 1px red !important;
}

.red {
  background: red !important;
}

.lockscreen {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url('../assets/img/eric-rothermel-23788sw.jpg');
  background-position: center;
  background-size: cover;
}

.lockscreen::after {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(250, 179, 1, 0.74);
}

.input {
  -webkit-border-radius: 8px !important;
  -moz-border-radius: 8px !important;
  border-radius: 8px !important;
  background: none !important;
  color: #000 !important;
  border: 1px solid rgba(255, 255, 255, 0.7);
  height: 50px;
  width: 280px !important;
  vertical-align: middle;
  display: inline-block;
  margin-bottom: 10px;

}

.input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: black;
}

.alert {
  background: none !important;
  color: red !important;
  border: none;
  height: 50px;
  width: 280px;
  vertical-align: middle;
  display: inline-block;
}

.next {
  position: inherit;
  bottom: 0;
}


.button {
  position: absolute;
  right: -15%;
  top: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .icon {
  /* top: 50%;
   transform: translateY(-50%); */
  max-width: 100%;

}
</style>
