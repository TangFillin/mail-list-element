import router  from '../../router';


const USER_INIT = "USER_INIT";
const USER_CHANGE = "USER_CHANGE";

export default{
    state: {
        user:{}
    },
    mutations: {
        [USER_INIT](state, info){
            state.user = info.user
        }
    },
    actions:{
        userInit({commit}){
            //页面加载时获取数据
            if(sessionStorage.login && sessionStorage.login == 1){
               
                var user = JSON.parse(sessionStorage.user);
                commit(USER_INIT,{
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