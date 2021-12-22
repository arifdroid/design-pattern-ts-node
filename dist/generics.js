"use strict";
//https://www.youtube.com/watch?v=nViEqpgwxHE&t=384s&ab_channel=BenAwad 
function lastArr_2(numArr) {
    return numArr[numArr.length - 1];
}
function lastArr_3(numArr) {
    return numArr[numArr.length - 1];
}
var lastArr_1 = function (numArr) {
    return numArr[numArr.length - 1];
};
//problem is when the same array will be fix typed
var l = lastArr_1([1, 3, 4]);
console.log('l is ->', l);
// //generic 
// const last_generic_1 = ( numArr: T[]) =>{
//     return numArr[numArr.length - 1];
// }
