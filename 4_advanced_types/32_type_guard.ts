import { Admin, User31 } from './31_types_conversion';

function logId(id: string | number) {
	if (isString2(id)) {
		console.log(id);
	} else {
		console.log('number ' + id);
	}
	id;
}

// type guard
// x is string - is a boolean
function isString2(x: string | number): x is string {
	return typeof x === 'string';
}

function isAdmin(user: User31 | Admin): user is Admin {
	return 'role' in user;
}

function isAdminAlternative(user: User31 | Admin): user is Admin {
	return (user as Admin).role !== undefined;
}

function setRoleZero(user: User31 | Admin) {
	if (isAdmin(user)) {
		console.log(user.role);
	} else {
		throw new Error('User is not an Admin');
	}
}
