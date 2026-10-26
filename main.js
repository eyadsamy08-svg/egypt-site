let users = {
names: "eyad",
lastName: "samy",
email: "eyadsamy08@gmail.com",
password: "12345Ryad.",
address: "cairo"
};

console.log(users);

let str = `${users.names}\n\t${users.email}`;
console.log(str);

let someAjectives = "what a beautiful name";
console.log(someAjectives);

let askEmail = prompt("what is your email");
console.log(askEmail === users.email);

if (askEmail) {
console.log(askEmail.trim().toLowerCase().length);
}

function hallo() {
console.log("hallo to my world");
}

hallo();

for (let i = 0; i < 10; i++) {
if (i < 10) {
    document.write("<h1> that is excellent </h1>");
} else if (i > 9) {
    document.write("<h1> that is good </h1>");
}
}

console.log("...data: any[]"); // void

let val = "1";
let answer = "0";

switch (val) {
case "1":
    answer = "what is the rate of this website is good or what";
    break;
case "2":
    answer = "give me for 1 out of 10 of my website";
    break;
default:
    answer = "unknown";
}

function test(mycondition) {
if (mycondition) {
    return "your profile is true";
}
return "your profile is false";
}

console.log(test(true));
console.log(test(false));

function multipleTraditional(a, b) {
  return a * b;
}
console.log(multipleTraditional(5,10));
const multipleShort = (a, b) => a * b;
console.log(multipleShort(5, 10));

function calculate(num1, num2, operation) {
return operation(num1, num2);
}

const sum = (a, b) => a + b;
const substract = (a, b) => a - b;

console.log(calculate(5, 10, sum)); // 15
console.log(calculate(5, 10, substract)); // -5
// 1. هات العناصر من الصفحة
const counterElement = document.getElementById('counter');
const enterBtn = document.getElementById('enterBtn');

// 2. ابدأ العد من صفر
let currentPlayers = 0;

// 3. لما المستخدم يضغط على زرار "دخول لاعب جديد"
enterBtn.addEventListener('click', () => {
    currentPlayers++; // زود الرقم واحد (يعني يتحول من 0 لـ 1، وهكذا)
    counterElement.innerText = currentPlayers; // اعرض الرقم الجديد في الصفحة فوراً
});

    
//thank you for everything







