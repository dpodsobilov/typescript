interface Usr {
	login: string;
	password?: string;
	// not same! string of undefined required
	// password: string | underfined
}

const usr: Usr = {
	login: 'asd@a.ru',
	password: '1',
};

// same
// second: number | undefined
function multiply(first: number, second?: number): number {
	if (!second) {
		return first * first;
	}
	return first * second;
}

multiply(5);

// second equals 5 when it doesn't accepted
function defValue(first: number, second: number = 5): number {
	if (!second) {
		return first * first;
	}
	return first * second;
}

interface UserPro {
	login: string;
	password?: {
		type: 'primary' | 'secondary';
	};
}

function testPass(user: UserPro) {
	const t = user.password?.type;

	// equals
	// const t = user.password ? user.password.type : undefined

	// ! means that password will definitely be
	const s = user.password!.type;
}
function test(param?: string) {
	const t = param ?? multiply(5);
}
