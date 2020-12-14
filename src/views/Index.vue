<template>
    <div class="index">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
        >
            <el-menu-item index="/index/home">首页</el-menu-item>
            <el-menu-item index="/index/shop">商品</el-menu-item>
            <el-menu-item index="/index/order">订单</el-menu-item>
            <el-menu-item index="/index/vip">会员</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="/login" @click="quit">退出</el-menu-item>
            </el-submenu>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            quit(){
                localStorage.removeItem("user")
            }
        } ,
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    .index{
        &>div{
            width: 100%;
            height: 700px;
        }
    }
</style>
