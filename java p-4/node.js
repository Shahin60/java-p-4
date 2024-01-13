//
function numberAll() {
    let sum =0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}
var result = numberAll(1,5,58,69);
console.log(result);


