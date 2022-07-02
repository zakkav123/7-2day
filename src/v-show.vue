<template>
  <div>
    <!-- 需求： age 大于等于18，页面显示 成年人
         age 小于18 并且 大于等于12 ，页面显示 青少年
         age 小于12 ，页面显示 儿童 -->
    <p>成年人</p>
    <p>青少年</p>
    <p>儿童</p>

    <!-- v-if v-else-if v-else 配合使用 -->
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
</style>