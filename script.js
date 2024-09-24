const name1 = "Maxwell Wright";
const name2 = "Raja Villarreal";
const name3 = "Helen Richards";
const phone1 = "(0191) 719 6495";
const phone2 = "0866 398 2895";
const phone3 = "0800 1111";
const email1 = "Curabitur.egestas.nunc@nonummyac.co.uk"
const email2 = "posuere.vulputate@sed.com"
const email3 = "libero@convallis.edu"
console.log("First Contact Info: ","name:", name1, " Phone: " , phone1,  "email:", email1)

let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number
   
let names = "Alice";
console.log(typeof names); // -> string
console.log(typeof "Bob"); // -> string
   
let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string

//This is the main numeric type in JavaScript that represents both real numbers (e.g. fractions) and integers. The format in which the data of this type is stored in the memory means that the values of this type are sometimes approximate (especially, but not only, very large values or some fractions). It is assumed, among other things, that in order to ensure the correctness of calculations, the integer values should be limited in JavaScript to the range from -(253 – 1) to (253 – 1).

let a = 10; // decimal - default
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
   
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
   
let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123

//The BigInt type is not used too often. It allows us to write integers of virtually any length. For almost any normal numerical operations, the Number type is enough, but from time to time we need a type that can handle much bigger integers.

//We can use mathematical operations on BigInts in the same way as on Numbers, but there is a difference when dividing. As the BigInt is an integer type, the division result will always be rounded down to the nearest whole number.

//BigInt literals are numbers with the ...n suffix.


let big = 1234567890000000000000n;
let big2 = 1n;
   
console.log(big); // -> 1234567890000000000000n
console.log(typeof big); // -> bigint
   
console.log(big2); // -> 1n
console.log(7n / 4n); // -> 1n



//You cannot use other types in arithmetic operations on BigInts, that is, you cannot add a BigInt and a Number to each other (this will generate an error).

//---------------check here💥
//let big3 = 1000n + 20;
// -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

//The BigInt does not have its own equivalent of Infinity or NaN values. In the case of the Number type, such values appear when dividing by 0 (Infinity result) or trying to perform an arithmetic action on a value that is not a number (NaN result). In the case of the BigInt type, such actions will generate an error.

//---------------check here💥
//let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero


let message1 = "The vessel 'Mars' called at the port.";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';
   
console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.

let  message3  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message4  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
console.log(message3);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message4);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows

let  path1  =  "C:\\Windows"  -  "Windows";
console.log(path);  //  ->  NaN
   
let  test  =  "100"  -  "10";
console.log(test);  //  ->  90
console.log(typeof  test);  //  ->  number
let  path2  =  "C:\\"  +  "Windows";
console.log(path);  //  ->  C:\Windows
   
let  test1  =  "100"  +  "10";
console.log(test);  //  ->  10010
console.log(typeof  test);  //  ->  string

//STUDY THE CODE
let  declaredVar;
console.log(typeof  declaredVar);  //  ->  undefined
   
declaredVar  =  5;
console.log(typeof  declaredVar);  //  ->  number
   
declaredVar  =  undefined;
console.log(typeof  declaredVar);  //  ->  undefined
   
//The  undefined  value  can  also  be  returned  by  the  typeof  operator  when  a  non-existent  variable  is  used  as  an  argument.
   
//console.log(typeof  notDeclaredVar);  //  ->  undefined
//console.log(notDeclaredVar);  //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined


//STUDY THE CODE
let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
   
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object

//Using literals is not the only way to create variables of the given primitive types. The second option is to make them using constructor functions. These types of functions are mainly used in JavaScript for object-oriented programming, which is outside the scope of our course. However, these few listed constructor functions can also be used to create primitives, not just objects (this is not a general feature, but only for the listed functions). The following functions will return primitives of a given type: Boolean, Number, BigInt, and String.

//Most of these functions can be called without any arguments. In such a situation:

//the function String will by default create and return an empty string – primitive "";
//the function Number will by default create and return the value 0;
//the function Boolean will by default create and return the value of false.
//The function BigInt, unlike other constructor functions, requires you to pass some initial value to it. This can be an integer number that will be converted to a BigInt (see examples).

