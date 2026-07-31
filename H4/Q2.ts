class Student {
  name: String;
  id: Number;
  constructor(name: String, id: Number) {
    this.name = name;
    this.id = id;
  }
}

class School {
  static totalStudents: any = 0;
  studentList:Student [] =[];

  addStudent(s:Student){
    this.studentList.push(s)

    School.totalStudents++

  }
}


const s1 = new Student("Ayush",455)
const s2 = new Student("HArry",755)

const sch = new School()
sch.addStudent(s1)
sch.addStudent(s2)

console.log(School.totalStudents);
console.log(sch.studentList);


