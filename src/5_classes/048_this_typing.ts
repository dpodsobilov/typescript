class UserBuilder048 {
	name: string;

	setName(name: string): this {
		this.name = name;
		return this;
	}

	// type guard
	isAdmin(): this is AdminBuilder048 {
		return this instanceof AdminBuilder048;
	}
}

class AdminBuilder048 extends UserBuilder048 {
	roles: string[];
}

const res048 = new UserBuilder048().setName('Den');
const res0482 = new AdminBuilder048().setName('Den');

let user048: UserBuilder048 | AdminBuilder048 = new UserBuilder048();
if (user048.isAdmin()) {
	console.log('admin', user048);
} else {
	console.log('user', user048);
}
