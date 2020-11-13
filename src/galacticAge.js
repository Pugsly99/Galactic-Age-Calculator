export default class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.lifeExpect = 78.5;
    
    this.mercury = 0;
    this.mercuryYearleft = 0;

    this.venus = 0;
    this.venusYearleft = 0;

    this.mars = 0;
    this.marsYearleft = 0;

    this.jupiter = 0;
    this.jupiterYearleft = 0;
  }

  mercuryAge(){
    let mercuryYear = .24;
    this.mercury = this.age / mercuryYear;
    let planetLife = this.lifeExpect % mercuryYear;

    if(this.mercury < planetLife) {
      this.mercury 
      this.mercuryYearleft = planetLife - this.mercury
      console.log("Your ${this.mercury} years old on Mercury and you have ${this.mercuryYearleft} years left!")
    } else if(this.mercury > planetLife) {
      this.mercury 
      this.mercuryYearleft = this.mercury - planetLife
      console.log("Your ${this.mercury} years old on Mercury and thats ${this.mercuryYearleft} years more than your expected to live!")
    }
  }
  venusAge(){
    let venusYear = .62;
    let yearsLeft = 0;
    let planetAge = this.age / venusYear;
    let planetLife = this.lifeExpect % venusYear;

    if(planetAge < planetLife) {
      this.venus = planetAge;
      yearsLeft = planetLife - planetAge
      //console.log("Your ${planetAge} years old on Venus and you have ${yearsLeft} years left!")
    } else if(planetAge > planetLife) {
      this.venus = planetAge;
      yearsLeft = planetAge - planetLife
      //console.log("Your ${planetAge} years old on Venus and thats ${yearsLeft} years more than your expected to live!")
    }
  }

  marsAge(){
    let marsYear = 1.88;
    let yearsLeft = 0;
    let planetAge = this.age / marsYear;
    let planetLife = this.lifeExpect % marsYear;

    if(planetAge < planetLife) {
      this.mars = planetAge;
      yearsLeft = planetLife - planetAge
      //console.log("Your ${planetAge} years old on Mars and you have ${yearsLeft} years left!")
    } else if(planetAge > planetLife) {
      this.mars = planetAge;
      yearsLeft = planetAge - planetLife
      //console.log("Your ${planetAge} years old on Mars and thats ${yearsLeft} years more than your expected to live!")
    }
  }
 
  jupiterAge(){
    let jupiterYear = 11.86;
    let yearsLeft = 0;
    let planetAge = this.age / jupiterYear;
    let planetLife = this.lifeExpect % jupiterYear;

    if(planetAge < planetLife) {
      this.jupiter = planetAge;
      yearsLeft = planetLife - planetAge
      //console.log("Your ${planetAge} years old on Jupiter and you have ${yearsLeft} years left!")
    } else if(planetAge > planetLife) {
      this.jupiter = planetAge;
      yearsLeft = planetAge - planetLife
      //console.log("Your ${planetAge} years old on Jupiter and thats ${yearsLeft} years more than your expected to live!")
    }
  }
}