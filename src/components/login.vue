<template>
    <div>
        <el-form ref="form" status-icon :model="form" label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input  type="text" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input  type="password" v-model="form.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('form')" :loading="Btn_login">登陆</el-button>
                <el-button @click="reset('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            form:{
                name:'',
                pwd:''
            },
            Btn_login:false //登陆按钮开关
        }
    },
    methods:{
        ...mapActions(["signIn"]),
        login(form){
            this.Btn_login=true;
            setTimeout(()=>{
                this.signIn(this.form);
                if(sessionStorage.login && sessionStorage.login == 1){
                    this.$notify({
                        title:"成功",
                        message:"登陆成功！",
                        type:"success"
                    });
                    this.$router.replace('/contacts');
                    
                } else{
                    this.$notify({
                        title:"错误",
                        message:"用户名或密码错误！",
                        type:"error"
                    });
                }
                this.Btn_login=false;
            })
            
        },
        reset(form){
            this.$refs[form].resetFields();
        }
    }
}
</script>