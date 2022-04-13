<template>
  <div>
    <nav>
      <div>
        <a href="/select-profile">
          <img
            src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
            alt="logo disney"
          />
        </a>
      </div>
      <button type="submit">MODIFIER LES PROFILS</button>
    </nav>
    <div class="main">
      <div class="title-profile">
        <h2>Qui est-ce ?</h2>
      </div>
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


<script>
export default {
  name: "IcBaseline123",
};
</script>

<style>
@media (min-width: 768px) {
  body {
    background-color: #1b1d29;
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0px 36px;
    margin-top: 5px;
  }
  nav button {
    background-color: rgb(64, 66, 73);
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0px 24px;
    height: 48px;
  }
  nav button:hover {
    background-color: rgb(71, 74, 83);
  }

  nav img {
    height: 48px;
    margin-right: auto;
    width: auto;
  }

  .select-profile img {
    height: 140px;
    width: 140px;
  }

  .select-profile h3 {
    text-align: center;
  }

  .main {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-family: Avenir-Heavy, Arial, Helvetica, sans-serif;
    padding-top: 75px;
  }

  .title-profile {
    margin-bottom: 24px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
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
    /* position: relative; */
  }

  .add-profile h3 {
    color: #cacaca;
    margin-top: 1.5rem;
    /* position: relative; */
  }

  .plus {
    background-color: rgb(249, 249, 249, 0.1);
    border-radius: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    width: 140px;
    transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    /* position: relative; */
  }

  .plus:hover {
    /* border: 4px solid #fff; */
    /* background-color: rgb(255, 255, 255); */
    border: 3px solid #fff;
    transition: transform 0.3s;
    transform: scale(1.045);
    transform-origin: center;
    /* position: absolute; */
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
}
</style>