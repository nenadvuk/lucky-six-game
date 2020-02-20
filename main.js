


let luckySixGame = {
	"chosenSix": false,
	"chosenEight": false,
	"arrays": {
		"arr1": [], "arr2": [], "arr3": [], "arr4": [], "arr5": [], "arr6": [], "arr7": [], "arr8": []
	},
	"colors": {
		"red": [1, 9, 17, 25, 33, 41], "green": [2, 10, 18, 26, 34, 42], "blue": [3, 11, 19, 27, 35, 43],
		"violet": [4, 12, 20, 28, 36, 44], "brown": [5, 13, 21, 29, 37, 45], "yellow": [6, 14, 22, 30, 38, 46],
		"orange": [7, 15, 23, 31, 39, 47], "black": [8, 16, 24, 32, 40, 48],

	},

}


const allColors = document.querySelectorAll(".balls-colors");
const adder = document.querySelector("#adder");
const drumBall = document.querySelector(".drum-ball");
const drawnNumberBox = document.querySelector(".drawn-numbers-box");
const choise = document.querySelector("#choise");
const play = document.querySelector("#play");
const randomNum = document.querySelector("#addRandomNumbers");


let checkedFields = document.querySelectorAll("td");
let chosenNumbers = [];
let slicedArray = [];
let sortedSlicedArray = [];
let checkedNumbers = 0;
let count = 0;
let num = gen();
let index = 0;

let COLORS = Object.keys(luckySixGame["colors"]);

// red  "linear-gradient(to bottom, #e8ebec 5%, #f70000 100%)"
// green "linear-gradient(to bottom, #e8ebec 5%, #02740b 100%)"

// Event listeners

adder.addEventListener("click", add);
play.addEventListener("click", playGame);


// Pushing chosen sorted numbers to an array

function arrayAdd() {
	luckySixGame["arrays"][`arr${count}`].push(sortedSlicedArray)

}


function timer(ms) {
	return new Promise(res => setTimeout(res, ms));
}

function blockAdding() {

	luckySixGame["chosenEight"] = true;
	randomNum.style.background = "linear-gradient(to bottom, #e8ebec 5%, #f70000 100%)";
	randomNum.style.pointerEvents = "none";
	for (let i = 0; i < 48; i++) {
		document.querySelectorAll(".circle")[i].style.pointerEvents = "none";
		checkedFields[i].style.pointerEvents = "none";
	}
	for (let j = 0; j < allColors.length; j++) {
		allColors[j].style.pointerEvents = "none";
	}
	

}

randomNum.style.background = "linear-gradient(to bottom, #e8ebec 5%, #02740b 100%)"
// Printing numbers to ticket

function ticket() {
	for (let j = 0; j < sortedSlicedArray.length; j++) {
		if (sortedSlicedArray[j] < 10) {
			document.getElementById(`col${count}${j + 1}`).innerHTML = `0${sortedSlicedArray[j]}`;

		} else document.getElementById(`col${count}${j + 1}`).innerHTML = sortedSlicedArray[j];

	}
}

// Reseting cirle colors

function resetCircleColor() {
	for (let i = 0; i < 48; i++) {
		document.querySelectorAll(".circle")[i].style.border = "1px solid gray";

	}
}

// Generating 6 random numbers

randomNum.addEventListener("mousedown", function () {
	console.log(luckySixGame["chosenEight"])

	play.style.background = "linear-gradient(to bottom, #e8ebec 5%, #02740b 100%)";
	if (!luckySixGame["chosenEight"]) {
		count++;
		sortedSlicedArray = gen(6).sort((a, b) => a - b);
		arrayAdd();
		ticket();
	}
	if (count === 8) {
		blockAdding()

	}


})

// All colors

for (let y = 0; y < 8; y++) {

	allColors[y].addEventListener("mousedown", function () {
		console.log(luckySixGame["chosenEight"])
		if (!luckySixGame["chosenSix"] && !luckySixGame["chosenEight"]) {
			count++;
			this.style.pointerEvents = "none";
			sortedSlicedArray = Object.values(luckySixGame["colors"])[y];
			for (let i = 0; i < sortedSlicedArray.length; i++) {
				document.querySelectorAll(`.circle-${COLORS[y]}`)[i].style.border = `1.5px solid ${COLORS[y]}`
			}

			arrayAdd();
			ticket();
			setTimeout(function () {
				resetCircleColor();
				play.style.background = "linear-gradient(to bottom, #e8ebec 5%, #02740b 100%)";
			}, 900)

		}
		if (count === 8) {
			blockAdding()

		}
		console.log(count)


	})
}


// Numbers choise

