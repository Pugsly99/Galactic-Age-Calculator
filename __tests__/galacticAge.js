import Person from "./../src/galacticAge.js";

describe("Person class and all its methods", () => {
  let me;
  let dad;

  beforeEach(() => {
    me = new Person ("Ryland", 21);
    dad = new Person ("Chad", 200);
  });

  test("create new me object with arguments", () => {
    expect(me.name).toEqual("Ryland");
    expect(me.age).toEqual(21);
  });

  test("create new dad object with arguments", () => {
    expect(dad.name).toEqual("Chad");
    expect(dad.age).toEqual(200);
  });
  
  test("determins me age on mercury", () => {
    me.mercuryAge();
    expect (me.mercury).toEqual(87.5);
  });

  test("determins me years left on mercury", () => {
    me.mercuryAge();
    expect(me.mercuryYearleft).toEqual(239.6);
  });

  test("determins dad age on mercury", () => {
    dad.mercuryAge();
    expect (dad.mercury).toEqual(833.3);
  });

  test("determins dad years left on mercury", () => {
    dad.mercuryAge();
    expect(dad.mercuryYearleft).toEqual(506.2);
  });

  test("determins age on venus", () => {
    me.venusAge();
    expect(me.venus).toEqual(33.9);
  });

  test("determins me years left on venus", () => {
    me.venusAge();
    expect(me.venusYearleft).toEqual(92.7);
  });

  test("determins dad age on venus", () => {
    dad.venusAge();
    expect (dad.venus).toEqual(322.6);
  });

  test("determins dad years left on venus", () => {
    dad.venusAge();
    expect(dad.venusYearleft).toEqual(196);
  });

  test("determinsme age on mars", () => {
    me.marsAge();
    expect(me.mars).toEqual(11.2);
  });

  test("determins me years left on mars", () => {
    me.marsAge();
    expect(me.marsYearleft).toEqual(30.6);
  });
  
  test("determins dad age on mars", () => {
    dad.marsAge();
    expect (dad.mars).toEqual(106.4);
  });

  test("determins dad years left on mars", () => {
    dad.marsAge();
    expect(dad.marsYearleft).toEqual(64.6);
  });

  test("determins me age on jupiter", () => {
    me.jupiterAge();
    expect(me.jupiter).toEqual(1.8);
  });

  test("determins me years left on jupiter", () => {
    me.jupiterAge();
    expect(me.jupiterYearleft).toEqual(4.8);
  });

  test("determins dad age on jupiter", () => {
    dad.jupiterAge();
    expect (dad.jupiter).toEqual(16.9);
  });

  test("determins dads years left on jupiter", () => {
    dad.jupiterAge();
    expect(dad.jupiterYearleft).toEqual(10.3);
  });
})