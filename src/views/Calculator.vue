<template>
  <div id="container">
    <div class="trapezoid"></div>
    <div id="calculator">
      <section id="leftbox">
        <div id="operations">
          <div id="size">
            <div class="calctitle">Size</div>
            <div class="multiply">
                <input
                  id='multiplyinput'
                  placeholder="num1"
                  type="number"
                  v-model="squareMeter"
                  @change="squareMeterChanged"
                />
            </div>
          </div>
          <div id="material">
            <div class="calctitle">Material</div>
            <div>
              <div class="row">
                Wood<input
                  v-model="isWoodSelected"
                  type="checkbox"
                  class="mat"
                  @change="check($event, 30)"
                />
                Metal<input
                  type="checkbox"
                  class="mat"
                  @change="check($event, 30)"
                  v-model="isMetalSelected"
                />
              </div>
              <div class="row">
                Glass<input
                  type="checkbox"
                  class="mat"
                  v-model="isGlassSelected"
                  @change="check($event, 30)"
                />
                Plastic<input
                  v-model="isPlasticSelected"
                  type="checkbox"
                  class="mat"
                  @change="check($event, 30)"
                />
              </div>
            </div>
          </div>
          <div id="graphics">
            <div class="calctitle">Graphics</div>
            <div class="smallcontainer">
              <div>{{ graphicsCounter }}</div>
              <div id="buttonbox">
                <button
                  @click="decrement(30)"
                  v-on:click.prevent="graphicsCounter -= 1"
                  :disabled="graphicsCounter == 0"
                >
                  -
                </button>
                <button
                  @click="increment(30)"
                  v-on:click.prevent="graphicsCounter += 1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div id="lightening">
            <div class="calctitle">Lightening</div>
            <div class="smallcontainer">
              <div>{{ lightCounter }}</div>
              <div id="buttonbox">
                <button
                  @click="decrement(30)"
                  v-on:click.prevent="lightCounter -= 1"
                  :disabled="lightCounter == 0"
                >
                  -
                </button>
                <button
                  @click="increment(30)"
                  v-on:click.prevent="lightCounter += 1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div id="lightening">
            <div class="calctitle">Additional features</div>
            <div class="buttonboxcontainer">
              <section id="sleft">
                <div class="test">
                  <div class="stitle">Table</div>
                  <div>{{ tableCounter }}</div>
                  <div id="buttonbox">
                    <button
                      @click="decrement(30)"
                      v-on:click.prevent="tableCounter -= 1"
                      :disabled="tableCounter == 0"
                    >
                      -
                    </button>
                    <button
                      @click="increment(30)"
                      v-on:click.prevent="tableCounter += 1"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Chair</div>
                  <div>{{ chairCounter }}</div>
                  <div id="buttonbox">
                    <button
                      @click="decrement(30)"
                      v-on:click.prevent="chairCounter -= 1"
                      :disabled="chairCounter == 0"
                    >
                      -
                    </button>
                    <button
                      @click="increment(30)"
                      v-on:click.prevent="chairCounter += 1"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Fake flower</div>
                  <div>{{ flowerCounter }}</div>
                  <div id="buttonbox">
                    <button
                      @click="decrement(30)"
                      v-on:click.prevent="flowerCounter -= 1"
                      :disabled="flowerCounter == 0"
                    >
                      -
                    </button>
                    <button
                      @click="increment(30)"
                      v-on:click.prevent="flowerCounter += 1"
                    >
                      +
                    </button>
                  </div>
                </div>
              </section>
              <section id="sright">
                <div class="test">
                  <div class="stitle">Rear</div>
                  <div>{{ rearCounter }}</div>
                  <div id="buttonbox">
                    <button
                      @click="decrement(30)"
                      v-on:click.prevent="rearCounter -= 1"
                      :disabled="rearCounter == 0"
                    >
                      -
                    </button>
                    <button
                      @click="increment(30)"
                      v-on:click.prevent="rearCounter += 1"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Bar</div>
                  <div>{{ barCounter }}</div>
                  <div id="buttonbox">
                    <button
                      @click="decrement(30)"
                      v-on:click.prevent="barCounter -= 1"
                      :disabled="barCounter == 0"
                    >
                      -
                    </button>
                    <button
                      @click="increment(30)"
                      v-on:click.prevent="barCounter += 1"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Mannequin</div>
                  <div>{{ mannequinCounter }}</div>
                  <div id="buttonbox">
                    <button
                      @click="decrement(30)"
                      v-on:click.prevent="mannequinCounter -= 1"
                      :disabled="mannequinCounter == 0"
                    >
                      -
                    </button>
                    <button
                      @click="increment(30)"
                      v-on:click.prevent="mannequinCounter += 1"
                    >
                      +
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section id="rightbox">
        <section class="right" id="priceinfo">
          <div class="containerright">
            <div id="avgtext">Average price of your booth</div>
            <div id="price">
              <div id="estimated">
                {{ total }} €
              </div>
            </div>
            <div id="infotext">
              Note that this price is just informative and the final price could
              differ.
            </div>
          </div>
        </section>
        <section class="right" id="calccontact">
          <div class="containerright">
            <div id="text">
              <p>
                We are looking forward <br />
                for collaboration with you
              </p>
            </div>
            <div><a href="/Contact"><button id="contactbutton">CONTACT</button></a></div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isPlasticSelected: false,
    isWoodSelected: false,
    isMetalSelected: false,
    isGlassSelected: false,
    total: 0,
    graphicsCounter: 0,
    lightCounter: 0,
    tableCounter: 0,
    chairCounter: 0,
    flowerCounter: 0,
    rearCounter: 0,
    barCounter: 0,
    mannequinCounter: 0,
    squareMeter: 0,
  }),
  methods: {
    squareMeterChanged() {
      if (this.squareMeter != 0) {
        if (this.squareMeter < 10) {
          this.total += 30;
        } else if (this.squareMeter >= 10 && this.squareMeter < 20) {
          this.total += 50;
        } else if (this.squareMeter >= 20) {
          this.total + 100;
        }
      }
    },
    check(e, cost) {
      if (e.target.checked == true) {
        this.total += cost;
      } else {
        this.total -= cost;
      }
    },
    increment(cost) {
      this.total += cost;
    },
    decrement(cost) {
      this.total -= cost;
    },
    reset() {
      this.total = 0;
      this.graphicsCounter = 0;
      this.lightCounter = 0;
      this.tableCounter = 0;
      this.chairCounter = 0;
      this.flowerCounter = 0;
      this.rearCounter = 0;
      this.barCounter = 0;
      this.mannequinCounter = 0;
    },
  },
  beforeDestroy() {
    this.reset();
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 1400px;
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: "PT Sans";
  color: black;
}

