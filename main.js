function divisibleby10(number){
    return number %10===0;
}
function findMaxInArray(array) {
    if (array.length === 0) {
        return "Array is empty";
    }
    return Math.max(...array);
}
function reverseArray(array) {
    return array.reverse();
}
console.log(divisibleby10(20));
console.log(divisibleby10(23)); 

console.log(findMaxInArray([]));
console.log(findMaxInArray([3, 7, 2, 10, 5]));
console.log(reverseArray([1, 2, 3, 4])); 