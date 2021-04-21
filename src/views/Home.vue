<template>
  <div class="home">
    <div class="left-side-boxes">
      <div class="quality-box">
        <p>Quality, reliability and advantageous solution</p>
      </div>
      <div class="service-box">
        <p>COMPLETE SERVICE FOR EXHIBITIONS AND FAIRS</p>
      </div>
    </div>
    <div class="right-side-box">
      <svg
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
      <p2>TRY OUT THE CALCULATOR</p2>
    </div>
  </div>
</template>

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
  height: 1000px;
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

p2 {
  color: black;
  font-weight: 600;
  position: relative;
  top: 20px;
}

svg {
  fill: black;
  float: left;
  position: relative;
  left: 20px;
  top: 10px;
}
</style>
