// this ссылается на контекст текущего объекта

class Payment047 {
	private date: Date = new Date();

	getDate(this: Payment047) {
		return this.date;
	}

	// контекст не теряется
	getDateArrow = () => {
		return this.date;
	};
}

const p047 = new Payment047();

const user047 = {
	id: 1,
	// getPaymentDate: p047.getDate, // error due to this: Payment047
	getPaymentDate: p047.getDate.bind(p047),
	getPaymentDateArrow: p047.getDateArrow,
};

console.log(p047.getDate());
console.log(user047.getPaymentDate());
console.log(user047.getPaymentDateArrow());
// arrow functions dont foreget context

// когда не сработает стрелочная функция
class PaymentPersistant047 extends Payment047 {
	save() {
		// return super.getDateArrow(); error - getDateArrow is not a function
		// we can't get arrow function in inheritance
		return this.getDateArrow();
	}
}

console.log(new PaymentPersistant047().save());
