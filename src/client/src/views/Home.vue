<template>
  <main class="container">
	  <aside class="servers">
	  	<div class="servers-collection">
	  		<div class="server focusable server-friends unread" role="button" aria-label="Friends unread">
	  			<div class="server-icon"><i class="fas fa-user"></i></div>
	  		</div>
	  	</div>
  
	  	<div class="servers-collection">
	  		<div class="server focusable unread" role="button" aria-label="user">
	  			<div class="server-icon"><img src="#"/></div>
	  		</div>
	  	</div>
  
	  	<div class="servers-collection">
	  		<div class="server focusable active" role="button" aria-label="My Server" aria-selected="true">
	  			<div class="server-icon"><img src="#"/></div>
	  		</div>
	  	</div>
	  </aside>
  </main>
</template>

<script>
  import {onMounted} from '@vue/composition-api';
  import {focusableChannelsIcons} from '../utils/index';

  export default {  
    name: 'home', 
    setup(){
      onMounted(() =>{
        focusableChannelsIcons();
      });
    }
  };
</script>
