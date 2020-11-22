import Person from "./../src/galacticAge.js";

describe("Person class and all its methods", () => {
  let me;
  let dad;

  beforeEach(() => {
    me = new Person ("Ryland", 21);
    dad = new Person ("Chad", 103);
  });

  test("create new me object with arguments", () => {
    expect(me.name).toEqual("Ryland");
    expect(me.age).toEqual(21);
  });

  test("create new dad object with arguments", () => {
    expect(dad.name).toEqual("Chad");
    expect(dad.age).toEqual(103);
  });
  
  test("determins me age on mercury", () => {
    me.mercuryAge();
    expect (me.mercury).toEqual(87.5);
    expect(me.mercuryYearleft).toEqual(239.6);
  });

  test("determins dad age on mercury", () => {
    dad.mercuryAge();
    expect (dad.mercury).toEqual(87.5);
    expect(dad.mercuryYearleft).toEqual(239.6);
  });

  test("determins age on venus", () => {
    me.venusAge();
    expect(me.venus).toEqual(33.9);
    expect(me.venusYearleft).toEqual(92.7);
  });

  test("determins age on mars", () => {
    me.marsAge();
    expect(me.mars).toEqual(11.2);
    expect(me.marsYearleft).toEqual(30.6);
  });

  test("determins age on jupiter", () => {
    me.jupiterAge();
    expect(me.jupiter).toEqual(1.8);
    expect(me.jupiterYearleft).toEqual(4.8);
  });
})