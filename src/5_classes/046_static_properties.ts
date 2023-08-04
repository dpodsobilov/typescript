class UserService046 {
	// reserved property 'name'
	// static name: string = 'asd';
	static db: any;

	static async getUser(id: number) {
		UserService046.db.findById(id);
	}

	constructor(id: number) {}

	// we need to create object to use this method!
	create() {
		UserService046.db; // we can get access to db
		// this.db  // error!
	}

	// static block
	// will be executed after calling UserService046
	// async methonds are now allowed in static block!
	static {
		UserService046.db;
	}
}

// we can get access to static property
// without creating any instance
UserService046.db;
UserService046.getUser(2);
const inst046 = new UserService046(2);
inst046.create();

// classes cant be static!
