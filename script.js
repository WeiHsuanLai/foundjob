// console.log("HI!Js!");
// 變數宣告 (var const let)

// let name = "Leo"
// console.log(name);

// let sentence = '今天過得如何?很高興見到你，希望你有美好的一天!'
// console.log(name + sentence);

// 內建方法介紹 pronpt() 與 alert()

// fruit = prompt("你最喜歡的水果是什麼?")
// console.log(fruit);
// alert(fruit)

// 服務費計算機
let food = parseInt(prompt('這餐花費多少?'))
let tipPercentage = parseInt(prompt("服務費費有幾 %"))/100
let tipAmount = food * tipPercentage 
let total = food + tipAmount
console.log("服務費金額" + tipAmount);
console.log("總金額" + total);
