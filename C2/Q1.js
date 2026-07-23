//array destructuring
const electronics = ["TV", "Laptop", "Smartphone","AC"];

const [a1,a2,a3,a4] = electronics
console.log(electronics[0]);

console.log(a1);



//object destructuring
const grocery = {
    name: "Potato",
    price:30
}

// const grocery = [{
//     name: "Potato",
//     price:30
// },{
//     name: "Tomato",
//     price:40
// },{
//     name: "Onion",
//     price:50
// },{
//     name: "Chilli",
//     price:10
// }]


console.log(grocery.name);

const {name, price} = grocery
console.log(name);

