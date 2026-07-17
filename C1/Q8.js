const order =[ {
    name : "Maggie",
    price : 15
},
{
    name : "Nescafe",
    price : 100
},
{
    name : "Oil",
    price : 200
},
{
    name : "Kit Kat",
    price : 40
}]


const totalSales = order.reduce((sum , order)=>
     sum = sum + order.price , 0 // initial value of sum is 0
)
//If you remove the 0, reduce will use the first array element 
// as the initial accumulator instead of 0.

//In this case:first sum becomes the first object { name: "Maggie", price: 15 }
//then it does sum + order.price, which is object + number
//that produces a weird string-like result, not a numeric total
//So instead of 355, you’d get something like:"[object Object]10020040"

//f order were empty, reduce() without an initial value would throw a runtime error.
//So keep 0 if you want to sum numeric prices correctly.
console.log(totalSales);
