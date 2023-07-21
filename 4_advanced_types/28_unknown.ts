// unknown VS any
let input: unknown;

input = 3;
input = ['strings', 'array'];

// Type 'unknown' is not assignable to type 'string'
// let res: string = input;

let input2: any;
input2 = 3;
// correct
let res: string = input2;

// how to use unknown?
function run(i: unknown) {
	if (typeof i == 'number') {
		i++;
	} else {
		console.log('i is unknown yet');
	}
}

run(input);

async function getData() {
	try {
		await fetch('');
	} catch (error) {
		// console.log('error is unknown');
		// recommended checkout
		// if (error instanceof Error) {
		// 	console.log(error.message);
		// }
		// force checkout. Not recommended.
		const e = error as Error;
		console.log(e.message);
	}
}

// union unknown | <some type>  - definitely unknown
type U1 = unknown | null;

// intersaction unknown & <some type> - definitely <some type>
type I1 = unknown & string;
