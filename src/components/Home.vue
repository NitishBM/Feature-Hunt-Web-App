<template>
  <!-- <Carousel /> -->
  <div class="container h-screen">
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-md-4 mb-4 text-center">
        <div class="card mt-4 bg-white h-100">
          <img v-if="item.ideaBrandIconUrl" :src="item.ideaBrandIconUrl" class="rounded-5 m-auto w-10 mt-3 transition-transform duration-300 hover:scale-110" />          
          <div class="card-body">
            <p class="card-title text-sm"><strong> {{ item.ideaBrandName }}</strong></p>
            <h5 class="card-title">{{ truncateText(item.ideaTitle, 20) }}</h5>
            <p class="card-text text-sm">{{ truncateText(item.ideaDescription, 80) }}</p>
            <!-- <p><strong>Brand Name:</strong> {{ item.ideaBrandName }}</p> -->
            <!-- <p><strong>Created On:</strong> {{ item.ideaCreatedOn }}</p>
            <p><strong>Status:</strong> {{ item.status }}</p>
            <p><strong>User Email:</strong> {{ item.ideaUserEmail }}</p> -->
            <div class="flex justify-between">
              <div class="mt-3 cursor-pointer" @click="navigateToDetails(item)">Read More</div>
              <div href="#" class="btn btn-primary btn-sm mt-3">Vote</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterVue />
</template>

<script>
import Carousel from './Carousel.vue';
import FooterVue from './Footer.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    FooterVue,
    Carousel
  },
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('https://api.airtable.com/v0/appGhVDE7BSPhNOVe/user_ideas', {
          headers: {
            Authorization: 'Bearer patekPzL7ymryxU2j.cf7c8969aff387077c18bea5f321902e3b9b8a98b013f25f12db416d9b74fbdb'
          }
        });
        this.items = response.data.records.map(record => ({
          ideaTitle: record.fields.ideaTitle || '',
          ideaDescription: record.fields.ideaDescription || '',
          ideaBrandIconUrl: record.fields.ideaBrandIconUrl || '',

          // ideaBrandName: record.fields.ideaBrandName || '',
          // ideaCreatedOn: record.fields.ideaCreatedOn || '',
          // status: record.fields.status || '',
          // ideaUserEmail: record.fields.ideaUserEmail || ''
        }));
      } catch (error) {
        console.error('Error fetching data from Airtable:', error);
      }
    },
    truncateText(text, maxLength) {
      if (!text) return '';
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    },
    navigateToDetails(item) {
      this.$router.push({ name: 'CardDetails', params: { item } });
    }
  }
};
</script>
