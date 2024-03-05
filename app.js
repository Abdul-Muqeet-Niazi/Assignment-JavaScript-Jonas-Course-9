"use strict";

// We only have one data type for all numbers which is binary in Javascript. Also, numbers are represented internally in a 64 base 2 format in the real world not in programming languages.
// So that means that numbers are always stored in a binary format. So basically, they're only composed of zeros and ones.
// Now, in this binary form, it is very hard to represent some fractions that are very easy to represent in the base 10 system that we are used to.

console.log(0.2 + 0.1); // Which answer in our mind comes 0.3 but answer is 0.3000000000004

// Binary = 0 & 1
// Base 10 = 0 - 9

console.log(0.2 + 0.1 === 0.3); // While in our opinion its ans is true but infact to program its ans is false

// Conversion String into Number:
// Whenevr we represent the number we wrote like:
console.log(Number("23"));
// But an easy way is also this:
console.log(+"23");
console.log(typeof +"12"); // here you can see with proof

// Parsing:
// Parsing means take out the number form strings with the reference of base 10(it will auto generate in parseint function) not binary 2.
console.log(parseInt("30px"));
// 30 (strings is ignored)
console.log(parseInt("30px", 2));
// NaN (Not takes the numbers out from string while in the reference of binary 2)
console.log(parseInt("x30"));
// NaN (first string and then numbers do not parse)
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

// For Parsing Decimal:
console.log(parseFloat("1.9"));
// 1.9 (takes the numbers out from string in decimal)

// For Checking the Value which is Number or Not!
console.log(Number.isFinite(69)); // Display true
console.log(Number.isFinite("69")); // Display false
console.log(Number.isFinite(+"23")); // Display true
console.log(Number.isFinite(23 / 0)); // Display false bcz infinity is (Not A Number)

// For Checking the Integer (An integer is any number including 0, positive numbers, and negative numbers. It can never be a fraction, a decimal or a per cent).
console.log(Number.isInteger(0.1)); // Display false
console.log(Number.isInteger(69 / 2)); // Display false
console.log(Number.isInteger(0)); // Display true
console.log(Number.isInteger(69)); // Display true
console.log(Number.isInteger(69.0)); // Display true bcz last 0 after decimal does not count!

// For Squaring Number:
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt("25")); // 5
// It also does typr coercion which means convert string into number!

// For Finding Max Number!
console.log(Math.max(2, 8, 15, 55, 6)); // 55
console.log(Math.max(2, 8, 15, "55", 6)); // 55

// For Finding Min Number!
console.log(Math.min("2", 8, 15, 55, 6)); // 2
console.log(Math.min("2", 8, 15, 55, 6)); // 2

// Used for PI Value:
console.log(Math.PI); // 3.14159....

// For Random Number:
// While random() creates 0 and 1 number with decimal and for your number like a dice having "six" number then (* with 6 + 1) (+1 because it will provide random number from 0 to 5 so adding 1 comes to 1-6)
console.log(Math.random()); // every time creates 0 and 1 with decimal
console.log(Math.trunc(Math.random() * 6) + 1);

// Removing Decimal Number to become Integer!
console.log(Math.trunc(2.05689));

// Making a formula from min to max for random numbers! (Important Formula 😯)
const formula = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(formula(5, 10));

// Rounding Integers: (They all do type corcion)
// Rounding:- Round to nearest one
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.4)); // 2

// Rounding UP:-
console.log(Math.ceil(2.9));
console.log(Math.ceil(2.3));

// Rounding DOWN:-
console.log(Math.floor(2.9));
console.log(Math.floor(2.3));

// floor vs trunc vs ceil
console.log(Math.trunc(-2.9));
console.log(Math.floor(-2.2)); // While it also work in negative!
console.log(Math.ceil(-2.8)); // While it is not working in negative!

// Rounding decimal: (Note: Its answer will always in decimal)
console.log((2.9).toFixed(0)); // Round to 3
console.log((2.9).toFixed(1)); // Does not round (1) it means put 1 decimal = 2.9
console.log((2.9).toFixed(5)); // Does not round (5) it means put 5 decimal = 2.90000
console.log(+(2.969).toFixed(2)); // Round to 2.97 Where 6 to 7
console.log(+(2.969).toFixed(3)); // Does not round (3) it means put 3 decimal = 2.969

