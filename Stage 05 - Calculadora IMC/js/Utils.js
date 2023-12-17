export function calcImc(weight, height){
    return weight / (height/100) ** 2;
}

export function isNumber(number){
    return !isNaN(number) && number != '';
}