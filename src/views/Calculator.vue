<template>
  <div id='container'>
    <div id='calculator'>
      <section id='leftbox'>
        <div id='operations'>
          <div id='size'>
            <div class='title'>Size</div>
            <div class='multiply'>
            <div> 
              <input
                    type="text"
                  />
            </div>
            <div>X</div>
            <div>
              <input
                    type="text"
                  />
            </div>
          </div>
          </div>
          <div id='material'>
            <div class='title'>Material</div>
            <div>
              <div class='row'>
                Wood<input type="checkbox" class="mat">
                Metal<input type="checkbox" class="mat">
              </div>
              <div class='row'> 
                Glass<input type="checkbox" class="mat">
                Plastic<input type="checkbox" class="mat">
              </div>
            </div>
          </div>
          <div id='graphics'> 
            <div class='title'>Graphics</div>
            <div class='smallcontainer'>
              <div>3</div>
              <div id='buttonbox'>
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>
          <div id='lightening'>
            <div class='title'>Lightening</div>
            <div class='smallcontainer'>
              <div>3</div>
              <div id='buttonbox'>
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>
          <div id='lightening'>
            <div class='title'>Additional features</div>
            <div class='buttonboxcontainer'>
              <section id='sleft'>
                <div class='test'>
                  <div class='stitle'>Table</div>
                  <div>3</div>
                  <div id='buttonbox'>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <div class='test'>
                  <div class='stitle'>Chair</div>
                  <div>3</div>
                  <div id='buttonbox'>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <div class='test'>
                  <div class='stitle'>Fake flower</div>
                  <div>3</div>
                  <div id='buttonbox'>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
              </section>
              <section id='sright'>
                <div class='test'>
                  <div class='stitle'>Rear</div>
                  <div>3</div>
                  <div id='buttonbox'>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <div class='test'>
                  <div class='stitle'>Bar</div>
                  <div>3</div>
                  <div id='buttonbox'>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <div class='test'>
                  <div class='stitle'>Mannequin</div>
                  <div>3</div>
                  <div id='buttonbox'>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section id='rightbox'>
        <section class='right' id='priceinfo'>
          <div class='containerright'>
          <div>Average price of your booth</div>
          <div id='price'>
            <div id='estimated'> 
              50000 CZK
            </div>
          </div>
          <div id='currency'>EUR/CZK</div>
          <div id='infotext'>Note that this price is just informative and the final price could differ.</div>
          </div>
        </section>
        <section class='right' id='contact'>
          <div class='containerright'>
            <div id='text'><p> We are looking forward <br> for collaboration with you</p></div>
            <div><button id='contactbutton'>CONTACT</button></div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
#container{
  width: 100%;
  height:1400px;
  display: flex;
  align-content: center;
  justify-content: center;
}
#calculator{
  width:1300px;
  height:930px;
  display: flex;
  padding-top: 300px;
}

#leftbox{
  height:930px;
  width:650px;
  background-color:rgb(223, 223, 223);
}

#rightbox{
  height:930px;
  width:650px;
  background-color:grey;
}

.title{
  font-size: 41px;
  padding-top: 20px;
  text-align: left;
  padding-left: 50px;
}

#size{
  display: block;
  justify-content: center;
  align-content: center;
  height: 80px;
  
}

.multiply{
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 10px;
}

#material{
  height: 150px;
  display: block;
  padding-top: 10px;
}

.row{
  font-size: 28px;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding-top: 20px;
}

input{
  width:50px;
  border: none;
  border-bottom: 2px solid black;
  background-color: rgb(223, 223, 223);
}

#graphics{
  height: 150px;
  display: block;
  padding-top: 20px;
}

.smallcontainer{
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  align-content: center;
}

#buttonbox{
  width:80px;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
}

button{
  height: 30px;
  width: 30px;
  background-color: black;
  color: white;
}

#lightening{
  height: 150px;
  display: block;
  padding-top: 10px;
}

.buttonboxcontainer{
  width: 625px;
  height: 280px;
  display: flex;
}

#sleft{
  width: 312px;
  height: 280px;
  display: block;
  align-content: space-around;
  justify-content: space-around;
}

#sright{
  width: 312px;
  height: 280px;
}

.test{
  width: 312px;
  height: 50px;
  padding-top: 45px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.stitle{
  padding-right: 20px;
}

#priceinfo{
  background-color: #B9B9B9;
  display: inline-block;
  align-content: center;
  justify-content: center;
  width:100%;
  height: 465px;
}

.containerright{
  display: inline-block;
  align-content: center;
  justify-content: center;
  width:480px;
  height: 465px;
  padding-top: 100px;
}

#price{
  width:100%;
  height:150px;

}

#estimated{
  padding-top: 50px;
  width:470px;
  border-bottom: solid black 2px;
  font-size:59px;
}

#infotext{
  padding:50px;
}

#contact{
  background-color: black;
  height: 465px;
}

#text{
  width:100%;
  height: 200px;
  font-size: 35px;
}

#contactbutton{
  width: 430px;
  height: 76px;
  background-color: white;
  color: #048198;
  font-size: 52px;
  text-align: center;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}
</style>