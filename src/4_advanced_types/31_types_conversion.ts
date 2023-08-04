let a1: number = 5;
let b1: string = a1.toString();

let c: string = '123';
let d: number = +c;
// let d: number = parseInt(c);

let e = new String(a1);
// error
// let e: string = new String();
let e2: string = new String(a1).valueOf();
let f: boolean = new Boolean(a1).valueOf();

export interface User31 {
	name: string;
	email: string;
	login: string;
}

const user31: User31 = {
	name: 'Danya',
	email: 'danilych@gmail.com',
	login: 'danchello',
};

// equals
// const user312 = {
// 	name: 'Danya',
// 	email: 'danilych@gmail.com',
// 	login: 'danchello',
// } as User31;

// invalid in JSX (React)
// const user313 = <User31> {
//     name: 'Danya',
// 	email: 'danilych@gmail.com',
// 	login: 'danchello',
// }

export interface Admin {
	name: string;
	role: number;
}

// save name, role
// bad practices
const admin: Admin = {
	...user31,
	role: 1,
};

// best practices to mak eadmin from user
function userToAdmin(user: User31): Admin {
	return {
		name: user.name,
		role: 1,
	};
}
