import router from '../../router';

const USER_INIT = 'USER_INIT';
const CURRENT_USER = 'CURRENT_USER';

export default{
    state:{
        user:{}
    },
    mutations:{
        [USER_INIT](state, info){
            state.user = info.user;
        },
        [CURRENT_USER](state, user){
            var oldName = state.user.name;
            state.user = user;
            sessionStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem(sessionStorage.userId, JSON.stringify(user));
        }
    },
    actions:{
        userInit({commit}){
            if(sessionStorage.login && sessionStorage.login == 1){
                var user = JSON.parse(sessionStorage.user);

                commit(USER_INIT, {
                    user: user
                })
            }
        },
        currentUserChange({commit},user){
            commit(CURRENT_USER, user);
        }
    }
    
}