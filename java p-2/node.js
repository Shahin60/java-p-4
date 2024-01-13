
// number =[100, 321, 65, 39, 82, 65, 36, 47];
// for (let i = 0; i < number.length; i++) {
//     const element1 = number[i];
//     if (element1 % 2 ==0) {
//         console.log(element1,"is a even number");
//     }
//     else{
//         console.log(element1 *2,"is a odd number");
//     }
// }
function evenOddNumber(num) {
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element % 2 ==0) {
            console.log(element,"is a even number");
        }
        else{
            console.log(element,"is a odd number");
        }
    }
}
let number =[10, 32, 65, 39, 82, 65, 36, 47];
evenOddNumber(number);
var arrey =[10,52,15,36,48,65,25,1,39,75,15,26,125,];
evenOddNumber(arrey);