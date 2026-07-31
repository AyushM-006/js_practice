abstract class Person {
  abstract getDetails(): void;
  abstract getRole(): void;
}

class Student extends Person {
  name: String;
  id: Number;
  constructor(name: String, id: Number) {
    super();
    this.name = name;
    this.id = id;
  }

  getDetails(): void {
    console.log(this.name + " " + this.id);
  }
  
  getRole(): void {
    console.log(this.name + " is a Student.");
  }

}  
class Teacher extends Person {
  name: String;
  id: Number;
  constructor(name: String, id: Number) {
    super();
    this.name = name;
    this.id = id;
  }
  
  getDetails(): void {
    console.log(this.name + " " + this.id);
  }
  
  getRole(): void {
    console.log(this.name + " is a Teacher.");
  }

}
