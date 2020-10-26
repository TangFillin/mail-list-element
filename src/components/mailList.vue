<template>
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="6">
                    <h1 class="logo" >通讯录</h1>
                </el-col>
                <el-col :span="3" :offset="15">
                    <el-row>
                        <div :size="20">
                            <span>{{user.name}}</span>, 你好！
                            <el-avatar :src="userImage" :size="size"></el-avatar>
                        </div>
                        
                    </el-row>
                    
                    
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return {
            size:"small",
            userImage:'./static/images/1.jpg'
        }
    },
    computed: mapState({
        user: state => state.contacts.user
    }),
    beforeCreate(){
        this.$store.dispatch('userInit');
    },
    methods:{
        ...mapActions([
            'userChange'
        ]),
        changeUser(obj){
            this.userChange(obj);
        }
    }
}
</script>
<style scoped>
    .logo{
        color: #FFFFFF;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .el-header{
        background-color: #409EFF;
    }
</style>