<template>
<div class="content">
  <vue-statusbar></vue-statusbar>

  <div class="uk-grid-small uk-child-width-expand@s uk-text-left" uk-grid>

    <div class="uk-width-expand uk-overflow-auto">
<h1 class="dosis uk-margin-top createTask">Aktuelle Aufgaben für Deutsch</h1>

<ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">Aufgabe:  Bildrecherche zum Orang-Utan</a>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Aufgabe:  Schreibe einen Steckbrief zum Orang-Utan</a>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Aufgabe:  Male einen Orang-Utan</a>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Aufgabe:  Lernwörter</a>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>

    </div>

  </div>



</div>

</template>

<script>
export default {
  name: 'vue-aktuelle',
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "../assets/css/styles.scss";

.createTask {
  font-size: 48px !important;
}

.uk-accordion-title::after {
  background-image: url('../assets/icons/chevron.svg') !important;
}
</style>
