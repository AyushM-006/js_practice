//array destructuring
const products = ["Potato" , "Onion", "Tomato","Brinjal"]
console.log(products[3]);

//can access using this values
const[Potato,Onion,Tomato,Brinjal] = products

console.log(Potato);

//object destructuring
const product = {
  name: "Onion",
  price: 30,
};

console.log(product.name);
const{name, price} = product 

console.log(name +" : "+ price);