const  str  =  String();
const  num  =  Number();
const  bool  =  Boolean();
   
console.log(str);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false
   
const  big1  =  BigInt(42);
console.log(big1);  //  ->  42n
   
//const  big42  =  BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

console.log(Number(42));  //  ->  42
   
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN
   
console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000
   
console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0
   
console.log(Number(undefined));  //    ->  NaN
   
console.log(Number(null));//  ->  0
 
//BOOLEAN TYPE CONVERSION

console.log(Boolean(true));  //  ->  true
   
console.log(Boolean(42));  //  ->  true
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false
   
console.log(Boolean("text"));  //  ->  true
console.log(Boolean(""));  //  ->  false
   
console.log(Boolean(undefined));  //  ->  false
   
console.log(Boolean(null));  //  ->  false


//In order for conversions to a BigInt to succeed, we require a Number or String representing a number as a value to be converted. Values for conversion can be given in the default decimal form, as well as in hexadecimal, octal, or binary form. This applies both to the situation where we give the Number and String literals as arguments (or variables containing data of those types). We can also use exponential notation, but only for Number arguments. Unlike other conversions, conversion to a BigInt will throw an error, and will stop the program when unable to convert a given value.

//Note: When testing the following example, please pay attention to the fact that the first error prevents further code execution. So run the example several times in succession, removing the wrong calls one by one.


console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n
   
console.log(BigInt(true)); // -> 1n
   
console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n
   
//console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt
   
//console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt
   
//console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

//IMPLICIT CONVERSION
const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number

//
let bb = Boolean( BigInt(Number("1234"))); 
console.log(`${bb} [${typeof bb}]`); // or let s = "1234"; let n = Number(s); let bi = BigInt(n); let b = Boolean(bi); console.log(`${b} [${typeof b}]`);
//
let bbb = true + false; 
let n = 100 + 200; 
let bi = 100n + 200n; 
let s = "He" + "llo"; 
let u = undefined + undefined; 
console.log(`${bbb} [${typeof bbb}]`); // !!! number 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`); 
console.log(`${s} [${typeof s}]`); 
console.log(`${u} [${typeof u}]`); // !!! number

//to know if a datatype is an array
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
let  day  =  "Sunday";
   
console.log(typeof  days);  //  ->  object
console.log(typeof  day);  //  ->  string
   
console.log(days  instanceof  Array);  //  ->  true
console.log(day  instanceof  Array);  //  ->  false


 // HOW SLICE WORKS

let  names1  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
let  n1  =  names1.slice(2);
console.log(n1);  //  ->  ["Mateo",  "Samuel"]
   
let  n2  =  names1.slice(1,3);
console.log(n2);  //  ->  ["Emma",  "Mateo"]
   
let  n3  =  names1.slice(0,  -1);
console.log(n3);  //  ->  ["Olivia",  "Emma",  "Mateo"]
   
let  n4  =  names1.slice(-1);
console.log(n4);  //  ->  ["Samuel"]
   
console.log(names1);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
 
// THE CONCAT
let  names2  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names2.concat(  otherNames);
   
console.log(names2);  //  ->  ["Olivia",  "Emma",  "Mateo","Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel",  "William",  "Jane"]

