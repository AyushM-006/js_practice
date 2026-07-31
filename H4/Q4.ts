abstract class Person {
  abstract getDetails(): void;
  abstract getRole(): void;
}

class Student extends Person {
  getDetails(): void {
    console.log(this.name + " " + this.id);
  }
  getRole(): void {
    console.log(this.name + " is a Student.");
  }
  name: String;
  id: Number;
  constructor(name: String, id: Number) {
    super();
    this.name = name;
    this.id = id;
  }
}

class Teacher extends Person {
  getDetails(): void {
    console.log(this.name + " " + this.id);
  }
  getRole(): void {
    console.log(this.name + " is a Teacher.");
  }
  name: String;
  id: Number;
  constructor(name: String, id: Number) {
    super();
    this.name = name;
    this.id = id;
  }
}
