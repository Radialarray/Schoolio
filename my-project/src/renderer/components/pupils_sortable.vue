<template>
<div>
  <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-grid uk-margin-bottom" style="margin-left:0; padding-left:0;" uk-grid>
    <div v-for="(item, index) in items" v-if="item.val >80" class="marg-right uk-padding-remove">
      <div :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
        <div class="outer">
          <img class="inner img-rounded" :src="item.img" />
          <v-progress-circular class="" v-bind:size="140" v-bind:width="10" v-bind:rotate="-90" v-bind:value="item.val" v-bind:color="color0">
          </v-progress-circular>

          <div v-if="item.alert" class="alert">
            <img class="icon" src="../assets/icons/achtung.svg">
          </div>
        </div>
      </div>
    </div>
  </draggable>
  <hr />
  <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-grid uk-margin-bottom" style="margin-left:0; padding-left:0;" uk-grid>
    <div v-for="(item, index) in items" v-if="item.val >20 && item.val < 80" class="marg-right uk-padding-remove">
      <div :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
        <div class="outer">
          <img class="inner img-rounded" :src="item.img" />
          <v-progress-circular class="" v-bind:size="140" v-bind:width="10" v-bind:rotate="-90" v-bind:value="item.val" v-bind:color="color50">
          </v-progress-circular>
          <div v-if="item.alert" class="alert">
            <img class="icon" src="../assets/icons/achtung.svg">
          </div>
        </div>
      </div>
    </div>
  </draggable>
  <hr />

  <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-grid uk-margin-bottom" style="margin-left:0; padding-left:0;" uk-grid>
    <div v-for="(item, index) in items" v-if="item.val <= 20" class="marg-right uk-padding-remove">
      <div :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
        <div class="outer">
          <img class="inner img-rounded" :src="item.img" />
          <v-progress-circular class="" v-bind:size="140" v-bind:width="10" v-bind:rotate="-90" v-bind:value="item.val" v-bind:color="color100">
          </v-progress-circular>
          <div v-if="item.alert" class="alert">
            <img class="icon" src="../assets/icons/achtung.svg">
          </div>        </div>
      </div>
    </div>
  </draggable>
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
      color100: 'red lighten-3',
      color50: 'light-green lighten-3',
      color0: 'orange lighten-3',
      parentMessage: 'Parent',
      items: [{
          img: require('../assets/img/kinder/1.jpg'),
          message: 'Peter',
          val: parseInt(Math.random() * 100),
          alert: false
        },
        {
          img: require('../assets/img/kinder/2.jpg'),
          message: 'Jenny',
          val: parseInt(Math.random() * 100),
          alert: false
        },
        {
          img: require('../assets/img/kinder/3.jpg'),
          message: 'Lisa',
          val: parseInt(Math.random() * 100),
          alert: false
        },
        {
          img: require('../assets/img/kinder/4.jpg'),
          message: 'Torben',
          val: parseInt(Math.random() * 100),
          alert: false
        },
        {
          img: require('../assets/img/kinder/5.jpg'),
          message: 'Kevin',
          val: parseInt(Math.random() * 100),
          alert: false
        },
        {
          img: require('../assets/img/kinder/6.jpg'),
          message: 'Lukas',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/7.jpg'),
          message: 'Lena',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/8.jpg'),
          message: 'Katharina',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/9.jpg'),
          message: 'Isabell',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/10.jpg'),
          message: 'Nico',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/11.jpg'),
          message: 'Sina',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/12.jpg'),
          message: 'Salim',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/13.jpg'),
          message: 'Alvaro',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
        },
        {
          img: require('../assets/img/kinder/14.jpg'),
          message: 'Ivo',
          val: parseInt(Math.random() * 100),
          alert: Math.round(Math.random())
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
    width: 180px;
    // height: 180px;
    position: relative;
}

.inner {
    width: 140px;
    height: 140px;
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
