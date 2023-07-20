interface User {
	name: string;
	age: number;
	skills: string[];

	log: (id: number) => string;
}

interface Role {
	roleId: number;
}

// unions User's properties with roleId from Role
interface UserWithRole extends User, Role {
	createdAt: Date;
}

let user: UserWithRole = {
	name: 'Name',
	age: 33,
	skills: ['1', '2'],
	roleId: 1,
	createdAt: new Date(),

	log(id) {
		return '';
	},
};

// 'same' as User interface
type User2 = {
	name: string;
	age: number;
	skills: string[];

	log: (id: number) => string;
};

interface UserDic {
	[index: number]: User;
}

type ud = Record<number, User>;
