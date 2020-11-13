export default class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.lifeExpect = 78.5;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
  }

  mercuryAge(){
    let mercuryYear = .24;
    let yearsLeft = 0;
    let planetAge = this.age / mercuryYear;
    let planetLife = this.lifeExpect % mercuryYear;

    if(planetAge < planetLife) {
      this.mercury = planetAge;
      yearsLeft = planetLife - planetAge
      //console.log("Your ${planetAge} years old on Mercury and you have ${yearsLeft} years left!")
    } else if(planetAge > planetLife) {
      this.mercury = planetAge;
      yearsLeft = planetAge - planetLife
      //console.log("Your ${planetAge} years old on Mercury and thats ${yearsLeft} years more than your expected to live!")
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

  }
}