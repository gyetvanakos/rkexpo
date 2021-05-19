<template>
  <div class="app">
    <Carousel>
      <CarouselSlide
        v-for="slide in slides"
        :key="slide"
        class="carousel-slider"
      >
        <img :src="require(`@/assets/${slide}`)" :alt="slide" />
      </CarouselSlide>
    </Carousel>
  </div>
</template>
<script>
import Carousel from "./Carousel";
import CarouselSlide from "./CarouselSlide";
export default {
  components: {
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      currentIndex: 0,
      slides: [
        "another-booth@2x.png",
        "arjo-booth@2x.png",
        "booth@2x.png",
        "JESENIKY-booth@2x.png",
        "ECOLAB-booth@2x.png",
        "Honda-Motorcycles-3@2x.png",
        "COMAX-booth@2x.png",
        "lointek.jpg",
        "booth-lol@2x.png",
      ],
    };
  },
  beforeMount() {
    if (this.$route.params.index) {
      this.currentIndex = this.$route.params.index;
    }
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  justify-content: center;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 1300px;
  height: 800px;
  z-index: 10;
}
.btn {
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid transparent;
  border-radius: 23px;
  margin: 5px 10px;
  color: #fff;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
  padding-top: 14px;
  font-size: 20px;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 50%;
  right: 0;
  padding-bottom: 23px;
}
.btn-prev {
  top: 50%;
  left: 0;
  padding-bottom: 23px;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>
