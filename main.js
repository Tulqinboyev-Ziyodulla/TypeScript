"use strict";
// // // // 1-rasmdagi 8 ta masalalar // // // //
// 1-masala //
// {
//     function reverseNumber(num: number): number {
//         return parseInt(num.toString().split('').reverse().join(''));
//     }
//     console.log(reverseNumber(123));
// }
// 2-masala //
// {
//     function factorial(num: number): number {
//         if (num === 0 || num === 1) return 1;
//         return num * factorial(num - 1);
//     }
//     console.log(factorial(5));
// }
// 3-masala //
// {
//     type Person = {
//         name: string;
//         age: number;
//     };
//     function compareAges(person1: Person, person2: Person): string {
//         return person1.age > person2.age ? person1.name : person2.name;
//     }
//     let personA = { name: "Ali", age: 30 };
//     let personB = { name: "Vali", age: 25 };
//     console.log(compareAges(personA, personB));
// }
// 4-masala //
// {
//     function printNumbers(n: number): void {
//         if (n < 1) return;
//         printNumbers(n - 1);
//         console.log(n);
//     }
//     printNumbers(5);
// }
// 5-masala //
// {
//     let user = { name: "Shaxzod" };
//     let age = { age: 25 };
//     let userJob = { job: "Developer" };
//     let combinedObject = { ...user, ...age, ...userJob };
//     console.log(combinedObject);
// }
// 6-masala //
// {
//     let salaries = {
//         aXodim: 150,
//         bXodim: 180,
//         cXodim: 210
//     };
//     function sumSalaries(salaries: { [key: string]: number }): number {
//         return Object.values(salaries).reduce((sum: number, salary: number) => sum + salary, 0);
//     }
//     console.log(sumSalaries(salaries));  
// }
// 7-masala //
// {
//     let numbers = [1, 3, 7, 2, 9, 4];
//     function findMax(arr: number[]): number {
//         return Math.max(...arr);
//     }
//     console.log(findMax(numbers));
// }
// 8-masala //
// {
//     let arr = [2, 4, 6, 7, true, false, null, undefined];
//     function sumArray(arr: any[]): number {
//         return arr.reduce((sum, item) => sum + (typeof item === 'number' ? item : 0), 0);
//     }
//     console.log(sumArray(arr));
// }
// // // // 2-rasmdagi 10 ta masalalar // // // //
// 1-masala //
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
// 2-masala //
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
// 3-masala //
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
// 4-masala //
// {
//     let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     function filterEvenNumbers(arr: number[]): number[] {
//         let evenNumbers: number[] = arr.filter(num => num % 2 === 0);
//         return evenNumbers;
//     }
//     let evenArray = filterEvenNumbers(numbers);
//     console.log(evenArray);
// }
// 5-masala //
// {
//     let numbers: number[] = [50, 20];
//     let sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     console.log(sum);
// }
// 6-masala //
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
// 7-masala //
// {
//     type User = {
//         id: number;
//         name: string;
//         address: string;
//     };
//     let users: User[] = [
//         { id: 1, name: "User1", address: "Address1" },
//         { id: 2, name: "User2", address: "Address2" },
//         { id: 3, name: "User3", address: "Address3" },
//         { id: 4, name: "User4", address: "Address4" },
//         { id: 5, name: "User5", address: "Address5" },
//         { id: 6, name: "User6", address: "Address6" },
//         { id: 7, name: "User7", address: "Address7" },
//         { id: 8, name: "User8", address: "Address8" },
//         { id: 9, name: "User9", address: "Address9" },
//         { id: 10, name: "User10", address: "Address10" }
//     ];
//     function findUserAddressById(users: User[], id: number): string | null {
//         const user = users.find(u => u.id === id);
//         return user ? user.address : null;
//     }
//     let address = findUserAddressById(users, 5);
//     console.log(address);
// }
// 8-masala //
// {
//     type User = {
//         id: number;
//         name: string;
//         address: string;
//     };
//     let users: User[] = [
//         { id: 1, name: "User1", address: "Address1" },
//         { id: 2, name: "User2", address: "Address2" },
//         { id: 3, name: "User3", address: "Address3" },
//         { id: 4, name: "User4", address: "Address4" },
//         { id: 5, name: "User5", address: "Address5" },
//         { id: 6, name: "User6", address: "Address6" },
//         { id: 7, name: "User7", address: "Address7" },
//         { id: 8, name: "User8", address: "Address8" },
//         { id: 9, name: "User9", address: "Address9" },
//         { id: 10, name: "User10", address: "Address10" }
//     ];
//     function getNames(arr: User[]): string[] {
//         return arr.map(user => user.name);
//     }
//     let names = getNames(users);
//     console.log(names);
// }
// 9-misol //
// {
//     let arr1: number[] = [1, 3, 5, 7, 9];
//     let arr2: number[] = [2, 4, 6, 8, 10];
//     function findLargestAndConvertToString(arr1: number[], arr2: number[]): string[] {
//         const largestArr1 = Math.max(...arr1);
//         const largestArr2 = Math.max(...arr2);
//         return [largestArr1.toString(), largestArr2.toString()];
//     }
//     let result = findLargestAndConvertToString(arr1, arr2);
//     console.log(result);
// }
// 10-misol //
// {
//     let numbers: number[] = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
//     function separateEvenOdd(arr: number[]): { evens: number[], odds: number[] } {
//         let evens: number[] = [];
//         let odds: number[] = [];
//         arr.forEach(num => {
//             if (num % 2 === 0) {
//                 evens.push(num);
//             } else {
//                 odds.push(num);
//             }
//         });
//         return { evens, odds };
//     }
//     let result = separateEvenOdd(numbers);
//     console.log(result.evens);
//     console.log(result.odds);
// }
