abstract class Character {
  constructor(public name: string){}
  abstract talk(): void
  abstract specialMove(): void
}
class MeleeCharacter extends Character {
  constructor(public name: string) {
    super(name); 
  }
  talk() {
    console.log(`o personagem ${this.name} fala`)
  }
  specialMove(): void {
    console.log(`shoriuken`)
  }
}

class LongRangeCharacter extends Character {
  constructor(public name: string) {
    super(name); 
  }
  talk() {
    console.log(`o personagem ${this.name} fala de maneira longa`)
  }
  specialMove(): void {
    console.log(`hadooken`)
  }
}

const melee = new MeleeCharacter('ryu')
const range = new LongRangeCharacter('ryu de longe')


melee.specialMove()
melee.talk()
range.specialMove()
range.talk()