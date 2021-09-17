/*Factorial division*/

function factorialDivision(n, d) {
    let prod = 1;
    for(let i = d + 1; i <= n; i++){
        prod *= i;
    }
    return prod;
}

/*Factorial Factory*/

function factorial (n) {
    let mult = 1;
    for(let i = 1; i <= n; i++){
        mult *= i;
    }
    return n >= 0 ? mult : null;
}