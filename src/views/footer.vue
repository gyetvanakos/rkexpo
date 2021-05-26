<template>
  <div>
    <footer>
      <section id="first">
        <div class="smallcontainer" id="logo">
          <img alt="Vue logo" src="../assets/logo-white.png" />
        </div>
        <div class="smallcontainer" id="fnav">
          <div class="nav" id='footernav'>
            <router-link class="menu" to="/">Home</router-link>
            <router-link class="menu" to="/about">About</router-link>
            <router-link class="menu" to="/References">References</router-link>
            <router-link class="menu" to="/Calculator">Calculator</router-link>
            <router-link class="menu" to="/Contact">Contact</router-link>
          </div>
        </div>
        <div class="smallcontainer" id="socials">
          <div class="nav">
            <div id="text">Sign up for the newsletters in RK Expo</div>
            <div class="eform">
              <form action="/action_page.php">
                <div class="eformbox">
                  <label for="fname"
                    ><a class="footericon"><i class="fas fa-envelope"></i></a>
                  </label>
                </div>
                <div class="eformbox2">
                  <input
                    class="fname"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Enter your email address"
                  />
                </div>
              </form>
            </div>
            <div class="eform2">
              <button>SIGN UP</button>
              <a class="footericontwo"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section id="second">
        <div>
          © 2021 RK EXPO | IČ: 08322279 Privacy Policy | Cookie Policy | Terms
          of use
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  height: 650px;
  width: 100%;
  color: white;
}

a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

.footericon {
  font-size: 27px;
  color: #07839a;
}

.footericontwo {
  font-size: 40px;
  padding-bottom: 18px;
}

#first {
  height: 500px;
  width: 100%;
  background-color: black;
  display: flex;
}

#second {
  height: 150px;
  width: 100%;
  background-color: black;
}

.smallcontainer {
  width: 640px;
  height: 500px;
}

#logo {
  background-color: black;
}

img {
  height: 368px;
  width: 332px;
  padding-top: 30px;
}
svg:not(:root).svg-inline--fa {
  padding-top: 22px;
  padding-left: 10px;
}

#fnav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.nav {
  height: 450px;
  width: 400px;
  display: block;
  justify-content: space-around;
  padding-top: 150px;
}

.menu {
  display: block;
  justify-content: space-around;
  height: 50px;
  width: 400px;
}

#socials {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.eform {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 100px;
}
.eform2 {
  display: flex;
  align-items: center;
  width: 300px;
  height: 130px;
  padding-left: 170px;
}

#text {
  color: white;
  font-weight: 600;
}

.eformbox {
  height: 50px;
  width: 70px;
  float: left;
}

.eformbox2 {
  height: 50px;
  width: 150px;
  float: left;
  padding-top: 11px;
}

.fname- {
  width: 160%;
  height: 30px;
  border-radius: 12px;
  border: none;
}

::placeholder {
  color: #07839a;
  padding-left: 4px;
}

button {
  border-radius: 12px;
  border: none;
  background-color: #07839a;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 17px;
}

/* iphone X */
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
#first {
  flex-direction: column;
  height: 500px;
}

img{
  width: 100px;
  height: 100px;
}

#footernav {
  display: none;
}

.smallcontainer{
  width:100%;
}

.nav{
  padding-top: 0px;
  height: 300px;
}

#second{
  height: 50px;
}

footer{
  height: 0px;
}

}

</style>
