<template>
  <path :d='segment(centerX, centerY, radius, index * 2 * Math.PI / segNum - Math.PI, index * 2 * Math.PI / segNum + 2 * Math.PI / segNum - Math.PI)' :fill='pieColor' stroke='white'/>
  
</template>

<script>
export default {
  name: 'Pie',
  props: ['centerX', 'centerY', 'radius', 'segNum', 'index', 'angle','color','segments'],
  data () {
    return {
      pieColor: (typeof this.color !== 'undefined' ? this.color : 'magenta')
    }
  },
  mounted() {
  console.log(this.segments);
    console.log(this.color);
  },
  methods: {
    segment(x, y, r, start, end){
        var startCoord = {
          x: x + (r * Math.cos(start)),
          y: y + (r * Math.sin(start))
        };
        var endCoord = {
          x: x + (r * Math.cos(end)),
          y: y + (r * Math.sin(end))
        };

        var d = [
            "M", startCoord.x, startCoord.y, 
            "A", r, r, 0, 0, 1, endCoord.x, endCoord.y,
            "L", x,y,
            "L", startCoord.x, startCoord.y
        ].join(" ");
        
        return d;       
    }
  }

}
</script>

<style scoped>

</style>
