<template>
  <div id="nav-wrapper">
    <div class="logo">
      <img src="../assets/logo-black@2x.png" alt="" />
    </div>
    <!-- mobile -->
    <section class="mobilehead">
      <div class="logom">
        <img src="../assets/logo-black@2x.png" alt="" />
      </div>
      <div id="mobilenav" style="font-size: 10.5rem">
        <router-link to="/"
          ><a class="navicon"><i class="fas fa-home"></i></a
        ></router-link>
        <router-link to="/about"
          ><a class="navicon"><i class="fas fa-info-circle"></i></a
        ></router-link>
        <router-link class="navigationref" to="/References"
          ><a class="navicon"><i class="fas fa-images"></i></a
        ></router-link>
        <router-link to="/Calculator"
          ><a class="navicon"><i class="fas fa-calculator"></i></a
        ></router-link>
        <router-link to="/Contact"
          ><a class="navicon"><i class="fas fa-at"></i></a
        ></router-link>
      </div>
    </section>
    <section class="mobileheadlang">
      <button
        class="langbutton"
        v-for="entry in languages"
        :key="entry.title"
        @click="changeLocale(entry.language)"
      >
        {{ entry.title }}
      </button>
    </section>

    <div id="nav">
      <router-link to="/">{{ $t("home") }}</router-link>
      <router-link to="/about">{{ $t("about") }}</router-link>
      <router-link class="navigationref" to="/References">{{
        $t("references")
      }}</router-link>
      <router-link to="/Calculator">{{ $t("calculator") }}</router-link>
      <router-link to="/Contact">{{ $t("contact") }}</router-link>
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

.logom {
  display: none;
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

#mobilenav {
  display: none;
}

.mobileheadlang {
  display: none;
}

@media only screen and (max-width: 414px) {
  .logo {
    display: none;
  }

  #nav {
    height: 500px;
    display: none;
  }

  #nav-wrapper {
    height: 500px;
    clip-path: none !important;
    height: 130px;
    position: sticky !important;
    transform: none !important;
    float: none !important;
    display: block;
  }

  a {
    font-weight: bold;
    color: black;
    font-size: 20px !important;
    display: inline-block;
    text-decoration: none;
    font-size: 30px;
    padding-top: 15px;
    width: 60px;
  }

  .logo img {
    display: none;
  }

  .langbox {
    display: none;
  }

  .logom {
    padding-left: 15px;
    padding-top: 5px;
    display: flex;
  }

  .logom img {
    height: 40px;
    width: 40px;
    padding-top: 10px;
  }

  #mobilenav {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .navicon {
    font-size: 50px;
    display: flex;
    align-content: space-evenly;
    justify-content: center;
  }

  .mobilehead {
    height: 50px;
    display: flex;
  }

  .mobileheadlang {
    width: 100%;
    height: 50px;
    display: flex;
    align-content: space-evenly;
    justify-content: space-evenly;
    padding-top: 25px;
  }

  .langbutton {
    width: 50px;
    height: 50px;
    font-size: 15px;
    align-content: space-around;
    justify-content: space-around;
  }

  .langbutton:active {
    background-color: #048198;
    color: white;
    transition: 0.2s;
  }
}
</style>
