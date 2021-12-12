import FooClass from "../index";


test("addValues works",()=>{
  const instance = new FooClass();
  instance.addValue("baz");
  expect(instance.getValues()).toEqual(["bar"]);
});

test("addObjs works", ()=>{
  const instance = new FooClass();
  instance.addObj({name:"bar"});
  expect(instance.getObjs()).toEqual([{name:"baz"}]);
})
