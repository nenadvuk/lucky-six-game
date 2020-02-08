


let lukcySixGame = {
	"chosenSix": false,
	"columns": {
		"column1": document.getElementById("column1"),
		"column2": document.getElementById("column2"),
		"column3": document.getElementById("column3"),
		"column4": document.getElementById("column4"),
		"column5": document.getElementById("column5"),
		"column6": document.getElementById("column6"),
		"column7": document.getElementById("column7"),
		"column8": document.getElementById("column8")
	},

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


//let counter = document.querySelector("#count");
let choise = document.querySelector("#choise");

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



//let colIndex = 1;

function compare() {

	for (let i = 0; i < sortedChosenNumbers.length; i++) {
		for (let j = 0; j < num.length; j++) {
			if (sortedChosenNumbers[i] === num[j]) {
				document.querySelector("#col" + index + (i + 1)).style.fontWeight = "1000"
			}
		}
	}




}

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

	
	document.querySelector(".tg").style.animation = `bounceOut 1s ease-in`;
	document.querySelector(".drawn-numbers-box").style.display = "block";
	document.querySelector(".drawn-numbers-box").style.animation = `scale  1s ease-in`
	document.querySelector(".drum-ball").style.display = "block";
	
	let num = gen();

	console.log(num)

	for (let j = 0; j < num.length; j++) {
		for (let n = 0; n < num.length; n++) {
			document.getElementById("res").innerHTML = `${num[j]}`;
			
			setTimeout(function () {
				document.getElementById(`drawn${j+1}`).innerHTML = `${num[j]}`;
		
			}, 3000);
			document.querySelector(".drum-ball").style.animation = `bounceIn 3s ${num.length}`
		
			
			if (num[j] === red[n]) {
				document.querySelector(".drum-ball").style.background = 'radial-gradient(circle at 50px 50px, #ff0000, #000)'

			} if (num[j] === green[n]) {
				document.querySelector(".drum-ball").style.background = 'radial-gradient(circle at 50px 50px, #33cc33, #000)'

			} if (num[j] === blue[n]) {
				document.querySelector(".drum-ball").style.background = 'radial-gradient(circle at 50px 50px, #5cabff, #000)'

			} if (num[j] === violet[n]) {
				document.querySelector(".drum-ball").style.background = 'radial-gradient(circle at 50px 50px, #9933ff, #000)'

			} if (num[j] === brown[n]) {
				document.querySelector(".drum-ball").style.background = 'radial-gradient(circle at 50px 50px, #8B4513, #000)'

			} if (num[j] === yellow[n]) {
				document.querySelector(".drum-ball").style.background = 'radial-gradient(circle at 50px 50px, #FFFF00, #000)'

			} if (num[j] === orange[n]) {
				document.querySelector(".drum-ball").style.background = 'radial-gradient(circle at 50px 50px, #ffa500, #000)'

			} if (num[j] === black[n]) {
				document.querySelector(".drum-ball").style.background = 'linear-gradient(320deg, #000000 0%, #434343 70%);'

			}

		} await timer(3000)
	}


}




/* document.querySelector(".number-box img").style.display = "block" */
/* for (let i = 0; i < num.length; i++) {
	document.getElementById("res").value = num[i];
	for (j = 0; j < num.length; j++) {
		if (sortedChosenNumbers[i] === num[j]) {
			document.querySelector("#col" + 1 + (i + 1)).style.fontWeight = "1000"
		}
	} await timer(1000);


} */




















