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
        <router-link to="/Calculator">
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
          <p id="pcalculator">{{ $t("tryOut") }}</p></router-link
        >
      </div>
    </div>
    <About />
    <References />
    <div class="calculate">
      <div class="text">
        {{ $t("difference") }}
      </div>
      <div>
        <router-link class="navbutton" to="/Calculator">
          <button class="calculatebutton">
            {{ $t("calculateMyPrice") }}
          </button>
        </router-link>
      </div>
    </div>
    <Contact />
  </div>
</template>

<script>
import References from "../views/References";
import About from "../views/About";
import Contact from "../views/Contact";
export default {
  components: {
    References,
    About,
    Contact,
  },
  name: "Home",
  metaInfo: {
    title: "",
    // override the parent template and just use the above title only
    titleTemplate: "Home | RK Expo",
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
  text-decoration: none;
  font-weight: 600;
  position: relative;
  top: 42px;
  left: 10px;
  text-decoration: none;
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
  text-decoration: none;
  border-style: none;
}

i {
  color: white;
}
@media only screen and (max-width: 414px) {
  .home {
    background: url(../assets/exhibitor.png);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 812px;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  }

  .quality-box {
    height: 90px;
    width: 200px;
    background: rgba(4, 129, 152, 0.59);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service-box {
    height: 90px;
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
    display: none;
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
    text-decoration: none;
  }
}
</style>
