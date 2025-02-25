<!-- CardDetail.vue -->
<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-5">
            <img v-if="item.image" :src="item.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title">{{ item.title }}</h2>
                <p class="card-text">{{ item.text }}</p>
                <a href="#" class="btn btn-primary m-2">Vote</a>
                <button class="btn btn-primary" @click="goBack">Go Back</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'CardDetails',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    setup() {
      const router = useRouter();
  
      const goBack = () => {
        router.go(-1);
      };
  
      return {
        goBack,
      };
    },
  };
  </script>