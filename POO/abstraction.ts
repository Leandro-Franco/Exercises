abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
  // adicionando valor estático
  static apresentation(character: Character){
    character.talk();
    character.specialMove();
    Character.fighter += 1;
    console.log(`Fighters on fight: ${Character.fighter}`)
  };

  private static fighter = 0;
}


class MeleeCharacter extends Character {
  constructor(public name: string, private _specialMove: string, private _phrase: string) {
    super();
  }
  talk() {
    console.log(`o personagem ${this.name} fala ${this._phrase}`)
  }
  specialMove(): void {
    console.log(`${this._specialMove}`)
  }
}

class LongRangeCharacter extends Character {
  constructor(public name: string, private _specialMove: string, private _phrase: string) {
    super(); 
  }
  talk() {
    console.log(`o personagem ${this.name} fala ${this._phrase}`)
  }
  specialMove(): void {
    console.log(`${this._specialMove}`)
  }
}

const melee = new MeleeCharacter('ryu', 'shoriuken', 'he he he')
const ranged = new LongRangeCharacter('adc', 'super tiro', ' pow pow pow')


// melee.specialMove()
// melee.talk()
// ranged.specialMove()
// ranged.talk()

Character.apresentation(melee)
Character.apresentation(ranged)