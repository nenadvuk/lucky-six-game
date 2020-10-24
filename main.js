
let luckySixGame = {
	"chosenSix": false,
	"chosenEight": false,
	"arrays": {
		"arr1": [], "arr2": [], "arr3": [], "arr4": [], "arr5": [], "arr6": [], "arr7": [], "arr8": []
	},
	"colors": {
		"red": [[1, 9, 17, 25, 33, 41], ["radial-gradient(circle at 30px 30px, #ff0000, #000)"]],
		"green": [[2, 10, 18, 26, 34, 42], ["radial-gradient(circle at 30px 30px, #33cc33, #000)"]],
		"blue": [[3, 11, 19, 27, 35, 43], ["radial-gradient(circle at 30px 30px, #5cabff, #000)"]],
		"violet": [[4, 12, 20, 28, 36, 44], ["radial-gradient(circle at 30px 30px, #9933ff, #000)"]],
		"brown": [[5, 13, 21, 29, 37, 45], ["radial-gradient(circle at 30px 30px, #8B4513, #383838)"]],
		"yellow": [[6, 14, 22, 30, 38, 46], ["radial-gradient(circle at 30px 30px, #FFFF00, #FFA500)"]],
		"orange": [[7, 15, 23, 31, 39, 47], ["radial-gradient(circle at 30px 30px, #ffa500, #996300)"]],
		"black": [[8, 16, 24, 32, 40, 48], ["radial-gradient(circle at 30px 30px, #606060, #000)"]],

	},

}


const allColors = document.querySelectorAll(".balls-colors");
const adder = document.querySelector("#adder");
const drumBall = document.querySelector(".drum-ball");
const drawnNumberBox = document.querySelector(".drawn-numbers-box");
const choise = document.querySelector("#choise");
const play = document.querySelector("#play");
const randomNum = document.querySelector("#addRandomNumbers");
const circle = document.querySelectorAll(".circle");
const GREEN = "linear-gradient(to bottom, #e8ebec 5%, #02740b 100%)";
const RED = "linear-gradient(to bottom, #e8ebec 5%, #f70000 100%)";
const BALL_COLOR = luckySixGame["colors"];

let checkedFields = document.querySelectorAll("td");
let chosenNumbers = [];
let slicedArray = [];
let sortedSlicedArray = [];
let checkedNumbers = 0;
let count = 0;
let num = gen();
let index = 0;

let COLORS = Object.keys(BALL_COLOR);

// On start

play.style.pointerEvents = "none";
randomNum.style.background = GREEN;
randomNum.style.animation = `tada 1s ease-in`;

allColors.forEach((item) => {
	item.style.animation = "scale 1s ease-in"
},200);



// Event listeners

adder.addEventListener("click", add);
play.addEventListener("click", playGame);


// Pushing chosen sorted numbers to an array


const arrayAdd = () => luckySixGame["arrays"][`arr${count}`].push(sortedSlicedArray);

const timer = (ms) => new Promise(res => setTimeout(res, ms));



const blockAdding = () => {
	randomNum.style.background = RED;
	randomNum.style.pointerEvents = "none";
	circle.forEach((item, index) => {
		item.style.pointerEvents = "none";
		checkedFields[index].style.pointerEvents = "none";
	});
	allColors.forEach((colors) => {
		colors.style.pointerEvents = "none";
	});
}



// Printing numbers to ticket


const ticket = () => sortedSlicedArray.forEach((array, ind) => {
	array < 10 ? document.getElementById(`col${count}${ind + 1}`).innerHTML = `0${array}` :
		document.getElementById(`col${count}${ind + 1}`).innerHTML = `${array}`
});

const playStyle = () => play.style.background = GREEN;



// Reseting cirle colors

const resetCircleColor = () => circle.forEach(value => {
	value.style.backgroundColor = "transparent";
	value.style.color = "black";
	value.style.opacity = "1"

});



// Generating 6 random numbers

randomNum.addEventListener("mousedown", function () {
	play.style.pointerEvents = "all";
	resetCircleColor();
	playStyle();
	count++;
	sortedSlicedArray = gen(6).sort((a, b) => a - b);
	arrayAdd();
	ticket();
	if (count === 8) {
		blockAdding();
		play.style.animation = "tada 1s ease-in";
	}

});



// All colors

for (let y = 0; y < allColors.length; y++) {
	allColors[y].addEventListener("mousedown", function () {
		play.style.pointerEvents = "all";
		if (!luckySixGame["chosenSix"]) {
			count++;
			this.style.pointerEvents = "none";
			sortedSlicedArray = Object.values(BALL_COLOR)[y][0];
			for (let i = 0; i < sortedSlicedArray.length; i++) {
				//document.querySelectorAll(`.circle-${COLORS[y]}`)[i].style.border = `1.5px solid ${COLORS[y]}`
				document.querySelectorAll(`.circle-${COLORS[y]}`)[i].style.backgroundColor = `${COLORS[y]}`;
				document.querySelectorAll(`.circle-${COLORS[y]}`)[i].style.opacity = "0.5"
			}
			setTimeout(function () {
				playStyle()
				resetCircleColor();
			}, 100)
			arrayAdd();
			ticket();
		}
		if (count === 8) {
			blockAdding();
			play.style.animation = "tada 1s ease-in";
		}
	})
}

