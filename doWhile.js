/* царевна-лягушка*/
function frogPrincess(n) {
  let day = 0;
  let sum = 0;
  do{
    sum += n;
    n += 3;
    day++;
  }while(sum <= 1000)
    return day;
}