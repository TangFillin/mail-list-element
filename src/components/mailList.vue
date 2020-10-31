<template>
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="6">
                    <h1>速讯</h1>
                </el-col>
                <el-col :span="6" :offset="12">
                    <span class="name">{{user.name}}</span>，你好
                    <div class="img">
                        <img src="/static/img/contact.jpg"/>
                    </div>
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
import {mapActions, mapState} from 'vuex';
export default {
    data(){
        return {
            clickId: 1
        }
    },
    computed: mapState({
        user: state => state.contacts.user
    })
}
</script>