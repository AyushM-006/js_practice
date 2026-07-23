class Emp {
    name
    id
    sal

    constructor(name,id,sal){
        this.name = name
        this.sal = sal
        this.id = id
    }
}

const emp = new Emp("Ayush", 45,45000)
console.log(emp);
console.log(emp.name);

