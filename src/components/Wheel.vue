<template>
  <div class="wheel">
    <h1>{{ msg }}</h1>
    <svg height="520" width="520">

      <circle :cx="this.centerX" :cy="this.centerY" :r="(this.radius + 35)" fill="purple">
      </circle>


      <Pie v-for="n in segNum" :centerX="centerX" :centerY="centerY" :radius="radius" :segNum="segNum" :key="n - 1" :index="n - 1" :angle="angle" :color="segments[n - 1]['color']" :segments="segments" @changeSelection="changeSelection" />
      
      <text v-for="n in segNum" :x="Math.cos(Math.PI * 8 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 8 / 4) * (radius - 30) + centerY" font-size="20" fill="#343938" text-anchor="middle" alignment-baseline="middle" :transform="segments[n - 1]['rotation']" >{{ n }}</text>

      <rect :x="this.centerX + this.radius -15" :y="this.centerY - 2.5" fill="black" width="50" height="5" alignment-baseline="middle"/>

      <circle :cx="this.centerX" :cy="this.centerY" r="50" fill="purple"/>

      <text :x="centerX" :y="centerY + radius + 70" font-size="32" text-anchor="middle" alignment-baseline="middle">{{ segments[finalVal]['name'] }}</text>
    </svg>
  </div>
</template>

<script>
import Pie from './Pie'
const CIRCLE = 2 * Math.PI;
const CONVERT_TO_DEGREE = 180 / Math.PI;

export default {
  name: 'Waffly',
  components: {
    Pie
  },
  props: ['segNum', 'segments', 'stopTime'],
  data () {
    return {
      msg: 'Waffly',
      centerX: 250,
      centerY: 250,
      radius: 180,
      angle: 0,
      time: 0,
      timeout: 0,
      finalVal: 0,
      speed: Math.PI / 120,
      run: false
    }
  },
  mounted() {
    //starting time - this.timeout = setInterval( ()=> this.draw(), 1);
    this.draw();
    //Do you have a budget? If food type has been decided,
    //skip to location. Include fast food options.
    for (var i = 0; i < this.segNum; i++) {
      this.segments[i]['id'] = i;
      console.log(this.segments[i]['name']);
    }
  },
  methods: {
    setTimer() {
      if (!this.run) { 
        this.timeout = setInterval( ()=> this.draw(), 1);
        this.run = true;
      }
    },
    draw() {
      this.time += 10;
      this.angle += this.speed;
      for (var i = 0; i < this.segNum; i++) {
        //this.segments[i + 1] = { rotation: 'rotate(' + ((CIRCLE / this.segNum) * i * (180 / Math.PI) + (this.angle * CONVERT_TO_DEGREE) + (CIRCLE / (this.segNum * 2)) * CONVERT_TO_DEGREE) + ', ' + this.centerX  + ', ' + this.centerY  + ')' }
        
        //this.segments[i]['rotation'] = 'rotate(' + ((CIRCLE / this.segNum) * (i) * CONVERT_TO_DEGREE + (CIRCLE / (this.segNum * 2)) * CONVERT_TO_DEGREE + (this.angle  * CONVERT_TO_DEGREE)) + ', ' + this.centerX  + ', ' + this.centerY  + ')';
        var rotationParam = CONVERT_TO_DEGREE * (i * (CIRCLE / this.segNum) + (CIRCLE / (this.segNum * 2))  + this.angle);
        this.segments[i]['rotation'] = 'rotate(' + rotationParam + ', ' + this.centerX  + ', ' + this.centerY  + ')';
      }
      //  console.log('angle ' + this.angle * (180 / Math.PI));
      
        var segID = Math.floor(((2 * Math.PI - this.angle % (2 * Math.PI))) / (2 * Math.PI / this.segNum));
        this.finalVal = segID;

      if (this.time >= this.stopTime) {
        clearTimeout(this.timeout);
        this.run = false;
        this.time = 0;
      //  var segID = Math.floor(((2 * Math.PI - this.angle % (2 * Math.PI))) / (2 * Math.PI / this.segNum));
      }
      this.$emit('result', this.finalVal);
    },
    changeSelection(id) {
      this.$emit('changeSelection', id);
    }
  }

}

</script>

<style scoped>
.wheel {
  color: #42b983;
}
h1 {
  margin-top: 2rem;
  margin-bottom: 0;
}
</style>
