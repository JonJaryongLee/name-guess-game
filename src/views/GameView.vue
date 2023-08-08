<script setup>
import axios from "axios";
import { ref } from "vue";

const students = ref([]);
const randomStudent = ref({});
const randomIndex = ref(-1);
const isReady = ref(false);
const userInput = ref("");

function imgSrc(imgName) {
  return `imgs/${imgName}`;
}
function getRandomStudent() {
  randomIndex.value = Math.floor(Math.random() * students.value.length);
  randomStudent.value = students.value[randomIndex.value];
}
async function getStudents() {
  try {
    const response = await axios.get("students.json");
    students.value = response.data.students;
    getRandomStudent();
    isReady.value = true;
  } catch (error) {
    console.error(error);
  }
}
function checkName() {
  if (randomStudent.value.name === userInput.value) {
    alert("정답입니다");
    getRandomStudent();
  } else {
    alert("틀렸습니다");
  }
  userInput.value = "";
}
function getName() {
  alert(randomStudent.value.name);
}

getStudents();
</script>

<template>
  <h1>이름 맞추기</h1>
  <h2>얘는 누구?</h2>
  <div class="container" v-if="isReady">
    <img :src="imgSrc(randomStudent.img_name)" :alt="randomStudent.img_name">
    <div>
      <input type="text" placeholder="정답을 입력하세요" v-model="userInput" @keypress.enter="checkName">
      <button @click="checkName">제출</button>
    </div>
  </div>
  <div>
    <button @click="getRandomStudent">다른 사람 맞추기</button>
  </div>
  <div>
    <button @click="getName">누구인지 알려줘 ㅠㅠ</button>
  </div>
</template>