let books = [{ title: "Speaking JavaScript", author: "Axel Rauschmayer", pages: 460 }, { title: "Programming JavaScript Applications", author: "Eric Elliot", pages: 254 }, { title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas", pages: 352 } ];
let newBook = { title: "Learning JavaScript Design Patterns", author: "Addy Osmani", pages: 254 }; books.push(newBook); console.log(books.length); console.log(books[0].title); console.log(books[1].title); console.log(books[2].title); console.log(books[3].title);
let selectedBooks = books.slice(-2);


//
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

let newContact = {
   name: "Maisie Haley",
   phone: "0913 531 3030",
   email: "risus.Quisque@urna.ca"
}
contacts.push(newContact)
console.log(contacts);
console.log(contacts[0]);
console.log(contacts[contacts.length-1]);
console.log(contacts.slice(0,1));
console.log(contacts.slice(-1));
console.log(contacts[contacts.length]);




let height = 180;
{
let height = 200;
height = height + 10;
}
console.log(height);



 // UNARY OPERATORS
let strr = "123";
let nn1 = +strr;
let nn2 = -strr;
let nn3 = -nn2;
let nn4 = +"abcd";
 
console.log(`${strr} : ${typeof strr}`); // -> 123 : string
console.log(`${nn1} : ${typeof nn1}`); // -> 123 : number
console.log(`${nn2} : ${typeof nn2}`); // -> -123 : number
console.log(`${nn3} : ${typeof nn3}`); // -> 123 : number
console.log(`${nn4} : ${typeof nn4}`); // -> NaN : number

//INCREAMENT AND DECREAMENT
console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let nnn3 = 20;
let nnn4 = 20;

console.log(nnn3); // -> 20
console.log(nnn3--); // -> 20
console.log(nnn3); // -> 19

console.log(nnn4); // -> 20
console.log(--nnn4); // -> 19
console.log(nnn4); // -> 19

//COMPOUND OPERATORS
let x1 = 10;
 
x1 += 2;
console.log(x1); // -> 12
x -= 4;
console.log(x1); // -> 8
x1 *= 3;
console.log(x1); // -> 24
x1 /= 6;
console.log(x1); // -> 4
x1 **= 3;
console.log(x1); // -> 64
x1 %= 10;
console.log(x1); // -> 4

//COMPOUND OPERATOR
//AND
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false
//OR
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false
//NEGATION
console.log(!true); // -> false
console.log(!false); // -> true
//COMBO
const a1 = false;
const b1 = true;
const c1 = false;
const d1 = true;
 
console.log(a1 && b1 && c1 || d1); // -> true
console.log(a1 && b1 && (c1 || d1)); // -> false

//Logical operators and non-Boolean values
let nr1 = 0;
let year1 = 1970;
let name11 = "Alice";
let empty = "";
 
console.log(!nr1); // -> true
console.log(!year1); // -> false
console.log(!name11); // -> false
console.log(!empty); // -> true
 
console.log(!!nr1); // -> false
console.log(!!name11); // -> true

// binary logical operators AND NON_BOOLEAN VALUES
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
 
 
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

let x2 = 0;
let y2 = 0;
console.log(x2++ && y2++); // -> 0
console.log(x2); // -> 1
console.log(y2); // -> y == 0

//Compound Assignment Operators
let a2 = true;
console.log(a2); // -> true
a2 &&= false;
console.log(a2); // -> false

let b2 = false;
console.log(b2); // -> false
b ||= true;
console.log(b2); // -> true

/*The instruction a &&= false means exactly the same as a = a && false.
This time, the operation b ||= true is interpreted as b = b || true.*/

console.log(4 * 5 === 20); 
console.log(6 * 5 == "30"); 
console.log(-17 < 0); 
console.log(25 > 1); 
console.log(2 + 2 * 2 != 4);

console.log(true || false); 
console.log(false || ! false); 
console.log(false || false || true); 
console.log(true || false && false && true);

//SIMPLE AND COMPOUND CONCATENATION
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice
 
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
 
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string
 
//COMPOUND

let sentences = "Happy New ";
sentences += "Year ";
sentences += 10191;
console.log(sentences); // -> Happy New Year 10191

//COMPARISON OPERATORS
//IDENTITY OR STRICT OPERATOR
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false
//EQUALITY OPERATOR
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

/* the nonidentity operator !== and the inequality operator !=. */

console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

/*COM*/

console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
 
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
 
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true
/* It is assumed that the values of the single characters correspond to their positions in the alphabet (the letter b has a higher value than the letter a). Upper-case letters have lower values than lower-case letters, and digits have even lower values.*/
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

 
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
 
console.log("ab" < "ab4"); // -> true



let namez = window.prompt("What is your name?", "John Doe");
namez = namez ? namez : "anonymous";
 
let age = prompt("Hello " + namez + " how old are you?");
alert(namez + " is " + age + " years old");

let width = prompt("Volume of the box, enter width", 0); 
let heightz = prompt("Volume of the box, enter height", 0);
let length = prompt("Volume of the box, enter length", 0); 
let volume = width * heightz * length; 
alert(`Calculated box volume is ${volume}`);

