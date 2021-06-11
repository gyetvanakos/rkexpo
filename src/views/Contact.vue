<template>
  <div class="contact-us">
    <div class="trapezoid-contact"></div>
    <div class="contact">
      <div class="left">
        <div class="title-contact">{{
          $t("contact")
        }}</div>
        <div class="textcontact">
          <p class="textt">
            {{
          $t("difference")
        }}
          </p>
        </div>
        <div class="contact-name">
          <p class="name">Radim Kubíček</p>
          <i class="fas fa-phone-square-alt"></i>
          <p id="czphone">+420 725 854 853</p>
          <i class="fas fa-envelope-square"></i>
          <p id="czmail">radim@rkexpo.cz</p>
          <div class="map">
            <GmapMap
              :center="center"
              :zoom="14"
              map-type-id="terrain"
              style="width: 555px; height: 300px"
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
          <form class="form-contact" @submit.prevent="sendEmail">
            <input
              type="text"
              class="input-field"
              placeholder="Name"
              v-model="user_name"
              name="user_name"
            />
            <input
              type="email"
              class="input-field"
              placeholder="Your Email"
              v-model="user_email"
              name="user_email"
            />
            <textarea
              type="text"
              class="input-field textarea-field"
              placeholder="Message"
              v-model="message"
              name="message"
            ></textarea>
            <input id="sendbutton" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
const home = { lat: 49.45501, lng: 16.731192 };

export default {
  name: "GoogleMap",
  data() {
    return {
      markers: [],
      center: home,
      user_name: "",
      user_email: "",
      message: "",
    };
  },
  methods: {
    drawMarkers() {
      this.markers = [{ position: home }];
    },
    sendEmail(e) {
      console.log(this.user_name, this.user_email, this.message, e.target);
      try {
        emailjs
          .sendForm(
            "service_rnzjmtm",
            "template_bylqv9h",
            e.target,
            "user_6jClaBCYqoriqxnMqWugr",
            {
              user_name: this.user_name,
              user_email: this.user_email,
              message: this.message,
            }
          )
          .then((result) =>
            console.log("SUCCESS!", result.status, result.text)
          );
      } catch (error) {
        console.log(error);
      }
      //reset form fields
      this.user_name = "";
      this.user_email = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss">
.contact-us {
  width: 100%;
  height: 800px;
}
.trapezoid-contact {
  clip-path: polygon(0 0, 45% 0, 100% 100%, 0 100%);
  background-color: #048198;
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
}

.title-contact {
  text-align: left;
  color: white;
  padding-top: 50px;
  float: left;
  padding-left: 40px;
  font-size: 80px;
  font-weight: 600;
  position: absolute;
  z-index: -1;
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
  position: absolute;
}
.contact-name {
  float: right;
  text-align: right;
  position: absolute;
}

#czphone {
  font-size: 18px;
}

#czmail {
  font-size: 18px;
}

.name {
  color: black;
  font-size: 25px;
  font-weight: 700;
  padding-top: 240px;
}

.textt {
  font-weight: 200;
  border-bottom: 0.5px solid rgb(255, 255, 255);
  padding-top: 130px;
}
.fa-phone-square-alt,
.fa-envelope-square {
  color: white;
  font-size: 20px;
  float: left;
  padding-left: 410px;
}

.map {
  padding-top: 50px;
  padding-left: 40px;
}

.contact-box {
  position: absolute;
  width: 100%;
}
.form-contact {
  margin: 35px;
  display: grid;
  grid-auto-rows: 60px;
  padding-left: 800px;
  padding-top: 200px;
}
.input-field {
  width: 400px;
  height: 40px;
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
.contactbtn {
  border-radius: 23px;
  color: white;
  margin-top: 18px;
  padding: 10px;
  background-color: black;
  font-size: 15px;
  border: none;
  cursor: pointer;
}
.button-contact {
  padding-left: 800px;
  padding-top: 150px;
}

#sendbutton {
    width: 425px;
    position: relative;
    top: 120px;
    height: 30px;
    border-radius: 30px;
    border: none;
    color: white;
    background-color: black;
  }

/* iphone X */
@media only screen and (max-width: 414px) {
  .vue-map-container {
    width: 300px !important;
  }

  .map {
    padding-top: 380px;
  }

  .contact-us {
    height: 1100px;
    background-color: #048198;
  }

  .trapezoid-contact {
    display:none ;
  }
  .form-contact {
    padding-left: 40px;
    padding-top: 350px;
  }

  .input-field {
    width: 300px;
  }

  #sendbutton {
    width: 330px;
    position: relative;
    top: 120px;
    height: 30px;
    border-radius: 30px;
    border: none;
    color: white;
    background-color: black;
  }

  .contact-name {
    text-align: left;
    padding-left: 10px !important;
  }

  p.name {
    padding-left: 21px;
    position: relative;
    bottom: 30px;
    width: 300px;
    z-index: -1;
  }

  #czphone {
    padding-left: 21px;
    position: relative;
    width: 300px;
    padding-left: 40px
  }

  #czmail {
    padding-left: 21px;
    position: relative;
    width: 300px;
    padding-left: 40px
  }

  .textt {
    color: white;
    border-bottom: 0px;
    z-index: -1;
  }

  .title-contact {
    text-align: left;
    color: white;
    padding-top: 50px;
    float: left;
    padding-left: 10px;
    font-size: 80px;
    font-weight: 600;
    position: absolute;
    z-index: -1;
  }
  .fa-phone-square-alt,
  .fa-envelope-square {
    color: white;
    font-size: 20px;
    padding: 0px !important;
  }

  .title-contact {
    color: white;
    font-size: 70px;
    padding-left: 30px;
    z-index: 2;
  }
}
</style>
