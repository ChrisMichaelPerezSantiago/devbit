import {ref} from '@vue/composition-api';
import {useStore} from '@u3u/vue-hooks';

export const useRegister = () =>{
  const store = useStore();

  const regEmail = ref('');
  const regUserName = ref('');
  const regPass = ref('');

  const register = () =>{
    const user = new URLSearchParams();
    user.append('name' , regUserName.value);
    user.append('email' , regEmail.value);
    user.append('password' , regPass.value);
    store.value.dispatch('REGISTER_USER', user);
  }

  return{
    regEmail,
    regUserName,
    regPass,
    register
  }
};