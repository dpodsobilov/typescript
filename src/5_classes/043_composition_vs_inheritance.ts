class User043 {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

// inheritance
// bad practice
class Users043 extends Array<User043> {
	searchByName(name: string) {
		return this.filter((u) => u.name == name);
	}
}

const users = new Users043();
users.push(new User043('Вася'));
console.log(users.toString()); // [object Object]

// composition
// best practices
class UserList043 {
	users: User043[];

	push(u: User043) {
		this.users.push(u);
	}
}

// -------------------------
class Payment043 {
	date: Date;
}

// bad practices
class UserWithPayment043 extends Payment043 {
	name: string;
}

// best practices
class UserWithPaymentComposition043 {
	user: User043;
	payment: Payment043;

	constructor(user: User043, payment: Payment043) {
		this.user = user;
		this.payment = payment;
	}
}

// inheritance is good when we extends inclde one domain
// inheritance is bad when we extends from complex classes
// and if we dont need some methods from parent class
// inheritance is bad when we have intersection of areas
