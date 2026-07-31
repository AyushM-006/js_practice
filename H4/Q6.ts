class Student {
    name: string;
    id: number;
    grade: number;
    constructor(name: string, id: number, grade: number) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
    
    //by genAI
    getStudentDetails<T extends keyof Student>(info: T): Student[T] {
        return this[info];
    }
}

//student object
const stu = new Student("AYush",55001,74)
console.log(stu.getStudentDetails("name"));



//simple use of generic as explained
function getStudentDetail<T>(info: T): T {
        return info;
}

console.log(getStudentDetail<String>("MEra naam student"));
console.log(getStudentDetail<Number>(10));

