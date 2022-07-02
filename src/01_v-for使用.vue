<template>
  <div id="app">
    <!-- 语法1:
      v-for="(值变量名, 索引变量名) in 目标结构"
      口诀: 想要谁循环就放到谁身上
     -->
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="item in stuArr" :key="item.id">{{ item.name }}</li>
    </ul>
    <ul>
      <li v-for="(key, index) in tObj" :key="index">{{ key }}</li>
    </ul>

    <p>学生列表</p>
    <ul>
      <li></li>
    </ul>
    <p>老师信息</p>
    <div></div>

    <p>序号</p>
    <div></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      arr: ["章三", "李四", "迪丽热巴", "xxx"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
    };
  },
};
</script>
