"use strict";
exports.__esModule = true;
var character_1 = require("./character");
var weapon_1 = require("./weapon");
var maul = new weapon_1.Weapon(6.5, "Maul");
var gigantius = new character_1.Character("Gigantius", maul, 5, 2, 0, 0, 0, 0);
var halberd = new weapon_1.Weapon(5.5, "Halberd");
var durdror = new character_1.Character("Durdor", halberd, 5, 0, 0, 5, 0, 0);
//improve with array and for each and multiple characters
var characterArray = [gigantius, durdror];
for (var _i = 0, characterArray_1 = characterArray; _i < characterArray_1.length; _i++) {
    var i = characterArray_1[_i];
    console.log(i.attack());
}
