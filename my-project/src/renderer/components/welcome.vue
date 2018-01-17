<template>
<div>

  <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
    <div class="uk-width-expand@m">
      <form @submit.prevent="onSubmit">
        <fieldset class="uk-fieldset">

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

          <button type="submit" class="uk-button uk-button-secondary" :disabled="errors.any()">Fertig</button>

        </fieldset>
      </form>
    </div>
  </div>


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
  data() {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  components: {},
  methods: {
    onSubmit() {
      this.$router.push({ path: '/dashboard' })
      // fs.readFile(filePath, readFromJson)

    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('From Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
}
</script>

<style>
.error {
  border: solid 1px red !important;
}
</style>
