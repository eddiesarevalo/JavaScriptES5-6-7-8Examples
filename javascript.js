/*ES 5 */

//string.trim()
var str = "       Hello World!        ";
console.log("Trimmed", str.trim());
document.querySelector("#trimSamp").innerHTML = str.trim();

//array.isarray()
var carMakeArray = ["toyota", "kia", "ford", "tesla"];
var isCarMakerAnArray = Array.isArray(carMakeArray);
console.log("is car make an array?", isCarMakerAnArray);

var carNumber = 1;
var isCarNumberAnArray = Array.isArray(carNumber);
console.log("Is car number an array?", isCarNumberAnArray);

document.querySelector("#isCarMakeArraySamp").innerHTML = "Is car make an array? " + isCarMakerAnArray;
document.querySelector("#isCarNumberAnArraySamp").innerHTML = "Is car number an array? " + isCarNumberAnArray;

//Array.forEach()
var books = "";
var booksArray = ["Clean Code", "Soft Skills", "Javascript", "HTML for dummies"];
booksArray.forEach(printEachOne);
console.log("Books string", books);

function printEachOne(value){
	books = books + "<br>" + value;
}
document.querySelector("#arrayForEachSamp").innerHTML = "Books: " + books;

//Array.map()
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = numbers1.map(multiplyByTwo);
console.log("Mapped numbers * 2", numbers2);

function multiplyByTwo(value) {
  return value * 2;
}
document.querySelector("#arrayForMapSamp").innerHTML = "Mapped numbers * 2: " + numbers2;

//Array.filter()
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = numbers1.filter(filterGreaterThanThree);
console.log("Numbers2 filtered > 3:", numbers2);

function filterGreaterThanThree(value){
	return value > 3;
}
document.querySelector("#arrayForFilterSamp").innerHTML = "Numbers2 filtered > 3: " + numbers2;

//Array.reduce()
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(sumReduce);
console.log("Numbers reduced to a sum:", sum);

function sumReduce(total, value){
	return total + value;
}
document.querySelector("#arrayForReduceSamp").innerHTML = "Numbers reduced to a sum: " + sum;

//Array.reduceRight()
var numbers = [1, 2, 3, 4, 5];
var sumFromRight = numbers.reduceRight(sumReduceRight);
console.log("Numbers reduced to a sum from the right:", sumFromRight);

function sumReduceRight(total, value){
	return total + value;
}
document.querySelector("#arrayForReduceRightSamp").innerHTML = "Numbers reduced to a sum from the right: " + sumFromRight;

//Array.every()
var numbers = [4, 5, 6, 7, 8];
var areNumbersAllOver3 = numbers.every(isOver3);
var areNumbersAllUnder3 = numbers.every(isUnder3);
console.log("Are all numbers over 3?", areNumbersAllOver3);
console.log("Are all numbers under 3?", areNumbersAllUnder3);

function isOver3(value){
	return value > 3;
}

function isUnder3 (value){
	return value < 3;
}
document.querySelector("#arrayForEveryOverSamp").innerHTML = "Are all numbers over 3? " + areNumbersAllOver3;
document.querySelector("#arrayForEveryUnderSamp").innerHTML = "Are all numbers under 3? " + areNumbersAllUnder3;

//Array.some()
var numbers = [1, 2, 3, 4, 5];
var areAnyNumbersOver4 = numbers.some(isOver4);
var areAnyNumbersUnder5 = numbers.some(isOver5);
console.log("Are any numbers over 4?", areAnyNumbersOver4);
console.log("Are any numbers over 5?", areAnyNumbersUnder5);

function isOver4(value){
	return value > 4;
}

function isOver5 (value){
	return value > 5;
}
document.querySelector("#arraySomeOver4Samp").innerHTML = "Are any numbers over 4? " + areAnyNumbersOver4;
document.querySelector("#arraySomeOver5Samp").innerHTML = "Are any numbers over 5? " + areAnyNumbersUnder5;

//Array.indexOf()
var carMakes = ["Toyota", "Kia", "Subaru", "Ford"];
var index = carMakes.indexOf("Subaru");
console.log('Index of "Subaru"', index);

document.querySelector("#arrayIndexOfSamp").innerHTML = 'Index of "Subaru" ' + index;

//Array.lastIndexOf()
var carMakes = ["Kia", "Toyota", "Kia", "Subaru", "Ford"];
var index = carMakes.lastIndexOf("Kia");
console.log('Last index of "Kia"', index);

document.querySelector("#arrayLastIndexOfSamp").innerHTML = 'Last index of "Kia" ' + index;

//JSON.parse()
var data = '{"id": 0, "type":"bird", "colors": ["red", "blue"] }';
var json = JSON.parse(data);

//JSON.stringify()
var data = '{"id": 0, "type":"bird", "colors": ["purple", "green"] }';
var jsonString = JSON.stringify(data);
console.log("JSON string:", jsonString);

document.querySelector("#jsonStringifySamp").innerHTML = "Json string: " + jsonString;

//Date.now()
var date = Date.now();
console.log("Date now", date);

document.querySelector("#dateNowSamp").innerHTML = "Date now: " + date;

//Getter and Setter
var pet = {
	creature: "Dog",
	name: "Jingles",
	get description() {
		return this.name + " is a " + this.creature + ".";
	}
};
console.log("Pet", pet.description);

document.querySelector("#getterSetterSamp").innerHTML = "Pet " + pet.description;

//Property access on strings
var str = "CAT";
console.log("Char at index 1", str[1]);

document.querySelector("#propertyAccessOnStringsSamp").innerHTML = "Char at index 1 is " + str[1];

/*ES 6 */

