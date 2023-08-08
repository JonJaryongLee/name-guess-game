<script setup>
import axios from "axios";
import { ref } from "vue";

const students = ref([]);

function imgSrc(imgName) {
  return `imgs/${imgName}`;
}
async function getStudents() {
  try {
    const response = await axios.get("students.json");
    students.value = response.data.students;
  } catch (error) {
    console.error(error);
  }
}
getStudents();
</script>

<template>
  <h1>SSAFY 10기 광주 6반</h1>
  <ul class="list-container" v-if="students.length">
    <li class="each-li" v-for="student in students" :key="student.id">
      <p>{{ student.name }}</p>
      <img
        :src="imgSrc(student.img_name)"
        :alt="student.img_name"
        height="120"
      >
    </li>
  </ul>
  <p v-else>loading...</p>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
}
.each-li {
  margin: 10px;
}
</style>