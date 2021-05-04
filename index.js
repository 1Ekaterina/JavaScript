//a
// if (!("a" in window)) {
//                 var a = 1;
//             }
//             alert(a);
// выведет undefined, т.к. атрибута "а" в window нет 

//b
// var b = function a(x) {
//     x && a(--x);
// };
// alert(a);
// выведет, что переменная «a» не определена

//c
// function a(x) {
//     return x * 2;
// }
// var a;
// alert(a);
// выведет function a(x) {return x * 2;}, т.к. объявленные ф-ции имеют приоритет перед объявленными переменными, но не над их значениями

//d
// function b(x, y, a) {
//     arguments[2] = 10;
//     alert(a);
// }
// b(1, 2, 3);
// выведет 10, т.к. arguments[0]=x, arguments[1]=y, arguments[2]=a
