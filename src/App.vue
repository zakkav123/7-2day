<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, index) in list" :key="item.id">
        <td><input type="checkbox" v-model="item.ipt" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="dell(index)">-</button
          ><input
            type="text"
            style="width: 35px"
            v-model="item.count"
            @blur="felFn(index)"
          /><button @click="add(index)">+</button>
        </td>
        <td>{{ item["count"] * item["price"] }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delFn">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数{{ allCount }}</p>
      <p>总价{{ allPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 99, ipt: false, count: 0 },
        { id: 2, name: "宝马", price: 999, ipt: false, count: 0 },
        { id: 3, name: "奥迪", price: 999, ipt: false, count: 0 },
      ],
      price: 99,
      num: 0,
    };
  },
  computed: {
    isAll: {
      set(val) {
        this.list.forEach((ele) => (ele.ipt = val));
      },
      get() {
        return this.list.length == 0
          ? false
          : this.list.every((ele) => ele.ipt);
      },
    },
    allPrice() {
      return this.list.reduce((sum, obj) => {
        if (obj.ipt) {
          return (sum + obj["price"] * obj["count"]);
        } else {
          return sum;
        }
      }, 0);
    },
    allCount() {
      return this.list.reduce((sum, obj) => {
        if (obj.ipt) {
          return sum + obj["count"];
        } else {
          return sum;
        }
      }, 0);
    },
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    delFn() {
      this.list = this.list.filter((item) => item.ipt == false);
    },
    dell(index) {
      if (this.list[index].count < 1) return alert("数量已清空");
      this.list[index].count--;
    },
    add(index) {
      this.list[index].count++;
    },
    felFn(index) {
      if (this.list[index].count < 0) {
        this.list[index].count = 0;
      }
    },
    delAll() {
      this.list = [];
    },
  },
};
</script>

<style>
html {
  background-color: hotpink;
}
#app {
  width: 600px;
  margin: 10px auto;
  background-color: hotpink;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
