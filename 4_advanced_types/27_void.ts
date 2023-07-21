function logId(id: string | number): void {
	console.log(id);
}

function multiply(f: number, s?: number): number | void {
	if (!s) {
		return f * f;
	}
}

type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => {
	return true;
};

const b = f2();

const skills = ['Dev', 'DevOps'];

const userSkills = {
	skills: ['skill1'],
};
// forEach return void, but Array.push() returns array length
skills.forEach((skill) => userSkills.skills.push());
