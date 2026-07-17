//map
const arr = [4, 2, 6, 10, 7, 5];

const squareNum = arr.map((arr) => {
  return arr ** 2;
});

//filter
const odd = arr.filter((arr) => {
    return arr %2 !=0
});

//reduce
const sum = arr.reduce((sum , arr )=>{
    return sum += arr
});

console.log(squareNum); //output: [16, 4, 36, 100, 49, 25]
console.log(odd); //output: [1, 3, 5, 7]

console.log(sum); //output: 24
