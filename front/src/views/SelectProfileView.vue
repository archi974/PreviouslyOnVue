<template>
  <div>
    <nav></nav>
    <div class="main">
      <h2>Qui est-ce ?</h2>
      <div class="block-profile">
        <div class="select-profile">
          <a href="/home">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/263F418F2C47943D98B2877ECAD174927FBBD359C4AFB45BE0C6A22AD589D22E/scale?width=280&aspectRatio=1.00&format=png"
              alt="profile-image"
            />
          </a>
          <h3>Vincent</h3>
        </div>
        <div class="add-profile">
          <div class="plus">
            <a href="/select-avatar">
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
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                ></path>
              </svg>
            </a>
          </div>
          <h3>Ajouter profil</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  height: 140px;
  width: 140px;
}
.main {
  color: #fff;
  display: block;
  text-align: center;
  height: 100vh;
  font-family: Avenir-Heavy, Arial, Helvetica, sans-serif;
}

h2{
  font-size: 32px;
}

h3{ 
  font-size: 24px;
}

body {
  background-color: #1b1d29;
  display: flex;
  justify-content: center;
}

.block-profile {
  display: flex;
  flex-flow: row wrap;
}

.select-profile {
  display: flex;
  flex-direction: column;
  margin: 18px;
}

.select-profile h3 {
  margin-top: 1rem;
}

.add-profile {
  margin: 18px;
}

.add-profile h3 {
  color: #cacaca;
  margin-top: 1.5rem;
}

.plus {
  background-color: rgb(249, 249, 249, 0.1);
  border-radius: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 140px;
}

.plus:hover {
  /* border: 4px solid #fff; */
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

.plus a {
  text-decoration: none;
  color: #cacaca;
  height: 48px;
  width: 48px;
  /* position: relative; */
  /* transform: perspective(1px) translateY(-45); */
}

.plus a svg {
  height: 50px;
  width: 50px;
}
</style>