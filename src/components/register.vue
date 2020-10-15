<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" :offset="9">
                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
                    <el-form-item label="用户名" prop="name">
                        <el-input  type="text" v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码" prop="tel">
                        <el-input v-model="form.tel" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="name">
                        <el-input  type="password" v-model="form.pwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="register('form')">注册</el-button>
                        <el-button @click="reset('form')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
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
                if(!Number.isInteger(value)){
                    callback(new Error('请输入数字'))
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
            }
        }
        
    },
    methods:{
        register(form){

        },
        reset(form){
            this.$refs[form].resetFields();
        }
    }
}
</script>