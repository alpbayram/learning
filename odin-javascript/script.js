"use strict";
//Çalışırken yaptığım tüm functionları buraya koymayı planlıyorum.

//--------------------------------------------------------------------------------
// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
// 	if (btn.textContent === "Start machine") {
// 		btn.textContent = "Stop machine";
// 		txt.textContent = "The machine has started!";
// 	} else {
// 		btn.textContent = "Start machine";
// 		txt.textContent = "The machine is stopped.";
// 	}
// }
//--------------------------------------------------------------------------------
function Cat(name, breed, color) {
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.greeting = function () {
		console.log(`Hello, said ${this.name} the ${this.breed}.`);
	};
}
const cat2 = new Cat("Maya", "Çinçila", "Gri");
//cat2.greeting();
const cat3 = new Cat("deneme", "Deneme", "Deneme");
//cat3.greeting();
//--------------------------------------------------------------------------------
function sumOfTripledEvens(array) {
	let filteredArray = array.filter(function (x) {
		return x % 2 == 0;
	});

	let mappedArray = filteredArray.map((x) => x * 3);

	let reducedArray = mappedArray.reduce((total, x) => total + x);

	return reducedArray;
}

//console.log(sumOfTripledEvens([1, 2, 3, 4, 5]));

//--------------------------------------------------------------------------------
function camelize(string) {
	let newArray = string.split("-");

	let resultMap = newArray.map(function (item, index) {
		if (index > 0) {
			let splittedArray = item.split("");
			let upperCased = splittedArray[0].toUpperCase();
			splittedArray.splice(0, 1, upperCased);
			let last = splittedArray.join("");
			return last;
		} else {
			return item;
		}
	});

	//console.log(resultMap);
	let joinedMap = resultMap.join("");
	//console.log(joinedMap);
	return joinedMap;
}
camelize("-webkit-transition");
//--------------------------------------------------------------------------------
function filterRange(array, a, b) {
	let filteredArray = array.filter(function (item, index, array) {
		if (item >= a && item <= b) {
			return true;
		}
	});
	//console.log(filteredArray);
	return filteredArray;
}

let array = [5, 3, 8, 1];
let filtered = filterRange(array, 1, 4);
//console.log("bu filtered",filtered);
//console.log("bu array",array);

//--------------------------------------------------------------------------------

function filterRangeInPlace(array, a, b) {
	let newArray = array.slice();
	let indexToDelete = [];

	newArray.forEach(function (item, index) {
		if (item < a || item > b) {
			indexToDelete.push(index);
		}
	});
	indexToDelete.reverse();
	//tersten silicez indexe sıkıntı çıkarmasın diye

	indexToDelete.forEach(function (item) {
		array.splice(item, 1);
	});

	//console.log(indexToDelete);
}
let array1 = [5, 3, 8, 1];
filterRangeInPlace(array1, 1, 4);
//console.log("bu", array1);

//--------------------------------------------------------------------------------

function removeDuplicates(arr) {
	let seen = new Set(); // Görülen elemanları saklamak için bir Set oluştur
	let indexToDelete = []; // Silinecek indeksleri saklamak için dizi

	// Dizi üzerinde döngü başlat
	arr.forEach((item, index) => {
		if (seen.has(item)) {
			// Eğer eleman daha önce görüldüyse, indeksi ekle
			indexToDelete.push(index);
		} else {
			// Elemanı gördükten sonra Set'e ekle
			seen.add(item);
		}
	});

	// İndeksleri büyükten küçüğe sırala
	indexToDelete.sort((a, b) => b - a);

	// Her bir tekrar eden indeksi sil
	indexToDelete.forEach((index) => {
		arr.splice(index, 1); // Orijinal diziden sil
	});
}

// Test dizisi
let array2 = [5, 5, 5, 4, 4, 3, 3, 2];
removeDuplicates(array2);
//console.log(array2); // Çıktı: [5, 4, 3, 2]

