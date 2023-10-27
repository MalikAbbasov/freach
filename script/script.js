// const arr = ["malik", "iman", "samir", "elcan"]
// let big = 0
// arr.forEach((element,i)=>console.log(element.toUppercase(),i))



// task-26
// const arr = [2,3,11,17,7]
// arr.forEach((number,i)=>  (number%2!==0 ? console.log(i) :null))

// task-27
// const arr = [2,3,11,12,17,7]
// arr.forEach((number,i)=>  (number%2===0 ? console.log(i) :null))

// task-28
// const arr = [2,3,11,17,7]
// arr.forEach((number,i)=>  (i%2!==0 ? console.log(number) :null))

// task-29
// const arr = [2,3,11,17,7]
// arr.forEach((number,i)=>  (i%2===0 ? console.log(number) :null))

// task-30
// const arr = [2,3,11,17,25,7]
// let max = 0
// arr.forEach((number,i)=> (arr[i]>max ? max=arr[i] :null) )
// console.log(max);

// task-31
// const arr = [2,3,1,11,17,25,7]
// let max = arr[0]
// arr.forEach((number,i)=> max>arr[i] ? max=arr[i] :null)
// console.log(max);

// task-32
// const arr = [2,3,1,18,17,24,32,7]
// let maxEven = arr[0]
// arr.forEach((number,i)=> number%2===0 && maxEven<arr[i] ? maxEven=arr[i] :null)
// console.log(maxEven);

// task-33
// const arr = [31,18,17,24,32,10,3,7]
// let minEven = arr[0]
// arr.forEach((number,i)=> number%2===0 && minEven>arr[i] ? minEven=arr[i] :null)
// console.log(minEven);

// task-34
// const arr = [31,18,17,24,32,10,3,7]
// let maxodd = arr[0]
// arr.forEach((number,i)=> number%2!==0 && maxodd<arr[i] ? maxodd=arr[i] :null)
// console.log(maxodd);

// task-35
// const arr = [31,18,17,24,32,10,3,7]
// let minodd = arr[0]
// arr.forEach((number,i)=> number%2!==0 && minodd>arr[i] ? minodd=arr[i] :null)
// console.log(minodd);

// task-36
// const arr = [2,3,11,1,7,25,7]
// let min = arr[1]
// let index = 0
// arr.forEach((number,i) => {
//     if (min>arr[i]) {
//         min=arr[i];
//         index=i;
//     }
// })
// console.log(index);

// task-37
// const arr = [2,3,11,1,7,25,7,33]
// let max = arr[1]
// let index = 0
// arr.forEach((number,i) => {
//     if (max<arr[i]) {
//         max=arr[i];
//         index=i;
//     }
// })
// console.log(index);

// task-38
// const arr = [2,3,11,1,7,33,25,7,33,33]
// let max = arr[1]
// let count = 0
// arr.forEach((number,i) => {
//     if (max<arr[i]) {
//         max=arr[i];
//         count =1
//     }
//     else if (max === arr[i]) count++
// })
// console.log(max, count);

// TASK-39
// const arr = [2,3,11,1,7,33,1,25,1,7,33,33]
// let min = arr[1]
// let count = 0
// arr.forEach((number,i) => {
//     if (min<number) {
//         min=number;
//         count = 1
//     }
//     else if (min === arr[i]){ count++}
// })
// console.log(min, count);

// task-40
// const arr = [2,3,11,1,33,7,25,7]
// let max = arr[1]
// let index =0
// arr.forEach((number,i)=>{
//     if (max<arr[i]) {
//         max=arr[i]
//         index = i;

//     }
// });
// firstelement = arr[0]
// arr[0]= arr[index]
// arr[index]=firstelement
// console.log(arr);

// task-41
// const arr = [2,3,11,1,33,7,25,7]
// let min = arr[1]
// let index =0
// arr.forEach((number,i)=>{
//     if (min>arr[i]) {
//         min=arr[i]
//         index = i;

//     }
// });
// firstelement = arr[0]
// arr[0]= arr[index]
// arr[index]=firstelement
// console.log(arr);

// task-42
const arr = [2,3,11,1,33,7,25,7]
let min = arr[1]
let max = arr[1]
let Minindex =0
let Maxindex = 0
arr.forEach((number,i)=>{
    if (min>arr[i] && max<arr[i]) {
        min=arr[i]
        max=arr[i]
        Minindex = i;
        Max

    }
});
firstelement = arr[0]
arr[0]= arr[index]
arr[index]=firstelement
console.log(arr);