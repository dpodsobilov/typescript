class User039 {
	_login: string;
	password: string;
	createdAt: Date;

	set login(l: string | number) {
		this._login = 'user-' + l;
		this.createdAt = new Date();
	}

	get login() {
		return this._login;
	}

	async getPassword(p: string) {
		// async
	}

	// set password(p: string) {
	//     // sync
	// }
}

const user039 = new User039();
user039.login = 'myLogin';
console.log(user039);

// resume
// сеттеры полезны,
// 1. когда они выполняют не асинхронные задачи
// 2. side effects
