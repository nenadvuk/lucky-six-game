


let luckySixGame = {
	"chosenSix": false,
	"arrays": {
		"arr1": [], "arr2": [], "arr3": [], "arr4": [], "arr5": [], "arr6": [], "arr7": [], "arr8": []
	},
	"colors": {
		"red": [1, 9, 17, 25, 33, 41],
		"green": [2, 10, 18, 26, 34, 42],
		"blue": [3, 11, 19, 27, 35, 43],
		"violet": [4, 12, 20, 28, 36, 44],
		"brown": [5, 13, 21, 29, 37, 45],
		"yellow": [6, 14, 22, 30, 38, 46],
		"orange": [7, 15, 23, 31, 39, 47],
		"black": [8, 16, 24, 32, 40, 48],

	},

}

console.log(luckySixGame["colors"]["red"][2])

// Colors of the balls

/* const red = [1, 9, 17, 25, 33, 41];
const green = [2, 10, 18, 26, 34, 42];
const blue = [3, 11, 19, 27, 35, 43];
const violet = [4, 12, 20, 28, 36, 44];
const brown = [5, 13, 21, 29, 37, 45];
const yellow = [6, 14, 22, 30, 38, 46];
const orange = [7, 15, 23, 31, 39, 47];
const black = [8, 16, 24, 32, 40, 48];
 */


const checkedFields = document.querySelectorAll("td");
const adder = document.querySelector("#adder");
const drumBall = document.querySelector(".drum-ball");
const drawnNumberBox = document.querySelector(".drawn-numbers-box");
const choise = document.querySelector("#choise");
const play = document.querySelector("#play");
let chosenSix = false;
let chosenNumbers = [];
let slicedArray = [];
let sortedSlicedArray = [];
let checkedNumbers = 0;
let count = 0;
let num = gen();

function arrayAdd() {

	luckySixGame["arrays"][`arr${count}`].push(sortedSlicedArray)



}


function timer(ms) {
	return new Promise(res => setTimeout(res, ms));
}


for (let i = 0; i < checkedFields.length; i++) {

	adder.style.pointerEvents = "none";
	checkedFields[i].addEventListener("mousedown", function () {

		if (!chosenSix) {

			checkedNumbers++;
			this.style.pointerEvents = "none";
			for (c = 0; c < 6; c++) {
				const circleColor = document.getElementById(`${this.id}`).querySelector(".circle");
				if (this.id == luckySixGame["colors"]["red"][c]) {
					circleColor.style.border = "1.5px solid red"

				} if (this.id == luckySixGame["colors"]["green"][c]) {
					circleColor.style.border = "1.5px solid #33cc33 "

				} if (this.id == luckySixGame["colors"]["blue"][c]) {
					circleColor.style.border = "1.5px solid #1a75ff"

				} if (this.id == luckySixGame["colors"]["violet"][c]) {
					circleColor.style.border = "1.5px solid #9933ff"

				} if (this.id == luckySixGame["colors"]["brown"][c]) {
					circleColor.style.border = "1.5px solid #663300"

				} if (this.id == luckySixGame["colors"]["yellow"][c]) {
					circleColor.style.border = "1.5px solid #ffff33"

				} if (this.id == luckySixGame["colors"]["orange"][c]) {
					circleColor.style.border = "1.5px solid #ff9900"

				} if (this.id == luckySixGame["colors"]["black"][c]) {
					circleColor.style.border = "1.5px solid black"
				}
			}
			let clickedNumber = Number(this.id);
			chosenNumbers.push(clickedNumber);

		}

		if (checkedNumbers === 6 && count <= 8) {
			chosenSix = true;
			adder.style.pointerEvents = "all";
			adder.classList.add("btn-danger");
			adder.classList.remove("btn-danger");
			adder.classList.add("btn-success");

		}

	})
}

index = 0;


adder.addEventListener("click", add)

function add() {

	count++;
	slicedArray = chosenNumbers.slice(index);
	sortedSlicedArray = slicedArray.sort((a, b) => a - b);
	arrayAdd();
	for (let o = 0; o < 48; o++) {
		document.querySelectorAll(".circle")[o].style.border = "1px solid gray"

	}



	console.log(luckySixGame['arrays']['arr1'][0][2])
	console.log(luckySixGame['arrays']['arr2'])
	console.log(luckySixGame['arrays']['arr3'])
	console.log(luckySixGame['arrays']['arr4'])
	console.log(luckySixGame['arrays']['arr5'])
	console.log(luckySixGame['arrays']['arr6'])
	console.log(luckySixGame['arrays']['arr7'])
	console.log(luckySixGame['arrays']['arr8'])


	adder.style.pointerEvents = "none";
	for (let j = 1; j <= 6; j++) {

		document.getElementById(`col${count}${j}`).innerHTML = sortedSlicedArray[j - 1];

	}
	if (chosenSix && count <= 8) {


		choise.value = "";
		for (let i = 0; i < chosenNumbers.length; i++) {
			checkedFields[chosenNumbers[i] - 1].style.pointerEvents = "all";

		}

		console.log(chosenNumbers)
		console.log(slicedArray)
		chosenSix = false;
		checkedNumbers = 0;
		index += 6;

	}
	adder.classList.add("btn-danger");

}


// Generate random 35/48 numbers

function gen() {
	let numbers = [];
	for (let i = 0; i < 35; i++) {
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

// Display 35 numbers with delay

play.addEventListener("click", playGame)

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

	console.log(num)

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




