#calculator {
  width: 68vw;
  height: 98vh;
  display: flex;
  top: 300px;
  position: absolute;
  border-radius: 25px;
  box-shadow: 1px 2px 4px 5px rgba(0, 0, 0, 0.2);
}

#leftbox {
  height: 98vh;
  width: 34vw;
  background-color: white;
  border-radius: 25px 0px 0px 25px;
  color: #6e6e6e;
}

#rightbox {
  height: 98vh;
  width: 34vw;
}

#operations{
  height:100%
}

.calctitle {
  font-size: 2rem;
  text-align: left;
  color: #6e6e6e;
  padding-left: 55px;
  height: 50px;
}

#size {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 80px;
  width: 50%;
}

.multiply {
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 10px;
}

#material {
  display: block;
  padding-top: 10px;
}

.row {
  font-size: 1.5rem;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
}

input {
  width: 3vw;
  border: none;
  border-bottom: 2px solid black;
  background-color: rgb(223, 223, 223);
}

#graphics {
  display: block;
  padding-top: 20px;
}

.smallcontainer {
  display: flex;
  justify-content: space-around;
  align-content: center;
}

#buttonbox {
  width: 4vw;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
}

button {
  height: 40px;
  width: 40px;
  background-color: black;
  color: white;
  margin: auto;
  border-radius: 5px;
  padding: 10px;
}

#lightening {
  height: 16vh;
  display: block;
  padding-top: 10px;
}

.buttonboxcontainer {
  height: 29vh;
  display: flex;
}

#sleft {
  width: 32vw;
  height: 29vh;
  display: block;
  align-content: space-around;
  justify-content: space-around;
  padding-top: 50px;
}

#sright {
  width: 32vw;
  height: 29vh;
  padding-top: 50px;
}

.test {
  height: 9vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}

.stitle {
  padding-right: 20px;
}

#priceinfo {
  background-color: #b9b9b9;
  display: inline-block;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 49vh;
  border-radius: 0px 25px 0px 0px;
}

.containerright {
  align-content: center;
  justify-content: center;
  height: 49vh;
  padding-top: 100px;
}

#price {
  width: 100%;
  height: 150px;
}

#estimated {
  padding-top: 50px;
  border-bottom: solid black 2px;
  font-size: 3vw;
}

#infotext {
  padding: 50px;
}

#calccontact {
  background-color: black;
  height: 49vh;
  border-radius: 0px 0px 25px 0px;
  width: 100%;
}

#text {
  width: 100%;
  height: 21vh;
  font-size: 35px;
}

#contactbutton {
  width: 30vw;
  height: 10vh ;
  background-color: white;
  color: #048198;
  font-size: 35px;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

.trapezoid {
  width: 100%;
  height: 147.7%;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0 100%);
  background-color: #048198;
  position: absolute;
}

#avgtext {
  font-size: 2vw;
  font-weight: bold;
}

#multiplyinput{
  height: 50px;
  width: 50px;
  font-size: 3vh;
}

@media screen and (max-width: 992px) {
#container {
  width: 100%;
  height: 2000px;
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: "PT Sans";
  color: black;
}

#calculator {
  height: 930px;
  top: 150px;
  display: block;
  position: absolute;
  border-radius: 0px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
}

#leftbox {
  height: 930px;
  width: 650px;
  background-color: rgb(209, 209, 209);
  border-radius: 25px 0px 0px 25px;
  color: #6e6e6e;
}

#rightbox {
  height: 930px;
  width: 650px;
}

.trapezoid {
  visibility: hidden;
}

#priceinfo {
  border-radius: 0px 0px 0px 0px;
}

#calccontact {
  border-radius: 0px 0px 25px 25px;
}

.mat{
  height: 30px;
  width: 30px;
  padding-top: 30px;
}

.row {
  height: 70px;
}

#lightening {
  height: 13vh;
  display: block;
  padding-top: 0px;
}

#leftbox {
  height: 930px;
  width: 650px;
  background-color: rgb(209, 209, 209);
  border-radius: 25px 25px 0px 0px;
  color: #6e6e6e;
}

.stitle {
  font-size: 25px;
}

}


</style>
