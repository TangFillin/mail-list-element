<template>
    <div>
        <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input  type="text" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input  type="password" v-model="form.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('form')">登陆</el-button>
                <el-button @click="reset('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:'',
                pwd:''
            }
        }
    },
    methods:{
        login(form){

        },
        reset(form){

        }
    }
}
</script>