const sum = createSum();

function createSum () {
  let sum = 0;
  return function addNum (num) {
    sum += num;
    return sum;
  };
}

console.log(sum(5));
console.log(sum(10));
console.log(sum(30)); 