interface ILogger040 {
	log(...args: any[]): void;
	error(...args: any[]): void;
}

class Logger040 implements ILogger040 {
	log(...args: any[]): void {
		console.log(...args);
	}
	async error(...args: any[]): Promise<void> {
		console.log(...args);
	}
}

interface IPayable040 {
	pay(paymentId: number): void;
	price?: number;
}

interface IDeletable040 {
	delete(): void;
}

class User040 implements IPayable040, IDeletable040 {
	delete(): void {
		throw new Error('Method not implemented.');
	}
	pay(paymentId: number | string): void {
		throw new Error('Method not implemented.');
	}
	// price?: number | undefined;
}
