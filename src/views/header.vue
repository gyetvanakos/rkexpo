<template>
  <div id="nav-wrapper">
    <div class="logo">
      <img src="../assets/logo-black@2x.png" alt="" />
    </div>
    <!--<div class="dropdown">
              <div class="mainmenubtn">Menu</div>
                <div class="dropdown-content">
                  <router-link class='navmenu' to="/">{{ $t("home") }}</router-link> 
                  <router-link class='navmenu' to="/about">{{ $t("about") }}</router-link> 
                  <router-link class='navmenu' to="/References">{{ $t("references") }}</router-link> 
                  <router-link class='navmenu' to="/Calculator">{{ $t("calculator") }}</router-link> 
                  <router-link class='navmenu' to="/Contact">{{ $t("contact") }}</router-link> 
                </div>
    </div>-->
    <div id="nav">
      <router-link to="/">{{ $t("home") }}</router-link>
      <router-link to="/about">{{ $t("about") }}</router-link>
      <router-link class="navigationref" to="/References">{{
        $t("references")
      }}</router-link>
      <router-link to="/Calculator">{{
        $t("calculator")
      }}</router-link>
      <router-link to="/Contact">{{
        $t("contact")
      }}</router-link>
    </div>
    <div class="langbox">
      <button
        class="langbutton"
        v-for="entry in languages"
        :key="entry.title"
        @click="changeLocale(entry.language)"
      >
        {{ entry.title }}
      </button>
    </div>
  </div>
</template>

<script>
import i18n from "../i18n";

export default {
  data() {
    return {
      languages: [
        { language: "en", title: "EN" },
        { language: "cz", title: "CZ" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style lang="scss" scoped>
#nav-wrapper {
  background-color: white;
  height: 100px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}

.navmenu {
  font-weight: 100;
  font-family: PT Sans;
}

.logo {
  flex-grow: 1;
  width: 80px;
  float: left;
}

.logo img {
  height: 80px;
  width: 80px;
  padding-top: 10px;
}

.langbox {
  flex-grow: 1;
  padding-top: 20px;
  display: flex;
  height: 100%;
  align-content: space-around;
  justify-content: space-around;
  display: flex;
}

.langbutton {
  border: none;
  border-radius: 50px;
  background-color: #048198;
  color: white;
  font-size: 13px;
  height: 50px;
  width: 50px;
  align-content: space-evenly;
  justify-content: space-evenly;
}

.langbutton:hover {
  background-color: white;
  color: black;
  transition: 0.2s;
}

#nav {
  flex-grow: 10;
  width: 80px;
  float: left;
  padding: 0;
  margin: 0;
  width: 70%;
  padding-top: 13px;

  a {
    font-weight: bold;
    color: black;
    font-size: 20px;
    display: inline-block;
    text-decoration: none;
    padding-left: 25px;
    padding-top: 25px;

    &.router-link-exact-active {
      color: #048198;
    }
  }
}

/*dropdown*/
/*.mainmenubtn {
    color: #4cb690;
    border: none;
    opacity: 100%;
    background-color: Transparent;
    font-family: 'Audiowide';

}
.mainmenubtn:hover {
    color: #4cb690;
    text-decoration: underline; 
    }
.dropdown {
    position: absolute;
    display: inline-block;
    display: none;
}

.dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    color: white;
}
.dropdown-content a {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 20px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}*/

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  #nav {
    height: 500px;
  }

  #nav-wrapper {
    height: 500px;
    width: 375px;
    clip-path: none !important;
    height: 70px;
    position: sticky !important;
    transform: none !important;
    float: none !important;
  }

  a {
    font-weight: bold;
    color: black;
    font-size: 10px !important;
    display: inline-block;
    text-decoration: none;
    padding-left: 7px !important;
    padding-top: 25px;

    &.router-link-exact-active {
      color: #048198;
    }
  }
  .logo img {
    height: 40px;
    width: 40px;
    padding-top: 10px;
  }

  .langbutton {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }

  /*dropdown*/
  /*.mainmenubtn {
    color: #4cb690;
    border: none;
    opacity: 100%;
    background-color: Transparent;
    font-family: 'Audiowide';

}
.mainmenubtn:hover {
    color: #4cb690;
    text-decoration: underline; 
    }
.dropdown {
    position: absolute;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    color: white;
}
.dropdown-content a {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 20px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}*/
}
</style>