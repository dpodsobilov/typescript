"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle044_price;
class Vehicle044 {
    constructor() {
        _Vehicle044_price.set(this, void 0); // private JS property
    }
    set model(m) {
        this._model = m;
        __classPrivateFieldSet(this, _Vehicle044_price, 100, "f");
    }
    get model() {
        return this._model;
    }
    isPriceEqual(v) {
        // we can get access #price from v
        return __classPrivateFieldGet(this, _Vehicle044_price, "f") === __classPrivateFieldGet(v, _Vehicle044_price, "f");
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle044_price = new WeakMap();
class EuroTruck044 extends Vehicle044 {
    setMileage(km) {
        this.mileage = km * 1.6; // mileage is avaiable
        // this.damages // error
    }
}
let vehicle = (new Vehicle044().brand = 'd');
// vehicle.damages; // unavailable property
new Vehicle044();
new EuroTruck044();
// in back-end use private instead #
// in front-end use # for really private data
// that you want to hide
