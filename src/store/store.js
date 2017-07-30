import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  id: 1
}
const mutations = {
  select(state, id){
    console.log(id);
    state.id = id;
  }
}


export default new Vuex.Store({
  state,
  mutations,


})
