import FooClass from "../index";


test("addValues works",()=>{
  const instance = new FooClass();
  instance.addValue("baz");
  expect(instance.getValues()).toEqual(["bar"]);
});

