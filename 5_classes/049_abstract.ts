abstract class Controller049 {
	abstract handle(req: any): void;

	handleWithLogs(req: any) {
		console.log('Start');
		this.handle(req);
		console.log('End');
	}
}

class UserController049 extends Controller049 {
	handle(req: any): void {
		console.log(req);
	}
}

const c = new UserController049();
c.handleWithLogs('request');
