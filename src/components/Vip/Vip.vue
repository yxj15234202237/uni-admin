<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    router>
                <el-menu-item index="/index/home/back">
                    <i class="el-icon-setting"></i>
                    <span slot="title">后台首页</span>
                </el-menu-item>
                <el-menu-item index="/index/home/photo">
                    <i class="el-icon-setting"></i>
                    <span slot="title">相册管理</span>
                </el-menu-item>
                <el-menu-item index="/index/home/goods">
                    <i class="el-icon-setting"></i>
                    <span slot="title">商品列表</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {}
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
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
    .el-container{
        width: 100%;
        height: 100%;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }

    .el-aside {
        height: 100%;
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        height: 100%;
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
</style>
