class Student {
    name: string;
    id: number;
    grade: number;

    constructor(name: string, id: number, grade: number) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }

    getStudentDetails<T extends keyof Student>(info: T): Student[T] {
        return this[info];
    }
}

const stu = new Student("AYush",55001,74)
console.log(stu.getStudentDetails("name"));




function getStudentDetail<T>(info: T): T {
        return info;
}

console.log(getStudentDetail<String>("MEra naam student"));
console.log(getStudentDetail<Number>(10));

