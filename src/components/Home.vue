<!-- <template>

    <div class="container">     

      <div class="row justify-content-around">
        <div v-for="(card, index) in cardsData" :key="index" class="col-md-3 col-sm-4 m-1">
          <div class="card mt-2">
            <img :src="card.image" class="card-img-top mt-2" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <div class="card-text text-center">
                {{ truncateText(card.text) }}
                <button v-if="card.text.length > 80" @click="showPopup(index)" class="btn btn-link">Read More</button>
                <div v-if="showPopupIndex === index && card.text.length > 80" class="popup">
                  {{ card.text }}
                <a href="#" class="btn btn-primary mt-4" >Vote</a>
                </div>
                <a href="#" class="btn btn-primary mt-4" >Vote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    

</template>
  
  <script>
import { ref } from 'vue';
  export default {
    name: 'Cards',
    setup() {
      const cardsData = ref([
        { 
          title: 'Apple',
          text: 'Some quick example text to build on the card title Some quick example text to build on the card title Some quick example text to build on the card title Some quick example text to build on the card title',
          image: '/src/assets/Apple.png'
        },
        { 
          title: 'LinkedIn',
          text: 'Some quick example text to build on the card',
          image: '/src/assets/Linkedin.png'
        },
        { 
          title: 'Instagram',
          text: 'Some quick example text to build on the card title',
          image: '/src/assets/Instagram.png'
        },
        { 
          title: 'Amazon',
          text: 'Some quick example text to build on the card title',
          image: '/src/assets/Amazon.png'
        },
        { 
          title: 'Facebook',
          text: 'Some quick example text to build on the card title',
          image: '/src/assets/Facebook.png'
        },
        { 
          title: 'Maps',
          text: 'Some quick example text to build on the card title',
          image: '/src/assets/Maps.png'
        },
        { 
          title: 'Messenger',
          text: 'Some quick example text to build on the card title',
          image: '/src/assets/Messenger.png'
        },
        { 
          title: 'Twitter',
          text: 'Some quick example text to build on the card title',
          image: '/src/assets/Twitter.png'
        },
        { 
          title: 'Youtube',
          text: 'Some quick example text to build on the card title',
          image: '/src/assets/Youtube.png'
        },
      ]);

      const showPopupIndex = ref (-1);

      const truncateText = (text) => {
        if (text.length > 80) {
          return text.slice(0, 80) + '...';
        }
        return text;
      };
      
      const showPopup = (index) => {
        showPopupIndex.value = index;
      };



      return {
        cardsData,
        showPopupIndex,
        truncateText,
        showPopup,
      };
    },
  };
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 1000;
  }

  .card {
    width: 100%;
    height: 100%;
  }

  .card img{
    width: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  
.btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
}


.card-title {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-img-top:hover {
    transform: scale(1.2);
    transition: 0.1s transform linear;
}
  </style>
   -->



<template>
  <Carousel/>
  <div class="container">
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-md-4 mb-4">
        <div class="card mt-4 bg-white rounded shadow">
          <img v-if="item.image" :src="item.image" class="card-img-top mt-3 " alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ truncateText(item.title, 20) }}</h5>
            <p class="card-text">{{ truncateText(item.text, 80) }}</p>
            <button class="btn " @click="navigateToDetails(item)">Read More</button>
            <a href="#" class="btn btn-primary mt-4">Vote</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterVue />

</template>
  
<script>
import { useRouter } from 'vue-router';
import Carousel from './Carousel.vue';
import FooterVue from './Footer.vue'

export default {
  name: 'Home',
  components: {
    FooterVue, 
    Carousel
  },
  data() {
    return {
      items: [
      { 
        title: 'Apple',
        text: 'Some quick example text to build on the card title Some quick example text to build on the card title Some quick example text to build on the card title Some quick example text to build on the card title',
        image: '/src/assets/Apple.png'
      },
      { 
        title: 'LinkedIn',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Linkedin.png'
      },
      { 
        title: 'Instagram',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Instagram.png'
      },
      { 
        title: 'Amazon',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Amazon.png'
      },
      { 
        title: 'Facebook',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Facebook.png'
      },
      { 
        title: 'Maps',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Maps.png'
      },
      { 
        title: 'Messenger',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Messenger.png'
      },
      { 
        title: 'Twitter',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Twitter.png'
      },
      { 
        title: 'Youtube',
        text: 'Some quick example text to build on the card title',
        image: '/src/assets/Youtube.png'
      },
      ],
    };
  },
  setup() {
    const router = useRouter();

    const truncateText = (text, maxLength) => {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const navigateToDetails = (item) => {
      router.push({ name: 'CardDetails', params: { item } });
    };

    return {
      truncateText,
      navigateToDetails,
    };
  },
};
</script>


<style>

  .card img{
    width: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  
.btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
}


.card-title {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-img-top:hover {
    transform: scale(1.2);
    transition: 0.1s transform linear;
}
</style>