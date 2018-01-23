<template>
<div class="uk-animation-fade uk-child-width-expand@s uk-width-1-1" uk-grid>


  <form @submit.prevent="onSubmit" class="uk-position-center uk-width-1-2 ">
    <fieldset class="uk-fieldset uk-height-1-1 uk-width-1-1">
      <div class="uk-flex uk-flex-stretch uk-width-1-1 uk-height-medium">
        <transition
          name="custom-classes-transition"
          enter-active-class="fadeInRight"
          leave-active-class="fadeOutLeft"
        >
        <div v-if="onboardingPage === 1" class="uk-width-1-1">
          <legend class="uk-legend">Welcome</legend>
          <div class="uk-margin">
            <input v-validate="'required'" class="uk-input" type="text" placeholder="Name">
          </div>
          <div class="uk-margin">
            <input class="uk-input" type="password" name="password" placeholder="Passwort eingeben" v-validate="'required'" v-model="password">
          </div>
          <div class="uk-margin">
            <input class="uk-input" type="password" name="confirmPassword" placeholder="Passwort wiederholen" v-validate="'required|confirmed:password'" v-model="confirmPassword">
            <div v-show="errors.any()">
              <div class="uk-alert" v-if="errors.has('password')">
                Bitte tragen Sie ein Passwort ein!
              </div>
              <div class="uk-alert" v-if="errors.has('confirmPassword')">
                Die Angaben stimmen nicht überein!
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition
        name="custom-classes-transition"
        enter-active-class="fadeInRight"
        leave-active-class="fadeOutLeft"
      >        <div v-if="onboardingPage === 2" class="uk-width-1-1">
          <legend class="uk-legend">Legen Sie den Tag auf den Reader</legend>
  </div>
  </transition>

  <transition
    name="custom-classes-transition"
    enter-active-class="fadeInRight"
    leave-active-class="fadeOutLeft"
  >
    <div v-if="onboardingPage === 3" class="uk-width-1-1">
    <legend class="uk-legend">Yuhuuuuu</legend>
  </div>
  </transition>
      </div>

      <button type="submit" class="uk-button uk-button-secondary uk-align-center" :disabled="errors.any()">Fertig</button>

    </fieldset>
  </form>



  <div class="uk-width-auto@m">
    <a class="uk-card uk-card-default uk-card-body uk-position-fixed uk-position-small uk-position-bottom-right" href="">?</a>
  </div>

</div>


</div>

</div>
</template>

<script>

export default {
  name: 'vue-welcome',
  data () {
    return {
      password: '',
      confirmPassword: '',
      onboardingPage: 1
    }
  },
  components: {},
  methods: {
    onSubmit () {
      this.onboardingPage++
      if (this.onboardingPage > 3) {
        this.$router.push({ path: '/dashboard' })
      }
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('From Submitted!');
          return
        }

        alert('Correct them errors!')
      })
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

</style>
