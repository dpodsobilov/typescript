type PaymentStatus041 = 'new' | 'paid';

class Payment041 {
	id: number;
	status: PaymentStatus041 = 'new';

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = 'paid';
	}
}

class PersistedPayment041 extends Payment041 {
	databaseId: number;
	paidAt: Date;

	constructor() {
		const id = Math.random();
		super(id);
	}

	save() {
		// saving to database
	}

	// override modifier is a safety way to override methods
	override pay(date?: Date) {
		super.pay(); // calles pay() from parent
		if (date) {
			this.paidAt = date;
		}
	}
}
