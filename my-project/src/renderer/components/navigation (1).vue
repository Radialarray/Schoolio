<template>
  <nav class="uk-navbar-container uk-box-shadow-small" uk-navbar>
    <div class="uk-navbar-left uk-margin-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <router-link to="/" class="uk-border-circle nav-circle color-accent" href="#">Home</router-link>
        </li>
        <li>
          <router-link to="/pupils" class="uk-border-circle nav-circle color-accent">Parent</router-link>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active"><a href="#">Home</a></li>
              <li><a href="#">Item</a></li>
              <li><a href="#">Item</a></li>
            </ul>
          </div>
        </li>
        <li><router-link to="/dashboard" class="uk-border-circle nav-circle color-accent" href="#">Item</router-link></li>
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
</template>

<script>

export default {
  name: 'vue-nav',
  components: {
  }
}
</script>

<style>
.uk-navbar-left > ul > li {
  margin-right: 0.3rem;

}
</style>
