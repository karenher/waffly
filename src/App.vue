<template>
  <div id="app">
    <Wheel :segNum="segNum" :segments="segments" />
  </div>
</template>

<script>
import Wheel from './components/Wheel'

export default {
  name: 'App',
  components: {
    Wheel
  },
  data() {
    return {
      segNum: 20,
      segments: { 0: { rotation: '', color: 'lavenderblush'},
                  1: { rotation: '', color: 'lightcoral'},
                  2: { rotation: '', color: 'lightgreen'},
                  3: { rotation: '', color: 'lightseagreen'},
                  4: { rotation: '', color: 'lightsteelblue'},
                  5: { rotation: '', color: 'lavenderblush'},
                  6: { rotation: '', color: 'lightcoral'},
                  7: { rotation: '', color: 'lightgreen'},
                  8: { rotation: '', color: 'lightseagreen'},
                  9: { rotation: '', color: 'lightsteelblue'},
                  10: { rotation: '', color: 'lavenderblush'},
                  11: { rotation: '', color: 'lightcoral'},
                  12: { rotation: '', color: 'lightgreen'},
                  13: { rotation: '', color: 'lightseagreen'},
                  14: { rotation: '', color: 'lightsteelblue'},
                  15: { rotation: '', color: 'lavenderblush'},
                  16: { rotation: '', color: 'lightcoral'},
                  17: { rotation: '', color: 'lightgreen'},
                  18: { rotation: '', color: 'lightseagreen'},
                  19: { rotation: '', color: 'lightsteelblue'} }
    }
  },
  beforeCreate() {
  /*
    for (var i = 0; i < this.segNum; i++) {
      this.segments[i] = { rotation: '', color: '' };
    this.segments[i]['color'] = 'blue';
    }
    this.segments[1]['color'] = 'red';
    this.segments[2]['color'] = 'orange';
    this.segments[3]['color'] = 'yellow';
    this.segments[4]['color'] = 'green';
    */
    //console.log(this.segments);
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
