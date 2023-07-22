<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { getMryw, getRandom } from "./api/meiriyiwen.js";
import axios from "axios";
const data = ref({});

const getMrywData = async () => {
  const res = await getRandom();
  data.value = res.data.data;
  // console.log(res.data.data)
};
const getImageData = async () => {
  await axios
    .get("/api")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => getMrywData());
// onMounted(()=>getImageData())
</script>

<template>
  <div class="text">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">每日一文</el-menu-item>
      <el-menu-item index="2">Orders</el-menu-item>
    </el-menu>

    <div class="content">
      <h1 class="biaoti">{{ data.title }}</h1>
      <h3 class="biaoti">
        {{ data.author }}
      </h3>
      <h4><span v-html="data.content"></span></h4>
    </div>
  </div>
</template>

<style scoped>
.text {
  position: relative;
  width: 1000px;
  top: 10px;
  /* background-color: #a03636; */
}
.biaoti {
  text-align: center;
}
.content {
  position: absolute;
  width: 900px;
  left: 40px;
  background-color: #af2626;
  border-bottom: 80px;
}
</style>
