"use strict";
exports.__esModule = true;
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(characterName, weapon) {
        this.characterName = characterName;
        this.weapon = weapon;
    }
    Character.prototype.attack = function () {
        var returnString = this.characterName + " attacks a nefarious target with his " + this.weapon.weaponName + " for " + this.weapon.averageDamage.toString();
        return returnString;
    };
    return Character;
}());
exports.Character = Character;
