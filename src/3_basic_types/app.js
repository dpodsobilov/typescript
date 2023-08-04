"use strict";
// let revenue: number = 1000;
// let bonus: number = 500;
// let res: number = revenue + bonus;
// console.log(res);
// function getFullName(userEntity: {firstName: string, lastName: string}) {
//     return `${userEntity.firstName} ${userEntity.lastName}`;
// }
// const user = {
//     firstName: 'Denis',
//     lastName: 'Podsobilov',
//     city: 'Samara',
//     age: 20,
//     skills: {
//         dev: true,
//         devOps: true
//     }
// }
// console.log(getFullName(user))
// 014 Массивы
// const skills: string[] = ['Dev', 'DevOps', 'Testing']
// for (const skill of skills) {
//     console.log(skill.toLowerCase())
// }
// const res = skills
//     .filter(s => s !== 'DevOps')
//     .map(s => s + '! ')
//     .reduce((a, b) => a + b);
// console.log(res)
// 015 Tuples - кортежи
// const skills: any[] = ['Dev', 'DevOps', 1]       // using any is bad practice
// const skillzzz = [1, 'Dev', 'ненужная строка']            // const skill: (string | number)[]         - union
// const skill: [number, string] = [1, 'Dev'];
// // const q = skill[2];      ERROR
// skill.push('asdasd');
// // const q = skill[2];      ERROR
// skill.pop();
// const [id, skillName] = skill;
// const arr: [number, string, ...boolean[]] = [1, 'a lot of boolean there ->', true, true, false]
// 016 Readonly
// const skill: readonly [number, string] = [1, 'Dev'];
// const skills: ReadonlyArray<string> = ['Dev', 'DevOps'];    // generic
// 017 Enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
// 1 - успех
// 'p' - в процессе
// 'f' - отклонен
const res = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) { }
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
const compute = () => {
    return 3;
};
const res2 = 1 /* Roles.ADMIN */;
