<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <div class="navigation-bar">
        <div class="disney-logo">
          <a href="/home">
            <img src="../assets/logo-disney-plus.png" alt="logo disney plus" />
          </a>
        </div>
        <div class="disney-navigate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
            ></path>
          </svg>
          <RouterLink to="/home">ACCUEIL</RouterLink>
        </div>
        <div class="disney-navigate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
            ></path>
          </svg>
          <RouterLink to="/search">RECHERCHE</RouterLink>
        </div>
        <div class="disney-navigate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
            ></path>
          </svg>
          <RouterLink to="/search">MA LISTE</RouterLink>
        </div>
        <div class="disney-navigate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"
            ></path>
          </svg>
          <RouterLink to="/search">ORIGINALS</RouterLink>
        </div>
        <div class="disney-navigate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--fontisto"
            width="30.67"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 23 24"
          >
            <path
              fill="currentColor"
              d="M0 13.75C0 19.411 4.589 24 10.25 24S20.5 19.411 20.5 13.75a12.063 12.063 0 0 0-1.531-5.501L19 8.31a3.781 3.781 0 0 1-.781-2.309V6c0-1.75 1.846-3.5 3.78-3.5h.247a1.251 1.251 0 0 0 .002-2.5h-.252c-3.075 0-5.706 1.64-6.33 5a9.12 9.12 0 0 0-5.438-1.499l.019-.001C4.588 3.503.002 8.09.001 13.749zm9 0a1.25 1.25 0 1 1 1.25 1.251h-.003a1.25 1.25 0 0 1-1.246-1.25v-.001zm-6.5 0a2.247 2.247 0 1 1 0 .003v-.003zm11 0a2.247 2.247 0 1 1 0 .003v-.003zM8 19.25a2.25 2.25 0 1 1 2.25 2.25h-.004A2.25 2.25 0 0 1 8 19.25zm0-11a2.247 2.247 0 1 1 4.494.002a2.247 2.247 0 0 1-4.494 0v-.003z"
            ></path>
          </svg>
          <RouterLink to="/search">FILMS</RouterLink>
        </div>
        <div class="disney-navigate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--majesticons"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill="currentColor"
                d="M3 17V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 7h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7zm0 0L8 3m4 4l4-4"
              ></path>
            </g>
          </svg>
          <RouterLink to="/search">SÉRIES</RouterLink>
        </div>
      </div>
      <!-- Accueil / recherche / ma liste / Originals / films / séries -->
    </nav>
    <RouterView />
  </header>
</template>

<style>
html,
body {
  max-width: 100%;
}
header {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: end;
  justify-content: flex-end;
  left: 0px;
  padding: 0px 1em;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 9;
  height: inherit;
}
nav {
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  left: 0px;
  padding: 0px 20px;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: all 0.2s ease-in-out 0s;
  will-change: background-color, height;
  height: 72px;
}
.navigation-bar {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
}
.navigation-bar .disney-logo {
  min-width: 79px;
  height: 48px;
  margin-right: 32px;
}

.navigation-bar .disney-logo img{
  height: 100%;
  width: 100%;
}

.navigation-bar .disney-navigate {
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  text-transform: uppercase;
  flex-direction: column;
}
</style>