<template>
  <div class="about-wrapper">
    <div class="title">
      <h1>ABOUT</h1>
    </div>
    <div class="longtext">
      <p>
        RK Expo was established by splitting from Veletržní servis s.r.o. which
        was engaged in the exhibition for over 20 years. The company offer
        complete services for trade fairs and exhibitions. We provide
        realisation across Europe. We approach every order individually so we
        can fulfil every customer’s imagination.
      </p>
    </div>
    <div class="shorttext">
      <p>
        Do not hesitate to contact us, we emphasise quality, reliability and
        advantageous solution.
      </p>
    </div>
    <div class="trapezoid">
      <a><i class="fas fa-tools"></i></a>
    </div>
    <div class="trapezoid-smiley">
      <a><i class="fas fa-smile"></i></a>
    </div>
  </div>
</template>

<style lang="scss">
.about-wrapper {
  height: 1000px;
  width: 100%;
  background-color: white;
}

.title {
  padding-top: 200px;
  width: 100%;
  height: 100px;
}

.longtext {
  width: 700px;
  height: 212px;
  display: flex;
  float: left;
  padding-left: 40px;
  padding-top: 50px;
}
.shorttext {
  width: 500px;
  height: 102px;
  padding-left: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 420px;
  padding-top: 50px;
}

h1 {
  padding-left: 280px;
  color: black;
  padding-top: 50px;
  float: left;
}

.longtext p {
  color: black;
  float: left;
  width: 600px;
  flex: none;
}

.shorttext p {
  color: black;
  float: left;
  width: 600px;
  flex: none;
}

.trapezoid {
  width: 700px;
  height: 700px;
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
</style>
