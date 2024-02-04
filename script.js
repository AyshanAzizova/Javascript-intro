//TASK-1
//4 reqemli eded verilib. Bu ededin eveline 7 reqemini , axirinada 8 reqemini artir. Example1: 3333= 733338
// let a = 1234;
// if (a>=1000 && a<=9999) {
//     let z = "7"+a+'8'
//     console.log(z);
// }
// else{
//     console.log("eded 4reqemli deyil");
// }

/////////////////////////////////////////////////

// TASK-2
// 1-1000 qeder ederlerin icerisinden ele ededleri cap et ki, reqemleri cemi 3-e bolunsun
// for (let i = 1; i <= 1000; i++) {
//     let num = i;
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = (num - (num % 10)) / 10;
//     }
//     if (sum % 3 === 0) {
//         console.log(i);
//     }
// }

// //////////////////////////////////////////////////////

// TASK-3
// 2 dene eded verilib. I eded 4 reqemli II eded 7 reqemlidir.
// I ededin 4%-ni tap.
// Sonra II ededin 9% ni tap.
// Sonra Cavalari toplayib 10 %ni tap.

// let a = 2000;
// let b = 2000000;
// if (a >= 1000 && a<=9999) {
//     sub1 = (a / 100) * 4
//     if (b >=1000000 && b<=9999999) {
//         sub2 = (b / 100) * 9
//         result = (sub1 + sub2) / 10
//         console.log(result);
//     }
//     else {
//         console.log("b 7reqemli eded deyil");
//     }
// }
// else {
//     console.log('a 4reqemli eded deyil');
// }

// /////////////////////////////////////////////////

// TASK4 
// Qapi var hundurluk ve eni verilib.Elimizde skaf var uzunlugu hundurluyu ve eni verilib.Bu skaf qapidan kecermi?

// let qapiHundurluk = 200;
// let qapiEni = 120;
// let skafHundurluk = 150;
// let skafEni = 130;
// let skafUzunlugu = 110;
// if (skafHundurluk<qapiHundurluk && skafUzunlugu<qapiEni) {
//     console.log("kecer");
// }
// else if (skafHundurluk<qapiHundurluk && skafEni<qapiEni) {
//     console.log("kecer");
// }
// else if (skafUzunlugu<qapiEni && skafEni<qapiHundurluk) {
//     console.log("kecer");
// }
// else if (skafUzunlugu<qapiHundurluk && skafEni<qapiEni) {
//     console.log("kecer");
// }
// else{
//     console.log('kecmez');
// }

// //////////////////////////////////////////////////////

// TASK5
// SWITCH operatoru ile yoxla.
// Verilmish ededdin sonuncu reqemi
// 1 olarsa-"I gun" sozunu, 2 olarsa-"II gun" sozunu, ... 7 olarsa-"VI gun" sozunu yaz

// let Number=42;
// let lastNumber = Number % 10;
// switch (lastNumber) {
//     case 1:
//         console.log("I gun");
//         break;
//     case 2:
//         console.log("II gun");
//         break;
//     case 3:
//         console.log("III gun");
//         break;
//     case 4:
//         console.log("IV gun");
//         break;
//     case 5:
//         console.log("V gun");
//         break;
//     case 6:
//         console.log("VI gun");
//         break;
//     case 7:
//         console.log("VII gun");
//         break;
//     default:
//         console.log("duzgun eded daxil et");
// }

// //////////////////////////////////////////////////

// TASK6
// 6)IF operatoru ile yoxla.6 dene eded verilib. Bu ededlerden hansi en boyukdur.
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;
// let num5 = 50;
// let num6 = 4;
// let max = num1;
// if (num2>max) {max=num2}
// if (num3>max) {max=num3}
// if (num4>max) {max=num4}
// if (num5>max) {max=num5}
// if (num6>max) {max=num6}
// console.log(max);





