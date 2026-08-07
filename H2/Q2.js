class Product {
    name 
    productId
    price
    
    constructor(name,productId,price) {
        this.name = name
        this.productId = productId
        this.price = price
    }
    displayDetails(){
        console.log(this.name+ " " + this.productId + " " + this.price);  
    }
}
const p = new Product("Maggie",4412,15)
console.log(p)
p.displayDetails() 
