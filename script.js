//Task 3,4,5,10//
let search = document.getElementById("search");
let butt = document.getElementById("butt");
let array = [
    {name:"Dima", age:"27"},
    {name:"Vitaly", age:"26"},
    {name:"Egor", age:"25"}
];
butt.addEventListener("click", () => {
    if(search.value==="google"){
        setTimeout(() => {
            alert(`Yandex круче. Но это не точно! ${array[0].name}`)
        }, 3000);
    } else{
        setTimeout(() => {alert(`${search.value} ${array[0].name}`)
    },3000);
    }
});
//Task 6//
const superSum = (num1,num2) => {
   alert(`sum result: ${num1 + num2}`);
}
superSum(2,3);
//Task 7//
let numArray = [34, 12, 2, 67, 48, 322];
let min;
let max;
for (let i = 0; i < numArray.length; i++) {
    if (!min && !max){
    min = numArray[i];
    max = numArray[i]
    }
    if(numArray[i] < min){
        min = numArray[i];
    }
    if(numArray[i] > max){
        max = numArray[i];
    } 
}
console.log(min);
console.log(max);
//Task 8//
let a = "AAA";
let b ="BBB";
[a,b] = [b,a]
console.log(a)
//Task 9//
const findMax = (array) => {
    let max = array[0];
    for (let i =0; i < array.length; i++){
        if (array[i] > max){
            max=array[i];
        }
    } 
    return max;
}
console.log(findMax(numArray));
