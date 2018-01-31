<template>

  <div class="content">
    <vue-statusbar></vue-statusbar>

    <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>

      <div class="uk-width-expand uk-overflow-auto">
        <transition>
          <img src="../assets/img/createTask.png" />
        </transition>
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
      confirmPassword: ''
    }
  },
  components: {},
  methods: {
    onSubmit () {
      this.$router.push({ path: '/dashboard' })
      let obj = {
        'test': 'test'
      }
      writeToJson(obj)
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
</style>
