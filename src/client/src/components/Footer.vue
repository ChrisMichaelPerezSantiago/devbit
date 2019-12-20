<template>
  <div  class="footer--content">
    <div class="footer--center">
      <span class="copyright">© {{year}} DevBit , All rights reserved</span>
      <br/>
      
      <span class="footer--links">
        <a href="#">
          Terms and Conditions of Use.
        </a>
        <a href="#">
          Privacy Policy.
        </a>
         <a href="#">
          About.
        </a>
         <a href="#">
          Contact Us.
        </a>
        
      </span>
      
    </div>
  </div>
</template>

<script>
  import {reactive} from '@vue/composition-api';

  export default {
    name: 'Footer',
    setup(){
      const state = reactive({
        year: new Date().getFullYear(),
      });

      return{
        ...state
      }
    }
  }
</script>
