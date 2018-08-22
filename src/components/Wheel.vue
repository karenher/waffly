<template>
  <div class="wheel">
    <h1>{{ msg }}</h1>
    <svg height="520" width="520">

      <circle :cx="this.centerX" :cy="this.centerY" :r="(this.radius + 35)" fill="purple">
      </circle>


      <Pie v-for="n in segNum" :centerX="centerX" :centerY="centerY" :radius="radius" :segNum="segNum" :key="n - 1" :index="n - 1" :angle="angle" :color="segments[n - 1]['color']" :segments="segments" />
      
      <text v-for="n in segNum" :x="Math.cos(Math.PI * 8 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 8 / 4) * (radius - 30) + centerY" font-size="20" fill="#343938" text-anchor="middle" alignment-baseline="middle" :transform="segments[n - 1]['rotation']" >{{ n }}</text>

      <rect :x="this.centerX + this.radius -15" :y="this.centerY - 2.5" fill="black" width="50" height="5" alignment-baseline="middle"/>

      <circle :cx="this.centerX" :cy="this.centerY" r="50" fill="purple"/>

      <text :x="centerX" :y="centerY" font-size="32" text-anchor="middle" alignment-baseline="middle">{{ finalVal + 1 }}</text>
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
      radius: 200,
      angle: 0,
      time: 0,
      timeout: 0,
      finalVal: 0,
      speed: Math.PI / 120
    }
  },
  mounted() {
    //starting time - this.timeout = setInterval( ()=> this.draw(), 1);
    this.draw();
    for (var i = 0; i < this.segNum; i++) {
      console.log(this.segments[i]['name']);
    }
  },
  methods: {
    setTimer() {
      this.timeout = setInterval( ()=> this.draw(), 1);
    },
    draw() {
      this.time += 10;
      this.angle += this.speed;
      for (var i = 0; i < this.segNum; i++) {
        //this.segments[i + 1] = { rotation: 'rotate(' + ((CIRCLE / this.segNum) * i * (180 / Math.PI) + (this.angle * CONVERT_TO_DEGREE) + (CIRCLE / (this.segNum * 2)) * CONVERT_TO_DEGREE) + ', ' + this.centerX  + ', ' + this.centerY  + ')' }
        
        this.segments[i]['rotation'] = 'rotate(' + ((CIRCLE / this.segNum) * (i) * CONVERT_TO_DEGREE + (CIRCLE / (this.segNum * 2)) * CONVERT_TO_DEGREE + (this.angle  * CONVERT_TO_DEGREE)) + ', ' + this.centerX  + ', ' + this.centerY  + ')';
        
      }
      //  console.log('angle ' + this.angle * (180 / Math.PI));
      
        var segID = Math.floor(((2 * Math.PI - this.angle % (2 * Math.PI))) / (2 * Math.PI / this.segNum));
      //  console.log(segID);
        this.finalVal = segID;

      if (this.time >= this.stopTime) {
        clearTimeout(this.timeout);
        this.time = 0;
      //  var segID = Math.floor(((2 * Math.PI - this.angle % (2 * Math.PI))) / (2 * Math.PI / this.segNum));
      //  console.log(segID);
      }
    }
  }

}

</script>

<style scoped>
.wheel {
  color: #42b983;
}
</style>
