<template>
  <div id="nav-wrapper">
    <div class="logo">
      <img src="../assets/logo-black@2x.png" alt="" />
    </div>
    <div id="nav">
      <webapp-header></webapp-header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/References">References</router-link>
      <router-link to="/Calculator">Calculator</router-link>
      <router-link to="/Contact">Contact</router-link>
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
  border-color: green;
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

  a {
    font-weight: bold;
    color: black;
    font-size: 20px;
    display: inline-block;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