for (let i = 0; i < checkedFields.length; i++) {


	adder.style.pointerEvents = "none";
	checkedFields[i].addEventListener("mousedown", function () {
		if (count === 8) {
			blockAdding()

		}
		if (!luckySixGame["chosenSix"]) {
			checkedNumbers++;
			this.style.pointerEvents = "none";
			for (let j = 0; j < 6; j++) {
				circleColor = document.getElementById(`${this.id}`).querySelector(".circle");
				if (this.id == luckySixGame["colors"]["red"][j]) {
					circleColor.style.border = "1.5px solid red"

				} if (this.id == luckySixGame["colors"]["green"][j]) {
					circleColor.style.border = "1.5px solid #33cc33 "

				} if (this.id == luckySixGame["colors"]["blue"][j]) {
					circleColor.style.border = "1.5px solid #1a75ff"

				} if (this.id == luckySixGame["colors"]["violet"][j]) {
					circleColor.style.border = "1.5px solid #9933ff"

				} if (this.id == luckySixGame["colors"]["brown"][j]) {
					circleColor.style.border = "1.5px solid #663300"

				} if (this.id == luckySixGame["colors"]["yellow"][j]) {
					circleColor.style.border = "1.5px solid #ffff33"

				} if (this.id == luckySixGame["colors"]["orange"][j]) {
					circleColor.style.border = "1.5px solid #ff9900"

				} if (this.id == luckySixGame["colors"]["black"][j]) {
					circleColor.style.border = "1.5px solid black"
				}
			}
			let clickedNumber = Number(this.id);
			chosenNumbers.push(clickedNumber);


		}

		if (checkedNumbers === 6) {
			luckySixGame["chosenSix"] = true;
			adder.style.pointerEvents = "all";
			adder.style.background = "linear-gradient(to bottom, #e8ebec 5%, #02740b 100%)"

		}


		/* if (count === 8) {
			luckySixGame["chosenEight"] = true;
		} */

	})
}

// Adding chosen numbers to a ticket

function add() {

	count++;
	play.style.background = "linear-gradient(to bottom, #e8ebec 5%, #02740b 100%)";
	slicedArray = chosenNumbers.slice(index);
	sortedSlicedArray = slicedArray.sort((a, b) => a - b);
	arrayAdd();
	resetCircleColor();

	adder.style.pointerEvents = "none";
	ticket();
	if (luckySixGame["chosenSix"] && count <= 8) {

		for (let i = 0; i < chosenNumbers.length; i++) {
			checkedFields[chosenNumbers[i] - 1].style.pointerEvents = "all";

		}
		console.log(slicedArray)
		luckySixGame["chosenSix"] = false;
		checkedNumbers = 0;
		index += 6;

	}
	adder.style.background = "linear-gradient(to bottom, #e8ebec 5%, #f70000 100%)";



}


// Generate random 35/48 or 6/48 numbers

function gen(abc = 35) {
	let numbers = [];
	for (let i = 0; i < abc; i++) {
		let add = true;
		let randomNumber = Math.floor(Math.random() * 48) + 1;
		for (let y = 0; y < 48; y++) {
			if (numbers[y] == randomNumber) {
				add = false;
			}
		}
		if (add) {
			numbers.push(randomNumber);

		} else {
			i--;
		}
	}
	return numbers
}

console.log(num)



// Displaying 35 numbers with delay
async function playGame() {

	document.querySelector(".tg").style.animation = "bounceOut 1s ease-in";
	setTimeout(function () {
		drawnNumberBox.style.display = "block";
	}, 900)

	drawnNumberBox.style.animation = "scale 1s ease-in"
	setTimeout(function () {
		document.querySelector(".tg").style.display = "none"
	}, 900)
	drumBall.style.display = "block";

	for (let j = 0; j < num.length; j++) {
		for (let n = 0; n < num.length; n++) {
			for (let b = 0; b <= 6; b++) {
				for (let a = 1; a <= count; a++) {
					if (num[j] === luckySixGame['arrays'][`arr${a}`][0][b]) {

						setTimeout(function () {
							document.querySelector("#col" + a + (b + 1)).style.fontWeight = "1000";

						}, 3000);

					}
				}



			}
			document.getElementById("res").innerHTML = `${num[j]}`;

			setTimeout(function () {
				document.getElementById(`drawn${j + 1}`).innerHTML = `${num[j]}`;

			}, 3000);
			drumBall.style.animation = `bounceIn 3s ${num.length}`;

			if (num[j] === luckySixGame["colors"]["red"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #ff0000, #000)'

			} if (num[j] === luckySixGame["colors"]["green"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #33cc33, #000)'

			} if (num[j] === luckySixGame["colors"]["blue"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #5cabff, #000)'

			} if (num[j] === luckySixGame["colors"]["violet"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #9933ff, #000)'

			} if (num[j] === luckySixGame["colors"]["brown"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #8B4513, #383838)'

			} if (num[j] === luckySixGame["colors"]["yellow"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #FFFF00, #FFA500)'

			} if (num[j] === luckySixGame["colors"]["orange"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #ffa500, #996300)'

			} if (num[j] === luckySixGame["colors"]["black"][n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #606060, #000)'

			}

		} await timer(3000)


	}


}
























