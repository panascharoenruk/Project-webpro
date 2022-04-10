<template >
  <div class="mt-6">
    <Carousel :items-to-show="2" :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <img
            :src="slide"
            alt="Placeholder image"
            style="width: 750px; height: 250"
          />
        </div>
      </Slide>

      <template #addons="{ slidesCount }">
        <Pagination v-if="slidesCount > 1" />
      </template>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "CaroUse",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        "https://www.playop.net/wp-content/uploads/2021/03/Blue-Archive.webp",
        "https://i.ytimg.com/vi/Chh_rhWqvAA/maxresdefault.jpg",
        "https://media.pocketgamer.com/artwork/na-33404-1636469504/blue-archive-screenshot-2.jpg",
        "https://wardea.com/wp-content/uploads/2021/08/Blue-Archive-portada.jpg",
      ],
    };
  },
};
</script>
