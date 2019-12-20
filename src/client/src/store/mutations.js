const type = require('./types');

export const mutations = {
  [type.SET_USER](state , payload){
    state.user = payload;
  },
  [type.SET_TOKEN](state , payload){
    state.token = payload;
  }
};