//let
var x = 1;
{
	let x = 2;
	console.log("x inside is", x);
	document.querySelector("#letInsideSamp").innerHTML = "x inside is " + x;
}
console.log("x outside is", x);
document.querySelector("#letOutsideSamp").innerHTML = "x outside is " + x;

//const
var x = 1;
{
	let x = 2;
	console.log("x inside is", x);
	document.querySelector("#constInsideSamp").innerHTML = "x inside is " + x;
}
console.log("x outside is", x);
document.querySelector("#constOutsideSamp").innerHTML = "x outside is " + x;

//Array.find()
var numbers = [1, 2, 3, 4, 5];
var firstAbove4 = numbers.find(isAbove4);

function isAbove4(value, index, array){
	return value > 4;
}
console.log("Value of first above 4 is:", firstAbove4);

document.querySelector("#arrayFindSamp").innerHTML = "Value of first above 4 is: " + firstAbove4;

//Array.find()
var numbers = [1, 2, 3, 4, 5];
var firstAbove4 = numbers.findIndex(isAbove4);

function isAbove4(value, index, array){
	return value > 4;
}
console.log("Index of first above 4 is:", firstAbove4);

document.querySelector("#arrayFindIndexSamp").innerHTML = "Index of first above 4 is: " + firstAbove4;

//EPSILON
var x = Number.EPSILON;
console.log("EPSILON", x);

//MIN_SAFE_INTEGER
var x = Number.MIN_SAFE_INTEGER;
console.log("MIN_SAFE_INTEGER", x);

//EPSILON
var x = Number.MAX_SAFE_INTEGER;
console.log("MAX_SAFE_INTEGER", x);

//Number.isInteger()
var isInteger = Number.isInteger(1); //true
console.log("Is 1 an integer", isInteger);

//Number.isSafeInteger()
var isSafeInteger = Number.isSafeInteger(1); //true
console.log("Is 1 a safe integer", isSafeInteger);

//isFinite()
var isNumberFinite = isFinite(10/0);
console.log("is 10/0 finite", isNumberFinite);

var isNumberFinite = isFinite(10/1);
console.log("is 10/0 finite", isNumberFinite);

//isNaN()
console.log('Is "a" NaN"', isNaN("a"));
console.log('Is 1 NaN"', isNaN(1));

/*Es5 Written Functionally*/
let cars = [
	{ make: "Toyota", model: "Camry" },
	{ make: "Kia", model: "Soul" },
	{ make: "Chevrolet", model: "Bolt" },
	{ make: "Kia", model: "Forte" },
	{ make: "Ford", model: "Escape" },
	{ make: "Toyota", model: "Corolla" },
	{ make: "Ford", model: "Expedition" }
];

//using for loop filter
var toyotasFromForLoop = [];
for(var i = 0; i < cars.length; i++){
	if(cars[i].make === "Toyota"){
		toyotasFromForLoop.push(cars[i]);
	}
}
console.log("Toyotas From For Loop", toyotasFromForLoop);

document.querySelector("#toyotasFromForLoopSamp").innerHTML = "Toyotas From For Loop:" + JSON.stringify(toyotasFromForLoop);

//Using Functional filter
var toyotasFromFunctional = cars.filter((car) => {
	return car.make === "Toyota";
});
console.log("Toyotas From Function:", toyotasFromFunctional);

document.querySelector("#toyotasFromFunctionalSamp").innerHTML = "Toyotas From Function: " + JSON.stringify(toyotasFromFunctional);

//Array.map() Functional
//Make a new array with mapped items.
//Example create a new array of car models.
var carModels = cars.map((car) => {
	return car.model;
});
console.log("Car Models:", carModels);
document.querySelector("#mapFunctionalSamp").innerHTML = "Car Models: " + JSON.stringify(carModels);

//Array.reduce() Functional
//Will iterate through an array to create a single value.
//Example get the sum of all the values in an array
var numbers = [1, 2, 3, 4, 5];
var sumValues = (total, value) => {
	return total + value;
}
var total = numbers.reduce(sumValues);
console.log("Total", total);
document.querySelector("#reduceFunctionalSamp").innerHTML = "Total: " + JSON.stringify(total);


//exponents
var x = 2;
var y = x ** 3;
console.log(x + " to the 3rd is", y);

document.querySelector("#exponentsSamp").innerHTML = x + " to the 3rd is " + y;

//Array.includes()
var numbers = [1,2,3,4,5];
var isIncluded = numbers.includes(3);
console.log("Includes 3:", isIncluded);

document.querySelector("#arrayIncludesSamp").innerHTML = "Includes 3: " + isIncluded;

/*ES 8*/
//str.padStart()
let startPadded = "rabbit".padStart(10, "a");
console.log("padStarted", startPadded);

document.querySelector("#padStartSamp").innerHTML = "padStarted " + startPadded;

//str.padEnd()
let endPadded = "rabbit".padEnd(10, "a");
console.log("padEnded", endPadded);

document.querySelector("#padEndSamp").innerHTML = "padEnded " + endPadded;

//Object.values()
let car = {make: "Toyota", model: "Corolla"};
console.log("car values:", Object.values(car));

document.querySelector("#objectValuesSamp").innerHTML = "car values: " + JSON.stringify(Object.values(car));

//Object.entries()
console.log("car entries:", Object.entries(car));

document.querySelector("#objectEntriesSamp").innerHTML = "car entries: " + JSON.stringify(Object.entries(car));

//Async functions
function resolveAfterSeconds(){
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('call resolved');
		}, 2000);
	});
}

async function asyncCall(){
	console.log("Start Call");
	document.querySelector("#asyncFunctionFirst").innerHTML = "Start Call";
	let result = await resolveAfterSeconds();
	console.log("2 seconds later", result);
	document.querySelector("#asyncFunctionSecond").innerHTML = "2 seconds later " + result;
}

asyncCall();
