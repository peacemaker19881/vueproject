<template>
 <navigation_component></navigation_component>
 <router-view></router-view>
</template>

<script>
import navigation_component from './components/navigation_component.vue';

export default {
  name: 'App',
  components: {
    navigation_component,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
