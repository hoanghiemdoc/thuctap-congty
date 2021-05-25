// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1

// let minNumbers = (arr) => {
//   let min = arr[0];
//   let position = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       arr[i] = min;
//       position = i;
//     }
//   }
//   return position;
// };
// console.log("so nho nhat trong mang la: " + minNumbers([2, 1, 3]));

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3

// let max2Numbers = (arr) => {
//  let max2Numbers = arr.sort((a, b) => {
//     return b - a;
//   })[1];
//  return max2Numbers;
// };
// console.log("so lon nhat thu 2 trong mang la: " + max2Numbers([2, 1, 3, 4]));

// Bài 3. Viết hàm truyền vào 1 mảng tên học viên,
//  sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn'])
// => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']

// let sortStudents = (arr) => {
//     return arr.reverse();
// }

// console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
// let max = (number)=>{
//     let maxNumber = 0;
//    for (let i= 0;  i< number.length; i++) {
//         if (number[i] %5 == 0) {
//             maxNumber += number[i]
//             number[i] = maxNumber;
//         }
//    }
//    return maxNumber;
// }
// console.log(max([0,2,4,5,10,12,15,20,100]));

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số,
//  kết quả trả về là 1 mảng mới với các số là số dư tương
//   ứng khi chia mảng cũ cho 2

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
//  Ví dụ với tham số

// ['aba', 'aa', 'ad', 'c', 'vcd']
//  thì kết quả trả về ['aba', 'vcd'].

// function longest_string(str_ara) {
//     let max = str_ara[0].length;
//     str_ara.map(long => max = Math.max(max, long.length));
//     result = str_ara.filter(long => long.length == max);
//     return result;
//   }

//   console.log(longest_string(['aba', 'aa', 'ad', 'c', 'vcd']));

// Bài 7: Viết chương trình JavaScript
//  để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9

// let random_item = (items) => {
//   return items[Math.floor(Math.random() * items.length)];
// };

// const items = ([3, 7, 9, 11]);
// console.log(`phan tu ngau nhien la: ${random_item(items)}`);

// Bài 8:Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// const getShuffledArr = arr => {
//     const newArr = arr.slice()
//     for (let i = newArr.length - 1; i > 0; i--) {
//         const rand = Math.floor(Math.random() * (i + 1));
//         [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
//     }
//     return newArr;
// };
// console.log(getShuffledArr([1,2,3,4,5,6,7,8,9]));