// Remaider Operator ! (Syntax : %)
// Remainder means that the remaining value of division which is remainder
console.log(5 % 2); // 1
console.log(4 % 2 === 0); // true

// Numeric Separator: (Syntax "_" )
// It is used to basically understand the large numbers or values!
const price = 23500000; // So it looks weird!
const price2 = 2_35_000_00; // Now it clear
console.log(price2);

// Note: You cant use Numeric Separator at first, end, & after point!
// const value = 23_ ;
// const value = 3._1415 ;
// const value = _23 ;
// console.log(value);

// BigInt
// In Javascript, Number have been stored at maximum value of:
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// You cant add more numbers in this!
// Where Database have more numbers or values so Javascript introduced BigInt where you can add more numbers as you want ther is no limit
console.log(BigInt(9561537491387945315684)); // AS we stored this large number and there is also a short trick!
console.log(9561537491387945315684n); // It is same as above
console.log(typeof 9561537491387945315684n); // Proof of BigInt

// Operation with BigInt:
// You cant add BigInt with regular Number
// console.log(256897451236n + 500); // Gave error
console.log(250000000000n + 500n); // It is correct
console.log("2500000" + 500n); // Done Concatenation

// If we have a value of API which is value3 then we use BigInt() Method
const value2 = 2500n;
const value3 = 2500;
console.log(value2 + BigInt(value3)); // Result 5000

console.log(2500n === 2500); // False bcz BigInt and regular number cant match!

// Math Operation:
// Where Operations cant be done on this language!
// console.log(Math.sqrt(BigInt(25))); // It cannot be done!

// Division:
// In division, It will remove numbers after decimal.
console.log(5n / 3n); // Result is "1n"
console.log(5 / 3); // While regular number cant cut decimal number!

// Create Date: (IMPORTANT TOPIC); ( Syntax: new Date() )
console.log(new Date()); // Result currently time
console.log(new Date(2024, 1, 29, 22, 30, 0)); // This will be fixed time created by you! (year, month, date, hour, min, sec) they all accept index which means if you write according to your mind for feb month as 2 it will represent as March according to index of program. This will also work on day where "0" index is "sunday" there is no "7 days" instead of "6". And for hour where "0" index is 1 where midnight is "11" which is in real world is "12 O'clock ".
console.log(new Date(2024, 1, 30)); // Where it also corrects the date means there is no 30 days in feb according to calender so it will turn the date into "March 1" !
console.log(new Date(0)); // Result is Thu Jan 01 1970 05:00:00 GMT+0500 (Yekaterinburg Standard Time)
// But why? there is a long story which is unix time where in youtube it can help us to you!

// Getting Date:
const future = new Date(); // Display present date!
console.log(future); // Sun Feb 25 2024 00:42:32 GMT+0500 (Yekaterinburg Standard Time)
console.log(future.getDate()); // Get the date and display it = 25th
console.log(future.getDay()); // Get the day and display it = Sunday = 0
console.log(future.getMonth()); // Get the month and display it = February = 1
console.log(future.getFullYear()); // Get the Year and display it = 2024
console.log(future.getHours()); // Get the hours and display it = Midnight = 00
console.log(future.getMinutes()); // Get the minutes and display it = 42min
console.log(future.getSeconds()); // Get the minutes and display it = current second
console.log(future.getMilliseconds()); // Get the milli-seconds and display it = current milli-second
console.log(future.getTime()); // Multiply all seconds since midnight (00:00:00) January 1, 1970
console.log(future.toDateString()); // Display "Sun Feb 25 2024"
console.log(future.toTimeString()); // Display "00:42:32 GMT+0500 (Yekaterinburg Standard Time)"
console.log(future.toISOString()); // Display "2024-02-24T19:51:03.451Z"
// "OR" //
console.log(future.toISOString().slice(0, 10));
console.log(new Date(1708804412662)); // Convert the all seconds since 1970 to NOW time! Display Sun Feb 25 2024 00:42:32 GMT+0500 (Yekaterinburg Standard Time)
console.log(Date.now()); // Display seconds since 1970

// Setting Date:
const ownDate = new Date(2024, 0, 25);
console.log(ownDate); // Display Thu Jan 25 "2024" 00:00:00 GMT+0500 (Yekaterinburg Standard Time)
ownDate.setFullYear(2035);
console.log(ownDate); // Display Thu Jan 25 "2035" 00:00:00 GMT+0500 (Yekaterinburg Standard Time)
// I am not writing as above for each element! But in a Simple words, set functions is used for all functions like above!

