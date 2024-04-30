<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <a class="navbar-brand" href="#">My web </a>
    <button 
    class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarnav">
  
          <router-link to ="./" class ="nav-link">Home</router-link>
      
          <router-link to ="/post_component" class ="nav-link">   Posts</router-link>
      
          <router-link to ="/createpost_component" class ="nav-link">   CreatePosts</router-link>
        
    </div>
</nav>
</template>
<style scoped>
a.router-link-active{
  background: #bbb;
}
</style>
