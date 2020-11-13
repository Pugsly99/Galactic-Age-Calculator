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
    expect(Math.round(person.mercury * 10) / 10).toEqual(87.5)
  });

  test("determins age on venus", () => {
    person.venusAge();
    expect(Math.round(person.venus * 10) / 10).toEqual(33.9)
  });

  test("determins age on mars", () => {
    person.marsAge();
    expect(Math.round(person.mars * 10) / 10).toEqual(11.2)
  });
})