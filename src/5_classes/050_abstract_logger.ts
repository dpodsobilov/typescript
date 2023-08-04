abstract class Logger {
	abstract log(message: string): void;
	printDate(date: Date): void {
		this.log(date.toString());
	}
}

class CLogger extends Logger {
	log(message: string): void {
		console.log(message);
	}

	logWithDate(message: string) {
		this.printDate(new Date());
		this.log(message);
	}
}

const logger = new CLogger();
logger.logWithDate('hi');
