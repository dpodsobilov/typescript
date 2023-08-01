class Vehicle044 {
	public brand: string; // public by default
	private damages: string[];
	private _model: string;
	protected mileage: number;
	#price: number; // private JS property

	set model(m: string) {
		this._model = m;
		this.#price = 100;
	}

	get model() {
		return this._model;
	}

	isPriceEqual(v: Vehicle044) {
		// we can get access #price from v
		return this.#price === v.#price;
	}

	addDamage(damage: string) {
		this.damages.push(damage);
	}
}

class EuroTruck044 extends Vehicle044 {
	setMileage(km: number) {
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
