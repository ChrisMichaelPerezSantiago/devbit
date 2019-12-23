import {ref} from '@vue/composition-api';
import {useStore} from '@u3u/vue-hooks';


export const useLogin = () =>{
  const store = useStore();

  const loginEmail = ref('');
  const loginPass = ref('');

  const login = () =>{
    const user = new URLSearchParams();
    user.append('email' , loginEmail.value);
    user.append('password' , loginPass.value); 
    store.value.dispatch('LOGIN_USER' , user);
  };

  return{
    loginEmail,
    loginPass,
    login
  }
};