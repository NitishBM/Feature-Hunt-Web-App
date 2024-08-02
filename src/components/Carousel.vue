<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item, index) in images" :key="index">
            <div class="carousel-item-content">
                <img :src="item" :alt="'Image ' + (index + 1)" />
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            images: [
                './src/assets/Carousel/img1.jpg',
                './src/assets/Carousel/img2.jpg',
                './src/assets/Carousel/img3.jpg',
                './src/assets/Carousel/img4.jpg',
                './src/assets/Carousel/img5.jpg',
            ]
        };
    }
}
</script>

<style scoped>
.carousel-item-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #f5f5f5;
}

.carousel-item-content img {
    max-width: 100%;
    max-height: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
