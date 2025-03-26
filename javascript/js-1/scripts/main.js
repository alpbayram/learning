"use strict";
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function info() {
		return this.title + this.author + this.pages + this.read;
	};
}
const book1 = new Book("The Hobbit by J.R.R. ", "Tolkien, ", "295 pages, ", "not read yet");
console.log(book1.info());

// function Player(name, marker) {
// 	this.name = name;
// 	this.marker = marker;
// 	this.sayName = function () {
// 		console.log(this.name);
// 	};
// }

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");

let head = {
	glasses: 1,
};

let table = {
	pen: 3,
	__proto__: head,
};

let bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table,
};

let pockets = {
	money: 2000,
	__proto__: bed,
};

let hamster = {
	eat(...foods) {
		for (let food of foods) {
			if (!Array.isArray(this.stomach)) {
				this.stomach = [];
				this.stomach.push(food);
			} else {
				this.stomach.push(food);
			}
		}
	},
};

let speedy = {
	__proto__: hamster,
};

let lazy = {
	__proto__: hamster,
};

// This one found the food
speedy.eat("apple", "deneme");

// alert(speedy.stomach); // apple

// // This one also has it, why? fix please.
// alert(lazy.stomach); // apple

function Player(name) {
	this.name = name;
	this.deneme = function () {
		console.log("deneme");
	};
}

Player.prototype.play = function () {
	console.log(`${this.name} oynuyor!`);
};

const player1 = new Player("Mehmet");

const user = {
	firstName: "Patrick",
	lastName: "Scott",
	hobbies: ["programming", "piano"],
	listHobbies: function () {
		console.log(this);
		hobbies.forEach(function (hobby) {
			console.log(this.firstName);
			console.log(hobby);
			console.log(this);
		}, this);
	},
};

function makeAdding(firstNumber) {
	const first = firstNumber;
	return function resulting(secondNumber) {
		const second = secondNumber;
		debugger;
		return first + second;
	};
}

const add5 = makeAdding(5);
console.log(add5);
console.dir(add5);
add5(2);

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array
function deneme(){
	if (1 === 1) {
		var cool = true;
	}
	console.log(cool);
	
}
deneme()