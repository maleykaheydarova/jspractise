
// ex1
const x= 123;
console.log(1+ " " + 2 + " " + 3);


// var a= 5
// var b =3 
// b=[a, a=b,][0]
// console.log(a,b)

// ex2
let a=5
b=3
a=a+b
b=a-b
a=a-b
console.log(a,b)

// ex3
let number = 98;
let numberStr = number.toString();

let leftDigit =parseInt(numberStr.charAt(0));
let unitDigit = parseInt(numberStr.charAt(1));

console.log(leftDigit);
console.log("  ");
console.log(unitDigit);

// ex4

// 1)
let number1=34;

let oneDigit=Math.floor(number1/10)
let anotherDigit=number1 % 10

sum= oneDigit+ anotherDigit;
multiple= oneDigit * anotherDigit;

console.log(sum)
console.log(multiple)

// 2)
let number2= -34;

let oneDigit1=Math.floor(number2/10);
let anotherDigit1=Math.ceil(number2/10);

sum=oneDigit1+ anotherDigit1;
multiple= oneDigit1 * anotherDigit1;

console.log(sum);
console.log(multiple);

// ex5

let number3=30;
let numberStr2= number3.toString();
console.log( numberStr2.split("").reverse().join("").replace(0, ""));

// ex6

let num=1234567;
let numStr= num.toString();

let thirdDigit= parseInt(numStr.charAt(4)); 
console.log(thirdDigit);

// ???
let num1=34;

let numStr1=num1.toString();

let thirdDigit1=parseInt(numStr1.charAt(4));

if (isNaN(thirdDigit1)) {
    thirdDigit1=0;
}
console.log(thirdDigit1);

// ex7

let num2=307;
let numStr2= num2.toString();

console.log( numStr2.split("").reverse().join("").replace(3, ""));

// ex8
// 1)
let numm=123;
let nummStr= numm.toString();

console.log( nummStr.split("").reverse().join(""));

// 3)

let numm1=560;
let nummStr1= numm1.toString();

console.log( nummStr1.split("").reverse().join("").replace(0, ""));

// ex9

let numm2=123;
let nummStr2= numm2.toString();

let newnumber= nummStr2.slice(1) +nummStr2.charAt(0);
let newnumber1= parseInt(newnumber);

console.log(newnumber1);

// ex10

// 1)

let num3 = 123;
let numStr3= num3.toString();

let reversednumber= numStr3.replace( /(\d)(\d)(\d)$/, '$2$1$3');

let reversednumber1= parseInt(reversednumber);
console.log(reversednumber1);

// 2)

let num4=105;
let numStr4= num4.toString();
 
let reversedNumberr= numStr4.replace( /(\d)(\d)(\d)$/, '$1$3');

let reversedNumberr1= parseInt (reversedNumberr);
console.log(reversedNumberr1);

// ex11

let num5=123;
let numArr= Array.from(String(num5), Number);
numArr.push(3);
numArr.unshift(3);
let addNumber1= parseInt (numArr.join(""));

console.log(addNumber1);

// ex12

let num6=12345;
let thousandsNum=Math.floor(num6/1000) % 10;

console.log(thousandsNum);


// ex13

let num7=12345;

let numStr7= num7.toString();

let sumNumbers= Number (numStr7.charAt(0))+ Number(numStr7.charAt(1));
let sumNumbers2= Number(numStr7.charAt(3)) +Number(numStr7.charAt(4));

let differenceNumbers= sumNumbers - sumNumbers2;

let differenceNumbers1= parseInt(differenceNumbers)

console.log(differenceNumbers1);

// ex14

let num8=12345;
let sumOfSq=0;

let numStr8= num8.toString();
for(let i=0; i<numStr8.length; i++){
    let numStrOne = parseInt(numStr8[i]);
    sumOfSq+= Math.pow(numStrOne, 2);
}

console.log(sumOfSq);

// ex15


let num9=12340;

let numStr9=num9.toString();

console.log(numStr9.split('').reverse().join("").replace(0, ""));



