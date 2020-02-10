


let lukcySixGame = {
	"chosenSix": false,


}

// Colors of the balls

const red = [1, 9, 17, 25, 33, 41];
const green = [2, 10, 18, 26, 34, 42];
const blue = [3, 11, 19, 27, 35, 43];
const violet = [4, 12, 20, 28, 36, 44];
const brown = [5, 13, 21, 29, 37, 45];
const yellow = [6, 14, 22, 30, 38, 46];
const orange = [7, 15, 23, 31, 39, 47];
const black = [8, 16, 24, 32, 40, 48];



const checkedFields = document.querySelectorAll("td");
const adder = document.querySelector("#adder");
const drumBall = document.querySelector(".drum-ball");
const drawnNumberBox = document.querySelector(".drawn-numbers-box");
const choise = document.querySelector("#choise");
let chosenSix = false;
let chosenNumbers = [];
let sortedChosenNumbers = [];
let checkedNumbers = 0;
const play = document.querySelector("#play");
let count = 1;
var num = gen();


function timer(ms) {
	return new Promise(res => setTimeout(res, ms));
}


for (let i = 0; i < checkedFields.length; i++) {
	adder.style.pointerEvents = "none";
	checkedFields[i].addEventListener("mousedown", function () {

		if (!chosenSix) {
			checkedNumbers++;
			this.style.pointerEvents = "none";
			let clickedNumber = Number(this.id);
			chosenNumbers.push(clickedNumber);
			choise.value = chosenNumbers;
			sortedChosenNumbers = chosenNumbers.sort((a, b) => a - b);

		}

		if (checkedNumbers === 6 && count <= 8) {
			for (let j = 1; j <= 6; j++) {
				document.getElementById(`col${count}${j}`).innerHTML = sortedChosenNumbers[j - 1];

			}
			adder.style.pointerEvents = "all";
			console.log(sortedChosenNumbers)
			adder.classList.add("btn-danger");
			chosenSix = true;
			adder.classList.remove("btn-danger");
			adder.classList.add("btn-success");

		}
	})
}

console.log(num)


let index = 0;
adder.addEventListener("click", add)

function add() {
	index++
	adder.style.pointerEvents = "none";
	document.querySelector("#col" + count).style.display = "block";
	
	if (chosenSix && count <= 8) {

		count++;
		choise.value = "";
		for (let i = 0; i < chosenNumbers.length; i++) {
			checkedFields[chosenNumbers[i] - 1].style.pointerEvents = "all";
		}
		chosenNumbers.splice(0, chosenNumbers.length);
		chosenSix = false;
		checkedNumbers = 0;

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



// Display 35 numbers with delay
play.addEventListener("click", playGame)

async function playGame() {
	
	document.querySelector(".tg").style.animation = "bounceOut 1s ease-in";
	drawnNumberBox.style.display = "block";
	drawnNumberBox.style.animation = "scale 1s ease-in"
	setTimeout(function (){
		document.querySelector(".tg").style.display = "none"
	},900)
	drumBall.style.display = "block";
	console.log(num)

	for (let j = 0; j < num.length; j++) {
		for (let n = 0; n < num.length; n++) {
			for (let b = 0; b < sortedChosenNumbers.length; b++) {
				if (num[j] === sortedChosenNumbers[b]) {
					setTimeout(function () {
						document.querySelector("#col" + 1 + (b+1)).style.fontWeight = "1000";
					}, 3000);

				}
			}
			document.getElementById("res").innerHTML = `${num[j]}`;

			setTimeout(function () {
				document.getElementById(`drawn${j + 1}`).innerHTML = `${num[j]}`;
				/* if (num[j] === red[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #ff0000'
				
				} if (num[j] === green[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #33cc33'

				} if (num[j] === blue[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #5cabff'

				} if (num[j] === violet[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #9933ff'

				} if (num[j] === brown[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #8B4513'

				} if (num[j] === yellow[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #FFFF00'

				} if (num[j] === orange[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #ffa500'

				} if (num[j] === black[n]) {
					document.getElementById(`drawn${j + 1}`).style.border = '2px solid #000'

				} */
			}, 3000);
			drumBall.style.animation = `bounceIn 3s ${num.length}`;

			if (num[j] === red[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #ff0000, #000)'

			} if (num[j] === green[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #33cc33, #000)'

			} if (num[j] === blue[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #5cabff, #000)'

			} if (num[j] === violet[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #9933ff, #000)'

			} if (num[j] === brown[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #8B4513, #383838)'

			} if (num[j] === yellow[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #FFFF00, #FFA500)'

			} if (num[j] === orange[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #ffa500, #996300)'

			} if (num[j] === black[n]) {
				drumBall.style.background = 'radial-gradient(circle at 30px 30px, #606060, #000)'

			}

		} await timer(3000)


	}


}




















