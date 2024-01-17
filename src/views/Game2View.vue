<script setup>
import axios from "axios";
import { ref, computed } from "vue";

let students = [];
const randomStudent = ref({});
const randomIndex = ref(-1);
const isReady = ref(false);

function imgSrc(imgName) {
  return `imgs/${imgName}`;
}

function getRandomStudent() {
  randomIndex.value = Math.floor(Math.random() * students.length);
  randomStudent.value = students[randomIndex.value];
}
async function getStudents() {
  try {
    const response = await axios.get("students_current.json");
    students = response.data.students;
    getRandomStudent();
    isReady.value = true;
  } catch (error) {
    console.error(error);
  }
}
const shuffledStudents = computed(() => {
  let array = [...students];
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
});
function checkCorrect(name) {
  if (name === randomStudent.value.name) {
    alert("정답입니다.");
    location.reload();
  } else {
    alert(`틀렸습니다! 선택한 학생은 ${name} 입니다.`);
  }
}

getStudents();
</script>

<template>
  <h1 class="text-center">사진 맞추기</h1>
  <div v-if="isReady" class="container">
    <p class="text-center">{{ randomStudent.name }}의 사진을 골라줘!</p>
    <ul class="d-flex flex-wrap justify-content-center">
      <li
        class="each-li m-2"
        v-for="student in shuffledStudents"
        :key="student.id"
        @click="checkCorrect(student.name)"
      >
        <img
          :src="imgSrc(student.img_name)"
          :alt="student.img_name"
          class="img-thumbnail img-fluid"
          style="height: 120px; width: 120px; object-fit: cover;"
        />
      </li>
    </ul>
  </div>
  <p v-else class="text-center">loading...</p>
</template>

<style scoped>
.each-li {
  transition: transform 0.3s ease;
}
.each-li:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>
