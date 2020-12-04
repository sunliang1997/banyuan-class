<template>
    <div class="home">
        <div class="left">
            <div class="img">
                <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png" alt="">
            </div>

            <div class="logo">
                <div class="avatar">
                    <img src="http://by-image.oss-cn-shanghai.aliyuncs.com/official-site/E2_Icon.jpg" alt="">
                </div>
                <div class="user">
                    <h1></h1>
                    <h2>非会员</h2>
                </div>
            </div>

        <div class="mine">
            <ul class="user-menu-ul">
                <li class="chos-bg">
                    <div class="user-menu-li hover">
                        <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png" alt="">
                        <p class="p-hover" @click="chance('Project',major)">{{major}}</p>
                    </div>
                </li>

                <li class="chos-bg">
                    <div class="user-menu-li hover">
                        <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png" alt="">
                        <p @click="chance('Email',email)">{{email}}</p>
                    </div>
                </li>               
            </ul>
        </div>

        <div class="menu-bom">
            <ul class="user-menu-ul">
                    <li class="chos-bg">
                        <div class="user-menu-li hover">
                            <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png" alt="">
                            <p @click="chance('Setting',set)">{{set}}</p>
                        </div>
                    </li>

                    <li class="chos-bg">
                        <div class="user-menu-li hover">
                            <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-quit.png" alt="">
                            <p>退出</p>
                        </div>
                    </li>               
                </ul>
        </div>
       </div>


        <div class="right">
            <div class="right-top">
                <div class="to-home">
                    <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/ic_fanhui_jiashi.svg" alt="">
                    <span>返回首页</span>
                </div>
                <p >{{topName}}</p>
            </div>
            <div class="right-content">
                <div class="content">
                    <keep-alive>
                        <component :is="activeName"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Project from "./project"
import Email from "./email"
import Setting from "./setting"

export default {
    name: "Home",
    data(){
        return{

            activeName:'Project',
            major:'我的课程',
            email:'邮箱',
            set:'设置',
            topName:'我的课程'

        }
        
    },
    components:{ Project,Email,Setting },
    methods: {
        chance(name,topName){
            this.activeName = name
            this.topName = topName

        }

    },

};
</script>

<style>
    .home{
        width: 100%;
        margin: 0;
        padding-left: 15.6vw;
        position: relative;
    }

    .left{
        display: inline-block;
        vertical-align: top;
        width: 15.6vw;
        height: 100vh;
        min-height: 768px;
        background-color: #141c3b;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
    }

    .img{
        text-align: center;
        padding: 2vh 0 8.16vh;
    }
    .left img{
        width: 146px;
        height: 43px;
        cursor: pointer;
    }

    .avatar{
        width: 100%;
        text-align: center;
    }

    .avatar img{
        width: 78px;
        height: 78px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }

    .user{
        word-break: break-all;
        padding: .51vh 0 8.16vh;
        text-align: center;
    }

    .user h2{
        font-size: 14px;
        font-weight: 300;
        color: #e8e8e8;
        line-height: 25px;
        margin: 0;
        padding: 1px 0;
    }

    .major{
        height: 54px;
        background: none;
        margin: 0;
        cursor: pointer;
        }

    ul{
        list-style-type: none;
    }

    .user-menu-ul{
        display: flex;
        flex-direction: column;
        align-content: center;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        /* padding-inline-start: 40px; */
    }

    .chos-bg{
        display: block;
        height: 54px;
        background: none;
        margin: 0;
        cursor: pointer;
    }

    .user-menu-li{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .chos-bg img{
        width: 22px;
        height: 22px;
        margin-right: 9px;
        vertical-align: top;
    }

    .chos-bg p{
        font-size: 16px;
        color: #e8e8e8;
        font-weight: 300;
        line-height: 54px;
        width: 70px;
        text-align: left;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .menu-bom{
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
    }

    .right{
        width: 100%;
        position: relative;
        padding-top: 56px;
        display: inline-block;
        vertical-align: top;
        min-height: 600px;
        /* overflow: hidden; */
        background-color: #fff;
    }

    .right-top{
        height: 56px;
        padding: 0 40px;
        background: #fff;
        -webkit-box-shadow: 5px 6px 4px rgba(213,209,209,.5);
        box-shadow: 5px 6px 4px rgba(213,209,209,.5);
        position: fixed;
        top: 0;
        left: 15.6vw;
        right: 0;
        z-index: 9999;
        }

    .to-home{
        float: left;
        font-size: 16px;
        color: #707070;
        line-height: 56px;
        margin-right: 30px;
        margin-left: -20px;
        cursor: pointer;
    }

    .to-home img{
        font-size: 16px;
        color: #707070;
        line-height: 56px;
        margin-right: 30px;
        cursor: pointer;
    }

    p{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .right-top p{
        font-size: 16px;
        font-weight: 300;
        color: #202020;
    }

    .right-content{
        width: 60vw;
        min-height: 600px;
        margin: 0 auto;
        padding: 80px 0 120px;
    }

    
    .content h6{
        font-size: 20px;
        font-weight: 400;
        color: #707070;
        line-height: 28px;
    }

    .hover:hover{
        background-color: rgba(105,100,209,.5);
    }

    
</style>