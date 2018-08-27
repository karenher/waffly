<template>
  <path class="pie" :d='segment(centerX, centerY, radius, angle + (index) * arc, angle + (index) * arc + arc)' :fill='pieColor' stroke='white' @click="changeSelection(index)" />
  
</template>

<script>

export default {
  name: 'Pie',
  props: ['centerX', 'centerY', 'radius', 'segNum', 'index', 'angle','color'],
  data () {
    return {
      pieColor: (typeof this.color !== 'undefined' ? this.color : 'magenta')
    }
  },
  computed: {
    arc() {
      return 2 * Math.PI / this.segNum;
    }
  },
  mounted() {
    //console.log(this.color);
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
    },
    changeSelection(id) {
      this.$emit('changeSelection', id);
    }
  }

}
</script>

<style scoped>
.pie {
  pointer-events:all;
  ##transition: all 0.25s ease-out;
  transform-origin: 15.6em 15.6em;
}
.pie:hover {
  fill: navy;
  ##transform: scale(1.1);
}
@media not screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) {
  .pie:active {
    transform: scale(1.18);
    transition: all 0.25s ease-out;
  }
}
</style>
