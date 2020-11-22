
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
    this.mercury = Math.round(this.mercury * 10) / 10;
    let planetLife = this.lifeExpect / mercuryYear;
    
    if(this.mercury < planetLife) {
      this.mercuryYearleft = planetLife - this.mercury;
      this.mercuryYearleft = Math.round(this.mercuryYearleft * 10) / 10;
      console.log(`Your ${this.mercury} years old on Mercury and you have ${this.mercuryYearleft} years left!`);
    } else if(this.mercury > planetLife) {
      this.mercuryYearleft = this.mercury - planetLife;
      this.mercuryYearleft = Math.round(this.mercuryYearleft * 10) / 10;
      console.log(`Your ${this.mercury} years old on Mercury and thats ${this.mercuryYearleft} years more than your expected to live!`);
    }
  }
  venusAge(){
    let venusYear = .62;
    this.venus = this.age / venusYear;
    this.venus = Math.round(this.venus * 10) / 10;
    let planetLife = this.lifeExpect / venusYear;
    
    if(this.venus < planetLife) {
      this.venusYearleft = planetLife - this.venus;
      this.venusYearleft = Math.round(this.venusYearleft * 10) / 10;
      console.log(`Your ${this.venus} years old on Mercury and you have ${this.venusYearleft} years left!`)
    } else if(this.venus > planetLife) {
      this.venusYearleft = this.venus - planetLife;
      this.venusYearleft = Math.round(this.venusYearleft * 10) / 10;
      console.log(`Your ${this.venus} years old on Mercury and thats ${this.venusYearleft} years more than your expected to live!`)
    }
  }
  marsAge(){
    let marsYear = 1.88;
    this.mars = this.age / marsYear;
    this.mars = Math.round(this.mars * 10) / 10;
    let planetLife = this.lifeExpect / marsYear;

    if(this.mars < planetLife) {
      this.marsYearleft = planetLife - this.mars;
      this.marsYearleft = Math.round(this.marsYearleft * 10) / 10;
      console.log(`Your ${this.mars} years old on Mercury and you have ${this.marsYearleft} years left!`);
    } else if(this.mars > planetLife) {
      this.marsYearleft = this.mars - planetLife;
      this.marsYearleft = Math.round(this.marsYearleft * 10) / 10;
      console.log(`Your ${this.mars} years old on Mercury and thats ${this.marsYearleft} years more than your expected to live!`);
    }
  }
  jupiterAge(){
    let jupiterYear = 11.86;
    this.jupiter = this.age / jupiterYear;
    this.jupiter = Math.round(this.jupiter * 10) / 10;
    let planetLife = this.lifeExpect / jupiterYear;
    
    if(this.jupiter < planetLife) {
      this.jupiterYearleft = planetLife - this.jupiter;
      this.jupiterYearleft = Math.round(this.jupiterYearleft * 10) / 10;
      console.log(`Your ${this.mars} years old on Mercury and you have ${this.jupiterYearleft} years left!`);
    } else if(this.jupiter > planetLife) {
      this.jupiterYearleft = this.jupiter - planetLife;
      this.jupiterYearleft = Math.round(this.jupiterYearleft * 10) / 10;
      console.log(`Your ${this.jupiter} years old on Mercury and thats ${this.jupiterYearleft} years more than your expected to live!`);
    }
  }
}


