<script setup>
import axios from "axios";
import { ref } from "vue";

const students = ref([]);

function imgSrc(imgName) {
  return `imgs/${imgName}`;
}
async function getStudents() {
  try {
    const response = await axios.get("students_current.json");
    students.value = response.data.students;
  } catch (error) {
    console.error(error);
  }
}
getStudents();
</script>

<template>
  <div v-if="students.length" class="container">
    <ul class="d-flex flex-wrap justify-content-center">
      <li class="m-2" v-for="student in students" :key="student.id">
        <img
          :src="imgSrc(student.img_name)"
          :alt="student.img_name"
          class="student-img img-thumbnail img-fluid"
        />
        <p class="text-center">{{ student.name }}</p>
      </li>
    </ul>
  </div>
  <p v-else class="text-center">loading...</p>
</template>

<style scoped>
.student-img {
  height: 120px;
  width: 120px;
  object-fit: cover;
}
</style>
