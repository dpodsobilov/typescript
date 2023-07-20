type httpMethod = 'post' | 'get';

type coolString = string;

// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
// 	return 1;
// }

type User = {
	name: string; // user name
	age: number;
	skills: string[];
};

type Role = {
	name: string; // role name
	id: number;
};

// Intersaction
type UserWithRole = User & Role;

let user: UserWithRole = {
	name: 'Name', // write once - which name is it??
	age: 33,
	skills: ['1', '2'],
	id: 1,
};

// best practices
type UserWithRoleBest = {
	user: User;
	role: Role;
};
