interface IMyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements IMyInterface {
  constructor(public myNumber: number) {}
  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`
  }

}

const myObject = new MyClass(5);
console.log(myObject.myNumber);
console.log(myObject.myFunc(10));

