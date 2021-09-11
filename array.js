/*массив из цифр числа */

function arrayOfDigits(n) {
  let arr = [];
  do{
    arr.unshift(n % 10);
    n = (n - n % 10) / 10;
  }
  while(n > 0)
    return arr;
}