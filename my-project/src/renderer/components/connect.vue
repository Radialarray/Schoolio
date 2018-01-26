<template>

  <div style="position:relative; width:500px;height:400px; overflow:hidden">
    <img class="stift" src="../assets/img/stift.svg">

    <div class="clip">
      <img class="reader" src="../assets/img/reader.svg">
      <span class="pulse"></span>
    </div>


  </div>

</template>

<script>
export default {
  name: 'vue-connect',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
@import "../assets/css/styles.scss";
.stift {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  width: 300px;
}

.reader {
  z-index: 1;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 350px;
}
.pulse {
  position: absolute;
  z-index: 0;
  // margin:100px;
  margin-bottom: -30px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  // background: #cca92c;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(255,255,255, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 hsla(0, 0%, 100%, 1);
    box-shadow: 0 0 0 0 hsla(46, 0%, 100%, 1);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px hsla(46, 0%, 100%, 0);
      box-shadow: 0 0 0 10px hsla(46, 0%, 100%, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 hsla(46, 0%, 100%, 0);
      box-shadow: 0 0 0 0 hsla(46, 0%, 100%, 0);
  }
}
</style>
