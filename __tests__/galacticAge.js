import Person from "./../src/galacticAge.js";

describe("Person class and all its methods", () => {
  let person;

  beforeEach(() => {
    person = new Person ("Ryland", 21);
  });

  test("create new person object with arguments", () => {
    expect(person.name).toEqual("Ryland");
    expect(person.age).toEqual(21);
  });
  
  test("determins age on mercury", () => {
    person.mercuryAge();
    expect (person.mercury).toEqual(87.5);
    expect(Math.round(person.mercuryYearleft * 10) / 10).toEqual(239.6);
  });

  test("determins age on venus", () => {
    person.venusAge();
    expect(person.venus).toEqual(33.9);
    expect(Math.round(person.venusYearleft * 10) / 10).toEqual(92.7);
  });

  test("determins age on mars", () => {
    person.marsAge();
    expect(person.mars).toEqual(11.2);
    expect(Math.round(person.marsYearleft * 10) / 10).toEqual(30.6);
  });

  test("determins age on jupiter", () => {
    person.jupiterAge();
    expect(person.jupiter).toEqual(1.8);
    expect(Math.round(person.jupiterYearleft * 10) / 10).toEqual(4.8);
  });
})