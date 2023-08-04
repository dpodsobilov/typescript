class User038 {
	skills: string[];

	addSkill(skill: string): void;
	addSkill(skills: string[]): void;

	addSkill(skill: string | string[]) {
		if (typeof skill == 'string') {
			this.skills.push(skill);
		} else if (typeof skill == 'object') {
			this.skills.concat(skill);
		}
	}
}

function run(distance: number): number;
function run(distance: string): string;

function run(distance: number | string): number | string {
	if (typeof distance == 'number') {
		return 1;
	} else {
		return '';
	}
}
