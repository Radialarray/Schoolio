<template>
<div>
        <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false" class="uk-flex uk-margin-bottom">
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
  data () {
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
        val: 100
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
        val: parseInt(Math.random() * 100)
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
  mounted: function () {
    this.items = _.orderBy(this.items, ['val'], ['desc'])
  }
}
</script>

<style>
.centerAll {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-rounded {
  width: 80px;
  border-radius: 50%;
}

.border {
  /* border: solid black 1px; */
}
</style>
