<script setup>
import { RouterLink, RouterView } from "vue-router";
const TITLE_NAME = import.meta.env.VITE_APP_TITLE_NAME;
</script>

<template>
  <header class="p-3 bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">${ TITLE_NAME }</a>
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
