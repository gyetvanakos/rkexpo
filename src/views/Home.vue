<template>
  <div>
    <div class="home">
      <div class="left-side-boxes">
        <div class="quality-box">
          <p>Quality, reliability and advantageous solution</p>
        </div>
        <div class="service-box">
          <p>COMPLETE SERVICE FOR EXHIBITIONS AND FAIRS</p>
        </div>
      </div>
      <div class="right-side-box">
        <svg
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
        <p2>TRY OUT THE CALCULATOR</p2>
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
        Would you like to know the average price of your booth? <br />
        Try out our calculator!
      </div>
      <div><button class="calculatebutton">CALCULATE MY PRICE</button></div>
    </div>
    <div class="contact">
      <div class="left">
        <div class="title">CONTACT</div>
        <div class="textcontact">
          Looking to make a difference at your next exhibition ? Let’s talk!
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import References from "../views/References";
import About from "../views/About";
export default {
  components: {
    References,
    About,
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

p2 {
  color: black;
  font-weight: 600;
  position: relative;
  top: 20px;
}

svg {
  fill: black;
  float: left;
  position: relative;
  left: 20px;
  top: 10px;
}

#container {
  width: 100%;
  height: 100vh;
  display: flex;
}

#left {
  height: 100%;
  width: 50%;
}

#right {
  height: 100%;
  width: 50%;
}

/* about  */
@at-root .about-wrapper {
  height: 1000px;
  width: 100%;
  background-color: white;
}
.title {
  width: 100%;
  height: 100px;
  font-size: 50px;
  padding-left: 55px;
}

.titleref {
  width: 100%;
  height: 100px;
  font-size: 50px;
  padding-left: 55px;
}

h1 {
  text-align: left;
  color: black;
  padding-top: 50px;
  float: left;
  padding-left: 40px;
}

.longtext {
  width: 700px;
  height: 150px;
  display: flex;
  float: left;
  padding-left: 100px;
  padding-top: 20px;
  text-align: left;
}
.shorttext {
  height: 50px;
  text-align: left;
  padding-left: 100px;
  height: 50vh;
}

.longtext p {
  color: black;
  float: left;
  width: 600px;
  flex: none;
  font-weight: 400;
  font-size: 20px;
}
.shorttext p {
  color: black;
  float: left;
  width: 600px;
  flex: none;
  font-weight: 400;
  font-size: 20px;
}
.trapezoid {
  width: 800px;
  height: 100vh;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0 100%);
  background-color: #048198;
  float: right;
}
.trapezoid a {
  color: white;
  float: right;
  font-size: 60px;
  padding-right: 210px;
  padding-top: 40px;
  display: flex;
  position: relative;
}
.trapezoid a::after {
  content: "50+  EXHIBITION BOOTHS  ";
  left: 130px;
  position: absolute;
  font-size: 21px;
  padding-top: 5px;
}
.trapezoid-smiley {
  height: 40px;
  padding-top: 100px;
}
.trapezoid-smiley a {
  color: white;
  float: right;
  font-size: 60px;
  margin: 0;
  display: flex;
  width: 180px;
  position: relative;
  padding-right: 150px;
}
.trapezoid-smiley a::after {
  content: "100%  CUSTOMER SATISFACTION  ";
  left: 130px;
  position: absolute;
  font-size: 21px;
  padding-top: 18px;
}
.trapezoid-globe {
  height: 40px;
  padding-top: 60px;
  width: 100%;
  margin: 0;
}
.trapezoid-globe a {
  color: white;
  float: right;
  font-size: 60px;
  margin: 0;
  display: flex;
  width: 180px;
  position: relative;
}
.trapezoid-globe a::after {
  content: "5+  COUNTRIES OF IMPLEMENTATION ";
  left: 130px;
  position: absolute;
  font-size: 21px;
  padding-top: 15px;
}

/* references */
@at-root .about {
  width: 100%;
  height: 1200px;
  overflow: hidden;
}

.gallery-wrapper {
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

.contact {
  height: 500px;
  width: 100%;
  background-color: #048198;
}

.left {
  width: 50%;
  height: 500px;
}

.right {
  width: 50%;
  height: 500px;
}

.title {
  background-color: white;
  height: 150px;
}

.textcontact {
  height: 150px;
  background-color: white;
}
</style>
