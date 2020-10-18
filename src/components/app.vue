<template>

  <div >
    <el-container >
  <el-header>
    </el-header>
  <el-main>
    <el-row type="flex" :justify="space-between">
      <el-col :xl="{span:4,offset:10}" :lg="{span:6,offset:9}" :md="{span:8,offset:8}" :sm="{span:10,offset:7}" :xs="{span:18,offset:3}">
          <router-link to="/home/register">注册</router-link>
          <router-link to="/home/login">登录</router-link>
          <router-view></router-view> 
      </el-col>
    </el-row></el-main>
  <el-footer></el-footer>
</el-container>
    
  </div>
</template>
<style>
  .el-header, .el-footer {
    line-height: 60px;
  }
  

  .el-main {
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
