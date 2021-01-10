"use strict";
exports.__esModule = true;
var character_1 = require("./character");
var weapon_1 = require("./weapon");
var maul = new weapon_1.Weapon(6.5, "Maul");
var gigantius = new character_1.Character("Gigantius", maul);
console.log(gigantius.characterName);
console.log(gigantius.attack());
