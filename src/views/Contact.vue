<template>
  <div class="contact-us">
    <div class="contact">
      <div class="left">
        <div class="title-contact">CONTACT</div>
        <div class="textcontact">
          <p class="textt">
            Looking to make a difference at your next exhibition ? Let’s talk!
          </p>
        </div>
        <div class="contact-name">
          <p class="name">Radim Kubíček</p>
          <i class="fas fa-phone-square-alt"></i>
          <p>+420 725 854 853</p>
          <i class="fas fa-envelope-square"></i>
          <p>radim@rkexpo.cz</p>
          <div class="map">
            <GmapMap
              :center="center"
              :zoom="14"
              map-type-id="terrain"
              style="width: 520px; height: 300px"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              />
            </GmapMap>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="contact-box">
          <form>
            <input type="text" class="input-field" placeholder="First Name" />
            <input type="text" class="input-field" placeholder="Last Name" />
            <input type="email" class="input-field" placeholder="Your Email" />
            <textarea
              type="text"
              class="input-field textarea-field"
              placeholder="Message"
            ></textarea>
            <button type="button" class="btn">SEND</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const home = { lat: 49.45501, lng: 16.731192 };

export default {
  name: "GoogleMap",
  data() {
    return {
      markers: [],
      center: home,
    };
  },
  methods: {
    drawMarkers() {
      this.markers = [{ position: home }];
    },
  },
};
</script>

<style lang="scss">
.contact-us {
  clip-path: polygon(0 0, 45% 0, 100% 100%, 0 100%);
  background-color: #048198;
  float: left;
  width: 100%;
  height: 800px;
}

.title-contact {
  text-align: left;
  color: white;
  padding-top: 50px;
  float: left;
  padding-left: 40px;
  font-size: 80px;
  font-weight: 600;
}
.contact {
  height: 500px;
  width: 100%;
}

.left {
  width: 40%;
  height: 600px;
  float: left;
}

.right {
  width: 60%;
  height: 600px;
  float: right;
}

.textcontact {
  color: white;
  height: 100px;
  float: left;
  padding-left: 50px;
  padding-top: 20px;
  text-align: left;
  font-size: 20px;
  font-weight: lighter;
}
.contact-name {
  width: 300px;
  float: right;
  text-align: right;
}
.name {
  color: black;
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 40px;
}

.textt {
  font-weight: 200;
  border-bottom: 0.5px solid rgb(255, 255, 255);
}
.fa-phone-square-alt,
.fa-envelope-square {
  color: white;
  float: right;
}

.map {
  float: right;
  padding-top: 50px;
}

.contact-box {
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
form {
  margin: 35px;
}
.input-field {
  width: 400px;
  height: 40px;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 23px;
  outline: none;
}
.textarea-field {
  height: 150px;
  padding-top: 10px;
}
.btn {
  border-radius: 23px;
  color: white;
  margin-top: 18px;
  padding: 10px;
  background-color: black;
  font-size: 15px;
  border: none;
  cursor: pointer;
}
</style>
