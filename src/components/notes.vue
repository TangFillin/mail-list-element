<template>
    <div class="">
            <div v-if="newItems.length">
                <contactItem 
                    v-for="item in newItems"
                    :key= "item.id"
                    :item="item"
                />
            </div>
    </div>
</template>

<script>
import contactItem from './noteItem'

export default {
    props: ["items"],
    data(){
        return{
            search: '',
            selectStatu: 1,
        }
    },
    methods:{

    },
    computed:{
        newItems: function(){
            if(this.items.length == 0){
                return '';
            }
            if(this.search){
                return this.items.filter((item)=> {
                    return (item.name.indexOf(this.search) != -1);
                });
            } else {
                switch(this.selectStatu){
                    case 1:
                        return this.items;
                        break;
                    case 2:
                        return this.items.filter(function(item){
                            return item.status === '亲人';
                        });
                        break;
                }
            }
        }
    },
    components: {
        contactItem
    }
    
}
</script>
<style>
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>