//--------------------------------------------------------------------------------
//let arr = [5, 2, 1, -10, 8];
//console.log(arr.sort((a,b)=>b-a))
//--------------------------------------------------------------------------------

function copySorted(arr) {
	let array = arr.slice();
	array[3][0] = 20;
	return array.sort();
}

//let arr = ["HTML", "JavaScript", "CSS",[2,1]];

//let sorted = copySorted(arr);
//console.log(sorted);
//console.log(arr);
//--------------------------------------------------------------------------------
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];
// function sortByAge(arr) {
// 	arr.sort((a, b) =>a.age - b.age);
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);
//--------------------------------------------------------------------------------

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((item)=>item.name)

// console.log(names)// John, Pete, Mary
//--------------------------------------------------------------------------------
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

//let users = [john, pete, mary];

// let usersMapped = users.map((item, index, array) => ({
// 	fullName: `${item.name} ${item.surname}`,
// 	id: item.id,
// }));

//let usersMapped = users.map(function (item) {
//return { fullName: `${item.name} ${item.surname}`, id: item.id };
//});
//console.log(usersMapped);
/* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

//console.log(usersMapped[0].id); // 1
//console.log(usersMapped[0].fullName); // John Smith
//--------------------------------------------------------------------------------

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];
// function getAverageAge(){

// 	let averaged=arr.reduce(function(sum,item,index,array){
// 		return sum+item.age/array.length
// 	},0)
// console.log(averaged)
// }

// getAverageAge(arr)
//--------------------------------------------------------------------------------
// function unique(arr) {
// 	/* your code */
// 	let uniqArray=[];
// 	let filtered=arr.filter(function(item){
// 		if(uniqArray.includes(item)){
// 			console.log("zatenvar",item)
// 		}else{
// 			uniqArray.push(item)
// 		}

// 	})
// 	return uniqArray
//   }

//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   console.log(unique(strings) ); // Hare, Krishna, :-O

//--------------------------------------------------------------------------------

// let users = [
// 	{ id: "john", name: "John Smith", age: 20 },
// 	{ id: "ann", name: "Ann Smith", age: 24 },
// 	{ id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);
// console.log(usersById);

// function groupById(array) {
// 	let sortedObject = {};

// 	let sortedGroup = array.reduce(function (accumulator, item, index, array) {

// 		accumulator[item.id]=item
// 		return accumulator
// 		//console.log(sortedObject)
// 	}, sortedObject);
// 	return sortedGroup
// }

