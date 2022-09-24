// If x is less than y then thats the min,
//if x is more than y then that is the min

var min = function (x, y) {
  if (x < y) return x;
  else return y;
};

console.log(min(3, 15)); // 3
console.log(min(3, -15)); //-15
