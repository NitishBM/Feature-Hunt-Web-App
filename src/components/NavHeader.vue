<template>
  <div class="bg-sky-600">

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link to="/" class="nav-link "><strong class="text-white">FeatureHunt</strong></router-link>
        <div class="navbar-toggler border-0 " type="button" @click="toggleSidebar" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </div>
        </div>
        <div class="hide">

          <ul class="navbar-nav ms-auto ">

            <li class="nav-item">
              <router-link to="/" class="nav-link text-white">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/addsuggession" class="nav-link text-white">Add Suggession</router-link>
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

    <div class="sidebar " :class="{ 'open': sidebarOpen }">
      <ul class="sidebar-nav">
        <li><router-link to="/" class="text-white no-underline">Home</router-link></li>
        <li><router-link to="/addsuggession" class="text-white no-underline">Add Suggession</router-link></li>
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
  background-color: rgb(2 132 199);
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

/* .sidebar-nav a {
    color: #000000;
    text-decoration: none;
  } */

@media only screen and (max-width: 1000px) {
  .hide {
    display: none !important;
  }
}
</style>