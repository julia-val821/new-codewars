/*внутренний цикл отвечает за повторение 2,3 и тд*/
function numberTrigle(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            str += i + ' ';
        }
        str = str.trim() + '\n';
    }
    return str.trim();
}

console.log(numberTrigle(8));

/*с использованием repeat()*/
function numberTrigle(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        str += (i + ' ').repeat(i);
        str = str.trim() + '\n';
    }
    return str.trim();
}

console.log(numberTrigle(8));