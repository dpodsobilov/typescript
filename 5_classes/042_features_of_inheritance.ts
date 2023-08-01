class User042 {
	name: string = 'user';

	constructor() {
		console.log(this.name);
	}
}

class Admin042 extends User042 {
	name: string = 'admin';

	constructor() {
		super();
		console.log(this.name);
	}
}

new Admin042();

// сначала иниуиализируются свойства исходного класса
// вызывается конструктор исходного класса
// инициализируются свойства дочернего класса
// вызывается конструктор дочернего класса

new Error('');

class HttpError extends Error {
	code: number;

	constructor(message: string, code?: number) {
		super(message);
		this.code = code ?? 500;
	}
}
