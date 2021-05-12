<template>
  <div id="container">
    <div class="trapezoid"></div>
    <div id="calculator">
      <section id="leftbox">
        <div id="operations">
          <div id="size">
            <div class="title">Size</div>
            <div class="multiply">
              <div>
                <input placeholder="num1" type="number" />
              </div>
              <div>X</div>
              <div>
                <input placeholder="num2" type="number" />
              </div>
            </div>
          </div>
          <div id="material">
            <div class="title">Material</div>
            <div>
              <div class="row">
                Wood<input type="checkbox" class="mat" /> Metal<input
                  type="checkbox"
                  class="mat"
                />
              </div>
              <div class="row">
                Glass<input type="checkbox" class="mat" /> Plastic<input
                  type="checkbox"
                  class="mat"
                />
              </div>
            </div>
          </div>
          <div id="graphics">
            <div class="title">Graphics</div>
            <div class="smallcontainer">
              <div>{{ graph }}</div>
              <div id="buttonbox">
                <button v-on:click.prevent="decrementg">-</button>
                <button v-on:click.prevent="incrementg">+</button>
              </div>
            </div>
          </div>
          <div id="lightening">
            <div class="title">Lightening</div>
            <div class="smallcontainer">
              <div>{{ light }}</div>
              <div id="buttonbox">
                <button v-on:click.prevent="decrementl">-</button>
                <button v-on:click.prevent="incrementl">+</button>
              </div>
            </div>
          </div>
          <div id="lightening">
            <div class="title">Additional features</div>
            <div class="buttonboxcontainer">
              <section id="sleft">
                <div class="test">
                  <div class="stitle">Table</div>
                  <div>{{ table }}</div>
                  <div id="buttonbox">
                    <button v-on:click.prevent="decrementt">-</button>
                    <button v-on:click.prevent="incrementt">+</button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Chair</div>
                  <div>{{ count }}</div>
                  <div id="buttonbox">
                    <button v-on:click.prevent="decrement">-</button>
                    <button v-on:click.prevent="increment">+</button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Fake flower</div>
                  <div>{{ count }}</div>
                  <div id="buttonbox">
                    <button v-on:click.prevent="decrement">-</button>
                    <button v-on:click.prevent="increment">+</button>
                  </div>
                </div>
              </section>
              <section id="sright">
                <div class="test">
                  <div class="stitle">Rear</div>
                  <div>{{ count }}</div>
                  <div id="buttonbox">
                    <button v-on:click.prevent="decrement">-</button>
                    <button v-on:click.prevent="increment">+</button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Bar</div>
                  <div>{{ count }}</div>
                  <div id="buttonbox">
                    <button v-on:click.prevent="decrement">-</button>
                    <button v-on:click.prevent="increment">+</button>
                  </div>
                </div>
                <div class="test">
                  <div class="stitle">Mannequin</div>
                  <div>{{ count }}</div>
                  <div id="buttonbox">
                    <button v-on:click.prevent="decrement">-</button>
                    <button v-on:click.prevent="increment">+</button>
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
                {{ total }}
              </div>
            </div>
            <div id="currency">EUR/CZK</div>
            <div id="infotext">
              Note that this price is just informative and the final price could
              differ.
            </div>
          </div>
        </section>
        <section class="right" id="contact">
          <div class="containerright">
            <div id="text">
              <p>
                We are looking forward <br />
                for collaboration with you
              </p>
            </div>
            <div><button id="contactbutton">CONTACT</button></div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0,
      light: 0,
      graph: 0,
      table: 0,
      total: 0,
      subtotal: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
      this.total += 50;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
        this.total -= 50;
      }
    },

    incrementl() {
      this.light++;
      this.total += 20;
    },
    decrementl() {
      if (this.light > 0) {
        this.light--;
        this.total -= 20;
      }
    },

    incrementg() {
      this.graph++;
      this.total += 30;
    },
    decrementg() {
      if (this.graph > 0) {
        this.graph--;
        this.total -= 30;
      }
    },
    incrementt() {
      this.table++;
      this.total += 40;
    },
    decrementt() {
      if (this.table > 0) {
        this.table--;
        this.total -= 40;
      }
    },
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
  width: 1300px;
  height: 930px;
  display: flex;
  top: 300px;
  position: absolute;
  border-radius: 25px;
  box-shadow: 1px 2px 4px 5px rgba(0, 0, 0, 0.2);
}

#leftbox {
  height: 930px;
  width: 650px;
  background-color: white;
  border-radius: 25px 0px 0px 25px;
  color: #6e6e6e;
}

#rightbox {
  height: 930px;
  width: 650px;
}

.title {
  font-size: 37px;
  padding-top: 20px;
  text-align: left;
  padding-left: 50px;
  color: #6e6e6e;
  font-weight: light;
}

#size {
  display: block;
  justify-content: center;
  align-content: center;
  height: 80px;
}

.multiply {
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 10px;
}

#material {
  height: 150px;
  display: block;
  padding-top: 10px;
}

.row {
  font-size: 28px;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding-top: 20px;
}

input {
  width: 50px;
  border: none;
  border-bottom: 2px solid black;
  background-color: rgb(223, 223, 223);
}

#graphics {
  height: 150px;
  display: block;
  padding-top: 20px;
}

.smallcontainer {
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  align-content: center;
}

#buttonbox {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
}

button {
  height: 30px;
  width: 30px;
  background-color: black;
  color: white;
}

#lightening {
  height: 150px;
  display: block;
  padding-top: 10px;
}

.buttonboxcontainer {
  width: 625px;
  height: 280px;
  display: flex;
}

#sleft {
  width: 312px;
  height: 280px;
  display: block;
  align-content: space-around;
  justify-content: space-around;
}

#sright {
  width: 312px;
  height: 280px;
}

.test {
  width: 312px;
  height: 50px;
  padding-top: 45px;
  display: flex;
  justify-content: center;
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
  height: 465px;
  border-radius: 0px 25px 0px 0px;
}

.containerright {
  display: inline-block;
  align-content: center;
  justify-content: center;
  width: 480px;
  height: 465px;
  padding-top: 100px;
}

#price {
  width: 100%;
  height: 150px;
}

#estimated {
  padding-top: 50px;
  width: 470px;
  border-bottom: solid black 2px;
  font-size: 59px;
}

#infotext {
  padding: 50px;
}

#contact {
  background-color: black;
  height: 465px;
  border-radius: 0px 0px 25px 0px;
}

#text {
  width: 100%;
  height: 200px;
  font-size: 40px;
}

#contactbutton {
  width: 430px;
  height: 76px;
  background-color: white;
  color: #048198;
  font-size: 52px;
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
  font-size: 28px;
  font-weight: bold;
}
</style>
