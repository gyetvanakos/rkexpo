<template>
  <div id="container">
    <div id="left">
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
    <div id="right">
      <div class="trapezoid">
        <a><i class="fas fa-tools"></i></a>
        <p>
          {{ $t("about") }}
        </p>
        <div class="trapezoid-smiley">
          <a><i class="fas fa-smile"></i></a>
        </div>
        <div class="trapezoid-globe">
          <a><i class="fas fa-globe-europe"></i></a>
        </div>
      </div>
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

.langbutton {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  h1 {
    text-align: left;
    color: black;
    padding-top: 25px;
    float: left;
    padding-left: 20px;
    font-size: 30px;
  }

  .trapezoid {
    width: 260px;
    height: 60vh;
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 0 100%);
    background-color: #048198;
    float: right;
  }

  .trapezoid a {
    color: white;
    float: right;
    font-size: 40px;
    padding-right: 0 !important;
    padding-top: 30px;
    display: block;
  }
  .trapezoid a::after {
    content: "50+  EXHIBITION BOOTHS  ";
    left: -45px;
    font-size: 15px;
    display: block;
  }

  .fa-tools {
    padding-right: 40px;
  }

  .trapezoid-smiley {
    height: 40px;
  }
  .trapezoid-smiley a {
    color: white;
    float: right;
    font-size: 40px;
    display: block;
    width: 130px;
  }
  .trapezoid-smiley a::after {
    content: "100%  CUSTOMER SATISFACTION  ";
    font-size: 15px;
    padding-left: 30px;
    padding-top: 0px;
  }

  .fa-smile {
    padding-left: 0px;
    padding-top: 30px;
  }

  .trapezoid-globe {
    height: 40px;
    padding-top: 50px;
    float: right;
    width: 20px;
    margin: 0;
    padding-left: 0px;
    padding-right: 20px;
  }
  .trapezoid-globe a {
    color: white;
    float: right;
    font-size: 40px;
    width: 0px;
    padding-bottom: 15px;
    display: block;
  }
  .trapezoid-globe a::after {
    content: " 5+  COUNTRIES OF IMPLEMENTATION ";
    left: 0px;
    font-size: 15px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
  }
  .fa-globe-europe {
    padding-left: 50px;
    padding-top: 60px;
  }

  .longtext {
    width: 150px;
    height: 200px;
    display: flex;
    float: left;
    padding-left: 5px;
    padding-top: 0px;
    text-align: left;
  }

  .longtext p {
    color: black;
    float: left;
    width: 150px;
    flex: none;
    font-weight: 400;
    font-size: 14px;
  }
  .shorttext {
    height: 50px;
    text-align: left;
    padding-left: 10px;
    height: 50vh;
    padding-top: 100px;
  }
  .shorttext p {
    color: black;
    float: left;
    width: 300px;
    flex: none;
    font-weight: 400;
    font-size: 20px;
    padding-top: 190px;
  }
}
</style>
