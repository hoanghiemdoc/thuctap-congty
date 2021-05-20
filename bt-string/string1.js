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
//     var splitStr = str.toLowerCase().split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
   
//     return splitStr.join(' '); 
//  }
 
// console.log(titleCase("chÀo MừnG đẾn với techMaster"));

// Bài 4. Cho 1 chuỗi, hãy viết hàm có
// tác dụng sao chép đó chuỗi lên 10 lần.

// function repeat(chane1, chane2) {
//     var str = '';
//     for (let i = 0; i < chane2; i++) {
//       str += chane1;
//     }
//     return str;
//   }

//   console.log(repeat("\lap lai nao\ - ",10));
