interface IUser {
	name: string;
}

// bad practices
interface IUser {
	age: number;
}

const someUser: IUser = {
	age: 12,
	name: 'jdkf',
};

type typeUser = {
	name: string;
};

// error!
// type typeUser = {
// 	age: number;
// };

type ID = string | number;

interface IID {
	id: string | number;
}

// resume
// Use types with basic types, intersaction or unions
// Use interfaces with objects and classes
