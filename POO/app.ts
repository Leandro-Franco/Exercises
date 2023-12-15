class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string; // o caractere "?" indica um atributo opcional
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    console.log(`Creating person ${b}`);
    this._brand= b;
    this._size= s;
    this._resolution= r; // o caractere "?" indica um atributo opcional
    this._connections= c;
  }

  turnOn():void {
    console.log(`${this._brand}, has ${this._size} pols`);
  }
  get connected():string | undefined{
    console.log(this._connectedTo)
    return this._connectedTo;
  }

  set connected(value: string){
    if(!value || this._connections.includes(value)){
      this._connectedTo=value;
      console.log(this._connectedTo) 
    }else{

      this._connectedTo
      console.log('no connection avaible') 
    }
  }
}

const p1 = new Tv('lg', 50, 'fullHd', ['hdmi', 'dvi',  'lan']);
// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
// const p2 = new Tv('João');
// console.log(p1._brand, p1._size, p1._resolution, p1._connections);
// console.log(p2.brand, p2.size, p2.resolution, p2.connections);
p1.turnOn();
p1.connected='hdmi'

// p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 undefined
Maria: zzzzzzz
João: zzzzzzz
*/