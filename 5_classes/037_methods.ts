enum PaymentStatus37 {
	Holded,
	Processed,
	Reversed,
}

class Payment {
	id: number;
	status: PaymentStatus37 = PaymentStatus37.Holded;
	createdAt: Date = new Date();
	updatedAt: Date;

	constructor(id: number) {
		this.id = id;
	}

	// method
	getPaymentLifeTime(): number {
		return new Date().getTime() - this.createdAt.getTime();
	}
	// another method
	unholdPayment(): void {
		if (this.status == PaymentStatus37.Processed) {
			throw new Error('Платеж не может быть возвращен!');
		}
		this.status = PaymentStatus37.Reversed;
		this.updatedAt = new Date();
	}
}

const payment = new Payment(1);
// calling method
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
