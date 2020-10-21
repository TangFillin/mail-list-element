import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import contacts from './modules/contacts'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_EVN !== 'production',//严格模式，在非生产环境中启用
    modules:{
        user:user,
        contacts: contacts
    }
})