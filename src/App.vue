<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="p-3 bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">11기 서울 22반 출석부</a>
        <b-navbar-toggle target="navbarNav"></b-navbar-toggle>
        <b-collapse id="navbarNav" is-nav>
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/game1">Game1</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/game2">Game2</RouterLink>
            </li>
          </ul>
        </b-collapse>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style>
* {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
