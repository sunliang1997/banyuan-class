<template>
<div class="footer-container">
    <div class="about-us">
        <h2>我们的故事</h2>
        <h3>半圆的发展历程和背景，更清晰的了解我们</h3>
    </div>
    <div class="about-us">
        <h2>成为一员</h2>
        <h3>半圆学社致力于数字领域的 不断开拓，欢迎志同道合的朋友加入我们。</h3>
    </div>
</div>
</template>

<script>
export default {
    name: 'footer',
    data() {
        return {
            footerNmae: '我是底部啊'
        }
    },
    created() {
        // console.log('create-footer', this)
    },
    methods: {
        footerConsole() {
            console.log('我是底部组件内的方法');
        },
        sss() {
            this.footerNmae
            this.footerConsole()
        }
    },
}
</script>

<style>
.footer-container {
    width: 100%;
    background: #303232;
    padding: 64px 0 85px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.about-us h2 {
    font-size: 22px;
    line-height: 30px;
    color: #e3e3e3;
    font-weight: 500;
    cursor: pointer;
}

.about-us h3 {
    max-width: 190px;
    margin-top: 40px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: #e3e3e3;
}
</style>
