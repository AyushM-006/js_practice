//Finding maximum from the array
arr = [89, 12, 56, 34, 75];

function findMax(arr) {
  //   const max = arr.map((max, arr) => {
  //     max = 0;
  //     console.log(1);

  //     if (max < arr) {
  //       max = arr;
  //       console.log(2);
  //     }
  //     console.log(3);

  //     return max;
  //   });

    return Math.max(...arr);
}
console.log(findMax(arr));
