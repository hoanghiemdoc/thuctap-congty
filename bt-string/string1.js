// Bài 1. Viết 1 function kiểm tra 1
// chuỗi có nằm trong chuỗi còn lại hay không.
// Nếu có trả về true, nếu không trả về false
// // - Đầu vào có 2 tham số :
//  Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// // Ví dụ: checkStringExist("i love you", "you") => true

// function containsAny(str, substrings) {
//     for (let i = 0; i != substrings; i++) {
//          return str.indexOf(substrings) != - 1;
//     }
// }
// let result = containsAny("i love you", ["you"]);
// console.log( result);

// Bài 2. Viết hàm rút ngắn chuỗi bằng cách
// cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba
// chấm ở cuối chuỗi.
// Ví dụ: shortenString('Xin chào các bạn') =>
//  Kết quả trả về là 'Xin chào...'

// function textEllipsis(str, maxLength, { side = "end", ellipsis = "..." } = {}) {
//   if (str.length >= maxLength) {
//     switch (side) {
//       case "end":
//       default:
//         return str.slice(0, maxLength - ellipsis.length) + ellipsis;
//     }
//   }
//   return str;
// }

// let short = textEllipsis("Xin chào các bạn", 11);
// console.log(short);
// // "a very ..."

// Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành
// chỉ viết hoa từ đầu tiên.
// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') =>
// Kết quả trả về là 'Chào Mừng Đến Với Techmaster'

// function titleCase(str) {
//     let splitStr = str.toLowerCase().split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
   
//     return splitStr.join(' '); 
//  }
 
// console.log(titleCase("chÀo MừnG đẾn với techMaster"));

// Bài 4. Cho 1 chuỗi, hãy viết hàm có
// tác dụng sao chép đó chuỗi lên 10 lần.

// function repeat(chane1, chane2) {
//     let str = prompt("Nhập vào 1 chuỗi kí tự bất kì");
//     let loopResult = "";
//     for (let i = 0; i < 10; i++) {
//       loopResult += `${str}`;
//     }
//       return loopResult.slice(0, -1);
//   }
//   console.log(loopTheStringTenTimes());

// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng
//  sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') 
// => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

// function loopTheStringTenTimes() {
//     let str = prompt("Nhập vào 1 chuỗi kí tự bất kì");
//     let loopResult = "";
//     for (let i = 0; i < 10; i++) {
//       loopResult += `${str}-`;
//     }
//       return loopResult.slice(0, -1);
//   }
//   console.log(loopTheStringTenTimes());

// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, 
// hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần,
//  ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'

// function repeat(chane1, chane2) {
//     let str = '';
//     for (let i = 0; i < chane2; i++) {
//       str += chane1;
//     }
//     return str;
//   }
// console.log(repeat("\lap lai nao\ - ",10));

// Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với
//  đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseStrin('Hello') => Kết quả trả về là 'olleH'

// function reverseString(str) {
//    let splitString = str.split(""); 
//    let reverseArray = splitString.reverse(); 
//    let joinArray = reverseArray.join("");        
//     return joinArray; // 
// }
// console.log(reverseString("hello"));  


// Bài 8. Cho 1 chuỗi, kiểm tra
//  xem chuỗi đó có phải chuỗi đối xứng hay không 
//  (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, 
//     không phân biệt hoa thường), kết quả trả về true hoặc false. 
// Ví dụ 'Race car' trả về true, 'hello world' trả về false.

// function isPalindrome(str) {
//     let splitString = str.split(""); 
//     for (let i = 0; i < splitString.length / 2; i++) {
//         if (splitString[i] != splitString[str.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
 
// console.log(isPalindrome("hoang gnaoh"));
// console.log(isPalindrome("hello world"));


// Bài 9: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?
// function isFirstLetterCapital(string) {
//     return string.charCodeAt(0) === string.toUpperCase().charCodeAt(0);
//   }
//   console.log(isFirstLetterCapital("hai i am hoang"));
//   console.log(isFirstLetterCapital("I Am Hoang"));


