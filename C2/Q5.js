const arr = [45,33,66,14,88]
console.log(arr);
//spread operator
console.log(...arr);

//default parameter
function add(a,b = 55){
    console.log(a+b);  
}

add(12,22)
add(15)

//rest parameter 
function findMax(arr){
    return Math.max(...arr)
}
console.log(findMax(arr));
