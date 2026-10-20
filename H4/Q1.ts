class Student {
    name:String
    studentId:Number
    grade:String
    address:String
    
    constructor(name:String,studentId:Number,grade:String,address:String) {
        this.name = name
        this.studentId = studentId
        this.grade = grade
        this.address = address
    }
    displayInfo():void{
        console.log(this.name );
        console.log(this.studentId );
        console.log(this.grade );
        console.log(this.address );
    }
}

const s1 = new Student("Ayush",4512,"A","Mumbai")

s1.displayInfo()
