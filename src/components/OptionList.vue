<template>
  <div class="option-list">
    <table>
      <tr v-for="i in segNum" :class="{highlighted: highlight(i - 1)}">
        <td><button @click="removeOption(i - 1)">-</button></td>
        <td>{{ i }}.</td>
        <td @click="changeText(i - 1)">
          <div v-if="(edit == -1) || (edit != -1 && edit != i - 1)">
          {{ segments[i - 1]['name'] }}
          </div>
          <input type="text" ref="textBox" :class="{highlighted: highlight(i - 1)}" :hidden="!(edit != -1 && edit == i - 1)" @keyup.enter="newOptionVal(i - 1)" v-model="segments[i - 1]['name']" >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'OptionList',
  components: {
  },
  props: ['segments', 'segNum', 'spinResult'],
  data () {
    return {
      edit: -1,
      editVal: ''
    }
  },
  mounted() {
  },
  methods: {
    highlight(id) {
      return (this.spinResult == id);
    },
    changeText(id) {
      this.edit = id;
      this.setFocus(id);
    },
    newOptionVal(id) {
      this.edit = -1;
      this.$emit('changeOption', id, this.segments[id]['name']);
      this.editVal = '';
    },
    removeTextInput() {
      this.edit = -1;
    },
    addOption() {
      var id = this.segNum - 1;
      this.edit = id;
      this.setFocus(id);
    },
    removeOption(id) {
      this.$emit('removeOption', id);
    },
    setFocus(id) {
      this.$nextTick(function(){
        this.$refs.textBox[id].focus();
        this.$refs.textBox[id].select();
      });
    }
  }

}

</script>

<style scoped>
.highlighted {
  background-color: yellow;
}
table {
  border-collapse: collapse;
  min-width: 200px;
}
tr {
  font-family: sans-serif;
  font-size: 1.5rem;
  height: 2.5rem;
}
td {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
}
input {
  font-family: sans-serif;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
button {
  margin: 0.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  background-color: teal;
}
</style>