function clickedFieldsColor() {
	circleColor.style.opacity = ".6";
	circleColor.style.color = "white";
}

// Numbers choise

for (let i = 0; i < checkedFields.length; i++) {
	adder.style.pointerEvents = "none";
	checkedFields[i].addEventListener("mousedown", function () {
		for (let n = 0; n < allColors.length; n++) {
			allColors[n].style.pointerEvents = "none";

		}
		randomNum.style.pointerEvents = "none";
		randomNum.style.background = RED;
		if (count === 8) {
			blockAdding();
		}
		if (!luckySixGame["chosenSix"]) {
			checkedNumbers++;
			this.style.pointerEvents = "none";
			for (let j = 0; j < 6; j++) {
				circleColor = document.getElementById(`${this.id}`).querySelector(".circle");
				if (this.id == BALL_COLOR["red"][0][j]) {
					circleColor.style.backgroundColor = "red";
					clickedFieldsColor();

				} if (this.id == BALL_COLOR["green"][0][j]) {
					circleColor.style.backgroundColor = "#33cc33";
					clickedFieldsColor();

				} if (this.id == BALL_COLOR["blue"][0][j]) {
					circleColor.style.backgroundColor = "#1a75ff";
					clickedFieldsColor();

				} if (this.id == BALL_COLOR["violet"][0][j]) {
					circleColor.style.backgroundColor = "#9933ff";
					clickedFieldsColor();

				} if (this.id == BALL_COLOR["brown"][0][j]) {
					circleColor.style.backgroundColor = "#663300";
					clickedFieldsColor();

				} if (this.id == BALL_COLOR["yellow"][0][j]) {
					circleColor.style.backgroundColor = "#ffff33";
					circleColor.style.opacity = ".6";
					circleColor.style.color = "black";

				} if (this.id == BALL_COLOR["orange"][0][j]) {
					circleColor.style.backgroundColor = "#ff9900";
					clickedFieldsColor();

				} if (this.id == BALL_COLOR["black"][0][j]) {
					circleColor.style.backgroundColor = "black";
					clickedFieldsColor();
				}

			}
			let clickedNumber = Number(this.id);
			chosenNumbers.push(clickedNumber);
		}
		if (checkedNumbers === 6) {
			luckySixGame["chosenSix"] = true;
			adder.style.pointerEvents = "all";
			adder.style.background = GREEN;
			setTimeout(function () {
				adder.style.animation = "tada 1s ease-in";
			}, 500)
		}
	})
}

// Adding chosen numbers to a ticket

function add() {
	play.style.pointerEvents = "all";
	for (let n = 0; n < allColors.length; n++) {
		allColors[n].style.pointerEvents = "all";

	}
	count++;
	randomNum.style.pointerEvents = "all";
	randomNum.style.background = GREEN;
	slicedArray = chosenNumbers.slice(index);
	sortedSlicedArray = slicedArray.sort((a, b) => a - b);
	playStyle();
	arrayAdd();
	resetCircleColor();
	adder.style.pointerEvents = "none";
	ticket();
	if (luckySixGame["chosenSix"]) {
		for (let i = 0; i < chosenNumbers.length; i++) {
			checkedFields[chosenNumbers[i] - 1].style.pointerEvents = "all";
		}
		luckySixGame["chosenSix"] = false;
		checkedNumbers = 0;
		index += 6;
	}
	if (count === 8) {
		blockAdding();
		play.style.animation = "tada 1s ease-in";
	}
	adder.style.background = RED;
	

}


// Generate random 35/48 or 6/48 numbers

function gen(val = 35) {
	let numbers = [];
	for (let i = 0; i < val; i++) {
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
	drumBall.classList.add("test");
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
					if (num[j] === luckySixGame["arrays"][`arr${a}`][0][b]) {
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

			if (num[j] === BALL_COLOR["red"][0][n]) {
				drumBall.style.background = BALL_COLOR["red"][1]

			} if (num[j] === BALL_COLOR["green"][0][n]) {
				drumBall.style.background = BALL_COLOR["green"][1]

			} if (num[j] === BALL_COLOR["blue"][0][n]) {
				drumBall.style.background = BALL_COLOR["blue"][1]

			} if (num[j] === BALL_COLOR["violet"][0][n]) {
				drumBall.style.background = BALL_COLOR["violet"][1]

			} if (num[j] === BALL_COLOR["brown"][0][n]) {
				drumBall.style.background = BALL_COLOR["brown"][1]

			} if (num[j] === BALL_COLOR["yellow"][0][n]) {
				drumBall.style.background = BALL_COLOR["yellow"][1]

			} if (num[j] === BALL_COLOR["orange"][0][n]) {
				drumBall.style.background = BALL_COLOR["orange"][1]

			} if (num[j] === BALL_COLOR["black"][0][n]) {
				drumBall.style.background = BALL_COLOR["black"][1]
			}
		} await timer(3000)
	}
}





	
	



















