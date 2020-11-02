<template>
<div>
    <el-col :span="4">
        <div v-if="show" >
        <el-card :body-style="{ padding: '0px' }">
            <img :src="item.imgSrc" class="image">
            <div style="padding: 14px;">
                <h1 class="name">{{item.name}}</h1>
                <p class="tel">{{item.tel}}</p>
            </div>
        </el-card>
        
    </div>
    <div v-else>

    </div>
    </el-col>
    
</div>
    
</template>

<script>
export default {
    props: ["item"],
    data(){
        return {
            show:true,
            name: this.item.name,
            tel:this.item.tel,
            oldName: this.item.name,
            oldTel: this.item.tel
        };
    }
}
</script>
<style>
    .image {
    width: 100%;
    display: block;
  }
</style>