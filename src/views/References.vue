<template>
  <div>
    <div class="about">
      <div class="headline">Hello</div>
      <div class="gallery-wrapper">
        <div id="img1">
          <img
            :src="require('@/assets/another-booth@2x.png')"
            alt=""
            @click="openModal('another-booth@2x.png')"
          />
        </div>
        <div id="img2">
          <img
            src="../assets/arjo-booth@2x.png"
            alt=""
            @click="openModal('arjo-booth@2x.png')"
          />
        </div>
        <div id="img3">
          <img
            src="../assets/booth@2x.png"
            alt=""
            @click="openModal('booth@2x.png')"
          />
        </div>
        <div id="img4">
          <img
            src="../assets/JESENIKY-booth@2x.png"
            alt=""
            @click="openModal('JESENIKY-booth@2x.png')"
          />
        </div>
        <div id="img5">
          <img
            src="../assets/ECOLAB-booth@2x.png"
            alt=""
            @click="openModal('ECOLAB-booth@2x.png')"
          />
        </div>
        <div id="img6">
          <img
            src="../assets/Honda-Motorcycles-3@2x.png"
            alt=""
            @click="openModal('Honda-Motorcycles-3@2x.png')"
          />
        </div>
        <div id="img7">
          <img
            src="../assets/COMAX-booth@2x.png"
            alt=""
            @click="openModal('COMAX-booth@2x.png')"
          />
        </div>
        <div id="img8">
          <img
            src="../assets/lointek.jpg"
            alt=""
            @click="openModal('lointek.jpg')"
          />
        </div>
        <div id="img9">
          <img
            src="../assets/booth-lol@2x.png"
            alt=""
            @click="openModal('booth-lol@2x.png')"
          />
        </div>
      </div>
    </div>
    <PicsPopup v-show="isOpenModal" :filePath="filePath" @close="close" />
  </div>
</template>
<script>
import PicsPopup from "../views/PicsPopup";
export default {
  components: {
    PicsPopup,
  },
  data: () => ({
    isOpenModal: false,
    filePath: "",
  }),
  methods: {
    openModal(filePath) {
      this.filePath = filePath;
      document.getElementsByClassName("gallery-wrapper")[0].style.filter =
        "blur(8px)";
      this.isOpenModal = true;
    },
    close() {
      document.getElementsByClassName("gallery-wrapper")[0].style.filter =
        "blur(0px)";
      this.isOpenModal = false;
      this.filePath = "";
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.about {
  width: 100%;
  height: 1200px;
  overflow: hidden;
}

.gallery-wrapper {
  filter: blur(0px);
  width: 100%;
  height: 1200px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 300px;
  align-items: center;
  justify-content: center;
}

.gallery-wrapper img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

#img1 {
  grid-column: 1/3;
  grid-row: 1/3;
  align-self: stretch;
}

#img1:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
#img2 {
  grid-column: 3/4;
  grid-row: 1;
  align-self: stretch;
}
#img2:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

#img3 {
  grid-column: 4;
  grid-row: 1;
  align-self: stretch;
}
#img3:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

#img4 {
  grid-column: 5;
  grid-row: 1/3;
  align-self: stretch;
}
#img4:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
#img5 {
  grid-column: 1/3;
  grid-row: 3/5;
  align-self: stretch;
}
#img5:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

#img6 {
  grid-column: 3/5;
  grid-row: 2;
  align-self: stretch;
}
#img6:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
#img7 {
  grid-column: 3/5;
  grid-row: 3/5;
  align-self: stretch;
}

#img7:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
#img8 {
  grid-column: 5/6;
  grid-row: 3/4;
  align-self: stretch;
}

#img8:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
#img9 {
  grid-column: 5/6;
  grid-row: 4/5;
  align-self: stretch;
}

#img9:hover {
  border: 4px solid white;
  transition: ease-in-out 0.1s;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
</style>
