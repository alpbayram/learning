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

alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple

function Player(name) {
	this.name = name;
}

Player.prototype.play = function () {
	console.log(`${this.name} oynuyor!`);
};

const player1 = new Player("Mehmet");
