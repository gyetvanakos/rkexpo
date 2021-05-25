<template>
  <div id="nav-wrapper">
    <div class="logo">
      <img src="../assets/logo-black@2x.png" alt="" />
    </div>
    <div id="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/References">REFERENCES</router-link>
      <router-link to="/Calculator">CALCULATOR</router-link>
      <router-link to="/Contact">CONTACT</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav-wrapper {
  background-color: white;
  height: 100px;
  width: 1000px;
  clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
  border-color: black;
  border-style: solid;
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
    display: none;
  }
}
</style>
<script>
export default {};
</script>
