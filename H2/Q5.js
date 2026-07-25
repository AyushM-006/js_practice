//reduce : it iterates over the arr and returns a single value

function totalCost(disc = 10, ...arr) {
  let cost = arr.reduce((sum, arr) => {
    (sum + arr, 0);
  });

  cost = cost - (cost * disc) / 100;

  return cost;
}

arr = [15, 20, 75, 60, 51];
console.log(totalCost(undefined,arr));
