"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RangedWeapon = exports.Weapon = void 0;
var Weapon = /** @class */ (function () {
    function Weapon(averageDamage, weaponName) {
        this.averageDamage = averageDamage;
        this.weaponName = weaponName;
    }
    //new attack return type string method, takes in character class, nabs attributes, adds attribute to avg dmg
    Weapon.prototype.getWeaponAttackString = function (strengthModifier) {
        var totalAverageDamage = this.averageDamage + strengthModifier;
        var returnString = " He deals " + totalAverageDamage + " with his " + this.weaponName;
        return returnString;
    };
    return Weapon;
}());
exports.Weapon = Weapon;
var RangedWeapon = /** @class */ (function (_super) {
    __extends(RangedWeapon, _super);
    function RangedWeapon(averageDamage, weaponName, range) {
        var _this = _super.call(this, averageDamage, weaponName) || this;
        _this.range = range;
        return _this;
    }
    return RangedWeapon;
}(Weapon));
exports.RangedWeapon = RangedWeapon;
