"use strict";
// // 1-misol
// {
//     let newValue: string | null = prompt("Qiymat kiriting");
//     let list: string[] = [];
//     function collectList(value: string | null): void {
//         if (value) {
//             list.push(value);
//         }
//     }
//     collectList(newValue);
//     console.log(list);
// }
// // 2-misol
// {
//     let numberList: number[] = [21, 44, 22, 77, 33, 98, 33, 1]
//     function findMaxNumber(arr: number[]): number {
//         let maxNum: number = arr[0]
//         for (let num of arr) {
//             if (num >= maxNum) {
//                 maxNum = num
//             }
//         }
//         return maxNum
//     }
//     const result: number = findMaxNumber(numberList)
//     console.log(result);
// }
// // 3-misol
// {
//     let value: string | null = prompt("So'z kiriting:")
//     let list: string[] = ["Salom", "Yaxshi", "Zo'r"]
//     function findValue(newValue: string | null, arr: string[]): void {
//         let count: number = 0
//         arr.forEach((item: string) => {
//             if (item == newValue) {
//                 count++
//             }
//         })
//         console.log(count > 0 ? true : false);
//     }
//     findValue(value, list)
// }
// // 4-misol
// {
//     let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     function filterEvenNumbers(arr: number[]): number[] {
//         let evenNumbers: number[] = arr.filter(num => num % 2 === 0);
//         return evenNumbers;
//     }
//     let evenArray = filterEvenNumbers(numbers);
//     console.log(evenArray);
// }
// // 6-misol
// {
//     type UsersType = {
//         id: number;
//         name: string;
//         email: string;
//         password: string;
//     }
//     type ResultType = {
//         name: string;
//         email: string;
//     }
//     let userList: Array<UsersType> = [
//         {
//             id: 1,
//             name: "Ziyodulla",
//             email: "ziyodulla464@gmail.com",
//             password: "ziyodulla1234"
//         }
//     ]
//     function fn(arr: Array<UsersType>): Array<ResultType> {
//         let ResultList: Array<ResultType> = []
//         arr.forEach((item: UsersType) => {
//             const data: ResultType = { name: item.name, email: item.email }
//             ResultList.push(data)
//         })
//         return ResultList
//     }
//     const data: Array<ResultType> = fn(userList)
//     console.log(data);
// }
