// BÀI 1
/***
 * INPUT: cho 3 số num1 num2 num3
 * 
 * PROCESS
 *  1. num1 = 9; num2 = 6 ; num3 = 15;
 *  2. các hàm if num1 < num2 && num1 < num3 && num2 < num3  
 *                num2 < num1 && num2 < num3 && num1 < num3   
 *                num2 < num3 && num2 < num1 && num3 < num1   
 *                num3 < num2 && num3 < num1 && num2 < num1   
 *                num3 < num1 && num3 < num2 && num1 < num2
                  num1 < num3 && num1 < num2 && num3 < num2

    
 * 
 * 
 * OUTPUT: thứ tự 3 chữ số
*/
var num1 = 9;
var num2 = 6;
var num3 = 15;

if (num1 < num2 && num1 < num3 && num2 < num3) {
  console.log(num1, num2, num3);
} else if (num2 < num1 && num2 < num3 && num1 < num3) {
  console.log(num2, num1, num3);
} else if (num2 < num3 && num2 < num1 && num3 < num1) {
  console.log(num2, num3, num1);
} else if (num3 < num2 && num3 < num1 && num2 < num1) {
  console.log(num3, num2, num1);
} else if (num3 < num1 && num3 < num2 && num1 < num2) {
  console.log(num3, num1, num2);
} else if (num1 < num3 && num1 < num2 && num3 < num2) {
  console.log(num1, num3, num2);
} else {
  console.log("Hãy điền ba giá trị khác nhau");
}

//BÀI 2
/**
 * INPUT: gia đình có 4 thành viên là  Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
 *
 *
 * PROCESS:
 *  1. lấy B ="Bố"; M = "Mẹ"; A = "Anh Trai"; E ="Em Gái"
 *  2.  switch (user)
 *      chạy các case M -> chào mẹ
 *                    B -> chào bố
 *                    A -> chào anh trai
 *                    E -> chào em gái
 *
 *
 * OUTPUT: chào hỏi thành viên phù hợp
 *
 */

var user = "A";

switch (user) {
  case "B":
    console.log("Chào Bố");
    break;
  case "M":
    console.log("Chào Mẹ");
    break;
  case "A":
    console.log("Chào Anh Trai");
    break;
  case "E":
    console.log("Chào Em Gái");
    break;
  default:
    console.log("Hãy nhập các ký tự B, M, A, E");
}

//BÀI 3
/**
 * INPUT:
 * cho 3 số nguyên
 *
 * PROCESS:
 *  1. lấy num1 = 3; num2= 10; num3 = 15;
 *  2. công thức: num1 % 2 = 0 || num2 % 2 = 0 || num3 % 2 = 0 -> có 1 số chẵn
 *                  num1 % 2 = 0 && num2 % 2 = 0 || num1 % 2 = 0 && num3 % 2 = 0 || num2 % 2 = 0 && num3 % 2 = 0 -> có 2 số ch
 *                  num1 % 2 = 0 && num2 % 2 = 0 && num3 % 2 = 0 -> có 3 số chẵn
 *
 *
 * OUTPUT:đếm bao nhiêu số chẵn
 *
 * **/

var num1 = 2;
var num2 = 6;
var num3 = 10;

if (
  (num1 % 2 === 0 && num2 % 2 === 1 && num3 % 2 === 1) ||
  (num2 % 2 === 0 && num1 % 2 === 1 && num3 % 2 === 1) ||
  (num3 % 2 === 0 && num1 % 2 === 1 && num2 % 2 == 1)
) {
  console.log("Có 1 số chẵn và 2 số lẻ");
} else if (
  (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 1) ||
  (num1 % 2 === 0 && num3 % 2 === 0 && num2 % 2 === 1) ||
  (num2 % 2 === 0 && num3 % 2 === 0 && num1 % 2 === 1)
) {
  console.log("Có 2 số chẵn và 1 số lẻ");
} else if (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
  console.log("Có 3 số chẵn và 0 số lẻ");
} else {
  console.log("Có 3 số lẻ và 0 số chẵn");
}



//BÀI 4
/****
 * INPUT:chó 3 cạnh của tam giac
 * 
 * PROCESS:
 *  1.lấy 3 cạnh : a = 3 , b = 2, c = 9
 *  2. công thức: a === b && b!==c || b === c && a !== c || a === c && b !== c;-> tam giác cân
 *                 a === b && b === c -> tam giác đều
 *                  a*a === (b*b) + (c*c) || b*b === (a*a) + (c*c) || c*c === (a*a) + (b*b)-> tam giác vuông
 * 
 * OUTPUT:xác định đó là tam giác gì
*/

var a = 3;
var b = 4;
var c = 5;

if (a === b && b!==c || b === c && a !== c || a === c && b !== c) {
    console.log("Tam giác cân")
} else if (a === b && b === c) {
    console.log("Tam giác đều")
} else if (a*a === (b*b) + (c*c) || b*b === (a*a) + (c*c) || c*c === (a*a) + (b*b)) {
    console.log("Tam giác vuông")
} else {
    console.log("Tam giác thường")
}