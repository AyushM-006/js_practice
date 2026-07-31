interface Attendance{
    markAttendance(status:boolean):void

}
class Student implements Attendance{
    name:String
    id:Number

    constructor(name:String,
    id:Number) {
        this.name = name
        this.id  = id
    }
    markAttendance(status:boolean): void {

        if(status)
            console.log(this.name + " is Present");
        else
            console.log(this.name + " is Absent");
    }
    
}

const s1 = new Student("Ayush",454555)
s1.markAttendance(true)