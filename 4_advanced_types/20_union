// 20 Union
function logId(id: string | number | boolean) {
    // сужение типов - narrowing
    if (typeof id === 'string') {
        console.log(id.toLowerCase())
    } else if (typeof id === 'number'){
        console.log(id)
    } else {
        console.log(id)
    }
}

logId(1);
logId('asd');
logId(true);


function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObject(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

// типы пересекаются: у a и b string
function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {
        console.log(a.toLowerCase() + b.toUpperCase());
    } else {
        console.log(a)
    }
}

const a: 1 = 1;