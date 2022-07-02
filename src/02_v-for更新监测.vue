<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="reverses">数组翻转</button>
    <button @click="sb">截取前3个</button>
    <button @click="che">更新第一个元素值</button>

    <h3>{{obj}}</h3>

    <p>{{ obj.a }}</p>
    <button @click="add"></button>
  </div>
</template>

<script>
export default {
  name: "VuecliDemo02VFor",

  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      obj: {
        b: 2,
        c: 3,
      },
    };
  },

  methods: {
    reverses() {
      this.arr.reverse();
    },
    sb() {
      this.arr.splice(0, 3);
    },
    che() {
      this.$set(this.arr, 0, 10);
    },
    add() {
      this.obj = {
        a: 6,
      };
    },
  },
};
</script>

<style scoped>
</style>