// ------------------------------------------------------------ [IMPORTANT] ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// INTERNATIONALIZATION (IMPORTANT TOPIC + EASY + USEFUL 😯):
// INTERNATIONALIZATION DATES
// So JavaScript has a new Internationalization API. Now that sounds very fancy, but all it does is to allow us to easily format numbers and strings according to different languages. So with this new API, we can make our applications support different languages for users around the world which is pretty important. For example, currencies or dates are represented in a completely different way in Europeor in the U.S or in Asia for example. Now there is a lot of language specific things that we can do with the Internationalization API.
// Internationalization steps:
// 1. Write its API , 2. Write Formatting Method (Such as DateTimeFormat, NumberFormat, PluralRules) , 3. Write Format type in Paranthesis "means what you have to format Exapmle: A date, number etc".
const paragraphLabel = document.querySelector(".p-2");
paragraphLabel.textContent = "";
const date = new Date();
const intl = new Intl.DateTimeFormat("ar-AE").format(date); // "ar-AE" Arabic (U.A.E.) Code
const HTML = `Date: ${intl}`;
paragraphLabel.textContent = HTML;

// 🙄 Now you are worrying about "ar-AE" ? It is an ISO Language Code Table(where the language code of every country) which are available on chrome in lingoes.net website!
// The Best way to represent a value(such as Date, Number, Time, etc) is to make an object:
const paragraphLabelBelow = document.querySelector(".p-3");
paragraphLabelBelow.textContent = "";
const newDate = new Date();
const newDateObj = {
  day: "numeric",
  month: "long", // Expand into long word = 2nd Month -> February
  year: "2-digit", // compressed into 2 letter = 2024 -> 24
  hour: "numeric",
  minute: "numeric",
  weekday: "long",
};
const intl2 = new Intl.DateTimeFormat("de-AT", newDateObj).format(newDate); // "de-AT" German (Austria) Code
const HTML2 = `Date: ${intl2}`;
paragraphLabelBelow.textContent = HTML2;
// 🙄 In object you can also specify the string numeric into "long", "2-digit"

// You can also specify the language based on user internet for Example your a Pakistani It will detect your code language and change the time + way of writing time or more!
const locale = navigator.language; // It will navigate user language code through the internet!
console.log(locale); // You can see the proof
const intl3 = new Intl.DateTimeFormat(locale, newDateObj).format(newDate);
console.log(intl3);

// INTERNATIONALIZATION NUMBERS
const option2 = {
  style: "currency", // There are 3 types of style: percentage, currency, unit or also more than 3.
  currency: "EUR",
};
const num = 2563.258;
const intlNumber = new Intl.NumberFormat("ar-SY", option2).format(num);
console.log(intlNumber);

// ------------------------------------------------------------ [↑↑↑↑↑↑↑↑↑] ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// TIMERS:
// SET-TIMEOUT:
// The set timeout timer runs just once after a defined time, So basically, we can use set timeout to execute some code at some point in the future.

setTimeout(() => {
  console.log("Gave me Pizza");
}, 3000); // after 3 seconds it will log!

// It can also accept arguments:
setTimeout(
  (ing1, ing2) => {
    console.log(`Gave me Pizza with the flavour of ${ing1} and ${ing2}`);
  },
  4000,
  "onion",
  "ginger"
); // after 4 seconds it will log!

// You can also clear the timeout function
const ingredients = ["onion", "ginger"];
const timer = setTimeout(
  (ing1, ing2) => {
    console.log(`Gave me Pizza with the flavour of ${ing1} and ${ing2}`);
  },
  4000,
  ...ingredients
);
if (ingredients.includes("ginger")) clearTimeout(timer);

// SET-INTERVAL:
// While the set interval timer keeps running basically forever, until we stop it.

const timerMinSec = setInterval(() => {
  const present = new Date();
  const now = present.toISOString().slice(11, 19); // Display only time bcz we have slice it!
  console.log(now);
}, 1000);
console.log(timerMinSec);

// You can also stop this time by clearInterval;
clearInterval(timerMinSec);


//-------------------------------------------------- Topic Completed !!! -------------------------------------------------------------------------------------------------