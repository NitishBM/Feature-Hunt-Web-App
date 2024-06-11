<script>
import CardDetailsVue from './components/CardDetails.vue'
import CardsVue from './components/Home.vue'
import HomeVue from './components/Home.vue'
// import NavBarVue from './components/NavBar.vue'
import NavHeaderVue from './components/NavHeader.vue'



export default {
  name: 'App',
  components: {

    // NavBarVue,
    NavHeaderVue,
    // HomeVue,
    // CardsVue,
    // CardDetailsVue
    
    
  }
}
</script>

<template>
  <!-- <NavBarVue /> -->
  <!-- <HomeVue />
  <CardsVue />
  <CardDetailsVue /> -->

  <div>
    <!-- <NavBarVue /> -->
    <NavHeaderVue />
    
    <!-- Other template content here -->
    <router-view />
  </div>
</template>

<style scoped>

</style>
