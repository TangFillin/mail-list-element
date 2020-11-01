<template>
    <div>
        <div v-if="show">
            <div class="text">
                <img :src="item.imgSrc"/>
                <div>
                    <h1 class="name">{{item.name}}</h1>
                    <p class="tel">{{item.tel}}</p>
                </div>
            </div>
        </div>
        <div v-else>

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
            oldName: this.item.name,
            oldTel: this.item.tel
        };
    }
}
</script>