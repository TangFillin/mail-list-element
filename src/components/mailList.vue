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
            <el-aside width="200px">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view :items="items" :user="user"></router-view>
            </el-main>
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
        user: state => state.contacts.user,
        items: state => state.contacts.items,
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
