import {makeAutoObservable} from "mobx";


interface Obj {
  name: string;
}

class FooClass {
  values: string[];
  objs: Obj[];
  constructor() {
    this.values = [];
    this.objs = [];
    makeAutoObservable(this);
  }
  addValue(value: string){
    this.values.push(value);
  }
  addObj(obj: Obj){
    this.objs.push(obj);
  }
  getValues() {
    return this.values;
  }
  getObjs() {
    return this.objs;
  }
}


export default FooClass;
