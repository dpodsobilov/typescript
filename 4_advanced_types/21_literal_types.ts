function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
	return 1;
}

fetchWithAuth('string', 'get');

let abc: 'asdfg' = 'asdfg';
// abc = 'dsfsdf'     // error!

let method = 'post';

// method is a string!
// fetchWithAuth('s', method);          // error!

const method2 = 'post';
fetchWithAuth('s', method2); // correct

// Using 'as'
let method3 = 'post';
fetchWithAuth('s', method3 as 'post'); // correct

let method4 = '3';
fetchWithAuth('s', method3 as 'post'); // incorrect!
