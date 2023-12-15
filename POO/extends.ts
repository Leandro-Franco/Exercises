class SuperClass{
  isSuper: boolean

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log(this.isSuper)
    console.log('olá, mundo: from super')
  }

  public sayHello2(): void {
    console.log(this.isSuper)
    console.log('olá, mundo: from sub')
  }

}


class SubClass extends SuperClass{ 
  constructor() {
    super();
    this.isSuper = false;
    console.log(this.isSuper)
  }
  // public sayHello2(): void {
  //   this.sayHello();
  // }
}

const myFunction = (objeto: SuperClass) => {
  if(objeto.isSuper){
    objeto.sayHello();
  }else{
    objeto.sayHello2();
  }
  // console.log(objeto.isSuper ? 'Super!' : 'Sub!');
}

const sup = new SuperClass();
const sub = new SubClass();


myFunction(sup)
myFunction(sub)
