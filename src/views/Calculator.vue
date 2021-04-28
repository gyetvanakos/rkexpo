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
                  <div>3</div>
                  <div id='buttonbox'>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <div class='test'></div>
                <div class='test'></div>
              </section>
              <section id='sright'>
                <div class='test'></div>
                <div class='test'></div>
                <div class='test'></div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section id='rightbox'>

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
  background-color: chocolate;
  display: flex;
}

#sleft{
  width: 312px;
  height: 280px;
  background-color: cadetblue;
  display: block;
  align-content: space-around;
  justify-content: space-around;
}

#sright{
  width: 312px;
  height: 280px;
  background-color: gold;
}

.test{
  background-color: blueviolet;
  width: 312px;
  height: 50px;
  padding-top: 45px;
}
</style>