<template>
    <div class="navbar">
        <div>
            <img src="" alt="">
        </div>
        <div>
            <a v-bind:href="'/home'">
                <h1>ACCUEIL</h1>
            </a>
        </div>
        <div>
            <a v-bind:href="''">
                <h1>RECHERCHE</h1>
            </a>
        </div>
        <div>
            <a v-bind:href="''">
                <h1>MA LISTE</h1>
            </a>
        </div>
        <div>
            <a v-bind:href="''">
            <h1>ORIGINALS</h1>
            </a>
        </div>
        <div>
            <a v-bind:href="''">
                <h1>FILMS</h1>
            </a>
        </div>
        <div>
            <a v-bind:href="''">
                <h1>SÉRIES</h1>
            </a>
        </div>
        <div>
            <img src="" alt="">
        </div>

        <div>
            <ul id="example-1">
                <li v-for="item in items" :key="item.message">
                    {{ item.message }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
    items: [
        { message: 'test' },
        { message: 'autre' }
    ]
}

</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-evenly;
    }
</style>