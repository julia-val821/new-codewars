/*Factorial division*/

function factorialDivision(n, d) {
    let prod = 1;
    for(let i = d + 1; i <= n; i++){
        prod *= i;
    }
    return prod;
}