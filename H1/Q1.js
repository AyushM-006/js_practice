const student = {
    name: "Ayush",
    age : 20,
    grade: "A",
    subject: "Mathematics",
    introduce :function (){
        console.log("HI myself "+this.name+" and I am "+this.age+" year old.");
        
    }

}

console.log(student);
console.log(student.grade);
student.introduce()

