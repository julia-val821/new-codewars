/*Heads and Legs*/

function animals(heads, legs){
    let cows = (legs - 2 * heads) / 2;
    let chickens = heads - cows;
    return (cows >= 0 && chickens >= 0 && cows % 1 === 0 && chickens % 1 === 0) ? [chickens,cows] : "No solutions";
}