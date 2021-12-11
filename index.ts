import {makeAutoObservable} from "mobx";


interface Obj {
  name: string;
}

class FooClass {
  values: string[];
  constructor() {
    this.values = [];
    makeAutoObservable(this);
  }
  addValue(value: string){
    this.values.push(value);
  }
  getValues() {
    return this.values;
  }
}


export default FooClass;
