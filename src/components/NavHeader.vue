<template>
<div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="nav-link"><strong>FeatureHunt</strong></router-link>
        <button class="navbar-toggler" type="button" @click="toggleSidebar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          
          <ul class="navbar-nav ms-auto">
            
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/addsuggession" class="nav-link">Add Suggession</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
 
    <div class="sidebar" :class="{ 'open': sidebarOpen }">
      <ul class="sidebar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/addsuggession">About</router-link></li>
        <!-- <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li> -->
      </ul>
    </div>
    
</div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Navbar',
    setup() {
      const sidebarOpen = ref(false);
  
      const toggleSidebar = () => {
        sidebarOpen.value = !sidebarOpen.value;
      };
  
      return {
        sidebarOpen,
        toggleSidebar,
      };
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #f3f3f3;
    color: #000000;
    padding: 20px;
    transform: translateX(-250px);
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-nav li {
    margin-bottom: 10px;
  }
  
  .sidebar-nav a {
    color: #000000;
    text-decoration: none;
  }
  </style>