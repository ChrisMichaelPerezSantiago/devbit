<template>
  <div>
    <LoginComponent/>
  </div> 
</template>

<script>
  import {ref} from '@vue/composition-api';
  import {useStore} from '@u3u/vue-hooks';
  import LoginComponent from '../components/LoginComponent';

  export default {
    name: 'Login',
    components:{
      LoginComponent
    },
    setup(){
      return{
      }
    }
  };
</script>
