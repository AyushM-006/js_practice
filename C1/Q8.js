const order =[ {
    name : "Maggie",
    price : 15
},{
    name : "Nescafe",
    price : 100
},{
    name : "Oil",
    price : 200
},{
    name : "Kit Kat",
    price : 40
}]


const totalSales = order.reduce((sum , order)=>
     sum = sum + order.price , 0
)

console.log(totalSales);
