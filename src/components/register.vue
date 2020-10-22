<template>
    <div>
                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
                    <el-form-item label="用户名" prop="name">
                        <el-input  type="text" v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码" prop="tel">
                        <el-input v-model="form.tel" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pwd">
                        <el-input  type="password" v-model="form.pwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="registerUser('form')" :loading="registerBtn">注册</el-button>
                        <el-button @click="reset('form')">重置</el-button>
                    </el-form-item>
                </el-form>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
    data(){
        //验证规则
        var checkName=(rule, value, callback) =>{
            if(!value){
                return callback(new Error('用户名不能为空'));
            }else{
                callback();
            }
        };
        var checkTel=(rule, value, callback) => {
            setTimeout(() => {
                if(!isPhoneNumber(value)){
                    callback(new Error('请输入正确的手机号码'))
                }else{
                    callback();
                }
            }, 1000);
        };
        var checkPwd=(rule, value, callback) => {
            console.log(value.length);
            setTimeout(() => {
                if(value.length<6){
                    callback(new Error('密码不能小于6位'))
                }else{
                    callback();
                }
            }, 1000);
        };
        return {
            form:{
                name:'',
                tel:'',
                pwd:'',
            },
            rules:{
                name:[{
                    validator: checkName, trigger:'blur'
                }],
                tel:[{
                    validator: checkTel, trigger:'blur'
                }],
                pwd:[{
                    validator: checkPwd, trigger:'blur'
                }],
            },
            registerBtn:false,//注册按钮特效开关
        }
        
    },
    methods:{
        ...mapActions(['register']),
        registerUser(form){
            this.registerBtn=true;
            this.$refs[form].validate((valid)=>{
                if(valid){
                    this.register(this.form);
                    if(sessionStorage.register && sessionStorage.register == 1){
                        this.form.name = "";
                        this.form.tel = "";
                        this.form.pwd = "";
                        this.$notify({
                            title: '成功',
                            message: '注册成功',
                            type: 'success'
                            });
                    } else{
                        this.$notify({
                            title: '失败',
                            message: sessionStorage.message,
                            type: 'error'
                            });
                    }
                }
                this.registerBtn= false;
            })
        },
        reset(form){
            this.$refs[form].resetFields();
        }
    }
}
function isPhoneNumber(tel) {
    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return reg.test(tel);
}
</script>
<style scoped>
 #contain{
     margin-top: 10%;
 }
</style>