<template>
<div class="uk-width-1-2@m">
  <div class="uk-grid-collapse uk-child-width-1-5@s uk-flex-left uk-text-center" uk-grid>



    <draggable v-model="items" :options="{group:'people'}" @start="drag=true" @end="drag=false">
       <!-- <div v-for="item in items" :key="item.message">{{item.message}}</div> -->

       <div v-for="(item, index) in items" class="uk-card uk-card-default uk-card-body border">
             <div class="centerAll" :title="item.message +' ist bei ' + item.val + '%'" uk-tooltip>
               <v-progress-circular class="centerAll" v-bind:size="80" v-bind:width="10" v-bind:rotate="360" v-bind:value="item.val" color="teal">
                 <img class="img-rounded" :src="imageLink" />
               </v-progress-circular>
             </div>
             {{ item.message }}
           </div>
    </draggable>

  </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'circleTest',
  components: {
              draggable,
          },
            data () {
    return {
      interval: {},
      imageLink: require('../assets/img/fabian-moller-401639.jpg'),
      parentMessage: 'Parent',
      items: [{
        img: require('../assets/img/fabian-moller-401639.jpg'),
        message: 'Marc',
        val: Math.round(Math.random() * 100)
      },
      {
        img: require('../assets/img/fabian-moller-401639.jpg'),
        message: 'Jana',
        val: Math.round(Math.random() * 100)
      }
      ]
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    // this.interval = setInterval(() => {
    //   if (this.value === 100) {
    //     return (this.value = 0)
    //   }
    //   this.value += 10
    // }, 1000)

    // this.value = Math.random()*100
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
   width:80px;
   border-radius: 50%;
}

.border {
  border: solid black 1px;
}
</style>
