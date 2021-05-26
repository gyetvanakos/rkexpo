<template>
  <div>
    <div class="home">
      <div class="left-side-boxes">
        <div class="quality-box">
          <p>{{ $t("quality") }}</p>
        </div>
        <div class="service-box">
          <p>{{ $t("completeSol") }}</p>
        </div>
      </div>
      <div class="right-side-box">
        <svg
          class="boxes"
          xmlns="http://www.w3.org/2000/svg"
          width="54.13"
          height="70.375"
          viewBox="0 0 102.596 133.375"
        >
          <path
            id="Icon_ionic-md-calculator"
            data-name="Icon ionic-md-calculator"
            d="M93.956,3.375H22.139A15.393,15.393,0,0,0,6.75,18.764v102.6A15.393,15.393,0,0,0,22.139,136.75H93.956a15.435,15.435,0,0,0,15.389-15.389V18.764A15.393,15.393,0,0,0,93.956,3.375ZM40.094,121.36H24.7V105.971H40.094Zm0-28.214H24.7V77.757H40.094Zm0-28.214H24.7V49.543H40.094ZM65.743,121.36H50.353V105.971H65.743Zm0-28.214H50.353V77.757H65.743Zm0-28.214H50.353V49.543H65.743ZM91.392,121.36H76v-43.6H91.392Zm0-56.428H76V49.543H91.392Zm0-30.779H24.7V18.764H91.392Z"
            transform="translate(-6.75 -3.375)"
          />
        </svg>
        <p id="pcalculator">{{ $t("tryOut") }}</p>
      </div>
    </div>
    <About />
    <!-- <div id="container">
      <div id="left">
        <div class="about-wrapper">
          <div class="title">
            <h1>ABOUT</h1>
          </div>
          <div class="longtext">
            <p>
              RK Expo was established by splitting from Veletržní servis s.r.o.
              which was engaged in the exhibition for over 20 years. The company
              offer complete services for trade fairs and exhibitions. We
              provide realisation across Europe. We approach every order
              individually so we can fulfil every customer’s imagination.
            </p>
          </div>
          <div class="shorttext">
            <p>
              Do not hesitate to contact us, we emphasise quality, reliability
              and advantageous solution.
            </p>
          </div>
          <div class="titleref">
            <h1>REFERENCES</h1>
          </div>
          <div class="longtext">
            <p>
              We build from the smallest to the largest sizes of the booths. The
              focus is set equally on local clients as the international.
            </p>
          </div>
        </div>
      </div>
      <div id="right">
        <div class="trapezoid">
          <a><i class="fas fa-tools"></i></a>
          <div class="trapezoid-smiley">
            <a><i class="fas fa-smile"></i></a>
          </div>
          <div class="trapezoid-globe">
            <a><i class="fas fa-globe-europe"></i></a>
          </div>
        </div>
      </div>
    </div>-->
    <References />
    <!-- <div class="about">
    <div class="headline"></div>
    <div class="gallery-wrapper">
      <div id="img1"><img src="../assets/another-booth@2x.png" alt="" /></div>
      <div id="img2"><img src="../assets/arjo-booth@2x.png" alt="" /></div>
      <div id="img3"><img src="../assets/booth@2x.png" alt="" /></div>
      <div id="img4"><img src="../assets/JESENIKY-booth@2x.png" alt="" /></div>
      <div id="img5"><img src="../assets/ECOLAB-booth@2x.png" alt="" /></div>
      <div id="img6">
        <img src="../assets/Honda-Motorcycles-3@2x.png" alt="" />
      </div>
      <div id="img7"><img src="../assets/COMAX-booth@2x.png" alt="" /></div>
      <div id="img8"><img src="../assets/lointek.jpg" alt="" /></div>
      <div id="img9"><img src="../assets/booth-lol@2x.png" alt="" /></div>
    </div>
  </div> -->
    <div class="calculate">
      <div class="text">
        {{ $t("difference") }}
      </div>
      <div>
        <a href="/Calculator"
          ><button class="calculatebutton">{{ $t("calculateMyPrice") }}</button></a
        >
      </div>
    </div>
    <Contact />
  </div>
</template>

<script>
import References from "../views/References";
import About from "../views/About";
//import Contact from "../views/Contact";
export default {
  components: {
    References,
    About,
    //Contact,
  },
};
</script>

<style lang="scss">
.home {
  background: url(../assets/exhibitor.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 900px;
  width: 100%;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
}

.left-side-boxes {
  float: right;
  padding-top: 200px;
}

.right-side-box {
  float: left;
  height: 100px;
  width: 250px;
  background: rgba(255, 255, 255, 0.59);
  position: absolute;
  top: 600px;
}

.quality-box {
  height: 100px;
  width: 300px;
  background: rgba(4, 129, 152, 0.59);
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-box {
  height: 100px;
  width: 300px;
  background: rgba(4, 129, 152, 0.59);
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: white;
  flex: 0 0 120px;
  font-weight: 600;
}

#pcalculator {
  color: black;
  font-weight: 600;
  position: relative;
  top: 30px;
  left: 15px;
}

.boxes {
  fill: black;
  float: left;
  position: relative;
  top: 15px;
  left: 10px;
}

/*calculate*/
@at-root .calculate {
  height: 800px;
}

.text {
  height: 300px;
  text-align: center;
  padding-top: 150px;
  font-weight: 600;
  font-size: 40px;
}

.calculatebutton {
  width: 570px;
  height: 76px;
  background-color: #048198;
  color: white;
  font-size: 38px;
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
}

i {
  color: white;
}
/* iphone X */
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .home {
    background: url(../assets/exhibitor.png);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 812px;
    width: 375px;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  }

  .quality-box {
    height: 70px;
    width: 200px;
    background: rgba(4, 129, 152, 0.59);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service-box {
    height: 70px;
    width: 200px;
    background: rgba(4, 129, 152, 0.59);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
    position: relative;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-side-box {
    float: left;
    height: 70px;
    width: 200px;
    background: rgba(255, 255, 255, 0.59);
    position: absolute;
    top: 600px;
  }

  p {
    color: white;
    flex: 0 0 120px;
    font-weight: 600;
    font-size: 14px;
  }

  #pcalculator {
    color: black;
    font-weight: 600;
    position: relative;
    top: 20px;
    left: 15px;
    font-size: 13px;
  }

  .right-side-box {
    float: left;
    width: 160px;
    background: rgba(255, 255, 255, 0.59);
    position: absolute;
  }

  .boxes {
    width: 30px;
    height: 40px;
  }

  .text {
    height: 150px;
    text-align: center;
    padding-top: 150px;
    font-weight: 600;
    font-size: 20px;
  }

  @at-root .calculate {
    height: 500px;
  }

  .calculatebutton {
    width: 100%;
    height: 56px;
    background-color: #048198;
    color: white;
    font-size: 25px;
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
  }
}
</style>
