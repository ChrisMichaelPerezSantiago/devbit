const type = require('./types');
const axios = require('axios').default;

const BASE_API_URL = 'http://localhost:5000/api/v1/user/';
const A = axios.create({baseURL: BASE_API_URL});


export const actions = {
  LOGIN_USER({commit} , user){
    A.post('login' , user)
      .then(res =>{
        const user = res.data.user;
        const token = res.data.token;
        commit(type.SET_USER , user);
        commit(type.SET_TOKEN , token)
      })
  },
  REGISTER_USER({commit} , user){
    //console.log('user', user)
    A.post('register' , user)
      .then(res =>{
        console.log('res: ' , res)
      })
  },
};