/*
  // after the call we should have:
  
  usersById = {
	john: {id: 'john', name: "John Smith", age: 20},
	ann: {id: 'ann', name: "Ann Smith", age: 24},
	pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
//--------------------------------------------------------------------------------

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

// const inventors = [
// 	{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
// 	{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
// 	{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
// 	{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
// 	{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
// 	{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
// 	{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
// 	{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
// 	{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
// 	{ first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
// 	{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
// 	{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
// ];

// const people = [
// 	"Bernhard, Sandra",
// 	"Bethea, Erin",
// 	"Becker, Carl",
// 	"Bentsen, Lloyd",
// 	"Beckett, Samuel",
// 	"Blake, William",
// 	"Berger, Ric",
// 	"Beddoes, Mick",
// 	"Beethoven, Ludwig",
// 	"Belloc, Hilaire",
// 	"Begin, Menachem",
// 	"Bellow, Saul",
// 	"Benchley, Robert",
// 	"Blair, Robert",
// 	"Benenson, Peter",
// 	"Benjamin, Walter",
// 	"Berlin, Irving",
// 	"Benn, Tony",
// 	"Benson, Leana",
// 	"Bent, Silas",
// 	"Berle, Milton",
// 	"Berry, Halle",
// 	"Biko, Steve",
// 	"Beck, Glenn",
// 	"Bergman, Ingmar",
// 	"Black, Elk",
// 	"Berio, Luciano",
// 	"Berne, Eric",
// 	"Berra, Yogi",
// 	"Berry, Wendell",
// 	"Bevan, Aneurin",
// 	"Ben-Gurion, David",
// 	"Bevel, Ken",
// 	"Biden, Joseph",
// 	"Bennington, Chester",
// 	"Bierce, Ambrose",
// 	"Billings, Josh",
// 	"Birrell, Augustine",
// 	"Blair, Tony",
// 	"Beecher, Henry",
// 	"Biondo, Frank",
// ];

// // Array.prototype.filter()
// // 1. Filter the list of inventors for those who were born in the 1500's

// let filteredArray = inventors.filter(
// 	(item, index, array) => item["year"] < 1600 && item["year"] > 1499
// );
// console.log(filteredArray);

// // Array.prototype.map()
// // 2. Give us an array of the inventors first and last names
// let mappedArray1 = inventors.map(
// 	(item, index, array) => `Inventor name: ${item["first"]} ${item["last"]}`
// );
// console.table(mappedArray1);

// // Array.prototype.sort()
// // 3. Sort the inventors by birthdate, oldest to youngest
// let sortedArray = inventors.sort(function (a, b) {
// 	// if (a.passed - a.year - (b.passed - b.year) > b.passed - b.year - (a.passed - a.year)) {
// 	// 	return -1;
// 	// } else if (a.passed - a.year - (b.passed - b.year) < b.passed - b.year - (a.passed - a.year)) {
// 	// 	return 1;
// 	// }
// 	// return 0;

// 	//let aAge=a.passed-a.year;
// 	//let bAge=b.passed-b.year;

// 	//return bAge-aAge
// 	return b.passed - b.year - (a.passed - a.year);
// });
// console.log(sortedArray);
// // Array.prototype.reduce()
// // 4. How many years did all the inventors live all together?
// let reducedArray = inventors.reduce((accumulator, item, index, array) => {
// 	let liveYear = item.passed - item.year;
// 	console.log(accumulator);

// 	accumulator = accumulator + liveYear;

// 	return accumulator;
// }, 0);
// console.log(reducedArray);

// // 5. Sort the inventors by years lived

// // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// let deneme8 = document.querySelectorAll(".mw-category-group ul li a");
// let titleValues = [];
// deneme8.forEach((item) => {
// 	let titleValue = item.getAttribute("title");
// 	titleValues.push(titleValue);
// });
// let enSon = titleValues.filter((item, index, array) => {
// 	if (item.includes("de")) {
// 		return true;
// 	}
// });

// // 7. sort Exercise
// // Sort the people alphabetically by last name

// let newLast = [];
// console.log(newLast);
// let pushed = people.forEach(function (item, index) {
// 	let splittedItem = item.split(",");
// 	newLast.push(splittedItem[0]);
// });

// let sorted = newLast.sort((a, b) => {
// 	if (a < b) {
// 		return -1; // a.b'den önce gelmeli
// 	}
// 	if (a > b) {
// 		return 1; // b.a'dan önce gelmeli
// 	}
// 	return 0; // eşitlerse değişiklik yok
// });
// console.log(sorted);

// // 8. Reduce Exercise
// // Sum up the instances of each of these

// const data = [
// 	"car",
// 	"car",
// 	"truck",
// 	"truck",
// 	"bike",
// 	"walk",
// 	"car",
// 	"van",
// 	"bike",
// 	"walk",
// 	"car",
// 	"van",
// 	"car",
// 	"truck",
// ];

// let reducedSum = data.reduce(function (accumulator, item, index, array) {
// 	if (accumulator[item]) {
// 		// Eğer öğe zaten varsa
// 		accumulator[item]++; // Sayısını artır
// 	} else {
// 		// Öğe yoksa
// 		accumulator[item] = 1; // İlk kez ekle ve 1 olarak başlat
// 	}
// 	console.log(accumulator);
// 	return accumulator;
// }, {});
// console.log(reducedSum);
