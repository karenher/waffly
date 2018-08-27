<template v-if="dataLoaded">
  <div id="app">
    <table style="margin: auto;">
      <tr>
        <td @click="removeInput" style="padding-top: 180px;" class="list">
          <button class="button button-spin" @click="spin">Spin!</button>
          <button class="button button-list" @click="changeList">{{ buttonInfo }}</button>
          <button class="button button-add" @click="addOption">Add Option</button>
        </td>
        <td class="list">
          <Wheel :segNum="segNum" :segments="segments" :stopTime="(Math.random() * 7000) + 3000" ref="wheel" @result="spinResult" @changeSelection="changeSelection"/>
        </td>
        <td>
          <OptionList class="option-list" :segments="segments" :segNum="segNum" :spinResult="result" ref="option" @changeOption="changeOptionText" @removeOption="removeOption" id="optionList" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Wheel from './components/Wheel'
import OptionList from './components/OptionList'

export default {
  name: 'App',
  components: {
    Wheel,
    OptionList
  },
  data() {
    return {
      dataLoaded: false,
      segNum: 10,
      segments: { 0: { rotation: '', color: 'lavenderblush', id: '', name: ''},
                  1: { rotation: '', color: 'lightcoral', id: '', name: ''},
                  2: { rotation: '', color: 'lightgreen', id: '', name: ''},
                  3: { rotation: '', color: 'lightseagreen', id: '', name: ''},
                  4: { rotation: '', color: 'lightsteelblue', id: '', name: ''},
                  5: { rotation: '', color: 'lavenderblush', id: '', name: ''},
                  6: { rotation: '', color: 'lightcoral', id: '', name: ''},
                  7: { rotation: '', color: 'lightgreen', id: '', name: ''},
                  8: { rotation: '', color: 'lightseagreen', id: '', name: ''},
                  9: { rotation: '', color: 'lightsteelblue', id: '', name: ''} 
                },
      result: 9,
      colorList: ['lavenderblush', 'lightcoral', 'lightgreen', 'lightseagreen', 'lightsteelblue'],
      dessertList: ['Ice Cream', 'Cake', 'Brownie', 'Pie', 'Cookie', 'Fruit', 'Chocolate', 'Cupcake'],
      buttonInfo: 'Decide on Dessert',
      buttonListId: 0
    }
  },
  mounted() {
    this.init();
    this.dataLoaded = true;
  },
  methods: {
    init() {
      this.segments[0]['name'] = "Italian";
      this.segments[1]['name'] = "Chinese";
      this.segments[2]['name'] = "Mexican";
      this.segments[3]['name'] = "American";
      this.segments[4]['name'] = "Korean";
      this.segments[5]['name'] = "Indian";
      this.segments[6]['name'] = "Mediterranean";
      this.segments[7]['name'] = "Japanese";
      this.segments[8]['name'] = "French";
      this.segments[9]['name'] = "Seafood";
    },
    spin() {
      this.$refs.wheel.setTimer();
    },
    spinResult(value) {
      this.result = value;
    },
    changeSelection(id) {
      this.$refs.option.changeText(id);
    },
    changeOptionText(id, text) {
      this.segments[id]['name'] = text;
    },
    removeInput(e) {
      this.$refs.option.removeTextInput();
    },
    addOption() {
      this.segments[this.segNum] = { rotation: '', color: this.colorList[this.segNum % this.colorList.length], id: '', name: ''};
      this.segNum++;
      this.$refs.option.addOption();
      this.updateWheel();
    },
    removeOption(id) {
      for (var i = id; i < this.segNum - 1; i++) {
        this.segments[i] = this.segments[i + 1];
      }
      this.segNum--;
      this.$nextTick(function () {
        this.$refs.wheel.draw();
      });
    },
    changeList() {
      if (this.buttonListId == 0) {
        for (var i = 0; i < this.dessertList.length; i++) {
          this.segments[i]['name'] = this.dessertList[i];
        }
        this.segNum = this.dessertList.length;
        this.buttonInfo = 'Decide on Meal';
        this.buttonListId = 1;
      } else {
        this.init();        this.segNum = Object.keys(this.segments).length;
        this.buttonInfo = 'Decide on Dessert';
        this.buttonListId = 0;
      }
      this.updateWheel();
    },
    updateWheel() {
      this.$nextTick(function () {
        this.$refs.wheel.draw();
      });
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
}

.button {
    background-color: white;
    color: black;
    outline: none;
    border: none;
    border-radius: 0px 25px 0px 25px;
    padding: 16px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    width: 10rem;
    height: 5rem;
    display:block;
}

.button-spin { 
    border: 2px solid navy;
}

.button-spin:hover {
    background-color: navy;
    color: white;
}

.button-add {
    border: 2px solid purple;
}

.button-add:hover {
    background-color: purple;
    color:white;
}

.button-list {
    border: 2px solid crimson;
}

.button-list:hover {
    background-color: crimson;
    color: white;
}

.option-list {
    float: right;
}

.chosen::selection {
    color: yellow;
}

.list {
  vertical-align: top;
}
</style>
