let input = () => {
let arr = [];
let num = document.getElementById("op").value;
while (num > 0) {
arr.push(num--);
}
return arr;
};

let factorial = () => {
let arr = input();
let mul_reducer = (pr, mul) => pr * mul;
document.getElementById("res").value = arr.reduce(mul_reducer);
};