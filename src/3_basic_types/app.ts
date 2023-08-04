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
// enum StatusCode {
//     SUCCESS = 1,
//     IN_PROCESS = 'p',
//     FAILED = 'f'
// }

// 1 - успех
// 'p' - в процессе
// 'f' - отклонен

// const res = {
//     message: 'Платеж успешен',
//     statusCode: StatusCode.SUCCESS
// };

// if (res.statusCode === StatusCode.SUCCESS) {}

// function action(status: StatusCode) {

// }

// action(StatusCode.SUCCESS);
// action(1);

// const compute = () => {
//     return 3;
// }

// const enum Roles {
//     ADMIN = 1,
//     USER = 2
// }

// const res2 = Roles.ADMIN;

// 018 типизируем функцию
// async function getFaqs(req) {
//     const res = await fetch('/faqs', {
//         method: 'POST',
//         body: JSON.stringify(req)
//     });
//     const data = await res.json();
//     return data;
// }

enum QuestionStatus {
    Published = 'published',
    Drafted = 'drafted',
    Deleted = 'deleted',
}

async function getFaqs(req: {
    topicId: number,
    status?: QuestionStatus
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: QuestionStatus
}[]> {
        const res = await fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = await res.json();
        return data;
    }