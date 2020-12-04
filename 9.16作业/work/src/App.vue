<template>
<div class="container">
    <router-view class="main"></router-view>
    <router-view class="slide"></router-view>
    <router-view class="nav"></router-view>
</div>
</template>

<script>
export default {
    name: "App",

};
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}

.container {
    position: relative;
}

.slide {
    width: 100px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: blue;

}

.nav {
    position: fixed;
    left: 100px;
    right: 0;
    height: 100px;
    background-color: brown;

}

.main {
    position: fixed;
    top: 100px;
    left: 100px;
    right: 0;
    bottom: 0;
    background-color: #fff;

}
</style>
