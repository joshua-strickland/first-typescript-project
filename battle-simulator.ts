import { Character } from './character';
import { Weapon } from './weapon';
import { RangedWeapon } from './weapon';

var maul = new Weapon(6.5, "Maul")

var gigantius = new Character("Gigantius", maul, 5,2,0,0,0,0)

var halberd = new Weapon(5.5, "Halberd")

var durdror = new Character("Durdor", halberd, 5,0,0,5,0,0)

//improve with array and for each and multiple characters
var characterArray: Array<Character> = [gigantius, durdror];

for (var i of characterArray){
    console.log(i.attack());
}

