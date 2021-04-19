<template>
  <div id="nav-wrapper">
    <div class="logo"><img src="../assets/logo-black@2x.png" alt="" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav-wrapper {
  background-color: red;
  height: 110px;
  width: 1000px;
  position: relative;
}

#nav-wrapper:after {
  content: "";
  line-height: 0;
  font-size: 0;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-bottom: 110px solid #fff;
  border-left: 30px solid transparent;
  border-right: 30 solid #fff;
  position: absolute;
  top: 0px;
  right: 0;
}

.logo {
  float: left;
  width: 200px;
  height: 50px;
}
</style>
