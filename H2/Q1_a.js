//array destructuring

const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log(a, b, c);

//object destructuring
/*const obj = { name: "John", age: 30, city: "New York" };
const { name, age, city } = obj;
console.log(name, age, city);
*/

const products = ["Maggie","Nescafe","Coconut Oil","Sugar"]
const [Maggie,Nescafe] = products

console.log(Maggie);

const product = {
    name:"Maggie",
    price: 15
}
console.log(product.name);

const {name,price} = product
console.log(name + price);

