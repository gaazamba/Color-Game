var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons(){
	for (let i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
};

function setupSquares(){
	for (let i=0; i<squares.length; i++){
	//add click listener to squares
		squares[i].addEventListener('click', function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = 'Correct!';
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				//change button text to play again
				resetButton.textContent = 'Play Again?';
			} else {
				this.style.backgroundColor = '#232323'
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

resetButton.addEventListener('click', function(){
	reset();
});

function reset(){
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//color to find out
	colorDisplay.textContent = pickedColor;
	//change the button text to new colors
	resetButton.textContent = 'New Colors'; 
	//reset text message
	messageDisplay.textContent = '';
	//reset h1 to new color
	h1.style.backgroundColor = 'steelblue';	
	//change colors of squares
	for (let i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];	
		} else {
			squares[i].style.display = 'none';
		}
		
	}
}

function changeColor(color){
	for(let i=0; i<squares.length; i++){
		//loop through all colors
		squares[i].style.backgroundColor = color;
		//make all colors equals
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	//repeat num times
	for(let i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that arr
	return arr;
}

function randomColor(){
	// generate Red color from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//generate Green color from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//generate Blue color from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
