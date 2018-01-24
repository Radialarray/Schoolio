<template>
<div>
  <p class="uk-text-left" style="color:black">Hello</p>
  <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-grid uk-margin-bottom" style="margin-left:0; padding-left:0;" uk-grid>
    <div v-for="(item, index) in items" v-if="item.val >80" class="marg-right uk-padding-remove">
      <div :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
        <div class="outer">
          <img class="inner img-rounded" :src="imageLink" />
          <v-progress-circular class="" v-bind:size="169" v-bind:width="10" v-bind:rotate="-90" v-bind:value="item.val" v-bind:color="color0">
          </v-progress-circular>

          <div v-if="item.alert" class="alert">
            <img class="icon" src="../assets/icons/achtung.svg">
          </div>
        </div>
      </div>
    </div>
  </draggable>
  <hr />
  <p class="uk-text-left" style="color:black">Hello</p>
  <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-grid uk-margin-bottom" style="margin-left:0; padding-left:0;" uk-grid>
    <div v-for="(item, index) in items" v-if="item.val >20 && item.val < 80" class="marg-right uk-padding-remove">
      <div :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
        <div class="outer">
          <img class="inner img-rounded" :src="imageLink" />
          <v-progress-circular class="" v-bind:size="169" v-bind:width="10" v-bind:rotate="-90" v-bind:value="item.val" v-bind:color="color50">
          </v-progress-circular>
          <div v-if="item.alert" class="alert">
            <img class="icon" src="../assets/icons/achtung.svg">
          </div>
        </div>
      </div>
    </div>
  </draggable>
  <hr />

  <p class="uk-text-left" style="color:black">Hello</p>
  <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-grid uk-margin-bottom" style="margin-left:0; padding-left:0;" uk-grid>
    <div v-for="(item, index) in items" v-if="item.val <= 20" class="marg-right uk-padding-remove">
      <div :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
        <div class="outer">
          <img class="inner img-rounded" :src="imageLink" />
          <v-progress-circular class="" v-bind:size="169" v-bind:width="10" v-bind:rotate="-90" v-bind:value="item.val" v-bind:color="color100">
          </v-progress-circular>
          <div v-if="item.alert" class="alert">
            <img class="icon" src="../assets/icons/achtung.svg">
          </div>        </div>
      </div>
    </div>
  </draggable>

  <!-- <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-flex uk-margin-bottom">
      <div v-for="(item, index) in items" v-if="item.val >= 80" class="uk-card uk-card-default uk-card-body border uk-margin-right">
        <div class="centerAll" :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
          <v-progress-circular class="centerAll" v-bind:size="80" v-bind:width="10" v-bind:rotate="360" v-bind:value="item.val" v-bind:color="color0">
            <img class="img-rounded" :src="imageLink" />
          </v-progress-circular>
        </div>
        {{ item.message }}
      </div>
    </draggable>


    <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-flex uk-margin-bottom">
      <div v-for="(item, index) in items" v-if="item.val >20 && item.val < 80" class="uk-card uk-card-default uk-card-body border uk-margin-right">
        <div class="centerAll" :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
          <v-progress-circular class="centerAll" v-bind:size="80" v-bind:width="10" v-bind:rotate="360" v-bind:value="item.val" v-bind:color="color50">
            <img class="img-rounded" :src="imageLink" />
          </v-progress-circular>
        </div>
        {{ item.message }}
      </div>
    </draggable>

    <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-flex uk-margin-bottom">
      <div v-for="(item, index) in items" v-if="item.val <= 20" class="uk-card uk-card-default uk-card-body border uk-margin-right">
        <div class="centerAll" :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
          <v-progress-circular class="centerAll" v-bind:size="80" v-bind:width="10" v-bind:rotate="360" v-bind:value="item.val" v-bind:color="color100">
            <img class="img-rounded" :src="imageLink" />
          </v-progress-circular>
        </div>
        {{ item.message }}
      </div>
    </draggable> -->
</div>
</template>

<script>
import _ from 'lodash'
import draggable from 'vuedraggable'
import vueFilter from 'vue-filter'

export default {
  name: 'vue-drag',
  components: {
    draggable
  },
  data: function() {
    return {
      interval: {},
      color100: 'red',
      color50: 'green',
      color0: 'yellow',
      imageLink: require('../assets/img/fabian-moller-401639.jpg'),
      parentMessage: 'Parent',
      items: [{
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Marc',
          val: 100,
          alert: true
        },
        {
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Jana',
          val: 50
        },
        {
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Dennis',
          val: 30
        },
        {
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Peter',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Peter',
          val: parseInt(Math.random() * 100)
        },
        {
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Peter',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Peter',
          val: parseInt(Math.random() * 100)
        },
        {
          img: require('../assets/img/fabian-moller-401639.jpg'),
          message: 'Peter',
          val: parseInt(Math.random() * 100)
        }
      ]
    }
  },
  // methods: {
  //   sortasc: function () {
  //     this.items = _.orderBy(this.items, ['val'], ['asc'])
  //   },
  //   sortdesc: function () {
  //     this.items = _.orderBy(this.items, ['val'], ['desc'])
  //   }
  // },
  mounted: function() {
    // this.items = _.orderBy(this.items, ['val'], ['desc'])
  }
}
</script>

<style lang="scss">
@import "../assets/css/styles.scss";

.centerAll {
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-rounded {
    width: 80px;
    border-radius: 50%;
}

.marg-right {
    // margin-right: 5px;
}

.outer {
    width: 200px;
    height: 200px;
    position: relative;
}

.inner {
    width: 169px;
    height: 169px;
    background-color: #000000;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    border: solid 13px white;
    left: 0;
    right: 0;
    @include box-shadow(0px,5px,13px,rgba(0, 0, 0, .25),false);
}

.outer .alert {
    content: "";
    display: block;
    height: 37px;
    width: 37px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 15px;
    background-color: #D0021B;
    border-radius: 7px;
}

.outer .alert .icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
