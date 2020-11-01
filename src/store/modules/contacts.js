import router  from '../../router';


const USER_INIT = "USER_INIT";
const USER_CHANGE = "USER_CHANGE";

var contactId = 0;

export default{
    state: {
        items:[],
        user:{}
    },
    mutations: {
        [USER_INIT](state, info){
            state.items = info.items;
            state.user = info.user;
        }
    },
    actions:{
        userInit({commit}){
            //页面加载时获取数据
            if(sessionStorage.login && sessionStorage.login == 1){
               
                var items = [
                    {name: '妈妈', tel: 1234555656, status: "亲人"},
                    {name: 'nic', tel: 1234555656, status: "朋友"},
                    {name: '爸爸', tel: 1234555656, status: "亲人"},
                    {name: 'wind', tel: 1234555656, status: "朋友"},
                    {name: 'lily', tel: 1234555656, status: "同学"},
                    {name: '爷爷', tel: 1234555656, status: "亲人"},
                    {name: 'tom', tel: 1234555656, status: "同学"},
                    {name: 'tom', tel: 1234555656, status: "同学"},
                    {name: 'tom', tel: 1234555656, status: "同学"},
                    {name: 'tom', tel: 1234555656, status: "同学"},
                    {name: '外婆', tel: 1234555656, status: "亲人"},
                    {name: 'tom', tel: 1234555656, status: "同学"},
                    {name: 'tom', tel: 1234555656, status: "同学"},
                    {name: 'tom', tel: 1234555656, status: "同学"},
                    {name: '外婆', tel: 1234555656, status: "亲人"},
                ];
                items = items.filter((item)=>{
                    item.id = contactId++;
                    item.imgSrc = '/static/img/userImg.png';
                    return item;
                });
                localStorage.items = JSON.stringify(items);

                var user = JSON.parse(sessionStorage.user);
                commit(USER_INIT,{
                    items:JSON.parse(localStorage.items),
                    user:user
                });
            } else {
                this.$notify({
                    title:"错误",
                    message:"请先登陆！",
                    type:"error"
                });
                router.replace('/home/login');
            }
        }
    }
}