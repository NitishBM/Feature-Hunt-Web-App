<template>
  <div>
    <Carousel />
    <div class="container h-screen" @scroll="handleScroll">
      <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-md-4 text-center mb-3">
          <div class="card mt-4 bg-white h-100">
            <img v-if="item.ideaBrandIconUrl" :src="item.ideaBrandIconUrl"
              class="rounded-5 m-auto w-10 mt-3 transition-transform duration-300 hover:scale-110" />
            <!-- <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="size-8 rounded-5 m-auto w-10 mt-3 transition-transform duration-300 hover:scale-110">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg> -->
            <div class="card-body">
              <p class="card-title text-sm"><strong>{{ item.ideaBrandName }}</strong></p>
              <h5 class="card-title">{{ truncateText(item.ideaTitle, 20) }}</h5>
              <p class="card-text text-sm">{{ truncateText(item.ideaDescription, 80) }}</p>
              <div class="flex justify-between">
                <div class="mt-3 cursor-pointer" @click="showModal(item)">Read More</div>


                <div class="flex items-center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6 mt-4 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                  </div>
                  <button
                    class="bg-sky-600 text-white w-16 h-8 flex justify-center items-center rounded-lg text-sm mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                      stroke="currentColor" class="size-5 mr-1 stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex justify-center items-center mt-4">
        <VueSpinner size="20" color="red" />
      </div>
    </div>

    <!-- Idea Modal Component -->
    <IdeaModal :item="selectedItem" :show="isModalVisible" @close="closeModal" />
  </div>

  <!-- <FooterVue /> -->
</template>

<script>
import Carousel from './Carousel.vue';
import FooterVue from './Footer.vue';
import axios from 'axios';
import IdeaModal from './IdeaModal.vue';
import { VueSpinner } from 'vue3-spinners';

export default {
  name: 'Home',
  components: {
    FooterVue,
    Carousel,
    IdeaModal,
    VueSpinner
  },
  data() {
    return {
      items: [],
      selectedItem: null,
      isModalVisible: false,
      isLoading: false, // Loading spinner state
      page: 1, // Pagination for infinite scroll
      limit: 3 // Number of items to fetch per scroll
    };
  },
  created() {
    this.fetchItems();
    window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // Remove scroll event listener
  },
  methods: {
    async fetchItems() {
      this.isLoading = true; // Show loading spinner
      try {
        const response = await axios.get(`https://api.airtable.com/v0/appGhVDE7BSPhNOVe/user_ideas?page=${this.page}&limit=${this.limit}`, {
          headers: {
            Authorization: 'Bearer patekPzL7ymryxU2j.cf7c8969aff387077c18bea5f321902e3b9b8a98b013f25f12db416d9b74fbdb'
          }
        });
        const newItems = response.data.records.map(record => ({
          ideaTitle: record.fields.ideaTitle,
          ideaDescription: record.fields.ideaDescription,
          ideaBrandIconUrl: record.fields.ideaBrandIconUrl,
          ideaBrandName: record.fields.ideaBrandName
        }));
        this.items = [...this.items, ...newItems]; // Append new items to the existing list
        this.page += 1; // Increment page for the next fetch
      } catch (error) {
        console.error('Error fetching data from Airtable:', error);
      } finally {
        this.isLoading = false; // Hide loading spinner
      }
    },
    handleScroll() {
      const bottomOfWindow = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (bottomOfWindow && !this.isLoading) {
        this.fetchItems(); // Fetch more items when the bottom of the page is reached
      }
    },
    truncateText(text, maxLength) {
      if (!text) return '';
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    },
    showModal(item) {
      this.selectedItem = item;
      this.isModalVisible = true; // Show the modal by setting this property to true
    },
    closeModal() {
      this.isModalVisible = false; // Hide the modal by setting this property to false
    },
    navigateToDetails(item) {
      this.$router.push({ name: 'CardDetails', params: { item } });
    }
  }
};
</script>
