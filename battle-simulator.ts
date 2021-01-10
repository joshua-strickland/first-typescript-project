import {Character} from './character';
import { Weapon } from './weapon';

var maul = new Weapon(6.5, "Maul")

var gigantius = new Character("Gigantius", maul)

console.log(gigantius.characterName)
console.log(gigantius.attack())