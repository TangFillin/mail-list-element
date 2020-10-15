<template>
  <div id="contain">  
        <h1>速  讯</h1>
        <h2>拉近我们心灵的距离，感知爱与牵绊</h2>
        <div class="btns">
            <router-link to="/home/register" class="btn">注册</router-link>
            <router-link to="/home/login">登录</router-link>
        </div>
        <router-view></router-view> 
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
