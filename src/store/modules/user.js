import Vue from 'vue';

const REGISTER = 'REGISTER'; //注册
const SIGN_IN = 'SIGN_IN'; //登陆 
const SIGN_OUT = 'SIGN_OUT'; //退出登陆

export default {
    state: {},
    mutations: {
        [REGISTER](state, user){
            // 判断用户是否存在
            var b = 0;
            for(var i=0; i < localStorage.length; i++){
                if(localStorage.key(i).indexOf('user')!=-1){
                    if(JSON.parse(localStorage.getItem(localStorage.key(i))).name == user.name){
                        b=1;
                        break;
                    }
                }
            }
            if(b == 0){
                // 添加为本地用户
                localStorage.setItem('user'+localStorage.length, JSON.stringify(user));
                sessionStorage.register = 1; // 注册成功
            } else {
                sessionStorage.register = 0;
                sessionStorage.message = "用户已存在";
            }
        },
        [SIGN_IN](state, user){
            var localuser = '', f = 0;
            for(var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i).indexOf('user') != -1) {  // 为用户
                    if(JSON.parse(localStorage.getItem(localStorage.key(i))).name == user.name) {
                        localuser = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        f = 1;
                        break;
                    } 
                }
            }
            if(f == 1 && user.pwd == localuser.pwd){
                sessionStorage.login = 1;
                sessionStorage.user = JSON.stringify(localuser);
                sessionStorage.userId = localuser.key(i);
            } else {
                sessionStorage.login = 0;
            }
        },
        [SIGN_OUT](state){
            sessionStorage.register = 0;
            sessionStorage.login = 0;
        }
    },
    actions:{
        register({commit}, user){
            commit(REGISTER, user);
        },
        signIn({commit}, user){
            commit(SIGN_IN, user);
        },
        SIGN_OUT({commit}){
            commit(SIGN_OUT);
        }
    }
}
