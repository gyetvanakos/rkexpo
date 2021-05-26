<template>
  <div id="nav-wrapper">
    <div class="logo">
      <img src="../assets/logo-black@2x.png" alt="" />
    </div>
    <div id="nav">
      <router-link to="/">{{ $t("home") }}</router-link>
      <router-link to="/about">{{ $t("about") }}</router-link>
      <router-link to="/References">{{ $t("references") }}</router-link>
      <router-link to="/Calculator">{{ $t("calculator") }}</router-link>
      <router-link to="/Contact">{{ $t("contact") }}</router-link>
    </div>
    <div class='langbox'>
        <button
            class='langbutton'
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
  width: 1000px;
  clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
  border-color: black;
  border-style: solid;
  display: flex;
}

.logo {
  width: 80px;
  float: left;
}

.logo img {
  height: 80px;
  width: 80px;
  padding-top: 10px;
}

.langbox{
  padding-top: 20px;
  width: 180px;
  display: flex;
  height: 50%;
  align-content: space-evenly;
  justify-content: space-evenly;
  display: flex;
  padding-right: 100px;
}

.langbutton{
  border: none;
  border-radius:50px;
  background-color: #048198;
  color: white;
  font-size: 13px;
}

#nav {
  padding: 0;
  margin: 0;
  width: 100%;
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

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  #nav-wrapper {
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
}
</style>