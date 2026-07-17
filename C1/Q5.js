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

console.log(squareNum);
console.log(odd);

console.log(sum);


