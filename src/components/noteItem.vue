<template>
<div>
    <div v-if="id%4">
        <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="item.imgSrc" class="image">
                <div style="padding: 14px;">
                    <h1 class="name">{{item.name}}</h1>
                    <p class="tel">{{item.tel}}</p>
                </div>
            </el-card>
        </el-col>
    </div>
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
            id:this.item.id,
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