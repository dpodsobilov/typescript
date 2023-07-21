const n: null = null;
const n1: any = null;

interface UserI {
	name: string;
}

function getUser() {
	if (Math.random() > 0.5) {
		return null;
	} else {
		return {
			name: 'Vasya',
		};
	}
}

const user1 = getUser();
if (user1) {
	const n55 = user1.name;
}

// undefined VS null
// если мы осознанно возвращаем отсутствие чего-то, то это null
// если мы не знаем, то undefined
