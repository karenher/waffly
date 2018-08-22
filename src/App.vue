<template>
  <div id="app">
    <Wheel :segNum="segNum" :segments="segments" :stopTime="(Math.random() * 7000) + 3000" ref="startSpin" />
    <button class="button buttonSpin" @click="spin">Spin!</button>
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
      segNum: 5,
      segments: { 0: { rotation: '', color: 'lavenderblush', name: ''},
                  1: { rotation: '', color: 'lightcoral', locationID: '', name: ''},
                  2: { rotation: '', color: 'lightgreen', locationID: '', name: ''},
                  3: { rotation: '', color: 'lightseagreen', locationID: '', name: ''},
                  4: { rotation: '', color: 'lightsteelblue', locationID: '', name: ''},
                  5: { rotation: '', color: 'lavenderblush', locationID: '', name: ''},
                  6: { rotation: '', color: 'lightcoral', locationID: '', name: ''},
                  7: { rotation: '', color: 'lightgreen', locationID: '', name: ''},
                  8: { rotation: '', color: 'lightseagreen', locationID: '', name: ''},
                  9: { rotation: '', color: 'lightsteelblue', locationID: '', name: ''},
                  10: { rotation: '', color: 'lavenderblush', locationID: '', name: ''},
                  11: { rotation: '', color: 'lightcoral', locationID: '', name: ''},
                  12: { rotation: '', color: 'lightgreen', locationID: '', name: ''},
                  13: { rotation: '', color: 'lightseagreen', locationID: '', name: ''},
                  14: { rotation: '', color: 'lightsteelblue', locationID: '', name: ''},
                  15: { rotation: '', color: 'lavenderblush', locationID: '', name: ''},
                  16: { rotation: '', color: 'lightcoral', locationID: '', name: ''},
                  17: { rotation: '', color: 'lightgreen', locationID: '', name: ''},
                  18: { rotation: '', color: 'lightseagreen', locationID: '', name: ''},
                  19: { rotation: '', color: 'lightsteelblue', locationID: '', name: ''} }
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
  },
  methods: {
    spin() {
      this.$refs.startSpin.setTimer();
    }
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

.button {
    background-color: navy;
    outline: none;
    border: none;
    border-radius: 0px 25px 0px 25px;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}

.buttonSpin {
    background-color: white; 
    color: black; 
    border: 2px solid navy;
}

.buttonSpin:hover {
    background-color: navy;
    color: white;
}
</style>
