<template>
  <div class="align">
    <div class="grid">
      <router-link :to="{name: 'home'}">
        <h1 class="title">DevBit</h1>
      </router-link>
      <form @submit.prevent="register()" method="POST" class="form login">
        <div class="form__field">
          <label for="login__email">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#email"></use>
            </svg>
            <span class="hidden">Email</span>
          </label>
          <input v-model="regEmail" id="login__email" type="email" name="email" class="form__input" placeholder="Email" required>
        </div>
        <div class="form__field">
          <label for="login__username">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="hidden">Username</span>
          </label>
          <input v-model="regUserName" id="login__username" type="text" name="username" class="form__input" placeholder="Username" required>
        </div>
        <div class="form__field">
          <label for="login__password">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use>
            </svg>
            <span class="hidden">Password</span>
          </label>
          <input v-model="regPass" id="login__password" type="password" name="password" class="form__input" placeholder="Password" required>
        </div>
        <div class="form__field">
          <input type="submit" value="sign up">
        </div>
      </form>
      <p class="text--center">
        Already have an account? 
        <router-link :to="{name: 'Login'}">
          Login
        </router-link>
        <svg class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/icons.svg#arrow-right">
          </use>
        </svg>
      </p>
      <p class="text--center">
        By clicking on Sign up, you agree to DevBit
        <a href="#">
        Terms and Conditions of Use. 
        </a>
      </p>
      <p class="text--center">
        To learn more about how DevBit collects, uses, and protects your personal data please read DevBit Privacy Policy.
        <a href="#">
        Privacy Policy.        
        </a>
      </p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="icons">
      <symbol id="email" viewBox="0 0 20 20">
        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
      </symbol>
      <symbol id="lock" viewBox="0 0 1792 1792">
        <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/>
      </symbol>
      <symbol id="user" viewBox="0 0 1792 1792">
        <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"/>
      </symbol>
    </svg>
  </div>
</template>

<script>
  import {ref} from '@vue/composition-api';
  import {useRegister} from '../composition-functions/register';
  
  export default {
    name: 'RegisterComponent',
  
    setup(){
      const {regEmail , regUserName , regPass , register} = useRegister();
  
      return{
        regEmail,
        regUserName,
        regPass,
        register
      }
    }
  };
</script>