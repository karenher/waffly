<template>
  <div class="wheel">
    <h1>{{ msg }}</h1>
    <svg height="520" width="520">
      <circle :cx="this.centerX" :cy="this.centerY" :r="(this.radius + 35)" fill="red">
      </circle>

      <Pie v-for="n in segNum" :centerX="centerX" :centerY="centerY" :radius="radius" :segNum="segNum" :key="n - 1" :index="n - 1" :angle="angle" :color="segments[n - 1]['color']" :segments="segments" />

      <text :x="Math.cos(Math.PI * 2 / 4) * radius + centerX" :y="Math.sin(Math.PI * 2 / 4) * radius" font-size="20" fill="#343938" text-anchor="middle" >Pizza</text>
      
      <rect x="0" y="0" width="10" height="10" fill='blue'/>
      <rect :x="Math.cos(Math.PI * 6 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 6 / 4) * (radius - 30) + centerY" width="10" height="10" fill='pink'/>
      <rect :x="centerX" :y="centerY" width="10" height="10" fill='blue'/>
      
      <text v-for="n in segNum" :x="Math.cos(Math.PI * 6 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 6 / 4) * (radius - 30) + centerY" font-size="20" fill="#343938" text-anchor="middle" :transform="segments[n]['rotation']" >{{ n }}</text>

      <!--<text :x="Math.cos(Math.PI * 6 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 6 / 4) * (radius - 30) + centerY" font-size="20" fill="#343938" text-anchor="middle" :transform="rotation[1]" >90</text>
      
      <text :x="Math.cos(Math.PI * 6 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 6 / 4) * (radius - 30) + centerY" font-size="20" fill="#343938" text-anchor="middle" :transform="rotation[2]">270</text>
      
      <text :x="Math.cos(Math.PI * 6 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 6 / 4) * (radius - 30) + centerY" font-size="20" fill="#343938" text-anchor="middle" :transform="rotation[4]">45</text>

      <text :x="Math.cos(Math.PI * 6 / 4) * (radius - 30) + centerX" :y="Math.sin(Math.PI * 6 / 4) * (radius - 30) + centerY" font-size="20" fill="#343938" width="20" text-anchor="middle" :transform="rotation[3]">180</text>-->
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
  props: ['segNum', 'segments'],
  data () {
    return {
      msg: 'Waffly',
      centerX: 250,
      centerY: 250,
      radius: 200,
      angle: 0,
      time: 0,
      timeout: 0,
    }
  },
  mounted() {
    this.timeout = setInterval( ()=> this.draw(), 1);
    /*for (var i = 0; i < this.segNum; i++) {
      console.log(this.segments[i]);
    }*/
  },
  methods: {
    draw() {
      this.time += 10;
      this.angle += Math.PI /120;
      for (var i = 0; i < this.segNum; i++) {
        //this.segments[i + 1] = { rotation: 'rotate(' + ((CIRCLE / this.segNum) * i * (180 / Math.PI) + (this.angle * CONVERT_TO_DEGREE) + (CIRCLE / (this.segNum * 2)) * CONVERT_TO_DEGREE) + ', ' + this.centerX  + ', ' + this.centerY  + ')' }
        
        this.segments[i + 1] = { rotation: 'rotate(' + ((CIRCLE / this.segNum) * i * CONVERT_TO_DEGREE) + ', ' + this.centerX  + ', ' + this.centerY  + ')' }
        
        //console.log(((i *2 * Math.PI / (2*this.segNum)) + (2 * Math.PI / this.segNum) + this.angle * CONVERT_TO_DEGREE));
      }
      /*this.rotation[0] =  'rotate(' + ((2 * Math.PI / this.segNum) + (2 * Math.PI / this.segNum) + this.angle * (180 / Math.PI)) + ', ' + this.centerX  + ', ' + this.centerY  + ')'
      
      this.rotation[1] = 'rotate(' + (4*Math.PI/4*(180/Math.PI) + (2 * Math.PI / this.segNum) + this.angle * (180 / Math.PI)) + ',' + this.centerX + ',' + this.centerY+ ')';
      
      this.rotation[2] = 'rotate(' + (8*Math.PI/4*180/Math.PI+ (2 * Math.PI / this.segNum) + this.angle * (180 / Math.PI)) + ',' + this.centerX + ',' + this.centerY+ ')';

      this.rotation[3] = 'rotate(' + (6*Math.PI/4*180/Math.PI+ (2 * Math.PI / this.segNum) + this.angle * (180 / Math.PI)) + ',' + this.centerX + ',' + this.centerY+ ')';
      
      this.rotation[4] = 'rotate(' + (6*Math.PI/8*180/Math.PI+ (2 * Math.PI / this.segNum) + this.angle * (180 / Math.PI)) + ',' + this.centerX + ',' + this.centerY+ ')';
      */
      
      /*for (var i = 0; i < segNum; i++) {
        this.segments[i]['rotation'] = 'rotate(' + (i*2*Math.PI/(this.segNum * 2)*180/Math.PI+ (2 * Math.PI / this.segNum) + this.angle * (180 / Math.PI)) + ',' + this.centerX + ',' + this.centerY+ ')';
      }*/

      if (this.time >= 2000) {
        clearTimeout(this.timeout);
        //var segID = Math.floor(2*Math.PI - this.angle % (2 * Math.PI) / (2 * Math.PI / segNum));
        //console.log(segID);
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
