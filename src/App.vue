<template>
  <div>
    <NavHeaderVue />
    <router-view />
  </div>
</template>

<script>
import NavHeaderVue from './components/NavHeader.vue'



export default {
  name: 'App',
  components: {
    NavHeaderVue,
  }
}
</script>
<style>
*{
  font-family: "Lexend", sans-serif;
  color: #4E4E4E;
}
</style>


