// never returns any value (void also)
function generateError(message: string): never {
	throw new Error(message);
}

function dumpError(): never {
	while (true) {}
}

function rec(): never {
	return rec();
}
// correct
// const aVoid: void = undefined;

// incorrect
// const aNever: never = undefined;

type paymentAction = 'refund' | 'checkout' | 'reject';

function proccessAction(action: paymentAction) {
	switch (action) {
		case 'refund':
			// ...
			break;
		case 'checkout':
			// ...
			break;
		case 'reject':
			// ...
			break;
		default:
			// never helps to define error
			const _: never = action;
			throw new Error("Action doesn't exist");
	}
}

function isString(x: string | number): boolean {
	// исчерпывающая проверка
	if (typeof x === 'string') {
		return true;
	} else if (typeof x === 'number') {
		return false;
	}
	generateError('error with undefined');
}
