<template>
  <div>
    <div id="containerabout">
      <div id="leftabout">
        <div class="about-wrapper">
          <div class="title">
            <h1>{{ $t("about") }}</h1>
          </div>
          <div class="longtext">
            <p>
              {{ $t("aboutText") }}
            </p>
          </div>
          <div class="shorttext">
            <p>
              {{ $t("aboutTextS") }}
            </p>
          </div>
          <div class="titleref">
            <h1>{{ $t("references") }}</h1>
          </div>
          <div class="longtext">
            <p>
              {{ $t("homeRefText") }}
            </p>
          </div>
        </div>
      </div>
      <div id="rightabout">
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
    </div>
    <div id="aboutmobile">
      <section>
        <div class="mobiletitle">
          {{ $t("about") }}
        </div>
        <div class="mobiletext">
          {{ $t("aboutText") }}
        </div>
        <div class="mobiletext">
          {{ $t("aboutTextS") }}
        </div>
      </section>
      <section class="icons">
        <div class="toolicon">
          <div>
            <a><i class="fas fa-tools"></i></a>
          </div>
          <div class="icontext">50+ EXHIBITION BOOTHS</div>
        </div>
        <div class="smileicon">
          <div>
            <a><i class="fas fa-smile"></i></a>
          </div>
          <div class="icontext">100% CUSTOMER SATISFACTION</div>
        </div>
        <div class="globeicon">
          <div>
            <a><i class="fas fa-globe-europe"></i></a>
          </div>
          <div class="stubborntext">5+ COUNTRIES OF IMPLEMENTATION</div>
        </div>
      </section>
      <section>
        <div class="mobiletitle">
          {{ $t("references") }}
        </div>
        <div class="mobiletext">
          {{ $t("homeRefText") }}
        </div>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.about-wrapper {
  height: 1000px;
  width: 100%;
  background-color: white;
}

#containerabout {
  width: 100%;
  height: 100vh;
  display: flex;
}

#leftabout {
  height: 100%;
  width: 50%;
}

#rightabout {
  height: 100%;
  width: 50%;
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

#aboutmobile {
  display: none;
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  #containerabout {
    display: none;
  }

  #aboutmobile {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 1000px;
    width: 100%;
    background-color: white;
  }

  .mobiltxt {
    text-align: center;
  }

  section {
    width: 100%;
    height: 370px;
  }

  .mobiletitle {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    padding-top: 30px;
  }

  .mobiletext {
    width: 70%;
    display: flex;
    align-content: center;
    justify-content: center;
    padding-top: 30px;
    padding-left: 15%;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(187px, 2fr);
    grid-auto-rows: 130px;
    grid-gap: 5px;
    padding-top: 30px;
    background-color: #048198;
  }

  .icontext {
    width: 93px;
    height: 50px;
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    padding-left: 50px;
    color:white
  }

  .stubborntext{
    width: 93px;
    height: 50px;
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    padding-left: 143px;
    color:white
  }

  a {
    font-size: 40px;
    display: flex;
    align-content: center;
    justify-content: center;
    padding-bottom: 10px;
    color:white
  }

  .toolicon {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .smileicon {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .globeicon {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
  }
}
</style>


        