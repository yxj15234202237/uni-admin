<template>
    <div class="login">
        <div>
            <H3>UNI-ADMIN</H3>
            <p>
                用户名 ：<el-input v-model="username" type="text"/>
            </p>
            <p>
                密码 ：<el-input v-model="password" type="password"/>
            </p>
            <p>
                <el-button type="success" @click="login">立即登录</el-button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {
                username : "",
                password : "",
            }
        },
        methods: {
            login() {
                if ( this.password === "" || this.username === "" ){
                   return  this.$message.warning("账号或者密码不能为空")
                }
                let obj = { username : this.username , password: this.password}
                this.$http.post("http://ceshi5.dishait.cn/admin/login" , obj).then(( res ) =>{
                    console.log( res );
                    let { msg } = res.data
                    if ( msg === "ok" ){
                        localStorage.setItem("uni-admin" , JSON.stringify(obj))
                        this.$message.success("登录成功")
                        this.$router.push("/index")
                    } else {

                    }
                })
            }
        } ,
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &>div{
            width: 400px;
            padding: 20px;
            border: 2px solid #CCCCCC;
            p{
                margin: 10px 0;
                .el-input{
                    margin: 4px 0;
                }
                .el-button{
                    padding: 4px 10px;
                }
            }
        }
    }
</style>
