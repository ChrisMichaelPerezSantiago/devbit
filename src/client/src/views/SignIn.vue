<template>
  <div>
    <RegisterComponent/>
  </div>
</template>

<script>
  import {ref} from '@vue/composition-api';
  import {useStore} from '@u3u/vue-hooks';
  import RegisterComponent from '../components/RegisterComponent';

  export default {
    name: 'Register',
    components:{
      RegisterComponent
    },
    setup(){
      return{
      }
    }
  };
</script>
