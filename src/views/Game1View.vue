<script setup>
import axios from "axios";
import { ref } from "vue";

const CLASS_NAME = import.meta.env.VITE_APP_CLASS_NAME;
const PATH = `/currents/${CLASS_NAME}`;
const students = ref([]);
const randomStudent = ref({});
const randomIndex = ref(-1);
const isReady = ref(false);
const userInput = ref("");

function imgSrc(imgName) {
  return `${PATH}/imgs/${imgName}`;
}
function getRandomStudent() {
  randomIndex.value = Math.floor(Math.random() * students.value.length);
  randomStudent.value = students.value[randomIndex.value];
}
async function getStudents() {
  try {
    const response = await axios.get(`${PATH}/${CLASS_NAME}.json`);
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
  <div class="container text-center">
    <h1 class="my-4">이름 맞추기</h1>
    <h2 class="my-4">얘는 누구?</h2>
    <div v-if="isReady">
      <img
        :src="imgSrc(randomStudent.img_name)"
        :alt="randomStudent.img_name"
        class="img-thumbnail my-4"
      />
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="정답을 입력하세요"
          v-model="userInput"
          @keypress.enter="checkName"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="checkName"
        >
          제출
        </button>
      </div>
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-primary" @click="getRandomStudent">
        다른 사람 맞추기
      </button>
      <button class="btn btn-secondary" @click="getName">
        누구인지 알려줘 ㅠㅠ
      </button>
    </div>
  </div>
</template>
